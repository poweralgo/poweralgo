# Description
Peer-to-peer energy (P2P) trading is the buying and selling of energy between two or more grid-connected parties. Often in the form of solar energy, any excess energy can be transferred and sold to other users via a secure platform. Peer-to-peer energy trading allows consumers the choice to decide on whom they purchase electricity from, and who they sell it to.

Currently, excess solar energy is exported back to the grid for a small feed-in tariff rate. However, this method is becoming obsolete as more people are looking for flexibility and control in managing how their resources are distributed. The trading of energy is done through a secure platform, often using a technology like
blockchain. Blockchain is a database technology that processes and stores information, such as transactions of assets. These assets can be in the form of renewable energy credits, which can be traded through the database. Peer-to-peer energy trading platforms such as blockchain will allow consumers to share their excess energy amongst one another and control how it’s distributed through micro grids. Users who both sell and consume energy are called ‘prosumers’. Even if you don’t have solar panels, you can still purchase energy from others.

![ecosystem](https://user-images.githubusercontent.com/87982183/211116527-09eb914a-bb08-40cd-9f3d-1b1a9d38a9ae.jpg)




## Process Flow
The process flow is divided into 3 phases. Below are the 3 phases.
1. Pre execution (Market)
2. Execution (Hardware)
3. Settlement (Atomic transfer)

![process_flow](https://user-images.githubusercontent.com/87982183/211114567-82578cb5-7ecb-4180-ade5-517d26156753.png)

PRE EXECUTION
In this phase the market will be created for the next hour (block number based) cycle. The consumers will place bid (energy requirement) for the next hour cycle based on assumption and calculation.

EXECUTION
In the execution phase, the consumer will receive the required energy from the prosumers as decided in the hour ahead market. The energy will be transferred via the micro grid. However, in event of prosumer not generating enough energy or the consumer requiring more energy than bought from the market. The consumer will receive the surplus energy from the main grid.

SETTLEMENT
In the settlement phase, atomic transfer of tokens will happen on the Algorand ledger based on the energy transfer. Atomic transfer requires energy consumption details obtained via smart meters (data loggers). On Algorand, the tokens are transferred via energy pool. Based on the pre-decided amount the stable coins will be transferred to the prosumer providing the energy to the consumer. 

## Web application

The web application will be used by the Regulators and Admins for operations. User will only use the web application for account creation and KYC. 

[Check website here](https://poweralgo.netlify.app/index.html)


## Mobile Application

The mobile application will be used by the prosumers and consumers. Prosumer will be able to buy and sell energy on the platform. However, the consumer will only be able to buy energy on the platform. 
