# Reach code implementing a consumer-producer model
This is a Reach code that implements a consumer-producer model. This model involves a producer who wants to sell a certain number of tokens at a fixed price per unit, and multiple consumers who want to buy these tokens.

The code consists of three main components: the producer, the consumers, and the grid remote contract. The producer creates an order containing the token, units, price per unit, and grid contract and waits for a consumer to buy it. The consumers compete with each other to buy the tokens and settle the transaction by paying the producer.

The code has been developed in Reach, a domain-specific language for developing smart contracts. The code is executed on the Algorand blockchain.

# Usage
To use this code, you need to have the Reach programming language installed on your machine. You can install it by following the instructions provided on the [official Reach documentation.](https://docs.reach.sh/)

After installing the Reach programming language, you can run this code by following these steps:

Compile the code using the Reach compiler by running the following command:
```
reach compile
```

# Code Structure

### Order Object
This is an object that contains the token, units, price per unit, and grid contract.

``` 
const Order = Object({
  token : Token,
  units : UInt,
  algoperUnit : UInt,
  gridCtc : Contract,
});

```

### Producer
This is a participant who places the order. The producer publishes the order and waits for a consumer to buy it.

``` 
const Producer = Participant('Producer', {
  startOrder : Fun([],Order),
  timeUp : Fun([],Bool)
});

```

### Consumer
This is an API that allows multiple users to race to get the order. The consumer applies to win the order and settles the transaction by paying the producer.

``` 
const Consumer = API('Consumer', { 
  applyOrder : Fun([UInt, Token],Bool),
  settle : Fun([UInt], Bool),
  timeUp : Fun([],Bool)
});

```

### Order Details

This is a view of the order. These parameters are available on the frontend.

```
const OrderDetails = View('Order', { 
  producer : Address,
  consumer : Address,
  pricePerUnit : UInt,
  units : UInt,
  started : Bool
});

```
### Implementation
The code uses the parallelReduce function to implement the consumer-producer model. The parallelReduce function takes an initial state and a list of operations to apply to the state. The operations are executed in parallel, and the final state is returned.

