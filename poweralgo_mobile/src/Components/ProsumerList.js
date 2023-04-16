import React from 'react'
import { useEffect, useState } from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import algosdk from 'algosdk';
import * as backend from '../build/index.prosumer.mjs';
const reach = loadStdlib('ALGO');

export default function ProsumerList(props) {
    const [assets, setAssets] = useState(null)
    const [ctcInfo, setCtcInfo] = useState(JSON.stringify({ "type": "BigNumber", "hex": "0x0b96eeb3" }))
    const [zeroAddr, setzeroAddr] = useState(reach.formatAddress('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ'));
    const [units, setUnits] = useState(null);
    const [perUnit, setPerUnit] = useState(null)

    useEffect(() => {
        const exploreTxn = async () => {
            let prov = await reach.getProvider();
            const txns = await prov.indexer.lookupAccountTransactions(reach.formatAddress('3ORKMTCUMVRQWTSTAU5EO4EGKO6UTYQRWYQXUTF73US2IJCBIT6DR2DGBY')).do();
            console.log(txns);
        }

      const explore = async () => {
        const acc = await reach.connectAccount({addr: zeroAddr}); 
        const ctc = acc.contract(backend, JSON.parse(ctcInfo));
        const units = await ctc.views.Order.units();
        const perUnit = await ctc.views.Order.pricePerUnit();
        setUnits(units[1].toString());
        setPerUnit(reach.formatCurrency(perUnit[1]))
      }
    
      return () => {
        explore()
      }
    }, [props.buy])
    
  return (
    <div className="section">
        <input type="hidden" value={ctcInfo}/>
        <ul class="collection friends contacts transparent  " >
            <li class="collection-item avatar  ">

                <a href="#!" class='chatlink waves-effect'>    
                <span class="title">Prosumer</span>
                <p>{perUnit} Algo/kW</p>
                </a>            
                <div class="secondary-content">
                    <a href="#!" class='chatlink waves-effect'>    
                    <span class="title">{ units }kW</span>
                    <p>25 Algo/kW</p>
                    </a> 
                    <a href="#!" class="waves-effect waves-light btn-small btn-rounded bg-primary lighten-1" onClick={props.buyNow}>Buy</a>
                </div>
            </li>
            
        </ul>
    </div>
  )
}
