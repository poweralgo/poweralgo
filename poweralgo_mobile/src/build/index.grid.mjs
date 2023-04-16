// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc5],
      4: [ctc0, ctc1, ctc2, ctc2, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Grid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Grid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Grid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc4 = stdlib.T_Data({
    Grid0_145: ctc0,
    Prosumer_buy0_145: ctc3,
    Prosumer_sell0_145: ctc3
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v791 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v792 = [v791];
  const v796 = stdlib.protect(ctc0, interact.initialPricePerUnit, 'for Grid\'s interact field initialPricePerUnit');
  const v797 = stdlib.protect(ctc0, interact.initialSupply, 'for Grid\'s interact field initialSupply');
  const v798 = stdlib.protect(ctc1, interact.token, 'for Grid\'s interact field token');
  
  const v801 = stdlib.le(v797, stdlib.UInt_max);
  stdlib.assert(v801, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:28:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Supply is too high',
    who: 'Grid'
    });
  const v803 = stdlib.gt(v797, stdlib.checkedBigNumberify('./index.rsh:29:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v803, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:29:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Supply should be greater than zero',
    who: 'Grid'
    });
  const v805 = stdlib.gt(v796, stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v805, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:30:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Initial price should be greater than zero',
    who: 'Grid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v798, v797, v796],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:27:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v808, v809, v810], secs: v812, time: v811, didSend: v127, from: v807 } = txn1;
      
      const v813 = v792[stdlib.checkedBigNumberify('./index.rsh:27:8:dot', stdlib.UInt_max, '0')];
      const v814 = stdlib.Array_set(v813, '0', stdlib.checkedBigNumberify('./index.rsh:27:8:dot', stdlib.UInt_max, '0'));
      const v815 = stdlib.Array_set(v792, stdlib.checkedBigNumberify('./index.rsh:27:8:dot', stdlib.UInt_max, '0'), v814);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v808
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v808, v809, v810], secs: v812, time: v811, didSend: v127, from: v807 } = txn1;
  const v813 = v792[stdlib.checkedBigNumberify('./index.rsh:27:8:dot', stdlib.UInt_max, '0')];
  const v814 = stdlib.Array_set(v813, '0', stdlib.checkedBigNumberify('./index.rsh:27:8:dot', stdlib.UInt_max, '0'));
  const v815 = stdlib.Array_set(v792, stdlib.checkedBigNumberify('./index.rsh:27:8:dot', stdlib.UInt_max, '0'), v814);
  const v817 = stdlib.le(v809, stdlib.UInt_max);
  stdlib.assert(v817, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:28:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Supply is too high',
    who: 'Grid'
    });
  const v819 = stdlib.gt(v809, stdlib.checkedBigNumberify('./index.rsh:29:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v819, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:29:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Supply should be greater than zero',
    who: 'Grid'
    });
  const v821 = stdlib.gt(v810, stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v821, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:30:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Initial price should be greater than zero',
    who: 'Grid'
    });
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v807, v808, v809, v810, v815],
    evt_cnt: 0,
    funcNum: 1,
    lct: v811,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:8:dot', stdlib.UInt_max, '0'), [[v809, v808]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v825, time: v824, didSend: v134, from: v823 } = txn2;
      
      ;
      const v826 = v815[stdlib.checkedBigNumberify('./index.rsh:34:8:dot', stdlib.UInt_max, '0')];
      const v827 = v826[stdlib.checkedBigNumberify('./index.rsh:34:8:dot', stdlib.UInt_max, '0')];
      const v828 = stdlib.add(v827, v809);
      const v830 = stdlib.Array_set(v826, '0', v828);
      const v831 = stdlib.Array_set(v815, stdlib.checkedBigNumberify('./index.rsh:34:8:dot', stdlib.UInt_max, '0'), v830);
      sim_r.txns.push({
        amt: v809,
        kind: 'to',
        tok: v808
        });
      const v833 = true;
      const v834 = v810;
      const v835 = v809;
      const v836 = v824;
      const v842 = v831;
      const v843 = stdlib.checkedBigNumberify('./index.rsh:19:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v833;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v807,
          tok: undefined /* Nothing */
          });
        const v1240 = v842[stdlib.checkedBigNumberify('./index.rsh:84:22:application', stdlib.UInt_max, '0')];
        const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:84:22:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v807,
          tok: v808
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v808
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc0, ctc0, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v825, time: v824, didSend: v134, from: v823 } = txn2;
  ;
  const v826 = v815[stdlib.checkedBigNumberify('./index.rsh:34:8:dot', stdlib.UInt_max, '0')];
  const v827 = v826[stdlib.checkedBigNumberify('./index.rsh:34:8:dot', stdlib.UInt_max, '0')];
  const v828 = stdlib.add(v827, v809);
  const v830 = stdlib.Array_set(v826, '0', v828);
  const v831 = stdlib.Array_set(v815, stdlib.checkedBigNumberify('./index.rsh:34:8:dot', stdlib.UInt_max, '0'), v830);
  ;
  const v832 = stdlib.addressEq(v807, v823);
  stdlib.assert(v832, {
    at: './index.rsh:34:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Grid'
    });
  let v833 = true;
  let v834 = v810;
  let v835 = v809;
  let v836 = v824;
  let v842 = v831;
  let v843 = stdlib.checkedBigNumberify('./index.rsh:19:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v833;})()) {
    const v849 = stdlib.protect(ctc0, await interact.getUpdatedPrice(), {
      at: './index.rsh:44:60:application',
      fs: ['at ./index.rsh:43:8:application call to [unknown function] (defined at: ./index.rsh:43:8:function exp)', 'at ./index.rsh:39:17:application call to "runGrid0_145" (defined at: ./index.rsh:42:9:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
      msg: 'getUpdatedPrice',
      who: 'Grid'
      });
    const v850 = stdlib.gt(v849, stdlib.checkedBigNumberify('./index.rsh:45:24:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v850, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:45:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:43:8:application call to [unknown function] (defined at: ./index.rsh:43:8:function exp)', 'at ./index.rsh:39:17:application call to "runGrid0_145" (defined at: ./index.rsh:42:9:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
      msg: null,
      who: 'Grid'
      });
    const v854 = ['Grid0_145', v849];
    
    const txn4 = await (ctc.sendrecv({
      args: [v807, v808, v834, v835, v842, v843, v854],
      evt_cnt: 1,
      funcNum: 3,
      lct: v836,
      onlyIf: true,
      out_tys: [ctc4],
      pay: [stdlib.checkedBigNumberify('./index.rsh:51:19:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v917], secs: v919, time: v918, didSend: v564, from: v916 } = txn4;
        
        switch (v917[0]) {
          case 'Grid0_145': {
            const v920 = v917[1];
            ;
            const v947 = v842[stdlib.checkedBigNumberify('./index.rsh:55:39:application', stdlib.UInt_max, '0')];
            const v948 = v947[stdlib.checkedBigNumberify('./index.rsh:55:39:application', stdlib.UInt_max, '0')];
            const cv833 = true;
            const cv834 = v920;
            const cv835 = v948;
            const cv836 = v918;
            const cv842 = v842;
            const cv843 = v843;
            
            await (async () => {
              const v833 = cv833;
              const v834 = cv834;
              const v835 = cv835;
              const v836 = cv836;
              const v842 = cv842;
              const v843 = cv843;
              
              if (await (async () => {
                
                return v833;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v807,
                  tok: undefined /* Nothing */
                  });
                const v1240 = v842[stdlib.checkedBigNumberify('./index.rsh:84:22:application', stdlib.UInt_max, '0')];
                const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:84:22:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v807,
                  tok: v808
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v808
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            break;
            }
          case 'Prosumer_buy0_145': {
            const v1025 = v917[1];
            sim_r.txns.push({
              kind: 'api',
              who: "Prosumer_buy"
              });
            const v1031 = v1025[stdlib.checkedBigNumberify('./index.rsh:58:8:spread', stdlib.UInt_max, '0')];
            const v1035 = stdlib.safeMul(v834, v1031);
            const v1048 = stdlib.add(v843, v1035);
            sim_r.txns.push({
              amt: v1035,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            const v1057 = v1025[stdlib.checkedBigNumberify('./index.rsh:58:8:spread', stdlib.UInt_max, '1')];
            const v1062 = v842[stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0')];
            const v1063 = v1062[stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0')];
            const v1067 = stdlib.sub(v1063, v1031);
            const v1069 = stdlib.Array_set(v1062, '0', v1067);
            const v1070 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0'), v1069);
            sim_r.txns.push({
              kind: 'from',
              to: v1057,
              tok: v808
              });
            const v1071 = v1070[stdlib.checkedBigNumberify('./index.rsh:62:43:application', stdlib.UInt_max, '0')];
            const v1072 = v1071[stdlib.checkedBigNumberify('./index.rsh:62:43:application', stdlib.UInt_max, '0')];
            
            
            const v1076 = null;
            await txn4.getOutput('Prosumer_buy', 'v1076', ctc5, v1076);
            const cv833 = true;
            const cv834 = v834;
            const cv835 = v1072;
            const cv836 = v918;
            const cv842 = v1070;
            const cv843 = v1048;
            
            await (async () => {
              const v833 = cv833;
              const v834 = cv834;
              const v835 = cv835;
              const v836 = cv836;
              const v842 = cv842;
              const v843 = cv843;
              
              if (await (async () => {
                
                return v833;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v807,
                  tok: undefined /* Nothing */
                  });
                const v1240 = v842[stdlib.checkedBigNumberify('./index.rsh:84:22:application', stdlib.UInt_max, '0')];
                const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:84:22:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v807,
                  tok: v808
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v808
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            break;
            }
          case 'Prosumer_sell0_145': {
            const v1130 = v917[1];
            sim_r.txns.push({
              kind: 'api',
              who: "Prosumer_sell"
              });
            const v1142 = v1130[stdlib.checkedBigNumberify('./index.rsh:68:8:spread', stdlib.UInt_max, '0')];
            const v1148 = stdlib.safeMul(v834, v1142);
            ;
            const v1194 = v1130[stdlib.checkedBigNumberify('./index.rsh:68:8:spread', stdlib.UInt_max, '1')];
            const v1205 = null;
            await txn4.getOutput('Prosumer_sell', 'v1205', ctc5, v1205);
            const v1213 = v842[stdlib.checkedBigNumberify('./index.rsh:74:30:application', stdlib.UInt_max, '0')];
            const v1214 = v1213[stdlib.checkedBigNumberify('./index.rsh:74:30:application', stdlib.UInt_max, '0')];
            const v1218 = stdlib.sub(v1214, v1142);
            const v1220 = stdlib.Array_set(v1213, '0', v1218);
            const v1221 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:74:30:application', stdlib.UInt_max, '0'), v1220);
            sim_r.txns.push({
              kind: 'from',
              to: v807,
              tok: v808
              });
            const v1226 = stdlib.sub(v843, v1148);
            sim_r.txns.push({
              kind: 'from',
              to: v1194,
              tok: undefined /* Nothing */
              });
            const v1227 = v1221[stdlib.checkedBigNumberify('./index.rsh:76:41:application', stdlib.UInt_max, '0')];
            const v1228 = v1227[stdlib.checkedBigNumberify('./index.rsh:76:41:application', stdlib.UInt_max, '0')];
            
            
            const cv833 = true;
            const cv834 = v834;
            const cv835 = v1228;
            const cv836 = v918;
            const cv842 = v1221;
            const cv843 = v1226;
            
            await (async () => {
              const v833 = cv833;
              const v834 = cv834;
              const v835 = cv835;
              const v836 = cv836;
              const v842 = cv842;
              const v843 = cv843;
              
              if (await (async () => {
                
                return v833;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v807,
                  tok: undefined /* Nothing */
                  });
                const v1240 = v842[stdlib.checkedBigNumberify('./index.rsh:84:22:application', stdlib.UInt_max, '0')];
                const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:84:22:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v807,
                  tok: v808
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v808
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            break;
            }
          }
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc1, ctc0, ctc0, ctc8, ctc0, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [v917], secs: v919, time: v918, didSend: v564, from: v916 } = txn4;
    switch (v917[0]) {
      case 'Grid0_145': {
        const v920 = v917[1];
        ;
        const v945 = stdlib.addressEq(v916, v807);
        stdlib.assert(v945, {
          at: './index.rsh:39:17:application',
          fs: [],
          msg: null,
          who: 'Grid'
          });
        const v946 = stdlib.gt(v920, stdlib.checkedBigNumberify('./index.rsh:53:26:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v946, {
          at: './index.rsh:53:14:application',
          fs: ['at ./index.rsh:52:16:application call to [unknown function] (defined at: ./index.rsh:52:16:function exp)'],
          msg: null,
          who: 'Grid'
          });
        const v947 = v842[stdlib.checkedBigNumberify('./index.rsh:55:39:application', stdlib.UInt_max, '0')];
        const v948 = v947[stdlib.checkedBigNumberify('./index.rsh:55:39:application', stdlib.UInt_max, '0')];
        const cv833 = true;
        const cv834 = v920;
        const cv835 = v948;
        const cv836 = v918;
        const cv842 = v842;
        const cv843 = v843;
        
        v833 = cv833;
        v834 = cv834;
        v835 = cv835;
        v836 = cv836;
        v842 = cv842;
        v843 = cv843;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Prosumer_buy0_145': {
        const v1025 = v917[1];
        undefined /* setApiDetails */;
        const v1031 = v1025[stdlib.checkedBigNumberify('./index.rsh:58:8:spread', stdlib.UInt_max, '0')];
        const v1033 = stdlib.lt(v1031, v835);
        stdlib.assert(v1033, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:59:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:37:application call to [unknown function] (defined at: ./index.rsh:58:37:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:58:37:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
          msg: 'Insuffiecient balance',
          who: 'Grid'
          });
        const v1035 = stdlib.safeMul(v834, v1031);
        const v1048 = stdlib.add(v843, v1035);
        ;
        const v1057 = v1025[stdlib.checkedBigNumberify('./index.rsh:58:8:spread', stdlib.UInt_max, '1')];
        const v1062 = v842[stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0')];
        const v1063 = v1062[stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0')];
        const v1067 = stdlib.sub(v1063, v1031);
        const v1069 = stdlib.Array_set(v1062, '0', v1067);
        const v1070 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0'), v1069);
        ;
        const v1071 = v1070[stdlib.checkedBigNumberify('./index.rsh:62:43:application', stdlib.UInt_max, '0')];
        const v1072 = v1071[stdlib.checkedBigNumberify('./index.rsh:62:43:application', stdlib.UInt_max, '0')];
        stdlib.protect(ctc5, await interact.currentBalance(v1072), {
          at: './index.rsh:62:35:application',
          fs: ['at ./index.rsh:62:35:application call to [unknown function] (defined at: ./index.rsh:62:35:function exp)', 'at ./index.rsh:62:35:application call to "liftedInteract" (defined at: ./index.rsh:62:35:application)', 'at ./index.rsh:60:44:application call to [unknown function] (defined at: ./index.rsh:60:44:function exp)'],
          msg: 'currentBalance',
          who: 'Grid'
          });
        
        stdlib.protect(ctc5, await interact.currentBalance(v1048), {
          at: './index.rsh:63:35:application',
          fs: ['at ./index.rsh:63:35:application call to [unknown function] (defined at: ./index.rsh:63:35:function exp)', 'at ./index.rsh:63:35:application call to "liftedInteract" (defined at: ./index.rsh:63:35:application)', 'at ./index.rsh:60:44:application call to [unknown function] (defined at: ./index.rsh:60:44:function exp)'],
          msg: 'currentBalance',
          who: 'Grid'
          });
        
        const v1076 = null;
        await txn4.getOutput('Prosumer_buy', 'v1076', ctc5, v1076);
        const cv833 = true;
        const cv834 = v834;
        const cv835 = v1072;
        const cv836 = v918;
        const cv842 = v1070;
        const cv843 = v1048;
        
        v833 = cv833;
        v834 = cv834;
        v835 = cv835;
        v836 = cv836;
        v842 = cv842;
        v843 = cv843;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Prosumer_sell0_145': {
        const v1130 = v917[1];
        undefined /* setApiDetails */;
        const v1142 = v1130[stdlib.checkedBigNumberify('./index.rsh:68:8:spread', stdlib.UInt_max, '0')];
        const v1144 = stdlib.gt(v1142, stdlib.checkedBigNumberify('./index.rsh:69:17:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v1144, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:69:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:39:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
          msg: 'Number of units can not be zero',
          who: 'Grid'
          });
        const v1146 = stdlib.lt(v1142, v835);
        stdlib.assert(v1146, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:70:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:39:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
          msg: 'Insuffiecient balance',
          who: 'Grid'
          });
        const v1148 = stdlib.safeMul(v834, v1142);
        const v1150 = stdlib.lt(v1148, v843);
        stdlib.assert(v1150, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:71:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:39:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
          msg: 'Price is too high - Prosumer sell',
          who: 'Grid'
          });
        ;
        const v1194 = v1130[stdlib.checkedBigNumberify('./index.rsh:68:8:spread', stdlib.UInt_max, '1')];
        const v1205 = null;
        await txn4.getOutput('Prosumer_sell', 'v1205', ctc5, v1205);
        const v1213 = v842[stdlib.checkedBigNumberify('./index.rsh:74:30:application', stdlib.UInt_max, '0')];
        const v1214 = v1213[stdlib.checkedBigNumberify('./index.rsh:74:30:application', stdlib.UInt_max, '0')];
        const v1218 = stdlib.sub(v1214, v1142);
        const v1220 = stdlib.Array_set(v1213, '0', v1218);
        const v1221 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:74:30:application', stdlib.UInt_max, '0'), v1220);
        ;
        const v1226 = stdlib.sub(v843, v1148);
        ;
        const v1227 = v1221[stdlib.checkedBigNumberify('./index.rsh:76:41:application', stdlib.UInt_max, '0')];
        const v1228 = v1227[stdlib.checkedBigNumberify('./index.rsh:76:41:application', stdlib.UInt_max, '0')];
        stdlib.protect(ctc5, await interact.currentBalance(v1228), {
          at: './index.rsh:76:33:application',
          fs: ['at ./index.rsh:76:33:application call to [unknown function] (defined at: ./index.rsh:76:33:function exp)', 'at ./index.rsh:76:33:application call to "liftedInteract" (defined at: ./index.rsh:76:33:application)', 'at ./index.rsh:72:17:application call to [unknown function] (defined at: ./index.rsh:72:17:function exp)'],
          msg: 'currentBalance',
          who: 'Grid'
          });
        
        stdlib.protect(ctc5, await interact.currentBalance(v1226), {
          at: './index.rsh:77:33:application',
          fs: ['at ./index.rsh:77:33:application call to [unknown function] (defined at: ./index.rsh:77:33:function exp)', 'at ./index.rsh:77:33:application call to "liftedInteract" (defined at: ./index.rsh:77:33:application)', 'at ./index.rsh:72:17:application call to [unknown function] (defined at: ./index.rsh:72:17:function exp)'],
          msg: 'currentBalance',
          who: 'Grid'
          });
        
        const cv833 = true;
        const cv834 = v834;
        const cv835 = v1228;
        const cv836 = v918;
        const cv842 = v1221;
        const cv843 = v1226;
        
        v833 = cv833;
        v834 = cv834;
        v835 = cv835;
        v836 = cv836;
        v842 = cv842;
        v843 = cv843;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  ;
  const v1240 = v842[stdlib.checkedBigNumberify('./index.rsh:84:22:application', stdlib.UInt_max, '0')];
  const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:84:22:application', stdlib.UInt_max, '0')];
  ;
  return;
  
  
  
  
  };
export async function _Prosumer_buy4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Prosumer_buy4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Prosumer_buy4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([ctc2, ctc0]);
  const ctc7 = stdlib.T_Data({
    Grid0_145: ctc2,
    Prosumer_buy0_145: ctc6,
    Prosumer_sell0_145: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v807, v808, v834, v835, v842, v843] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc2, ctc5, ctc2]);
  const v858 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:58:37:application call to [unknown function] (defined at: ./index.rsh:58:37:function exp)', 'at ./index.rsh:39:17:application call to "runProsumer_buy0_145" (defined at: ./index.rsh:58:8:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
    msg: 'in',
    who: 'Prosumer_buy'
    });
  const v859 = v858[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v863 = stdlib.lt(v859, v835);
  stdlib.assert(v863, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:59:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:37:application call to [unknown function] (defined at: ./index.rsh:58:37:function exp)', 'at ./index.rsh:39:17:application call to "runProsumer_buy0_145" (defined at: ./index.rsh:58:8:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
    msg: 'Insuffiecient balance',
    who: 'Prosumer_buy'
    });
  const v872 = ['Prosumer_buy0_145', v858];
  
  const v904 = stdlib.safeMul(v834, v859);
  
  const txn1 = await (ctc.sendrecv({
    args: [v807, v808, v834, v835, v842, v843, v872],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v904, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v917], secs: v919, time: v918, didSend: v564, from: v916 } = txn1;
      
      switch (v917[0]) {
        case 'Grid0_145': {
          const v920 = v917[1];
          
          break;
          }
        case 'Prosumer_buy0_145': {
          const v1025 = v917[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Prosumer_buy"
            });
          const v1031 = v1025[stdlib.checkedBigNumberify('./index.rsh:58:8:spread', stdlib.UInt_max, '0')];
          const v1035 = stdlib.safeMul(v834, v1031);
          const v1048 = stdlib.add(v843, v1035);
          sim_r.txns.push({
            amt: v1035,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1057 = v1025[stdlib.checkedBigNumberify('./index.rsh:58:8:spread', stdlib.UInt_max, '1')];
          const v1062 = v842[stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0')];
          const v1063 = v1062[stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0')];
          const v1067 = stdlib.sub(v1063, v1031);
          const v1069 = stdlib.Array_set(v1062, '0', v1067);
          const v1070 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0'), v1069);
          sim_r.txns.push({
            kind: 'from',
            to: v1057,
            tok: v808
            });
          const v1071 = v1070[stdlib.checkedBigNumberify('./index.rsh:62:43:application', stdlib.UInt_max, '0')];
          const v1072 = v1071[stdlib.checkedBigNumberify('./index.rsh:62:43:application', stdlib.UInt_max, '0')];
          const v1076 = null;
          const v1077 = await txn1.getOutput('Prosumer_buy', 'v1076', ctc8, v1076);
          
          const v1583 = v834;
          const v1584 = v1072;
          const v1586 = v1070;
          const v1587 = v1048;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Prosumer_sell0_145': {
          const v1130 = v917[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc5, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v917], secs: v919, time: v918, didSend: v564, from: v916 } = txn1;
  switch (v917[0]) {
    case 'Grid0_145': {
      const v920 = v917[1];
      return;
      break;
      }
    case 'Prosumer_buy0_145': {
      const v1025 = v917[1];
      undefined /* setApiDetails */;
      const v1031 = v1025[stdlib.checkedBigNumberify('./index.rsh:58:8:spread', stdlib.UInt_max, '0')];
      const v1033 = stdlib.lt(v1031, v835);
      stdlib.assert(v1033, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:59:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:37:application call to [unknown function] (defined at: ./index.rsh:58:37:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:58:37:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
        msg: 'Insuffiecient balance',
        who: 'Prosumer_buy'
        });
      const v1035 = stdlib.safeMul(v834, v1031);
      const v1048 = stdlib.add(v843, v1035);
      ;
      const v1057 = v1025[stdlib.checkedBigNumberify('./index.rsh:58:8:spread', stdlib.UInt_max, '1')];
      const v1062 = v842[stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0')];
      const v1063 = v1062[stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0')];
      const v1067 = stdlib.sub(v1063, v1031);
      const v1069 = stdlib.Array_set(v1062, '0', v1067);
      const v1070 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0'), v1069);
      ;
      const v1071 = v1070[stdlib.checkedBigNumberify('./index.rsh:62:43:application', stdlib.UInt_max, '0')];
      const v1072 = v1071[stdlib.checkedBigNumberify('./index.rsh:62:43:application', stdlib.UInt_max, '0')];
      const v1076 = null;
      const v1077 = await txn1.getOutput('Prosumer_buy', 'v1076', ctc8, v1076);
      if (v564) {
        stdlib.protect(ctc8, await interact.out(v1025, v1077), {
          at: './index.rsh:58:9:application',
          fs: ['at ./index.rsh:58:9:application call to [unknown function] (defined at: ./index.rsh:58:9:function exp)', 'at ./index.rsh:64:13:application call to "notify" (defined at: ./index.rsh:60:44:function exp)', 'at ./index.rsh:60:44:application call to [unknown function] (defined at: ./index.rsh:60:44:function exp)'],
          msg: 'out',
          who: 'Prosumer_buy'
          });
        }
      else {
        }
      
      const v1583 = v834;
      const v1584 = v1072;
      const v1586 = v1070;
      const v1587 = v1048;
      return;
      
      break;
      }
    case 'Prosumer_sell0_145': {
      const v1130 = v917[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Prosumer_sell4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Prosumer_sell4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Prosumer_sell4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([ctc2, ctc0]);
  const ctc7 = stdlib.T_Data({
    Grid0_145: ctc2,
    Prosumer_buy0_145: ctc6,
    Prosumer_sell0_145: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v807, v808, v834, v835, v842, v843] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc2, ctc5, ctc2]);
  const v876 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:68:39:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to "runProsumer_sell0_145" (defined at: ./index.rsh:68:8:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
    msg: 'in',
    who: 'Prosumer_sell'
    });
  const v877 = v876[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v881 = stdlib.gt(v877, stdlib.checkedBigNumberify('./index.rsh:69:17:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v881, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:69:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:39:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to "runProsumer_sell0_145" (defined at: ./index.rsh:68:8:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
    msg: 'Number of units can not be zero',
    who: 'Prosumer_sell'
    });
  const v883 = stdlib.lt(v877, v835);
  stdlib.assert(v883, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:70:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:39:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to "runProsumer_sell0_145" (defined at: ./index.rsh:68:8:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
    msg: 'Insuffiecient balance',
    who: 'Prosumer_sell'
    });
  const v885 = stdlib.safeMul(v834, v877);
  const v887 = stdlib.lt(v885, v843);
  stdlib.assert(v887, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:39:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to "runProsumer_sell0_145" (defined at: ./index.rsh:68:8:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
    msg: 'Price is too high - Prosumer sell',
    who: 'Prosumer_sell'
    });
  const v896 = ['Prosumer_sell0_145', v876];
  
  const txn1 = await (ctc.sendrecv({
    args: [v807, v808, v834, v835, v842, v843, v896],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v917], secs: v919, time: v918, didSend: v564, from: v916 } = txn1;
      
      switch (v917[0]) {
        case 'Grid0_145': {
          const v920 = v917[1];
          
          break;
          }
        case 'Prosumer_buy0_145': {
          const v1025 = v917[1];
          
          break;
          }
        case 'Prosumer_sell0_145': {
          const v1130 = v917[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Prosumer_sell"
            });
          const v1142 = v1130[stdlib.checkedBigNumberify('./index.rsh:68:8:spread', stdlib.UInt_max, '0')];
          const v1148 = stdlib.safeMul(v834, v1142);
          ;
          const v1194 = v1130[stdlib.checkedBigNumberify('./index.rsh:68:8:spread', stdlib.UInt_max, '1')];
          const v1205 = null;
          const v1206 = await txn1.getOutput('Prosumer_sell', 'v1205', ctc8, v1205);
          
          const v1213 = v842[stdlib.checkedBigNumberify('./index.rsh:74:30:application', stdlib.UInt_max, '0')];
          const v1214 = v1213[stdlib.checkedBigNumberify('./index.rsh:74:30:application', stdlib.UInt_max, '0')];
          const v1218 = stdlib.sub(v1214, v1142);
          const v1220 = stdlib.Array_set(v1213, '0', v1218);
          const v1221 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:74:30:application', stdlib.UInt_max, '0'), v1220);
          sim_r.txns.push({
            kind: 'from',
            to: v807,
            tok: v808
            });
          const v1226 = stdlib.sub(v843, v1148);
          sim_r.txns.push({
            kind: 'from',
            to: v1194,
            tok: undefined /* Nothing */
            });
          const v1227 = v1221[stdlib.checkedBigNumberify('./index.rsh:76:41:application', stdlib.UInt_max, '0')];
          const v1228 = v1227[stdlib.checkedBigNumberify('./index.rsh:76:41:application', stdlib.UInt_max, '0')];
          const v1615 = v834;
          const v1616 = v1228;
          const v1618 = v1221;
          const v1619 = v1226;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc5, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v917], secs: v919, time: v918, didSend: v564, from: v916 } = txn1;
  switch (v917[0]) {
    case 'Grid0_145': {
      const v920 = v917[1];
      return;
      break;
      }
    case 'Prosumer_buy0_145': {
      const v1025 = v917[1];
      return;
      break;
      }
    case 'Prosumer_sell0_145': {
      const v1130 = v917[1];
      undefined /* setApiDetails */;
      const v1142 = v1130[stdlib.checkedBigNumberify('./index.rsh:68:8:spread', stdlib.UInt_max, '0')];
      const v1144 = stdlib.gt(v1142, stdlib.checkedBigNumberify('./index.rsh:69:17:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1144, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:69:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:39:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
        msg: 'Number of units can not be zero',
        who: 'Prosumer_sell'
        });
      const v1146 = stdlib.lt(v1142, v835);
      stdlib.assert(v1146, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:70:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:39:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
        msg: 'Insuffiecient balance',
        who: 'Prosumer_sell'
        });
      const v1148 = stdlib.safeMul(v834, v1142);
      const v1150 = stdlib.lt(v1148, v843);
      stdlib.assert(v1150, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:71:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:39:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:68:39:function exp)', 'at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
        msg: 'Price is too high - Prosumer sell',
        who: 'Prosumer_sell'
        });
      ;
      const v1194 = v1130[stdlib.checkedBigNumberify('./index.rsh:68:8:spread', stdlib.UInt_max, '1')];
      const v1205 = null;
      const v1206 = await txn1.getOutput('Prosumer_sell', 'v1205', ctc8, v1205);
      if (v564) {
        stdlib.protect(ctc8, await interact.out(v1130, v1206), {
          at: './index.rsh:68:9:application',
          fs: ['at ./index.rsh:68:9:application call to [unknown function] (defined at: ./index.rsh:68:9:function exp)', 'at ./index.rsh:73:6:application call to "k" (defined at: ./index.rsh:72:17:function exp)', 'at ./index.rsh:72:17:application call to [unknown function] (defined at: ./index.rsh:72:17:function exp)'],
          msg: 'out',
          who: 'Prosumer_sell'
          });
        }
      else {
        }
      
      const v1213 = v842[stdlib.checkedBigNumberify('./index.rsh:74:30:application', stdlib.UInt_max, '0')];
      const v1214 = v1213[stdlib.checkedBigNumberify('./index.rsh:74:30:application', stdlib.UInt_max, '0')];
      const v1218 = stdlib.sub(v1214, v1142);
      const v1220 = stdlib.Array_set(v1213, '0', v1218);
      const v1221 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:74:30:application', stdlib.UInt_max, '0'), v1220);
      ;
      const v1226 = stdlib.sub(v843, v1148);
      ;
      const v1227 = v1221[stdlib.checkedBigNumberify('./index.rsh:76:41:application', stdlib.UInt_max, '0')];
      const v1228 = v1227[stdlib.checkedBigNumberify('./index.rsh:76:41:application', stdlib.UInt_max, '0')];
      const v1615 = v834;
      const v1616 = v1228;
      const v1618 = v1221;
      const v1619 = v1226;
      return;
      
      break;
      }
    }
  
  
  };
export async function Prosumer_buy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Prosumer_buy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Prosumer_buy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Prosumer_buy4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Prosumer_sell(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Prosumer_sell expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Prosumer_sell expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Prosumer_sell4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Prosumer_buy(uint64,address)void`, `Prosumer_sell(uint64,address)void`, `_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[40])))void`],
    pure: [],
    sigs: [`Prosumer_buy(uint64,address)void`, `Prosumer_sell(uint64,address)void`, `_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[40])))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAIAAEIBCAoMKCNBiYCAAEAMRhBAzQoZEkiWzUBJFs1AilkggUEA6+jPASL/0gaBJ0o2XUEojdzQATf2SMoNhoAjgUC1wByAvIAAQLnADYaARc2GgI1CzUMJK+AAQE0DBY0C1BQUDULJTQBEkRJVwAgNRVJIQRbNRRJIQVbNRJJIQZbNRFJVzgRNQ+BSVs1DjQLIls1DDQLVwgpNQ2ABDspkds0DBZQNA1QsDQMiANsNA0iVY0DAw0DNQK2Qv+ONhoBFzYaAjULNQwkr4ABAjQMFjQLUFBQNQtC/4w0CyJbSTUXNBEMRDQSNBcLSTUWiANKNA9XABE1DTQPNA1JIls0FwkWXABcADUMNBc0FDQLVwggiAL+KDULgAgAAAAAAAAENDQLULA0CzUEIzQMVwARIlsyBjQMNA40Fgg1DjUPNRA1ETUTNBNBAjE0FTQUFlA0EhZQNBEWUDQPUDQOFlAlMgY1AjUBKUxXAFFnKDQBFjQCFlBnMRkiEkSIArI0A0AACoAEFR98dTQEULAjQzQLIltJNRciDUQ0FzQRDEQ0EjQXC0k1FjQODEQoNQyACAAAAAAAAAS1NAxQsDQMNQQ0D1cAETUNNA80DUkiWzQXCRZcAFwANQw0FzQUNBWIAjM0FjQLVwggiAI7IzQMVwARIlsyBjQMNA40Fgk1DjUPNRA1ETUTQv89MQA1FTQLIls1DDQLJFs1FDQLgRBbNRc0C4EYWzUWgAT27avSNAwWUDQUFlA0FxZQNBYWULA0DIgB2YERr0k1C0lXABEkr1wAXAA1DTQXgf///////////wEORDQXIg1ENBYiDUQhB4gBtyI0FDIKiAGZNBU0FBZQNBcWUDQWFlA0DVAkr1AjMgZC/s4jNAESRElXACA1FUkhBFs1FEkhBVs1F0khBls1Flc4ETUNNAsXNQyABNUVGRQ0DBZQsDQMiAFQNA1XABE1CzQXNBQxFjQAIwhJNQAJRwM4FDIKEkQ4ECUSRDgRTwISRDgSEkQ0FTEAEkQjNBY0FzIGNA00C0kiWzQXCBZcAFwAIjUONQ81EDURNRI1E0L+IogA8SEHiAD+NhoBNQtC/tWIAOE2GgE1C0L/VogA1jYaATULQv0eIjE0EkSBAjE1EkQiMTYSRCIxNxJEiAC2gVGvIiJC/fkxGSISREL+ETQNVwEoNQtC/hM0DjQViACjNA9XABEiWzQUNBWIAIMiNBQyCjIJiADDMRmBBRJEiACMIjIKMgmIAKxC/c8isgEjshCyB7IIs4kisgElshCyFLIRshKziTQNI1s1CzEANBUSRDQLIg1EIzQLNA9XABEiWzIGNRA1ETUSNRNC/VU0DVcBKDULQvzhSIlMCUk1BjIJiAAfiQlJQf/uSTUGiAApibFC/6MjNQOJSSISTDQCEhFEibFC/4U0Bgg1Bok0BjQHSg9B/8RC/8wxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJsbIJQv9RsbIVQv9X`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `36`,
    1000: `630`,
    1001: `631`,
    1002: `631`,
    1003: `632`,
    1004: `632`,
    1005: `633`,
    1006: `633`,
    1007: `634`,
    1008: `634`,
    1009: `634`,
    101: `37`,
    1010: `636`,
    1011: `636`,
    1012: `637`,
    1013: `637`,
    1014: `637`,
    1015: `638`,
    1016: `638`,
    1017: `639`,
    1018: `639`,
    1019: `639`,
    102: `38`,
    1020: `641`,
    1021: `642`,
    1022: `644`,
    1023: `645`,
    1024: `646`,
    1025: `647`,
    1026: `647`,
    1027: `648`,
    1028: `648`,
    1029: `649`,
    103: `39`,
    1030: `649`,
    1031: `649`,
    1032: `650`,
    1033: `652`,
    1034: `653`,
    1035: `654`,
    1036: `654`,
    1037: `654`,
    1038: `655`,
    1039: `656`,
    104: `39`,
    1040: `656`,
    1041: `657`,
    1042: `657`,
    1043: `657`,
    1044: `658`,
    1045: `660`,
    1046: `661`,
    1047: `661`,
    1048: `661`,
    1049: `663`,
    105: `41`,
    1050: `664`,
    1051: `664`,
    1052: `665`,
    1053: `667`,
    1054: `668`,
    1055: `669`,
    1056: `670`,
    1057: `671`,
    1058: `671`,
    1059: `672`,
    106: `42`,
    1060: `673`,
    1061: `674`,
    1062: `675`,
    1063: `677`,
    1064: `678`,
    1065: `678`,
    1066: `678`,
    1067: `680`,
    1068: `680`,
    1069: `681`,
    107: `42`,
    1070: `682`,
    1071: `682`,
    1072: `683`,
    1073: `685`,
    1074: `685`,
    1075: `686`,
    1076: `686`,
    1077: `687`,
    1078: `688`,
    1079: `689`,
    108: `43`,
    1080: `689`,
    1081: `689`,
    1082: `690`,
    1083: `690`,
    1084: `690`,
    1085: `693`,
    1086: `693`,
    1087: `694`,
    1088: `694`,
    1089: `695`,
    109: `44`,
    1090: `696`,
    1091: `697`,
    1092: `698`,
    1093: `698`,
    1094: `699`,
    1095: `700`,
    1096: `700`,
    1097: `701`,
    1098: `701`,
    1099: `702`,
    11: `2`,
    110: `46`,
    1100: `702`,
    1101: `703`,
    1102: `704`,
    1103: `705`,
    1104: `705`,
    1105: `706`,
    1106: `707`,
    1107: `708`,
    1108: `709`,
    1109: `709`,
    111: `47`,
    1110: `710`,
    1111: `711`,
    1112: `712`,
    1113: `714`,
    1114: `715`,
    1115: `715`,
    1116: `716`,
    1117: `716`,
    1118: `716`,
    1119: `718`,
    112: `47`,
    1120: `719`,
    1121: `719`,
    1122: `720`,
    113: `47`,
    114: `48`,
    115: `48`,
    116: `49`,
    117: `50`,
    118: `50`,
    119: `51`,
    12: `2`,
    120: `52`,
    121: `52`,
    122: `53`,
    123: `54`,
    124: `54`,
    125: `55`,
    126: `56`,
    127: `56`,
    128: `57`,
    129: `58`,
    13: `2`,
    130: `58`,
    131: `59`,
    132: `60`,
    133: `60`,
    134: `61`,
    135: `62`,
    136: `62`,
    137: `62`,
    138: `63`,
    139: `63`,
    14: `2`,
    140: `64`,
    141: `64`,
    142: `65`,
    143: `66`,
    144: `66`,
    145: `67`,
    146: `67`,
    147: `68`,
    148: `69`,
    149: `70`,
    15: `2`,
    150: `70`,
    151: `71`,
    152: `71`,
    153: `72`,
    154: `72`,
    155: `72`,
    156: `73`,
    157: `73`,
    158: `74`,
    159: `74`,
    16: `2`,
    160: `74`,
    161: `74`,
    162: `74`,
    163: `74`,
    164: `75`,
    165: `75`,
    166: `76`,
    167: `77`,
    168: `78`,
    169: `78`,
    17: `2`,
    170: `79`,
    171: `80`,
    172: `82`,
    173: `82`,
    174: `83`,
    175: `83`,
    176: `83`,
    177: `84`,
    178: `84`,
    179: `85`,
    18: `4`,
    180: `86`,
    181: `87`,
    182: `87`,
    183: `87`,
    184: `87`,
    185: `87`,
    186: `87`,
    187: `87`,
    188: `87`,
    189: `88`,
    19: `4`,
    190: `88`,
    191: `88`,
    192: `90`,
    193: `90`,
    194: `90`,
    195: `91`,
    196: `92`,
    197: `92`,
    198: `92`,
    199: `93`,
    2: `2`,
    20: `5`,
    200: `93`,
    201: `94`,
    202: `94`,
    203: `96`,
    204: `97`,
    205: `98`,
    206: `98`,
    207: `98`,
    208: `99`,
    209: `99`,
    21: `5`,
    210: `100`,
    211: `101`,
    212: `101`,
    213: `102`,
    214: `103`,
    215: `104`,
    216: `105`,
    217: `105`,
    218: `106`,
    219: `106`,
    22: `5`,
    220: `106`,
    221: `108`,
    222: `108`,
    223: `109`,
    224: `110`,
    225: `111`,
    226: `112`,
    227: `112`,
    228: `113`,
    229: `113`,
    23: `6`,
    230: `114`,
    231: `115`,
    232: `122`,
    233: `122`,
    234: `123`,
    235: `123`,
    236: `124`,
    237: `125`,
    238: `126`,
    239: `126`,
    24: `7`,
    240: `127`,
    241: `127`,
    242: `127`,
    243: `130`,
    244: `130`,
    245: `131`,
    246: `131`,
    247: `131`,
    248: `132`,
    249: `132`,
    25: `8`,
    250: `133`,
    251: `133`,
    252: `134`,
    253: `134`,
    254: `135`,
    255: `136`,
    256: `137`,
    257: `138`,
    258: `138`,
    259: `139`,
    26: `9`,
    260: `140`,
    261: `141`,
    262: `141`,
    263: `142`,
    264: `142`,
    265: `143`,
    266: `143`,
    267: `144`,
    268: `144`,
    269: `146`,
    27: `10`,
    270: `146`,
    271: `148`,
    272: `148`,
    273: `149`,
    274: `149`,
    275: `149`,
    276: `150`,
    277: `150`,
    278: `150`,
    279: `151`,
    28: `11`,
    280: `152`,
    281: `152`,
    282: `153`,
    283: `153`,
    284: `153`,
    285: `153`,
    286: `153`,
    287: `153`,
    288: `153`,
    289: `153`,
    29: `11`,
    290: `153`,
    291: `153`,
    292: `154`,
    293: `154`,
    294: `155`,
    295: `156`,
    296: `157`,
    297: `157`,
    298: `158`,
    299: `158`,
    3: `2`,
    30: `12`,
    300: `159`,
    301: `160`,
    302: `160`,
    303: `161`,
    304: `161`,
    305: `161`,
    306: `162`,
    307: `163`,
    308: `164`,
    309: `164`,
    31: `13`,
    310: `165`,
    311: `165`,
    312: `166`,
    313: `166`,
    314: `167`,
    315: `167`,
    316: `168`,
    317: `169`,
    318: `169`,
    319: `170`,
    32: `14`,
    320: `170`,
    321: `171`,
    322: `171`,
    323: `172`,
    324: `172`,
    325: `173`,
    326: `173`,
    327: `175`,
    328: `175`,
    329: `176`,
    33: `14`,
    330: `176`,
    331: `176`,
    332: `178`,
    333: `178`,
    334: `179`,
    335: `179`,
    336: `180`,
    337: `181`,
    338: `182`,
    339: `182`,
    34: `15`,
    340: `183`,
    341: `184`,
    342: `185`,
    343: `185`,
    344: `186`,
    345: `187`,
    346: `188`,
    347: `188`,
    348: `189`,
    349: `190`,
    35: `16`,
    350: `190`,
    351: `191`,
    352: `192`,
    353: `193`,
    354: `194`,
    355: `194`,
    356: `196`,
    357: `196`,
    358: `197`,
    359: `197`,
    36: `18`,
    360: `198`,
    361: `199`,
    362: `200`,
    363: `200`,
    364: `200`,
    365: `201`,
    366: `202`,
    367: `203`,
    368: `203`,
    369: `204`,
    37: `18`,
    370: `205`,
    371: `205`,
    372: `206`,
    373: `207`,
    374: `208`,
    375: `209`,
    376: `209`,
    377: `210`,
    378: `211`,
    379: `212`,
    38: `18`,
    380: `214`,
    381: `214`,
    382: `214`,
    383: `216`,
    384: `216`,
    385: `217`,
    386: `217`,
    387: `217`,
    388: `219`,
    389: `219`,
    39: `18`,
    390: `219`,
    391: `219`,
    392: `219`,
    393: `219`,
    394: `220`,
    395: `220`,
    396: `221`,
    397: `222`,
    398: `224`,
    399: `225`,
    4: `2`,
    40: `18`,
    400: `227`,
    401: `227`,
    402: `228`,
    403: `229`,
    404: `230`,
    405: `231`,
    406: `231`,
    407: `232`,
    408: `233`,
    409: `234`,
    41: `18`,
    410: `241`,
    411: `241`,
    412: `242`,
    413: `242`,
    414: `243`,
    415: `244`,
    416: `251`,
    417: `251`,
    418: `252`,
    419: `252`,
    42: `18`,
    420: `253`,
    421: `254`,
    422: `255`,
    423: `255`,
    424: `256`,
    425: `256`,
    426: `257`,
    427: `258`,
    428: `265`,
    429: `266`,
    43: `18`,
    430: `266`,
    431: `267`,
    432: `267`,
    433: `267`,
    434: `267`,
    435: `267`,
    436: `267`,
    437: `267`,
    438: `267`,
    439: `267`,
    44: `18`,
    440: `267`,
    441: `268`,
    442: `268`,
    443: `269`,
    444: `270`,
    445: `271`,
    446: `271`,
    447: `272`,
    448: `272`,
    449: `273`,
    45: `18`,
    450: `273`,
    451: `274`,
    452: `274`,
    453: `274`,
    454: `275`,
    455: `275`,
    456: `276`,
    457: `276`,
    458: `277`,
    459: `277`,
    46: `18`,
    460: `278`,
    461: `279`,
    462: `280`,
    463: `281`,
    464: `281`,
    465: `282`,
    466: `283`,
    467: `284`,
    468: `284`,
    469: `285`,
    47: `18`,
    470: `285`,
    471: `286`,
    472: `286`,
    473: `287`,
    474: `287`,
    475: `289`,
    476: `289`,
    477: `291`,
    478: `291`,
    479: `292`,
    48: `18`,
    480: `292`,
    481: `292`,
    482: `293`,
    483: `293`,
    484: `295`,
    485: `295`,
    486: `296`,
    487: `296`,
    488: `296`,
    489: `297`,
    49: `18`,
    490: `297`,
    491: `297`,
    492: `298`,
    493: `299`,
    494: `299`,
    495: `300`,
    496: `300`,
    497: `300`,
    498: `301`,
    499: `302`,
    5: `2`,
    50: `18`,
    500: `303`,
    501: `303`,
    502: `304`,
    503: `304`,
    504: `305`,
    505: `305`,
    506: `306`,
    507: `306`,
    508: `307`,
    509: `308`,
    51: `18`,
    510: `308`,
    511: `309`,
    512: `309`,
    513: `310`,
    514: `310`,
    515: `311`,
    516: `311`,
    517: `312`,
    518: `312`,
    519: `313`,
    52: `18`,
    520: `313`,
    521: `313`,
    522: `315`,
    523: `315`,
    524: `316`,
    525: `316`,
    526: `317`,
    527: `317`,
    528: `318`,
    529: `319`,
    53: `18`,
    530: `320`,
    531: `320`,
    532: `321`,
    533: `321`,
    534: `322`,
    535: `323`,
    536: `324`,
    537: `324`,
    538: `325`,
    539: `325`,
    54: `18`,
    540: `326`,
    541: `326`,
    542: `327`,
    543: `328`,
    544: `328`,
    545: `329`,
    546: `329`,
    547: `330`,
    548: `330`,
    549: `331`,
    55: `18`,
    550: `332`,
    551: `332`,
    552: `333`,
    553: `333`,
    554: `333`,
    555: `333`,
    556: `333`,
    557: `333`,
    558: `334`,
    559: `334`,
    56: `18`,
    560: `335`,
    561: `336`,
    562: `337`,
    563: `337`,
    564: `338`,
    565: `339`,
    566: `340`,
    567: `340`,
    568: `341`,
    569: `342`,
    57: `18`,
    570: `343`,
    571: `343`,
    572: `344`,
    573: `345`,
    574: `346`,
    575: `348`,
    576: `348`,
    577: `349`,
    578: `349`,
    579: `349`,
    58: `18`,
    580: `350`,
    581: `350`,
    582: `351`,
    583: `352`,
    584: `353`,
    585: `353`,
    586: `354`,
    587: `355`,
    588: `355`,
    589: `355`,
    59: `18`,
    590: `356`,
    591: `357`,
    592: `358`,
    593: `358`,
    594: `359`,
    595: `359`,
    596: `360`,
    597: `360`,
    598: `361`,
    599: `361`,
    6: `2`,
    60: `18`,
    600: `362`,
    601: `362`,
    602: `362`,
    603: `362`,
    604: `362`,
    605: `362`,
    606: `362`,
    607: `362`,
    608: `362`,
    609: `362`,
    61: `18`,
    610: `362`,
    611: `363`,
    612: `364`,
    613: `368`,
    614: `368`,
    615: `369`,
    616: `370`,
    617: `371`,
    618: `375`,
    619: `375`,
    62: `18`,
    620: `376`,
    621: `377`,
    622: `378`,
    623: `382`,
    624: `382`,
    625: `383`,
    626: `383`,
    627: `383`,
    628: `384`,
    629: `386`,
    63: `19`,
    630: `386`,
    631: `387`,
    632: `387`,
    633: `388`,
    634: `388`,
    635: `388`,
    636: `390`,
    637: `390`,
    638: `391`,
    639: `391`,
    64: `19`,
    640: `392`,
    641: `393`,
    642: `394`,
    643: `394`,
    644: `395`,
    645: `396`,
    646: `397`,
    647: `397`,
    648: `398`,
    649: `399`,
    65: `19`,
    650: `400`,
    651: `400`,
    652: `401`,
    653: `402`,
    654: `403`,
    655: `404`,
    656: `405`,
    657: `406`,
    658: `406`,
    659: `407`,
    66: `20`,
    660: `407`,
    661: `407`,
    662: `409`,
    663: `410`,
    664: `410`,
    665: `411`,
    666: `412`,
    667: `414`,
    668: `415`,
    669: `415`,
    67: `20`,
    670: `415`,
    671: `416`,
    672: `416`,
    673: `417`,
    674: `418`,
    675: `418`,
    676: `419`,
    677: `420`,
    678: `420`,
    679: `421`,
    68: `20`,
    680: `422`,
    681: `422`,
    682: `423`,
    683: `424`,
    684: `424`,
    685: `425`,
    686: `426`,
    687: `426`,
    688: `427`,
    689: `428`,
    69: `20`,
    690: `428`,
    691: `429`,
    692: `429`,
    693: `429`,
    694: `430`,
    695: `430`,
    696: `431`,
    697: `431`,
    698: `432`,
    699: `433`,
    7: `2`,
    70: `20`,
    700: `433`,
    701: `434`,
    702: `434`,
    703: `434`,
    704: `434`,
    705: `434`,
    706: `434`,
    707: `435`,
    708: `435`,
    709: `436`,
    71: `20`,
    710: `437`,
    711: `438`,
    712: `440`,
    713: `440`,
    714: `441`,
    715: `441`,
    716: `441`,
    717: `442`,
    718: `442`,
    719: `443`,
    72: `20`,
    720: `443`,
    721: `443`,
    722: `444`,
    723: `444`,
    724: `445`,
    725: `445`,
    726: `446`,
    727: `446`,
    728: `449`,
    729: `449`,
    73: `20`,
    730: `450`,
    731: `450`,
    732: `451`,
    733: `452`,
    734: `453`,
    735: `454`,
    736: `454`,
    737: `455`,
    738: `456`,
    739: `456`,
    74: `20`,
    740: `457`,
    741: `457`,
    742: `458`,
    743: `458`,
    744: `459`,
    745: `460`,
    746: `461`,
    747: `461`,
    748: `462`,
    749: `463`,
    75: `20`,
    750: `464`,
    751: `465`,
    752: `465`,
    753: `466`,
    754: `466`,
    755: `467`,
    756: `468`,
    757: `469`,
    758: `469`,
    759: `470`,
    76: `20`,
    760: `471`,
    761: `474`,
    762: `474`,
    763: `475`,
    764: `475`,
    765: `476`,
    766: `477`,
    767: `480`,
    768: `481`,
    769: `481`,
    77: `20`,
    770: `482`,
    771: `482`,
    772: `483`,
    773: `483`,
    774: `484`,
    775: `484`,
    776: `485`,
    777: `485`,
    778: `486`,
    779: `487`,
    78: `22`,
    780: `488`,
    781: `489`,
    782: `489`,
    783: `490`,
    784: `491`,
    785: `492`,
    786: `492`,
    787: `493`,
    788: `493`,
    789: `494`,
    79: `24`,
    790: `495`,
    791: `495`,
    792: `496`,
    793: `496`,
    794: `497`,
    795: `497`,
    796: `498`,
    797: `498`,
    798: `499`,
    799: `499`,
    8: `2`,
    80: `24`,
    800: `500`,
    801: `500`,
    802: `501`,
    803: `501`,
    804: `501`,
    805: `503`,
    806: `503`,
    807: `503`,
    808: `504`,
    809: `504`,
    81: `24`,
    810: `505`,
    811: `505`,
    812: `505`,
    813: `506`,
    814: `506`,
    815: `506`,
    816: `507`,
    817: `507`,
    818: `508`,
    819: `508`,
    82: `25`,
    820: `508`,
    821: `510`,
    822: `510`,
    823: `510`,
    824: `511`,
    825: `511`,
    826: `511`,
    827: `512`,
    828: `512`,
    829: `513`,
    83: `26`,
    830: `513`,
    831: `513`,
    832: `515`,
    833: `515`,
    834: `515`,
    835: `516`,
    836: `516`,
    837: `516`,
    838: `517`,
    839: `517`,
    84: `26`,
    840: `518`,
    841: `518`,
    842: `518`,
    843: `520`,
    844: `521`,
    845: `521`,
    846: `522`,
    847: `523`,
    848: `524`,
    849: `524`,
    85: `26`,
    850: `525`,
    851: `525`,
    852: `526`,
    853: `527`,
    854: `528`,
    855: `529`,
    856: `529`,
    857: `530`,
    858: `531`,
    859: `532`,
    86: `27`,
    860: `533`,
    861: `533`,
    862: `534`,
    863: `535`,
    864: `536`,
    865: `536`,
    866: `536`,
    867: `537`,
    868: `537`,
    869: `538`,
    87: `27`,
    870: `539`,
    871: `540`,
    872: `541`,
    873: `541`,
    874: `541`,
    875: `543`,
    876: `543`,
    877: `544`,
    878: `545`,
    879: `546`,
    88: `28`,
    880: `548`,
    881: `548`,
    882: `548`,
    883: `550`,
    884: `550`,
    885: `551`,
    886: `551`,
    887: `551`,
    888: `552`,
    889: `552`,
    89: `28`,
    890: `553`,
    891: `553`,
    892: `553`,
    893: `555`,
    894: `555`,
    895: `557`,
    896: `557`,
    897: `558`,
    898: `558`,
    899: `558`,
    9: `2`,
    90: `30`,
    900: `559`,
    901: `559`,
    902: `560`,
    903: `560`,
    904: `560`,
    905: `561`,
    906: `562`,
    907: `564`,
    908: `564`,
    909: `565`,
    91: `31`,
    910: `565`,
    911: `566`,
    912: `566`,
    913: `566`,
    914: `568`,
    915: `569`,
    916: `569`,
    917: `570`,
    918: `570`,
    919: `571`,
    92: `32`,
    920: `571`,
    921: `572`,
    922: `572`,
    923: `572`,
    924: `574`,
    925: `574`,
    926: `575`,
    927: `575`,
    928: `576`,
    929: `577`,
    93: `32`,
    930: `579`,
    931: `579`,
    932: `579`,
    933: `581`,
    934: `582`,
    935: `582`,
    936: `583`,
    937: `583`,
    938: `584`,
    939: `584`,
    94: `32`,
    940: `584`,
    941: `585`,
    942: `585`,
    943: `585`,
    944: `587`,
    945: `588`,
    946: `588`,
    947: `589`,
    948: `590`,
    949: `590`,
    95: `33`,
    950: `591`,
    951: `591`,
    952: `592`,
    953: `592`,
    954: `593`,
    955: `594`,
    956: `596`,
    957: `597`,
    958: `597`,
    959: `598`,
    96: `33`,
    960: `599`,
    961: `599`,
    962: `600`,
    963: `600`,
    964: `601`,
    965: `601`,
    966: `602`,
    967: `602`,
    968: `603`,
    969: `604`,
    97: `34`,
    970: `606`,
    971: `606`,
    972: `607`,
    973: `608`,
    974: `609`,
    975: `609`,
    976: `610`,
    977: `610`,
    978: `611`,
    979: `611`,
    98: `35`,
    980: `612`,
    981: `613`,
    982: `616`,
    983: `616`,
    984: `617`,
    985: `618`,
    986: `619`,
    987: `623`,
    988: `624`,
    989: `624`,
    99: `35`,
    990: `625`,
    991: `625`,
    992: `626`,
    993: `626`,
    994: `626`,
    995: `627`,
    996: `628`,
    997: `629`,
    998: `629`,
    999: `630`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 81,
  unsupported: [],
  version: 13,
  warnings: [`API Prosumer_sell may use up to 5 accounts, but the limit is 4. API Prosumer_sell starts at /app/index.rsh:39:17:application.`, `Step 3 may use up to 5 accounts, but the limit is 4. Step 3 starts at /app/index.rsh:39:17:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T3","name":"v1640","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"uint256","name":"_Grid0_145","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_Prosumer_buy0_145","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_Prosumer_sell0_145","type":"tuple"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1076","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1205","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v1628","type":"uint256"},{"internalType":"address payable","name":"v1629","type":"address"}],"name":"Prosumer_buy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1636","type":"uint256"},{"internalType":"address payable","name":"v1637","type":"address"}],"name":"Prosumer_sell","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"v1643","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"uint256","name":"_Grid0_145","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_Prosumer_buy0_145","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_Prosumer_sell0_145","type":"tuple"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v1646","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62001f3438819003918201601f19168301916001600160401b0383118484101762000417578084926080946040528339810103126200053357604051608081016001600160401b038111828210176200041757604052815181526020820151906001600160a01b03821682036200053357602081019182526040830151604082019081526060809401519084830191825243600355620000a262000554565b50604080519081016001600160401b038111828210176200041757604052620000ca62000554565b81526020810193620000db62000575565b855260ff600454166200051a577f6325dde25bfa6ff85dd776156bfdeeefc36ff7c4a07f10fdc0c4fb6b1f92fb9760a060405133815283516020820152600180831b03895116604082015285518a82015286516080820152a15180159081156200050d575b5015620004f45760008151526000602082510152600060408251015251835152805115620004db57815115620004c25734620004a9576040519360a085016001600160401b038111868210176200041757604052600085526000602086015260006040860152600086860152620001b662000575565b608086015233855260018060a01b039051166020850152516040840152518383015251805160406020820151910151151560405191620001f68362000538565b60008352602083015260408201526200020e62000575565b9160005b600181106200045957505081526080828101918252600160008181554382556040805186516001600160a01b03908116602080840191909152880151168183015290860151818801529486015192850192909252915191938460a085015b8184106200042d575060e085528461010081016001600160401b0381118282101762000417576040528051906001600160401b03821162000417576002548381811c911680156200040c575b6020821014620003f657601f811162000389575b50602090601f83116001146200031e5792829391839260009462000312575b50501b916000199060031b1c1916176002555b60405161194f9081620005e58239f35b015192508480620002ef565b90601f1983169160026000528360206000209360005b878282106200036f5750501062000355575b505050811b0160025562000302565b015160001960f88460031b161c1916905582808062000346565b848601518755909501946020948501948793500162000334565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f840160051c81019160208510620003eb575b601f0160051c019084905b828110620003de575050620002d0565b60008155018490620003ce565b9091508190620003c3565b634e487b7160e01b600052602260045260246000fd5b90607f1690620002bc565b634e487b7160e01b600052604160045260246000fd5b826020916040875180518352848101518584015201511515604082015201940192019192859062000270565b620004658183620005bc565b51620004728286620005bc565b526200047f8185620005bc565b506000198114620004935760010162000212565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600c6004820152602490fd5b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260086004820152602490fd5b9050600154143862000140565b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b606081019081106001600160401b038211176200041757604052565b60405190620005638262000538565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000417576040528260005b828110620005a557505050565b8290620005b162000554565b818401520162000598565b906001811015620005ce5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b6000803560e01c9081631e93b0f1146100a757508063573b85101461009e5780638323075714610095578063aa8c5dfd1461008c578063ab53f2c614610083578063c3eb62c01461007a5763c9e508bd0361000e5761007561045f565b61000e565b506100756103ba565b5061007561032b565b5061007561029e565b5061007561027f565b506100756100c6565b346100c357806003193601126100c35760035460805260206080f35b80fd5b5060208060031936011261027a576100dc6106a3565b5061026060409161024f83516100f18161053d565b6004358152610104600160005414610fb5565b61017f6101206101126105d9565b8580825183010191016117c4565b9161013c61013761013360045460ff1690565b1590565b610fd5565b8651338152815160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159690604090a151801590811561026e575b50610ff5565b6101893415611015565b8281019261024a608061019c865161039d565b936101b56101b08a83019687519033611844565b611035565b6101d13360018060a01b036101ca845161039d565b1614611055565b6102016101f96101df610a23565b986101f36101ed855161039d565b8b6106f9565b5161039d565b8589016106f9565b6001878a0152606081015160608801528451828801524360a0880152015191825193845190510193888282015191015115159161023c610684565b958652850152151587840152565b611349565b60c0820152600060e082015261169a565b5160008152602090f35b0390f35b90506001541438610179565b600080fd5b503461027a57600036600319011261027a576020600154604051908152f35b5060e036600319011261027a576102b36106a3565b604051906102c082610565565b600435825260c036602319011261027a57604051916102de83610580565b60243592600384101561027a5761031f9381526044356020820152610302366118c4565b6040820152610310366118f5565b60608201526020820152610a87565b60405160008152602090f35b503461027a576000806003193601126100c35780546103486105d9565b906040519283918252602090604082840152835191826040850152815b83811061038657505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610365565b6001600160a01b031690565b6001600160a01b0381160361027a57565b50604036600319011261027a5761026a60406024356103d8816103a9565b61044b6103e36106a3565b80926103ed6106e0565b60043581526001600160a01b039182166020820190815290919061040f61075b565b92518351525116602082510152602081019061042c825160029052565b5160608251015261043b61079d565b9060008252516020820152610a87565b015160405190151581529081906020820190565b50604036600319011261027a5761026a602060243561047d816103a9565b61044b6104886106a3565b80926104926106e0565b60043581526001600160a01b039182168682019081529091906104b361075b565b925183515251168582510152848101906104ce825160019052565b516040825101526104dd61079d565b90600082525185820152610a87565b90600182811c9216801561051c575b602083101461050657565b634e487b7160e01b600052602260045260246000fd5b91607f16916104fb565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761055857604052565b610560610526565b604052565b604081019081106001600160401b0382111761055857604052565b608081019081106001600160401b0382111761055857604052565b606081019081106001600160401b0382111761055857604052565b601f909101601f19168101906001600160401b0382119082101761055857604052565b60405190600082600254916105ed836104ec565b8083526001938085169081156106635750600114610615575b50610613925003836105b6565b565b6002600090815260008051602061192383398151915294602093509091905b81831061064b575050610613935082010138610606565b85548884018501529485019487945091830191610634565b905061061394506020925060ff191682840152151560051b82010138610606565b60405190606082016001600160401b0381118382101761055857604052565b60405190606082016001600160401b038111838210176106d3575b60405260006040838281528260208201520152565b6106db610526565b6106be565b604051906106ed82610565565b60006020838281520152565b6001600160a01b039091169052565b60405190608082016001600160401b0381118382101761074e575b60405281600081526000602082015261073a6106e0565b604082015260606107496106e0565b910152565b610756610526565b610723565b6040519061076882610565565b816107716106e0565b81526020610749610708565b6003111561078757565b634e487b7160e01b600052602160045260246000fd5b604051906107aa82610565565b81600081526020610749610708565b604051906107c68261053d565b8160005b602081106107d6575050565b6020906107e16106a3565b81840152016107ca565b6040519060e082016001600160401b0381118382101761084d575b60405281600081526108166106e0565b60208201526000604082015261082a6107b9565b60608201526108376106e0565b6080820152600060a082015260c06107496107b9565b610855610526565b610806565b5190811515820361027a57565b9080601f8301121561027a576040918251926108828461053d565b836060938484019381851161027a57915b8483106108a35750505050505090565b858383031261027a57835186916108b98261059b565b8451825260209182860151838201526108d387870161085a565b87820152815201920191610893565b6101008183031261027a576040519160e091906109509060c085016001600160401b0381118682101761095f575b604052825161091e816103a9565b8552602083015161092e816103a9565b6020860152604083015160408601526060830151606086015260808301610867565b6080840152015160a082015290565b610967610526565b610910565b805182526020908101516001600160a01b0316910152565b90929160209061010083019460018060a01b03168352805182840152015190815191600383101561078757606060c0916106139460408501526020810151828501526109d86040820151608086019061096c565b015191019061096c565b5160038110156107875790565b906001811015610a005760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b6040519061010082016001600160401b03811183821017610a7a575b6040528160e06000918281528260208201528260408201528260608201528260808201528260a0820152610a716107b9565b60c08201520152565b610a82610526565b610a3f565b610a8f6107eb565b91600092610aa06004855414611075565b610aa86105d9565b92610abd6020948580825183010191016108e2565b92610ad5610ad061013360045460ff1690565b611095565b846040927f10957f70ec498219b3014609c96186be2353ebe3ebdd66239a48229641c3ff89845180610b08843383610984565b0390a1610b2081518015908115610f33575b506110b5565b0195610b2c87516109e2565b610b358161077d565b610be457505090610bba60a0939285610613975101518352610b573415611195565b610b73610b6c610b67865161039d565b61039d565b33146111b5565b610b7f835115156111d5565b610bb2610b8a610a23565b96610b9e610b98875161039d565b896106f9565b610baa8187015161039d565b9088016106f9565b850160019052565b5160608401526080810180515151608085015243838501525160c0840152015160e082015261169a565b919094956001610bf482516109e2565b610bfd8161077d565b03610d50578190510151958084019680885251606086015111610c1f90611155565b81850192818451895151610c3291610f56565b9784870198808a523414610c4590611175565b6080880151805180518c51519003908785820151910151151590610c67610684565b92835285830152151587820152610c7d916113a6565b96606001968752818801998a51610c939061039d565b905183810151610ca29061039d565b9051610cb99290916001600160a01b0316906111f5565b8451600081527f2bb3143e10b9a37a137cca4802ba84da2a6140bba14ba09c7c4bccebd365cf6390602090a10152610cef610a23565b968551610cfb9061039d565b610d0590896106f9565b51610d0f9061039d565b610d1a9188016106f9565b6001908601525160608501528051515160808501524360a08501525160c084015260a0015190510160e08201526106139061169a565b6002610d638298959498979697516109e2565b610d6c8161077d565b14610d7b575b50505050505050565b51606001516080830190808252511515610d94906110d5565b805151606087015111610da6906110f5565b818601918251825151610db891610f56565b94888260a0870198888a5260a08b0198895111610dd490611115565b610dde3415611135565b8151600081527f96699112cc9147a90aafc307279b1c66917ff054fa2b8bad46bc4070489e795290602090a101526080880151805180518551519003908484820151910151151590610e2e610684565b92835284830152151584820152610e44916113a6565b9460c00194855280808901938451610e5b9061039d565b8a51610e669061039d565b825151610e7e9290916001600160a01b0316906111f5565b5101516001600160a01b0316610e939061039d565b908751938a908b808088159e610f119f99610edf98610ed797610ee79c610f2a575bf115610f1d575b6101f3610ed1610eca610a23565b9c5161039d565b8c6106f9565b9089016106f9565b860160019052565b5160608501528051515160808501524360a08501525160c0840152519051900360e082015261169a565b38808080808080610d72565b610f25610a16565b610ebc565b506108fc610eb5565b90506001541438610b1a565b50634e487b7160e01b600052601160045260246000fd5b91906000928115918215610f6e575b50501561027a57565b81819293955002828104821483151715610fa8575b8094610f925704143880610f65565b634e487b7160e01b600052601260045260246000fd5b610fb0610f3f565b610f83565b15610fbc57565b60405163100960cb60e01b8152600d6004820152602490fd5b15610fdc57565b60405163100960cb60e01b8152600e6004820152602490fd5b15610ffc57565b60405163100960cb60e01b8152600f6004820152602490fd5b1561101c57565b60405163100960cb60e01b815260106004820152602490fd5b1561103c57565b60405163100960cb60e01b815260116004820152602490fd5b1561105c57565b60405163100960cb60e01b815260126004820152602490fd5b1561107c57565b60405163100960cb60e01b815260136004820152602490fd5b1561109c57565b60405163100960cb60e01b815260146004820152602490fd5b156110bc57565b60405163100960cb60e01b815260156004820152602490fd5b156110dc57565b60405163100960cb60e01b8152601b6004820152602490fd5b156110fc57565b60405163100960cb60e01b8152601c6004820152602490fd5b1561111c57565b60405163100960cb60e01b8152601d6004820152602490fd5b1561113c57565b60405163100960cb60e01b8152601e6004820152602490fd5b1561115c57565b60405163100960cb60e01b815260196004820152602490fd5b1561117c57565b60405163100960cb60e01b8152601a6004820152602490fd5b1561119c57565b60405163100960cb60e01b815260166004820152602490fd5b156111bc57565b60405163100960cb60e01b815260176004820152602490fd5b156111dc57565b60405163100960cb60e01b815260186004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261127193600093849392849190608081016001600160401b03811182821017611278575b6040525193165af161126161125a611285565b80926112e9565b50602080825183010191016112d2565b1561027a57565b611280610526565b611247565b3d156112cd573d906001600160401b0382116112c0575b604051916112b4601f8201601f1916602001846105b6565b82523d6000602084013e565b6112c8610526565b61129c565b606090565b9081602091031261027a576112e69061085a565b90565b156112f15790565b80511561130057805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156113215790565b80511561133057805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b91906113536107b9565b9260005b600181106113655750508252565b80611372600192846109ef565b5161137d82886109ef565b5261138881876109ef565b506000198114611399575b01611357565b6113a1610f3f565b611393565b91906113b06107b9565b9260005b600181106113c25750508252565b806113cf600192846109ef565b516113da82886109ef565b526113e581876109ef565b5060001981146113f6575b016113b4565b6113fe610f3f565b6113f0565b81811061140e575050565b60008155600101611403565b6114256002546104ec565b8061142d5750565b601f811160011461144057506000600255565b600260005261148590601f0160051c600080516020611923833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611403565b6000602081208160025555565b6040519060c082016001600160401b038111838210176114db575b604052600060a0838281528260208201528260408201528260608201526114d26107b9565b60808201520152565b6114e3610526565b6114ad565b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015161010086019796949260009290919087015b6001841061154a5750505050505060a060e0910151910152565b8483600192888551805183528481015185840152015115158982015201920193019290611530565b90601f821161157f575050565b6106139160026000526020600020906020601f840160051c830193106115ad575b601f0160051c0190611403565b90915081906115a0565b80519091906001600160401b03811161168d575b6115df816115da6002546104ec565b611572565b602080601f831160011461161b5750819293600092611610575b50508160011b916000199060031b1c191617600255565b0151905038806115f9565b6002600052601f19831694909190600080516020611923833981519152926000905b87821061167557505083600195961061165c575b505050811b01600255565b015160001960f88460031b161c19169055388080611651565b8060018596829496860151815501950193019061163d565b611695610526565b6115cb565b60408101511561173f5761172c61173a6106139260e06116b8611492565b916116cc6116c6825161039d565b846106f9565b6116e56116dc602083015161039d565b602085016106f9565b606081015160408401526080810151606084015260c08101516080840152015160a08201526117146004600055565b61171d43600155565b604051928391602083016114e8565b03601f1981018352826105b6565b6115b7565b806000808080611755610b67611798975161039d565b60e0860151908282156117bb575bf1156117ae575b611777602082015161039d565b60c0611783835161039d565b9201515151916001600160a01b0316906111f5565b600080556117a66000600155565b61061361141a565b6117b6610a16565b61176a565b506108fc611763565b9060e08282031261027a576040519161182f919060809060a085016001600160401b03811186821017611837575b6040528051611800816103a9565b85526020810151611810816103a9565b6020860152604081015160408601526060810151606086015201610867565b608082015290565b61183f610526565b6117f2565b6040516323b872dd60e01b602082019081526001600160a01b0392831660248301523060448301526064808301959095529381526112e6936000938493909284919060a081016001600160401b038111828210176118b7575b6040525193165af16112616118b0611285565b8092611319565b6118bf610526565b61189d565b604090606319011261027a57604051906118dd82610565565b60643582526084356020836118f1836103a9565b0152565b60409060a319011261027a576040519061190e82610565565b60a435825260c4356020836118f1836103a956fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 7988,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:32:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:85:12:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:39:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Grid": Grid,
  "Prosumer_buy": Prosumer_buy,
  "Prosumer_sell": Prosumer_sell
  };
export const _APIs = {
  Prosumer: {
    buy: Prosumer_buy,
    sell: Prosumer_sell
    }
  };
