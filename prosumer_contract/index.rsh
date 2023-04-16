'reach 0.1';

// This is order object contains Toke, units, price per unit, Grid Contract
const Order = Object({
  token : Token,
  units : UInt,
  algoperUnit : UInt,
  gridCtc : Contract,
  // grid : Address
});

export const prosumer = Reach.App(() => {

  // This is Producer participant who will place the order
  const Producer = Participant('Producer', {
    startOrder : Fun([],Order),
    timeUp : Fun([],Bool)
  });

  // This is consumer API (multiple users who will race to get the order)
  const Consumer = API('Consumer', { 
    applyOrder : Fun([UInt, Token],Bool),
    settle : Fun([UInt], Bool),
    timeUp : Fun([],Bool)
  });

  // This is view of the order. These parameters will be available on the front end
  const OrderDetails = View('Order', { 
    producer : Address,
    consumer : Address,
    pricePerUnit : UInt,
    units : UInt,
    started : Bool
  });

  init();
  
  // This is Producer's local step where he will get all parameters from the frontend
  Producer.only(() => {
    const { token, units, algoperUnit, gridCtc  } = declassify(interact.startOrder());
    // It checks units and algoperunit should be greater than zero
    check(units > 0, "Unit shoube be greater than zero");
    check(algoperUnit > 0, "Per unit price shoube be greater than zero");
  });

  // Publish the token, units, price per unit, Grid Contract
  Producer.publish( token, units, algoperUnit, gridCtc  );
  
  commit();

  // Producer will pay the `units` of `token` to the contract
  Producer.pay([[units, token]]);

  // Set the parameters of the view to access on frontend
  OrderDetails.producer.set(Producer);
  OrderDetails.pricePerUnit.set(algoperUnit);
  OrderDetails.units.set(units);
  OrderDetails.started.set(true);
  
  // Calculate the time for the timeout
  const end = lastConsensusTime() + 900000;

  /**
   * This is the grid remote contract to Consumer will buy at the time of settlement.
   * Producer will sell the extra tokens to grid
   *  */ 
   
  const gridContract = remote( gridCtc, {
    buy : Fun([UInt, Address],Null),
    sell : Fun([UInt, Address],Null),
  })

  /**
   * Producer will place the order and will wait for the consumer
   * Here will calculate
   * Extra units - If consumer will buy extra tokens from the grid.
   * Remaining units - Seller will sell the remaining tokens to the grid.
   * keepgoing - While loop
   * askedUnits - Get asked units by consumer
   * Winner - Winner of the order. Producer himself can not apply for order
   * num = For one order - Only one winner will be chosen
   */
  const [extraUnits, remainedUnits, keepGoing, askedUnits, winner, num ] = parallelReduce([ 0,0,true,0,Producer,1 ])
    .invariant(balance(token) == units, "Token balance is low")
    .while(keepGoing)
    .api_(Consumer.applyOrder,(askUnit, askToken) => { // Apply to win the order.
      check(Producer != this, "Producer and consumer should be diffrent");
      // check(num == 0,"Winner is decided")
      check(askUnit > 0, "Units should not be zero")
      // check(price > 0, "Price should not be zero")
      // check(price == algoperUnit * units, "Price should not be zero")
      check(askUnit <= units, "Insuffiecient tokens")
      return [ 0 , (k) => {//algoperUnit * units
        k(true);
        
        return [0, 0, true, askUnit, this, 1];
    }];
    })
    .api_(Consumer.settle, (settleUnits) => { // Settlement 
      check(settleUnits > 0 , "Units can not be zero");
      check(settleUnits < units, "Unit should not exceed");
      check(winner == this, "Winner can not be different");
      // check(balance() > 0, "Balance should not be zero");
      return [settleUnits * algoperUnit,(k) => {
        k(true);
        return [
          ( askedUnits < settleUnits )? settleUnits - askedUnits : 0, 
          ( askedUnits > settleUnits )? askedUnits - settleUnits : 0, 
          false, 
          settleUnits,
          this, 1];
      }];
    })
    .timeout(absoluteTime(end), () => { // Timeout
      const [[], k] = call(Consumer.timeUp);
      k(true);
      const sell = gridContract.sell(units,Producer);
     return [extraUnits, remainedUnits, false, askedUnits, winner, 1 ];
   });   
   
   // Transfer perunitprice * usedtoken value to Producer
   transfer( balance() - remainedUnits * algoperUnit ).to(Producer);
   // Transfer tokens to Consumer
   transfer(balance(token) - remainedUnits,token).to(winner);
   

   // Transfer remaining balance to Consumer
   if( balance() > 0 ) transfer(balance()).to(winner);
   // Transfer remaining balance of token(If any) to Producer
   if(remainedUnits > 0) transfer( remainedUnits, token).to(Producer);

   // Buy extra tokens from Grid contract
   if(extraUnits > 0) gridContract.buy(extraUnits, winner);
   // Sell remaining tokens to Grid
   if(remainedUnits > 0) gridContract.sell(remainedUnits, Producer);
    
  // write your program here
  commit();
  exit();
});
