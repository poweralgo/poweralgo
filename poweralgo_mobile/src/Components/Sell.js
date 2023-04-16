import React from 'react'
import algoicon from '../algorand.png'
import { useState } from 'react';
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

export default function Sell(props) {
    const [account, setAccount] = useState(null);        
    const [balance, setBalance] = useState(null);
    const [contract, setContract] = useState(null);
    const [contractInfo, setContractInfo] = useState(null);
    const [gridContractInfo, setGridContractInfo] = useState(JSON.stringify({ "type": "BigNumber", "hex": "0x0b95ec5e" }));
    
    const deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
    const [quantity, setQuantity] = useState(null);
    const [price, setPrice] = useState(null)

    const placeOrder = async () => {  
            
            let promiseToPlaceOrder = new Promise( async (createContract, throwError) => {
                if(account === null){      
                    var acc = await setupAccount();
                    await setAccount(acc)
                }

                if(acc !== null){
                
                    createContract(acc,gridContractInfo);
                }else
                    throwError();
            });

            promiseToPlaceOrder.then(
                async (account) => {
                    const contr = await account.contract(backend);
                    console.log(contr);
                    account.tokenAccept(194374737);
                    const interaction = {
                        startOrder : () => {
                            console.log({
                                token : 194374737,
                                units : quantity,
                                algoperUnit : reach.parseCurrency(price / quantity),
                                gridCtc : JSON.parse(gridContractInfo)
                            });
                            return {
                                token : 194374737,
                                units : quantity,
                                algoperUnit : reach.parseCurrency(price / quantity),
                                gridCtc : JSON.parse(gridContractInfo)
                            };
                        },
                        timeUp : () => {
                            return true;
                        }
                    };
                    
                    setAccount(account);
                    setContract(contr);            
                    
                    backend.Producer(contr,Object(interaction));
                    
                    const contractInfo = JSON.stringify( await contr.getInfo(), null, 2);
                    setContractInfo(contractInfo);
                },
                () => { console.log("Failed to create account"); }
            ); 
    }

    const setupAccount = async () => {
        const acc = await reach.getDefaultAccount(reach.parseCurrency(1000));
        const balAtomic = await reach.balanceOf(acc);       
        const balance = await reach.formatCurrency(balAtomic, 4);
        // setBalance(balance);
        return acc;
    }

  return (
    <div class="section ">
<div class="spacer"></div>
    
        <div class="row">
        <div class="input-field col s12">
          <i class="mdi mdi-battery-charging-30 prefix"></i>
          <input id="quantity" type="number" value={quantity} onChange={ (e) => { setQuantity(e.target.value) } } class="validate"/>
          <label for="quantity">Quantity</label>
        </div>
        </div>

        <div class="row">
        <div class="input-field col s12">
          {/* <img src={algoicon}/> */}
          <i class="mdi mdi-cash prefix"></i>
          <input id="email" type="number" value={price} onChange={ (e) => { setPrice(e.target.value) } } class="validate"/>
          <label for="email">Algo</label>
        </div>
        </div>

        <div class="row" style={{display : 'none'}}>
        <div class="input-field col s12">
          {/* <img src={algoicon}/> */}
          <i class="mdi mdi-cash prefix"></i>
          <input id="info" type="text" value={gridContractInfo} onChange={ (e) => { setGridContractInfo(e.target.value) } } class="validate"/>
          <label for="info">Grid contractInfo</label>
        </div>
        </div>

        Order is placed : Order id is { contractInfo=== null ? "" : contractInfo}

        <div class="row">
            <div class="">
                <a class="waves-effect waves-light btn-large  " onClick={() => { placeOrder()}}>Place Order</a>
                <a class="waves-effect waves-light btn-large grey " onClick={ props.back }>Back</a>
            </div>
        </div>

          </div>
  )
}
