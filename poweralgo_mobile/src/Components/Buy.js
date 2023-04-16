import React from 'react'
import algoicon from '../algorand.png'
import { useState, useEffect } from 'react';
import * as backend from '../build/index.prosumer.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import MakePeraConnect from "../build/PeraWallet-wrapper";
import { PeraWalletConnect } from "@perawallet/connect";
// import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');
// reach.setWalletFallback(reach.walletFallback({
//   providerEnv: 'TestNet', MyAlgoConnect }));

const peraWallet = new PeraWalletConnect({shouldShowSignTxnToast:false})
reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', WalletConnect: MakePeraConnect( peraWallet )  }));

export default function Buy(props) {
    const [contractInfo, setContractInfo] = useState(JSON.stringify({ "type": "BigNumber", "hex": "0x0b96eeb3" }));
    const [tokenId, setTokenId] = useState(194374737);
    const [contract, setContract] = useState(null);
    const [timesUpMessage, setTimeUpMessage] = useState(null);
    const [message, setMessage] = useState(null);
    const [account, setAccount] = useState(null);
    
    const [quantity, setQuantity] = useState(null);

    const executeOrder = async () => {  
            
        let promiseToExecuteOrder = new Promise( async (attachContract, throwError) => {
            
            if(account === null){      
                var acc = await setupAccount();
                await setAccount(acc)
            }

            if(acc !== null){
                attachContract(acc);
            }else
                throwError();
        });

        promiseToExecuteOrder.then(
            async () => {
                const account =  await reach.getDefaultAccount(reach.parseCurrency(1000));
                setAccount(account);
                await getAccountBalance(account);
                const balAtomic = await reach.balanceOf(account);       
                const balance = await reach.formatCurrency(balAtomic, 4);
                await account.tokenAccept(tokenId);
                const contract = await account.contract(backend, JSON.parse(contractInfo));
                setContract(contract);

                await contract.apis.Consumer.applyOrder(quantity, tokenId);
                // const events = await contract.events;
                // events.log.monitor( check );
                await getAccountBalance(account);
                await getTokenBalance(account);
                
                
            } ).catch(e => {   
                if(e.message.includes('Already')) setTimeUpMessage("You have already received the token");
                else setTimeUpMessage("Time up or List is full")
            }
        ); 
    }

    /* const transferToken = (from, to, askedUnits, energyToken) => {
        console.log(from);
        reach.transfer(from, to, 19, 194374737);
    }

    const transferAmount = (from, to, amount) => {
        console.log(from, 'Amount');
        reach.transfer(from, to, amount); 
     }*/

    const settleOrder = async () => {
        console.log(contract)
        await contract.apis.Consumer.settle(19);
        await getAccountBalance(account);
        await getTokenBalance(account);
    }

    const setupAccount = async () => {
        const acc = await reach.getDefaultAccount(reach.parseCurrency(1000));
        const balAtomic = await reach.balanceOf(acc);       
        const balance =  reach.formatCurrency(balAtomic, 4);
        // setBalance(balance);
        return acc;
    }

    const getAccountBalance = async(account) => {
        let balance = 0;
        // let tokenBalance = 0;
        if(account !== null){
            balance = await reach.balanceOf(account);
        }
        setMessage("Account balance is " + reach.formatCurrency(balance, 6)  );
    }
    const getTokenBalance = async(account) => {
        const [amt, balances] = await reach.balancesOf(account,[tokenId]);
        // setMessage(message +'<br>' + balances)
        console.log(balances);
    }

    useEffect(() => {
      /* const monitorEvents = async () => {
        console.log(contract);
        // if(contract !== null){
            contract.events.transferToken.monitor((eventData) => {
                console.log(eventData);
              });
            contract.events.transferAmount.monitor((eventData) => {
            console.log(eventData);
            });
        // }
      } */
    
      return () => {
        console.log(contract);
        // monitorEvents()
      }
    }, [contract])
    

  return (
    <div class="section">
    <div class="spacer"></div>
    
        <div class="row">
        <div class="input-field col s12">
          <i class="mdi mdi-battery-charging-30 prefix"></i>
          <input id="quantity" type="number" value={quantity} onChange={ (e) => { setQuantity(e.target.value) } } class="validate"/>
          <label for="quantity">Quantity</label>
        </div>
        </div>

        {/* <div class="row" >
        <div class="input-field col s12">
          
          <i class="mdi mdi-cash prefix"></i>
          <input id="info" type="text" value={contractInfo} onChange={ (e) => { setContractInfo(e.target.value) } } class="validate"/>
          <label for="info">ContractInfo</label>
        </div>
        </div> */}

        <div class="row">
            <div class="">
                <a class="waves-effect waves-light btn-large  " onClick={() => { executeOrder()}}>Buy</a>
                <a class="waves-effect waves-light btn-large blue " onClick={() => { settleOrder()}}>Settle</a>
                <a class="waves-effect waves-light btn-large grey " onClick={ props.back }>Back</a>
            </div>
        </div>

          </div>
  )
}
