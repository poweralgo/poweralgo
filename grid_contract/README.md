# Grid Contract
The contract includes two participants, `Grid` and `Prosumer`, where Grid maintains the initial balance of tokens and sets the initial price per unit, and Prosumer buys and sells tokens with Grid.

# Participants

### Grid

`Grid` is the participant that maintains the initial balance of tokens and sets the initial price per unit. The `Grid` participant includes the following methods:

`token`: The token to be used in the contract
`initialSupply`: The initial supply of tokens
`initialPricePerUnit`: The initial price per unit of tokens
`priceUpdated`: A function that updates the price of the token
`getUpdatedPrice`: A function that gets the updated price of the token
`keepGoing`: A function that returns a boolean value to keep the loop going
`currentBalance`: A function that gets the current balance of tokens

### Prosumer

`Prosumer` is the participant that buys and sells tokens with `Grid`. The `Prosumer` participant includes the following methods:

`buy`: A function that allows `Prosumer` to buy tokens from Grid
`sell`: A function that allows `Prosumer` to sell tokens to Grid

# Functionality

The contract includes an endless loop that allows `Prosumer` to buy and sell tokens with `Grid` at the current price per unit set by `Grid`. The loop continues until an exception is thrown, at which point the balances are transferred to `Grid`.

The `parallel reduce` method is used to start the loop with the initial states, where the token supply and balance of tokens must match every time. `Grid` updates the price of the token, `Prosumer` buys or sells tokens at the current price per unit.
