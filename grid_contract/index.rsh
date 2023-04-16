'reach 0.1';

export const grid = Reach.App(() => {
  // Grid is the Participant who will maintain the initial balance of tokens
  const Grid = Participant('Grid', {
    token : Token,
    initialSupply : UInt,
    initialPricePerUnit : UInt,
    priceUpdated : Fun([],Null),
    getUpdatedPrice : Fun([],UInt),
    keepGoing : Fun([], Bool),
    currentBalance : Fun([UInt],Null)
  });

  // Prosumer will buy / sell token with Grid
  const Prosumer = API('Prosumer', {
    buy : Fun([UInt, Address],Null),
    sell : Fun([UInt,Address],Null),
    // timeUp : Fun([], Bool)
  });

  init();

  // Grid's local state where it will get initial data
  Grid.only(() => {
    const token = declassify(interact.token);
    const initialSupply = declassify(interact.initialSupply);
    const initialPricePerUnit = declassify(interact.initialPricePerUnit);
  });

  // Grid publishes parameters with necessary validations on parameters
  Grid.publish(token,initialSupply, initialPricePerUnit).check(() => {
    check(initialSupply <= UInt.max, 'Supply is too high');
    check(initialSupply > 0, 'Supply should be greater than zero');
    check(initialPricePerUnit > 0, "Initial price should be greater than zero")
  });
  commit();
  
  // Grid pays initial balance of tokens to contract
  Grid.pay([[initialSupply, token]]);

  

  /** 
   * Parallel Reduce will start with Initial states
   * 1. Tokensupply and balance of token must match everytime
   * 2. In .case , Grid will keep updating the price for token
   * 3. Prosumer can buy the tokens 
   * 4. Prosumer can sell their tokens to grid.Address
   * 5. Price is decided by Grid.
   * 6. This is an endless loop; however, if it is interrupted by an exception, the balances will be transferred to Grid
   * */ 

  const [ pricePerUnit, keepGoing, tokenSupply] = 
  parallelReduce([ initialPricePerUnit, true, initialSupply ])
  // 
  .invariant(balance(token) == tokenSupply, 'Token supply mismatched') 
  .while(keepGoing)
   .case(Grid, 
    () => {
      const newPrice =  declassify(interact.getUpdatedPrice())
      check(newPrice > 0);
      return ({
        when: true,//maybe(newPrice, false, ((newPrice) => newPrice > 0)),
        msg : newPrice,
      });
    },
    (newPrice) => 0,
    (newPrice) => {
      require(newPrice > 0);
      // Return funds to previous highest bidder
      return [ newPrice, true, balance(token) ];
    }
  ) 
  .api_(Prosumer.buy, (units,buyer) => {
    check(units < tokenSupply, "Insuffiecient balance")
    return [pricePerUnit * units, (notify) => {
      transfer(units, token).to(buyer);
      Grid.interact.currentBalance(balance(token));
      Grid.interact.currentBalance(balance());
      notify(null);
      return [ pricePerUnit, true, balance(token) ];
    } ]
 })
  .api_(Prosumer.sell, (units,seller) => {
  check(units > 0, "Number of units can not be zero")
  check(units < tokenSupply, "Insuffiecient balance")
  check(pricePerUnit * units < balance(), "Price is too high - Prosumer sell")
  return [0,(k) => { //[0, [units, token]]
    k(null);
    transfer(units, token).to(Grid);
    transfer(pricePerUnit * units).to(seller);
    Grid.interact.currentBalance(balance(token));
    Grid.interact.currentBalance(balance());
    // transfer(units,tokenid).to(consumer);
    return [ pricePerUnit, true, balance(token) ];
  }];
}); 

     transfer(balance()).to(Grid);
     transfer(balance(token), token).to(Grid);
   commit();
  
  exit();
});
