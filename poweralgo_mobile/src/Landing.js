import React, { useState } from 'react'
import logo from './logo.png';
import * as gridbackend from './build/index.grid.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import MakePeraConnect from "./build/PeraWallet-wrapper";
import { PeraWalletConnect } from "@perawallet/connect";
// import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');
// reach.setWalletFallback(reach.walletFallback({
//   providerEnv: 'TestNet', MyAlgoConnect }));

const peraWallet = new PeraWalletConnect({shouldShowSignTxnToast:false})
reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', WalletConnect: MakePeraConnect( peraWallet )  }));

export default function Landing(props) {
    const [account, setAccount] = useState(null);        
    const [balance, setBalance] = useState(null);
    const [contract, setContract] = useState(null);
    const [contractInfo, setContractInfo] = useState(null);
    const [tokenId, setTokenId] = useState(null);

    const launchGrid = async () => {  
      
      let promiseToLaunchGrid = new Promise( async (createContract, throwError) => {
          if(account === null){      
              var acc = await setupAccount();
              await setAccount(acc)
          }

          if(acc !== null)
              createContract(acc);
          else
              throwError();
      });

      promiseToLaunchGrid.then(
          async (account) => {
              const contr = await account.contract(gridbackend);
              const token = await reach.launchToken(account, 'Electricity-ACE', 'ELEACE');
              const startingBalance = reach.parseCurrency(100);
              await token.mint(account, startingBalance.mul(2));
              setTokenId(token.id.toString());
              account.tokenAccept(token.id);
              
              console.log(account);
              const interaction = {
                        token : token.id,
                        initialSupply : 100000000,
                        initialPricePerUnit : 20000,
                        priceUpdated : () => {
                          console.log("Price is updated")
                        },
                        getUpdatedPrice : () => {
                          return 30000;
                        },
                        keepGoing : () => {
                          return true;
                        },
                        currentBalance : (bal) => {
                          console.log(`Current contract balance : ${bal}`);
                        }
              };
              
              setAccount(account);
              setContract(contr);            
              
              gridbackend.Grid(contr,Object(interaction));
              
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
    <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />  
        </header>
        <div className="center index-start">
          
        {/* <a href="#" className="waves-light waves-light btn-large bg-primary lighten-2 white-text" onClick={ launchGrid}>Grid</a> */}
            <a href="#" className="waves-light waves-light btn-large bg-primary lighten-2 white-text" onClick={ props.getStarted}>Get Started</a>
            {/* <a href="ui-pages-login.html" className='login-link'>Already a member? Sign In</a>  <a href="ui-pages-register.html" className='register-link'>Register</a> */}
        </div>
    </div>
  )
}
