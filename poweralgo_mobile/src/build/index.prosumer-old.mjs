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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  return {
    transferAmount: [ctc0, ctc0, ctc1],
    transferToken: [ctc0, ctc0, ctc1, ctc2]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc1
    });
  const map0_ctc = ctc6;
  
  const map1_ctc = ctc6;
  
  
  const Order_consumer = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v689, v691, v693, v694, v695, v696] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v689, v693, v694, v695, v696, v702, v703, v704, v705, v707, v708] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Order_pricePerUnit = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v689, v691, v693, v694, v695, v696] = svs;
      return (await ((async () => {
        
        
        return v695;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v689, v693, v694, v695, v696, v702, v703, v704, v705, v707, v708] = svs;
      return (await ((async () => {
        
        
        return v695;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Order_producer = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v689, v691, v693, v694, v695, v696] = svs;
      return (await ((async () => {
        
        
        return v689;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v689, v693, v694, v695, v696, v702, v703, v704, v705, v707, v708] = svs;
      return (await ((async () => {
        
        
        return v689;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Order_started = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v689, v691, v693, v694, v695, v696] = svs;
      return (await ((async () => {
        
        
        return true;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v689, v693, v694, v695, v696, v702, v703, v704, v705, v707, v708] = svs;
      return (await ((async () => {
        
        
        return true;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Order_units = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v689, v691, v693, v694, v695, v696] = svs;
      return (await ((async () => {
        
        
        return v694;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v689, v693, v694, v695, v696, v702, v703, v704, v705, v707, v708] = svs;
      return (await ((async () => {
        
        
        return v694;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Order: {
        consumer: {
          decode: Order_consumer,
          dom: [],
          rng: ctc0
          },
        pricePerUnit: {
          decode: Order_pricePerUnit,
          dom: [],
          rng: ctc1
          },
        producer: {
          decode: Order_producer,
          dom: [],
          rng: ctc0
          },
        started: {
          decode: Order_started,
          dom: [],
          rng: ctc4
          },
        units: {
          decode: Order_units,
          dom: [],
          rng: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3],
      7: [ctc0, ctc2, ctc1, ctc1, ctc3, ctc1, ctc2, ctc1, ctc1, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function _Consumer_applyOrder7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Consumer_applyOrder7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Consumer_applyOrder7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    Consumer_applyOrder0_56: ctc6,
    Consumer_settle0_56: ctc7
    });
  const ctc9 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v689, v693, v694, v695, v696, v702, v703, v704, v705, v707, v708] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc1, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc3]);
  const v723 = ctc.selfAddress();
  const v725 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:77:51:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to "runConsumer_applyOrder0_56" (defined at: ./index.rsh:77:10:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
    msg: 'in',
    who: 'Consumer_applyOrder'
    });
  const v726 = v725[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v727 = v725[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v730 = stdlib.addressEq(v689, v723);
  const v731 = v730 ? false : true;
  stdlib.assert(v731, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:77:51:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to "runConsumer_applyOrder0_56" (defined at: ./index.rsh:77:10:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
    msg: 'Producer and consumer should be diffrent',
    who: 'Consumer_applyOrder'
    });
  const v733 = stdlib.le(v726, v694);
  stdlib.assert(v733, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:77:51:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to "runConsumer_applyOrder0_56" (defined at: ./index.rsh:77:10:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
    msg: 'Insuffiecient tokens',
    who: 'Consumer_applyOrder'
    });
  const v735 = stdlib.tokenEq(v727, v693);
  stdlib.assert(v735, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:81:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:77:51:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to "runConsumer_applyOrder0_56" (defined at: ./index.rsh:77:10:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
    msg: 'Tokens do not match',
    who: 'Consumer_applyOrder'
    });
  const v744 = ['Consumer_applyOrder0_56', v725];
  
  const txn1 = await (ctc.sendrecv({
    args: [v689, v693, v694, v695, v696, v702, v703, v704, v705, v707, v708, v744],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v779], secs: v781, time: v780, didSend: v472, from: v778 } = txn1;
      
      switch (v779[0]) {
        case 'Consumer_applyOrder0_56': {
          const v782 = v779[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Consumer_applyOrder"
            });
          const v787 = v782[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '0')];
          const v788 = v782[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '1')];
          ;
          const v814 = true;
          const v815 = await txn1.getOutput('Consumer_applyOrder', 'v814', ctc9, v814);
          
          const v1261 = v788;
          const v1262 = v787;
          const v1263 = stdlib.checkedBigNumberify('./index.rsh:84:17:decimal', stdlib.UInt_max, '0');
          const v1265 = stdlib.checkedBigNumberify('./index.rsh:84:20:decimal', stdlib.UInt_max, '0');
          const v1266 = v778;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Consumer_settle0_56': {
          const v848 = v779[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v779], secs: v781, time: v780, didSend: v472, from: v778 } = txn1;
  switch (v779[0]) {
    case 'Consumer_applyOrder0_56': {
      const v782 = v779[1];
      undefined /* setApiDetails */;
      const v787 = v782[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '0')];
      const v788 = v782[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '1')];
      const v789 = stdlib.addressEq(v689, v778);
      const v790 = v789 ? false : true;
      stdlib.assert(v790, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:77:51:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
        msg: 'Producer and consumer should be diffrent',
        who: 'Consumer_applyOrder'
        });
      const v792 = stdlib.le(v787, v694);
      stdlib.assert(v792, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:77:51:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
        msg: 'Insuffiecient tokens',
        who: 'Consumer_applyOrder'
        });
      const v794 = stdlib.tokenEq(v788, v693);
      stdlib.assert(v794, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:81:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:77:51:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
        msg: 'Tokens do not match',
        who: 'Consumer_applyOrder'
        });
      ;
      const v814 = true;
      const v815 = await txn1.getOutput('Consumer_applyOrder', 'v814', ctc9, v814);
      if (v472) {
        stdlib.protect(ctc0, await interact.out(v782, v815), {
          at: './index.rsh:77:11:application',
          fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:11:function exp)', 'at ./index.rsh:83:10:application call to "k" (defined at: ./index.rsh:82:21:function exp)', 'at ./index.rsh:82:21:application call to [unknown function] (defined at: ./index.rsh:82:21:function exp)'],
          msg: 'out',
          who: 'Consumer_applyOrder'
          });
        }
      else {
        }
      
      const v1261 = v788;
      const v1262 = v787;
      const v1263 = stdlib.checkedBigNumberify('./index.rsh:84:17:decimal', stdlib.UInt_max, '0');
      const v1265 = stdlib.checkedBigNumberify('./index.rsh:84:20:decimal', stdlib.UInt_max, '0');
      const v1266 = v778;
      return;
      
      break;
      }
    case 'Consumer_settle0_56': {
      const v848 = v779[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Consumer_settle7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Consumer_settle7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Consumer_settle7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc8 = stdlib.T_Data({
    Consumer_applyOrder0_56: ctc7,
    Consumer_settle0_56: ctc6
    });
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v689, v693, v694, v695, v696, v702, v703, v704, v705, v707, v708] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc1, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc3]);
  const v746 = ctc.selfAddress();
  const v748 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:87:42:application call to [unknown function] (defined at: ./index.rsh:87:42:function exp)', 'at ./index.rsh:65:97:application call to "runConsumer_settle0_56" (defined at: ./index.rsh:87:10:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
    msg: 'in',
    who: 'Consumer_settle'
    });
  const v749 = v748[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v751 = stdlib.gt(v749, stdlib.checkedBigNumberify('./index.rsh:88:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v751, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:88:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:42:application call to [unknown function] (defined at: ./index.rsh:87:42:function exp)', 'at ./index.rsh:65:97:application call to "runConsumer_settle0_56" (defined at: ./index.rsh:87:10:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
    msg: 'Units can not be zero',
    who: 'Consumer_settle'
    });
  const v753 = stdlib.addressEq(v708, v746);
  stdlib.assert(v753, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:89:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:42:application call to [unknown function] (defined at: ./index.rsh:87:42:function exp)', 'at ./index.rsh:65:97:application call to "runConsumer_settle0_56" (defined at: ./index.rsh:87:10:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
    msg: 'Winner can not be different',
    who: 'Consumer_settle'
    });
  const v760 = ['Consumer_settle0_56', v748];
  
  const txn1 = await (ctc.sendrecv({
    args: [v689, v693, v694, v695, v696, v702, v703, v704, v705, v707, v708, v760],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:91:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v779], secs: v781, time: v780, didSend: v472, from: v778 } = txn1;
      
      switch (v779[0]) {
        case 'Consumer_applyOrder0_56': {
          const v782 = v779[1];
          
          break;
          }
        case 'Consumer_settle0_56': {
          const v848 = v779[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Consumer_settle"
            });
          const v863 = v848[stdlib.checkedBigNumberify('./index.rsh:87:10:spread', stdlib.UInt_max, '0')];
          ;
          null;
          const v897 = stdlib.safeMul(v704, v695);
          null;
          const v900 = true;
          const v901 = await txn1.getOutput('Consumer_settle', 'v900', ctc9, v900);
          
          const v907 = stdlib.lt(v704, v863);
          let v908;
          if (v907) {
            const v909 = stdlib.safeSub(v863, v704);
            v908 = v909;
            }
          else {
            v908 = stdlib.checkedBigNumberify('./index.rsh:96:68:decimal', stdlib.UInt_max, '0');
            }
          const v910 = stdlib.gt(v704, v863);
          let v911;
          if (v910) {
            const v912 = stdlib.safeSub(v704, v863);
            v911 = v912;
            }
          else {
            v911 = stdlib.checkedBigNumberify('./index.rsh:97:68:decimal', stdlib.UInt_max, '0');
            }
          const v1340 = stdlib.gt(v908, stdlib.checkedBigNumberify('./index.rsh:111:20:decimal', stdlib.UInt_max, '0'));
          if (v1340) {
            const v1341 = [];
            const v1342 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v696,
                remote: ({
                  accs: [v778],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./index.rsh:111:39:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:111:39:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
            await txn1.getOutput('internal', 'v1342', ctc10, v1342);
            const v1346 = stdlib.gt(v911, stdlib.checkedBigNumberify('./index.rsh:112:23:decimal', stdlib.UInt_max, '0'));
            if (v1346) {
              const v1347 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v696,
                  remote: ({
                    accs: [v778],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v1347', ctc10, v1347);
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v1351 = stdlib.gt(v911, stdlib.checkedBigNumberify('./index.rsh:112:23:decimal', stdlib.UInt_max, '0'));
            if (v1351) {
              const v1352 = [];
              const v1353 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v696,
                  remote: ({
                    accs: [v778],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v1353', ctc10, v1353);
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v779], secs: v781, time: v780, didSend: v472, from: v778 } = txn1;
  switch (v779[0]) {
    case 'Consumer_applyOrder0_56': {
      const v782 = v779[1];
      return;
      break;
      }
    case 'Consumer_settle0_56': {
      const v848 = v779[1];
      undefined /* setApiDetails */;
      const v863 = v848[stdlib.checkedBigNumberify('./index.rsh:87:10:spread', stdlib.UInt_max, '0')];
      const v864 = stdlib.gt(v863, stdlib.checkedBigNumberify('./index.rsh:88:27:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v864, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:88:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:42:application call to [unknown function] (defined at: ./index.rsh:87:42:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:87:42:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
        msg: 'Units can not be zero',
        who: 'Consumer_settle'
        });
      const v866 = stdlib.addressEq(v708, v778);
      stdlib.assert(v866, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:89:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:42:application call to [unknown function] (defined at: ./index.rsh:87:42:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:87:42:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
        msg: 'Winner can not be different',
        who: 'Consumer_settle'
        });
      ;
      null;
      const v897 = stdlib.safeMul(v704, v695);
      null;
      const v900 = true;
      const v901 = await txn1.getOutput('Consumer_settle', 'v900', ctc9, v900);
      if (v472) {
        stdlib.protect(ctc0, await interact.out(v848, v901), {
          at: './index.rsh:87:11:application',
          fs: ['at ./index.rsh:87:11:application call to [unknown function] (defined at: ./index.rsh:87:11:function exp)', 'at ./index.rsh:94:10:application call to "k" (defined at: ./index.rsh:91:21:function exp)', 'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)'],
          msg: 'out',
          who: 'Consumer_settle'
          });
        }
      else {
        }
      
      const v907 = stdlib.lt(v704, v863);
      let v908;
      if (v907) {
        const v909 = stdlib.safeSub(v863, v704);
        v908 = v909;
        }
      else {
        v908 = stdlib.checkedBigNumberify('./index.rsh:96:68:decimal', stdlib.UInt_max, '0');
        }
      const v910 = stdlib.gt(v704, v863);
      let v911;
      if (v910) {
        const v912 = stdlib.safeSub(v704, v863);
        v911 = v912;
        }
      else {
        v911 = stdlib.checkedBigNumberify('./index.rsh:97:68:decimal', stdlib.UInt_max, '0');
        }
      const v1340 = stdlib.gt(v908, stdlib.checkedBigNumberify('./index.rsh:111:20:decimal', stdlib.UInt_max, '0'));
      if (v1340) {
        const v1341 = [];
        const v1342 = undefined /* Remote */;
        const v1343 = await txn1.getOutput('internal', 'v1342', ctc10, v1342);
        const v1344 = v1343[stdlib.checkedBigNumberify('./index.rsh:111:39:application', stdlib.UInt_max, '0')];
        const v1345 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1344);
        stdlib.assert(v1345, {
          at: './index.rsh:111:39:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Consumer_settle'
          });
        const v1346 = stdlib.gt(v911, stdlib.checkedBigNumberify('./index.rsh:112:23:decimal', stdlib.UInt_max, '0'));
        if (v1346) {
          const v1347 = undefined /* Remote */;
          const v1348 = await txn1.getOutput('internal', 'v1347', ctc10, v1347);
          const v1349 = v1348[stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0')];
          const v1350 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1349);
          stdlib.assert(v1350, {
            at: './index.rsh:112:43:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Consumer_settle'
            });
          return;
          }
        else {
          return;
          }}
      else {
        const v1351 = stdlib.gt(v911, stdlib.checkedBigNumberify('./index.rsh:112:23:decimal', stdlib.UInt_max, '0'));
        if (v1351) {
          const v1352 = [];
          const v1353 = undefined /* Remote */;
          const v1354 = await txn1.getOutput('internal', 'v1353', ctc10, v1353);
          const v1355 = v1354[stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0')];
          const v1356 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1355);
          stdlib.assert(v1356, {
            at: './index.rsh:112:43:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Consumer_settle'
            });
          return;
          }
        else {
          return;
          }}
      break;
      }
    }
  
  
  };
export async function _Consumer_timeUp7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Consumer_timeUp7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Consumer_timeUp7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v689, v693, v694, v695, v696, v702, v703, v704, v705, v707, v708] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc1, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc3]);
  const v916 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:104:7:application',
    fs: ['at ./index.rsh:104:7:application call to [unknown function] (defined at: ./index.rsh:104:7:function exp)', 'at ./index.rsh:103:36:application call to [unknown function] (defined at: ./index.rsh:103:36:function exp)'],
    msg: 'in',
    who: 'Consumer_timeUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v689, v693, v694, v695, v696, v702, v703, v704, v705, v707, v708, v916],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:104:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v918], secs: v920, time: v919, didSend: v614, from: v917 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Consumer_timeUp"
        });
      ;
      const v921 = true;
      const v922 = await txn1.getOutput('Consumer_timeUp', 'v921', ctc7, v921);
      
      const v928 = [];
      const v929 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v696,
          remote: ({
            accs: [v689],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:106:37:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:106:37:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
      await txn1.getOutput('internal', 'v929', ctc8, v929);
      const v1364 = stdlib.gt(v705, stdlib.checkedBigNumberify('./index.rsh:111:20:decimal', stdlib.UInt_max, '0'));
      if (v1364) {
        const v1366 = await (async () => {
          sim_r.txns.push({
            kind: 'remote',
            obj: v696,
            remote: ({
              accs: [v708],
              apps: [],
              bills: stdlib.checkedBigNumberify('./index.rsh:111:39:application', stdlib.UInt_max, '0'),
              boxes: [],
              fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              pays: stdlib.checkedBigNumberify('./index.rsh:111:39:application', stdlib.UInt_max, '0'),
              toks: []
              })
            })
          return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
        await txn1.getOutput('internal', 'v1366', ctc8, v1366);
        const v1370 = stdlib.gt(v707, stdlib.checkedBigNumberify('./index.rsh:112:23:decimal', stdlib.UInt_max, '0'));
        if (v1370) {
          const v1371 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v696,
              remote: ({
                accs: [v708],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v1371', ctc8, v1371);
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v1375 = stdlib.gt(v707, stdlib.checkedBigNumberify('./index.rsh:112:23:decimal', stdlib.UInt_max, '0'));
        if (v1375) {
          const v1377 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v696,
              remote: ({
                accs: [v708],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v1377', ctc8, v1377);
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v918], secs: v920, time: v919, didSend: v614, from: v917 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v921 = true;
  const v922 = await txn1.getOutput('Consumer_timeUp', 'v921', ctc7, v921);
  stdlib.protect(ctc0, await interact.out(v918, v922), {
    at: './index.rsh:104:7:application',
    fs: ['at ./index.rsh:104:7:application call to [unknown function] (defined at: ./index.rsh:104:7:function exp)', 'at ./index.rsh:105:8:application call to "k" (defined at: ./index.rsh:104:7:function exp)', 'at ./index.rsh:103:36:application call to [unknown function] (defined at: ./index.rsh:103:36:function exp)'],
    msg: 'out',
    who: 'Consumer_timeUp'
    });
  
  const v928 = [];
  const v929 = undefined /* Remote */;
  const v930 = await txn1.getOutput('internal', 'v929', ctc8, v929);
  const v932 = v930[stdlib.checkedBigNumberify('./index.rsh:106:37:application', stdlib.UInt_max, '0')];
  const v938 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v932);
  stdlib.assert(v938, {
    at: './index.rsh:106:37:application',
    fs: ['at ./index.rsh:103:36:application call to [unknown function] (defined at: ./index.rsh:103:36:function exp)'],
    msg: 'remote bill check',
    who: 'Consumer_timeUp'
    });
  const v1364 = stdlib.gt(v705, stdlib.checkedBigNumberify('./index.rsh:111:20:decimal', stdlib.UInt_max, '0'));
  if (v1364) {
    const v1366 = undefined /* Remote */;
    const v1367 = await txn1.getOutput('internal', 'v1366', ctc8, v1366);
    const v1368 = v1367[stdlib.checkedBigNumberify('./index.rsh:111:39:application', stdlib.UInt_max, '0')];
    const v1369 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1368);
    stdlib.assert(v1369, {
      at: './index.rsh:111:39:application',
      fs: [],
      msg: 'remote bill check',
      who: 'Consumer_timeUp'
      });
    const v1370 = stdlib.gt(v707, stdlib.checkedBigNumberify('./index.rsh:112:23:decimal', stdlib.UInt_max, '0'));
    if (v1370) {
      const v1371 = undefined /* Remote */;
      const v1372 = await txn1.getOutput('internal', 'v1371', ctc8, v1371);
      const v1373 = v1372[stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0')];
      const v1374 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1373);
      stdlib.assert(v1374, {
        at: './index.rsh:112:43:application',
        fs: [],
        msg: 'remote bill check',
        who: 'Consumer_timeUp'
        });
      return;
      }
    else {
      return;
      }}
  else {
    const v1375 = stdlib.gt(v707, stdlib.checkedBigNumberify('./index.rsh:112:23:decimal', stdlib.UInt_max, '0'));
    if (v1375) {
      const v1377 = undefined /* Remote */;
      const v1378 = await txn1.getOutput('internal', 'v1377', ctc8, v1377);
      const v1379 = v1378[stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0')];
      const v1380 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1379);
      stdlib.assert(v1380, {
        at: './index.rsh:112:43:application',
        fs: [],
        msg: 'remote bill check',
        who: 'Consumer_timeUp'
        });
      return;
      }
    else {
      return;
      }}
  
  
  };
export async function Producer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Producer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Producer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    algoperUnit: ctc1,
    gridCtc: ctc3,
    token: ctc4,
    units: ctc1
    });
  const ctc6 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    Consumer_applyOrder0_56: ctc6,
    Consumer_settle0_56: ctc7
    });
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc12 = stdlib.T_Address;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  
  const v684 = stdlib.protect(ctc5, await interact.startOrder(), {
    at: './index.rsh:39:49:application',
    fs: ['at ./index.rsh:38:16:application call to [unknown function] (defined at: ./index.rsh:38:20:function exp)'],
    msg: 'startOrder',
    who: 'Producer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v684],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:42:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v690], secs: v692, time: v691, didSend: v31, from: v689 } = txn1;
      
      ;
      const v693 = v690.token;
      const v694 = v690.units;
      const v695 = v690.algoperUnit;
      const v696 = v690.gridCtc;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v690], secs: v692, time: v691, didSend: v31, from: v689 } = txn1;
  ;
  const v693 = v690.token;
  const v694 = v690.units;
  const v695 = v690.algoperUnit;
  const v696 = v690.gridCtc;
  const txn2 = await (ctc.sendrecv({
    args: [v689, v691, v693, v694, v695, v696],
    evt_cnt: 0,
    funcNum: 1,
    lct: v691,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v699, time: v698, didSend: v40, from: v697 } = txn2;
      
      ;
      const v702 = stdlib.safeAdd(v691, stdlib.checkedBigNumberify('./index.rsh:59:37:decimal', stdlib.UInt_max, '900'));
      const v703 = v693;
      const v704 = stdlib.checkedBigNumberify('./index.rsh:65:109:decimal', stdlib.UInt_max, '0');
      const v705 = stdlib.checkedBigNumberify('./index.rsh:65:100:decimal', stdlib.UInt_max, '0');
      const v706 = true;
      const v707 = stdlib.checkedBigNumberify('./index.rsh:65:102:decimal', stdlib.UInt_max, '0');
      const v708 = v689;
      const v709 = v698;
      
      if (await (async () => {
        
        return v706;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v941 = stdlib.gt(v705, stdlib.checkedBigNumberify('./index.rsh:111:20:decimal', stdlib.UInt_max, '0'));
        if (v941) {
          const v944 = [];
          const v945 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v696,
              remote: ({
                accs: [v708],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:111:39:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:111:39:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
          await txn3.getOutput('internal', 'v945', ctc11, v945);
          const v955 = stdlib.gt(v707, stdlib.checkedBigNumberify('./index.rsh:112:23:decimal', stdlib.UInt_max, '0'));
          if (v955) {
            const v959 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v696,
                remote: ({
                  accs: [v708],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
            await txn3.getOutput('internal', 'v959', ctc11, v959);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v973 = stdlib.gt(v707, stdlib.checkedBigNumberify('./index.rsh:112:23:decimal', stdlib.UInt_max, '0'));
          if (v973) {
            const v976 = [];
            const v977 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v696,
                remote: ({
                  accs: [v708],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
            await txn3.getOutput('internal', 'v977', ctc11, v977);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc12, ctc1, ctc4, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v699, time: v698, didSend: v40, from: v697 } = txn2;
  ;
  const v700 = stdlib.addressEq(v689, v697);
  stdlib.assert(v700, {
    at: './index.rsh:52:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Producer'
    });
  const v702 = stdlib.safeAdd(v691, stdlib.checkedBigNumberify('./index.rsh:59:37:decimal', stdlib.UInt_max, '900'));
  let v703 = v693;
  let v704 = stdlib.checkedBigNumberify('./index.rsh:65:109:decimal', stdlib.UInt_max, '0');
  let v705 = stdlib.checkedBigNumberify('./index.rsh:65:100:decimal', stdlib.UInt_max, '0');
  let v706 = true;
  let v707 = stdlib.checkedBigNumberify('./index.rsh:65:102:decimal', stdlib.UInt_max, '0');
  let v708 = v689;
  let v709 = v698;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v706;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc8],
      timeoutAt: ['time', v702],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc10],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v918], secs: v920, time: v919, didSend: v614, from: v917 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v921 = true;
      await txn5.getOutput('Consumer_timeUp', 'v921', ctc9, v921);
      const v928 = [];
      const v929 = undefined /* Remote */;
      const v930 = await txn5.getOutput('internal', 'v929', ctc11, v929);
      const v932 = v930[stdlib.checkedBigNumberify('./index.rsh:106:37:application', stdlib.UInt_max, '0')];
      const v938 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v932);
      stdlib.assert(v938, {
        at: './index.rsh:106:37:application',
        fs: ['at ./index.rsh:103:36:application call to [unknown function] (defined at: ./index.rsh:103:36:function exp)'],
        msg: 'remote bill check',
        who: 'Producer'
        });
      const cv703 = v703;
      const cv704 = v704;
      const cv705 = v705;
      const cv706 = false;
      const cv707 = v707;
      const cv708 = v708;
      const cv709 = v919;
      
      v703 = cv703;
      v704 = cv704;
      v705 = cv705;
      v706 = cv706;
      v707 = cv707;
      v708 = cv708;
      v709 = cv709;
      
      txn3 = txn5;
      continue;
      }
    else {
      const {data: [v779], secs: v781, time: v780, didSend: v472, from: v778 } = txn4;
      switch (v779[0]) {
        case 'Consumer_applyOrder0_56': {
          const v782 = v779[1];
          undefined /* setApiDetails */;
          const v787 = v782[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '0')];
          const v788 = v782[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '1')];
          const v789 = stdlib.addressEq(v689, v778);
          const v790 = v789 ? false : true;
          stdlib.assert(v790, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:77:51:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
            msg: 'Producer and consumer should be diffrent',
            who: 'Producer'
            });
          const v792 = stdlib.le(v787, v694);
          stdlib.assert(v792, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:77:51:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
            msg: 'Insuffiecient tokens',
            who: 'Producer'
            });
          const v794 = stdlib.tokenEq(v788, v693);
          stdlib.assert(v794, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:81:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:77:51:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:77:51:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
            msg: 'Tokens do not match',
            who: 'Producer'
            });
          ;
          const v814 = true;
          await txn4.getOutput('Consumer_applyOrder', 'v814', ctc9, v814);
          const cv703 = v788;
          const cv704 = v787;
          const cv705 = stdlib.checkedBigNumberify('./index.rsh:84:17:decimal', stdlib.UInt_max, '0');
          const cv706 = true;
          const cv707 = stdlib.checkedBigNumberify('./index.rsh:84:20:decimal', stdlib.UInt_max, '0');
          const cv708 = v778;
          const cv709 = v780;
          
          v703 = cv703;
          v704 = cv704;
          v705 = cv705;
          v706 = cv706;
          v707 = cv707;
          v708 = cv708;
          v709 = cv709;
          
          txn3 = txn4;
          continue;
          break;
          }
        case 'Consumer_settle0_56': {
          const v848 = v779[1];
          undefined /* setApiDetails */;
          const v863 = v848[stdlib.checkedBigNumberify('./index.rsh:87:10:spread', stdlib.UInt_max, '0')];
          const v864 = stdlib.gt(v863, stdlib.checkedBigNumberify('./index.rsh:88:27:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v864, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:88:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:42:application call to [unknown function] (defined at: ./index.rsh:87:42:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:87:42:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
            msg: 'Units can not be zero',
            who: 'Producer'
            });
          const v866 = stdlib.addressEq(v708, v778);
          stdlib.assert(v866, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:89:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:42:application call to [unknown function] (defined at: ./index.rsh:87:42:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:87:42:function exp)', 'at ./index.rsh:65:97:application call to [unknown function] (defined at: ./index.rsh:65:97:function exp)'],
            msg: 'Winner can not be different',
            who: 'Producer'
            });
          ;
          null;
          const v897 = stdlib.safeMul(v704, v695);
          null;
          const v900 = true;
          await txn4.getOutput('Consumer_settle', 'v900', ctc9, v900);
          const v907 = stdlib.lt(v704, v863);
          let v908;
          if (v907) {
            const v909 = stdlib.safeSub(v863, v704);
            v908 = v909;
            }
          else {
            v908 = stdlib.checkedBigNumberify('./index.rsh:96:68:decimal', stdlib.UInt_max, '0');
            }
          const v910 = stdlib.gt(v704, v863);
          let v911;
          if (v910) {
            const v912 = stdlib.safeSub(v704, v863);
            v911 = v912;
            }
          else {
            v911 = stdlib.checkedBigNumberify('./index.rsh:97:68:decimal', stdlib.UInt_max, '0');
            }
          const cv703 = v703;
          const cv704 = v704;
          const cv705 = v908;
          const cv706 = false;
          const cv707 = v911;
          const cv708 = v778;
          const cv709 = v780;
          
          v703 = cv703;
          v704 = cv704;
          v705 = cv705;
          v706 = cv706;
          v707 = cv707;
          v708 = cv708;
          v709 = cv709;
          
          txn3 = txn4;
          continue;
          break;
          }
        }}
    
    }
  const v941 = stdlib.gt(v705, stdlib.checkedBigNumberify('./index.rsh:111:20:decimal', stdlib.UInt_max, '0'));
  if (v941) {
    const v944 = [];
    const v945 = undefined /* Remote */;
    const v946 = await txn3.getOutput('internal', 'v945', ctc11, v945);
    const v948 = v946[stdlib.checkedBigNumberify('./index.rsh:111:39:application', stdlib.UInt_max, '0')];
    const v954 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v948);
    stdlib.assert(v954, {
      at: './index.rsh:111:39:application',
      fs: [],
      msg: 'remote bill check',
      who: 'Producer'
      });
    const v955 = stdlib.gt(v707, stdlib.checkedBigNumberify('./index.rsh:112:23:decimal', stdlib.UInt_max, '0'));
    if (v955) {
      const v959 = undefined /* Remote */;
      const v960 = await txn3.getOutput('internal', 'v959', ctc11, v959);
      const v962 = v960[stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0')];
      const v968 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v962);
      stdlib.assert(v968, {
        at: './index.rsh:112:43:application',
        fs: [],
        msg: 'remote bill check',
        who: 'Producer'
        });
      return;
      }
    else {
      return;
      }}
  else {
    const v973 = stdlib.gt(v707, stdlib.checkedBigNumberify('./index.rsh:112:23:decimal', stdlib.UInt_max, '0'));
    if (v973) {
      const v976 = [];
      const v977 = undefined /* Remote */;
      const v978 = await txn3.getOutput('internal', 'v977', ctc11, v977);
      const v980 = v978[stdlib.checkedBigNumberify('./index.rsh:112:43:application', stdlib.UInt_max, '0')];
      const v986 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v980);
      stdlib.assert(v986, {
        at: './index.rsh:112:43:application',
        fs: [],
        msg: 'remote bill check',
        who: 'Producer'
        });
      return;
      }
    else {
      return;
      }}
  
  
  
  };
export async function Consumer_applyOrder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Consumer_applyOrder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Consumer_applyOrder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Consumer_applyOrder7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Consumer_settle(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Consumer_settle expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Consumer_settle expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Consumer_settle7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Consumer_timeUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Consumer_timeUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Consumer_timeUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Consumer_timeUp7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Consumer_applyOrder(uint64,uint64)byte`, `Consumer_settle(uint64)byte`, `Consumer_timeUp()byte`, `_reachp_0((uint64,(uint64,uint64,uint64,uint64)))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[16])))void`, `_reachp_4((uint64,()))void`],
    pure: [`Order_consumer()address`, `Order_pricePerUnit()uint64`, `Order_producer()address`, `Order_started()byte`, `Order_units()uint64`],
    sigs: [`Consumer_applyOrder(uint64,uint64)byte`, `Consumer_settle(uint64)byte`, `Consumer_timeUp()byte`, `Order_consumer()address`, `Order_pricePerUnit()uint64`, `Order_producer()address`, `Order_started()byte`, `Order_units()uint64`, `_reachp_0((uint64,(uint64,uint64,uint64,uint64)))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[16])))void`, `_reachp_4((uint64,()))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAKAAEHCAZAICgwOCYFAAEBBWFwcElEAQAEm+JSoDEYQQQNKGRJIls1ASVbNQIrZClkUIIMBBTb1PYEIcPDDAQ8iA4/BEWnYEEEXjGnPgRn36qCBHj8GBMEe896iASjFU1VBL+GlrYE3U/RAQTf2SMoNhoAjgwByQGeAFYBhwF9A20AbAG0AAEDlwOMA4EANhoBFzYaAhc1CzUMJa8rNAwWNAsWUFBQNQskNAESRIgFjzQLIls1DDQLVwgRNRqABDp2Ank0DBZQNBpQsDQMiAXZMgY0FAxENBoiVY0CA3ADekL/qjYaARc1CyWvKTQLFlAlr1BQNQtC/68lrzULJDQBEkSIBTo0CyJbNQyABG/0jik0DBZQsDQMiAWOMgY0FA9EIzULgAgAAAAAAAADmTQLFlEHCFCwNAsWUQcINQQqNBUWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBLIQNBWyGCcEsho0FxayGjQZSbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAAOhNAxQsDQMNQsiNAsiWxJEIjIGNQ01EDQQQQK+NBk0GBZQNBcWUDQWFlA0FRZQNBQWUDQTFlA0EhZQNBEWUDQPFlA0DlAkMgY1AjUBK0sBVwB/ZylMV38JZyg0ARY0AhZQZzEZIhJEiAS6NANAAAqABBUffHU0BFCwI0MiRDEZIhJEQv/qNAEkDEEDtjQBIxJEiAReNBYWNQRC/+E0ASQMQQOvNAEjEkSIBEc0GTUEQv/LNAEkDEEDqDQBIxJEiAQxKTUEQv+2NAEkDEEDoTQBIxJEiAQcNBcWNQRC/580CyJbNRo0CyVbNQw0GTEAE0Q0GjQXDkQ0DDQYEkQjNQuACAAAAAAAAAMuNAsWUQcIULA0CxZRBwg1BDQMNBoiIyIxADIGNQ01DjUPNRA1ETUSNRNC/uI0GiNbSTUaIg1ENA4xABJEgARRpSVQNBlQMQBQNBIWUDQTFlCwNBI0Fgs1C4AEnI0CUDQZUDEAUDQLFlCwIzULgAgAAAAAAAADhDQLFlEHCFCwNAsWUQcINQQ0EjQaDEEBNzQaNBIJNQw0EjQaDUEBLjQSNBoJNQs0DCI0CzEAMgY1DTUONQ81EDURQv5UMQA1GTIGNQs0DSJbNQ40DVcIIDUMgATa8E+ANA4WUDQMULA0DogDLzQMgRBbNRg0DIEYWzUXNAwiWzUWNAwlWzUVNBk0CxZQNBgWUDQXFlA0FhZQNBUWUCEFr1AjMgZC/iMjNAESRIgCxTQMFzUUgATVFRkUNBQWULA0FIgC2DQZMQASRDQLgYQHCDUUNBgiIiMiNBkyBjUNNQ41DzUQNRE1EjUTQv2siAKogaCNBjQGCDUGNhoBNQ1C/0SIApQ2GgE1DEL/m4gCiTYaATULQvyEiAJ+NhoBNQtC/M4iMTQSRIEDMTUSRCIxNhJEIjE3EkSIAl6BiAGvIiJC/Yc0GlcBEDULQv4TQv5nIjUMQv7KIjULQv7TNBEiDUEA5Cg1DCo0FRZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0FbIYgATeLCuTsho0ERayGjQOSbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAOxNAtQsDQLNQ0iNA0iWxJENA8iDUEA4Co0FRZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0FbIYJwSyGjQPFrIaNA5JshyyGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAAA780C1CwNAs1DCI0DCJbEkQxGYEFEkSIAWoiMgoyCYgBckL8pTQPIg1BAGcqNBUWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBLIQNBWyGCcEsho0DxayGjQOSbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAPRNAtQsDQLNQwiNAwiWxJEQv+BQv9+Qv97IrIBI7IQsgeyCLOJNAEkEkSIAGY0FhY1BEL8KzQBJBJEiABWNBk1BEL8HDQBJBJEiABHKTUEQvwONAEkEkSIADk0FxY1BEL7/kiJTAlJNQYyCYgApYkJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIlJVwAgNRlJIQZbNRhJIQdbNRdJIQhbNRZJIQlbNRVJIQVbNRRJgUhbNRNJgVBbNRJJgVhbNRFJgWBbNQ9XaCA1DolJVwAgNRlJIQZbNQtJIQdbNRhJIQhbNRdJIQlbNRYhBVs1FYkjNQOJSSISTDQCEhFEiTQGNAdKD0H/VEL/XLFC/wKxsglC/vw=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `605`,
    1001: `606`,
    1002: `606`,
    1003: `607`,
    1004: `607`,
    1005: `608`,
    1006: `608`,
    1007: `609`,
    1008: `609`,
    1009: `610`,
    101: `21`,
    1010: `610`,
    1011: `611`,
    1012: `611`,
    1013: `612`,
    1014: `612`,
    1015: `613`,
    1016: `613`,
    1017: `614`,
    1018: `614`,
    1019: `614`,
    102: `21`,
    1020: `616`,
    1021: `616`,
    1022: `616`,
    1023: `617`,
    1024: `617`,
    1025: `617`,
    1026: `617`,
    1027: `619`,
    1028: `619`,
    1029: `620`,
    103: `21`,
    1030: `621`,
    1031: `621`,
    1032: `622`,
    1033: `622`,
    1034: `622`,
    1035: `623`,
    1036: `623`,
    1037: `624`,
    1038: `624`,
    1039: `624`,
    104: `21`,
    1040: `626`,
    1041: `626`,
    1042: `626`,
    1043: `627`,
    1044: `627`,
    1045: `627`,
    1046: `628`,
    1047: `628`,
    1048: `629`,
    1049: `629`,
    105: `21`,
    1050: `629`,
    1051: `631`,
    1052: `631`,
    1053: `631`,
    1054: `632`,
    1055: `632`,
    1056: `632`,
    1057: `633`,
    1058: `633`,
    1059: `634`,
    106: `21`,
    1060: `634`,
    1061: `634`,
    1062: `636`,
    1063: `636`,
    1064: `636`,
    1065: `637`,
    1066: `637`,
    1067: `637`,
    1068: `638`,
    1069: `638`,
    107: `21`,
    1070: `639`,
    1071: `639`,
    1072: `639`,
    1073: `641`,
    1074: `642`,
    1075: `642`,
    1076: `643`,
    1077: `644`,
    1078: `645`,
    1079: `645`,
    108: `21`,
    1080: `646`,
    1081: `646`,
    1082: `647`,
    1083: `648`,
    1084: `649`,
    1085: `650`,
    1086: `650`,
    1087: `651`,
    1088: `652`,
    1089: `653`,
    109: `21`,
    1090: `654`,
    1091: `654`,
    1092: `655`,
    1093: `656`,
    1094: `657`,
    1095: `657`,
    1096: `657`,
    1097: `658`,
    1098: `658`,
    1099: `658`,
    11: `2`,
    110: `21`,
    1100: `659`,
    1101: `660`,
    1102: `661`,
    1103: `662`,
    1104: `662`,
    1105: `662`,
    1106: `664`,
    1107: `664`,
    1108: `665`,
    1109: `665`,
    111: `21`,
    1110: `665`,
    1111: `666`,
    1112: `666`,
    1113: `667`,
    1114: `667`,
    1115: `667`,
    1116: `669`,
    1117: `669`,
    1118: `669`,
    1119: `671`,
    112: `21`,
    1120: `672`,
    1121: `672`,
    1122: `673`,
    1123: `673`,
    1124: `673`,
    1125: `675`,
    1126: `676`,
    1127: `676`,
    1128: `677`,
    1129: `677`,
    113: `21`,
    1130: `677`,
    1131: `679`,
    1132: `679`,
    1133: `680`,
    1134: `681`,
    1135: `682`,
    1136: `682`,
    1137: `682`,
    1138: `683`,
    1139: `684`,
    114: `22`,
    1140: `684`,
    1141: `685`,
    1142: `686`,
    1143: `686`,
    1144: `687`,
    1145: `688`,
    1146: `689`,
    1147: `690`,
    1148: `690`,
    1149: `691`,
    115: `22`,
    1150: `691`,
    1151: `692`,
    1152: `693`,
    1153: `693`,
    1154: `694`,
    1155: `695`,
    1156: `695`,
    1157: `696`,
    1158: `697`,
    1159: `697`,
    116: `22`,
    1160: `698`,
    1161: `699`,
    1162: `700`,
    1163: `700`,
    1164: `701`,
    1165: `702`,
    1166: `703`,
    1167: `703`,
    1168: `704`,
    1169: `704`,
    117: `23`,
    1170: `705`,
    1171: `705`,
    1172: `706`,
    1173: `706`,
    1174: `708`,
    1175: `708`,
    1176: `709`,
    1177: `709`,
    1178: `709`,
    1179: `709`,
    118: `23`,
    1180: `709`,
    1181: `709`,
    1182: `710`,
    1183: `710`,
    1184: `711`,
    1185: `711`,
    1186: `712`,
    1187: `713`,
    1188: `713`,
    1189: `714`,
    119: `23`,
    1190: `714`,
    1191: `716`,
    1192: `717`,
    1193: `717`,
    1194: `718`,
    1195: `718`,
    1196: `719`,
    1197: `722`,
    1198: `722`,
    1199: `723`,
    12: `2`,
    120: `23`,
    1200: `724`,
    1201: `724`,
    1202: `725`,
    1203: `726`,
    1204: `726`,
    1205: `727`,
    1206: `728`,
    1207: `729`,
    1208: `730`,
    1209: `730`,
    121: `23`,
    1210: `730`,
    1211: `731`,
    1212: `731`,
    1213: `731`,
    1214: `732`,
    1215: `733`,
    1216: `733`,
    1217: `734`,
    1218: `734`,
    1219: `734`,
    122: `23`,
    1220: `734`,
    1221: `734`,
    1222: `734`,
    1223: `734`,
    1224: `734`,
    1225: `734`,
    1226: `734`,
    1227: `735`,
    1228: `735`,
    1229: `736`,
    123: `23`,
    1230: `737`,
    1231: `738`,
    1232: `738`,
    1233: `739`,
    1234: `739`,
    1235: `740`,
    1236: `741`,
    1237: `741`,
    1238: `742`,
    1239: `743`,
    124: `23`,
    1240: `744`,
    1241: `745`,
    1242: `748`,
    1243: `748`,
    1244: `749`,
    1245: `750`,
    1246: `751`,
    1247: `751`,
    1248: `751`,
    1249: `752`,
    125: `23`,
    1250: `753`,
    1251: `753`,
    1252: `754`,
    1253: `755`,
    1254: `756`,
    1255: `757`,
    1256: `757`,
    1257: `758`,
    1258: `758`,
    1259: `759`,
    126: `23`,
    1260: `760`,
    1261: `760`,
    1262: `761`,
    1263: `762`,
    1264: `762`,
    1265: `763`,
    1266: `764`,
    1267: `764`,
    1268: `765`,
    1269: `766`,
    127: `23`,
    1270: `767`,
    1271: `767`,
    1272: `768`,
    1273: `769`,
    1274: `770`,
    1275: `770`,
    1276: `771`,
    1277: `771`,
    1278: `772`,
    1279: `772`,
    128: `23`,
    1280: `773`,
    1281: `773`,
    1282: `774`,
    1283: `774`,
    1284: `775`,
    1285: `775`,
    1286: `776`,
    1287: `776`,
    1288: `777`,
    1289: `777`,
    129: `23`,
    1290: `778`,
    1291: `779`,
    1292: `779`,
    1293: `780`,
    1294: `780`,
    1295: `781`,
    1296: `782`,
    1297: `782`,
    1298: `783`,
    1299: `783`,
    13: `2`,
    130: `23`,
    1300: `784`,
    1301: `787`,
    1302: `787`,
    1303: `788`,
    1304: `789`,
    1305: `789`,
    1306: `790`,
    1307: `791`,
    1308: `791`,
    1309: `792`,
    131: `23`,
    1310: `793`,
    1311: `794`,
    1312: `795`,
    1313: `795`,
    1314: `795`,
    1315: `796`,
    1316: `796`,
    1317: `796`,
    1318: `797`,
    1319: `798`,
    132: `23`,
    1320: `798`,
    1321: `799`,
    1322: `799`,
    1323: `799`,
    1324: `799`,
    1325: `799`,
    1326: `799`,
    1327: `799`,
    1328: `799`,
    1329: `799`,
    133: `23`,
    1330: `799`,
    1331: `800`,
    1332: `800`,
    1333: `801`,
    1334: `802`,
    1335: `803`,
    1336: `803`,
    1337: `804`,
    1338: `804`,
    1339: `805`,
    134: `23`,
    1340: `806`,
    1341: `806`,
    1342: `807`,
    1343: `808`,
    1344: `809`,
    1345: `810`,
    1346: `814`,
    1347: `814`,
    1348: `815`,
    1349: `815`,
    135: `23`,
    1350: `816`,
    1351: `817`,
    1352: `819`,
    1353: `819`,
    1354: `819`,
    1355: `821`,
    1356: `822`,
    1357: `822`,
    1358: `823`,
    1359: `823`,
    136: `23`,
    1360: `824`,
    1361: `824`,
    1362: `824`,
    1363: `825`,
    1364: `825`,
    1365: `825`,
    1366: `827`,
    1367: `827`,
    1368: `828`,
    1369: `829`,
    137: `23`,
    1370: `830`,
    1371: `830`,
    1372: `830`,
    1373: `831`,
    1374: `832`,
    1375: `832`,
    1376: `833`,
    1377: `834`,
    1378: `835`,
    1379: `836`,
    138: `23`,
    1380: `836`,
    1381: `837`,
    1382: `837`,
    1383: `838`,
    1384: `839`,
    1385: `839`,
    1386: `840`,
    1387: `841`,
    1388: `841`,
    1389: `842`,
    139: `23`,
    1390: `843`,
    1391: `843`,
    1392: `844`,
    1393: `845`,
    1394: `846`,
    1395: `846`,
    1396: `847`,
    1397: `848`,
    1398: `849`,
    1399: `849`,
    14: `2`,
    140: `23`,
    1400: `850`,
    1401: `850`,
    1402: `851`,
    1403: `851`,
    1404: `852`,
    1405: `852`,
    1406: `854`,
    1407: `854`,
    1408: `855`,
    1409: `855`,
    141: `23`,
    1410: `856`,
    1411: `856`,
    1412: `857`,
    1413: `857`,
    1414: `858`,
    1415: `859`,
    1416: `859`,
    1417: `860`,
    1418: `860`,
    1419: `862`,
    142: `23`,
    1420: `863`,
    1421: `863`,
    1422: `864`,
    1423: `864`,
    1424: `865`,
    1425: `868`,
    1426: `868`,
    1427: `869`,
    1428: `870`,
    1429: `870`,
    143: `25`,
    1430: `871`,
    1431: `872`,
    1432: `872`,
    1433: `873`,
    1434: `874`,
    1435: `875`,
    1436: `876`,
    1437: `876`,
    1438: `876`,
    1439: `877`,
    144: `27`,
    1440: `877`,
    1441: `877`,
    1442: `878`,
    1443: `879`,
    1444: `879`,
    1445: `880`,
    1446: `880`,
    1447: `880`,
    1448: `880`,
    1449: `880`,
    145: `27`,
    1450: `880`,
    1451: `880`,
    1452: `880`,
    1453: `880`,
    1454: `880`,
    1455: `881`,
    1456: `881`,
    1457: `882`,
    1458: `883`,
    1459: `884`,
    146: `27`,
    1460: `884`,
    1461: `885`,
    1462: `885`,
    1463: `886`,
    1464: `887`,
    1465: `887`,
    1466: `888`,
    1467: `889`,
    1468: `890`,
    1469: `891`,
    147: `28`,
    1470: `894`,
    1471: `894`,
    1472: `894`,
    1473: `896`,
    1474: `896`,
    1475: `896`,
    1476: `898`,
    1477: `898`,
    1478: `898`,
    1479: `900`,
    148: `29`,
    1480: `901`,
    1481: `901`,
    1482: `902`,
    1483: `903`,
    1484: `903`,
    1485: `904`,
    1486: `904`,
    1487: `905`,
    1488: `905`,
    1489: `906`,
    149: `29`,
    1490: `907`,
    1491: `909`,
    1492: `909`,
    1493: `910`,
    1494: `911`,
    1495: `912`,
    1496: `915`,
    1497: `915`,
    1498: `915`,
    1499: `916`,
    15: `2`,
    150: `29`,
    1500: `916`,
    1501: `917`,
    1502: `918`,
    1503: `918`,
    1504: `919`,
    1505: `919`,
    1506: `919`,
    1507: `921`,
    1508: `921`,
    1509: `922`,
    151: `30`,
    1510: `923`,
    1511: `924`,
    1512: `927`,
    1513: `927`,
    1514: `927`,
    1515: `928`,
    1516: `928`,
    1517: `929`,
    1518: `929`,
    1519: `930`,
    152: `31`,
    1520: `930`,
    1521: `930`,
    1522: `932`,
    1523: `932`,
    1524: `933`,
    1525: `934`,
    1526: `935`,
    1527: `938`,
    1528: `938`,
    1529: `938`,
    153: `31`,
    1530: `939`,
    1531: `940`,
    1532: `940`,
    1533: `941`,
    1534: `941`,
    1535: `941`,
    1536: `943`,
    1537: `943`,
    1538: `944`,
    1539: `945`,
    154: `32`,
    1540: `946`,
    1541: `949`,
    1542: `949`,
    1543: `949`,
    1544: `950`,
    1545: `950`,
    1546: `951`,
    1547: `952`,
    1548: `952`,
    1549: `953`,
    155: `32`,
    1550: `953`,
    1551: `953`,
    1552: `955`,
    1553: `956`,
    1554: `958`,
    1555: `959`,
    1556: `960`,
    1557: `961`,
    1558: `961`,
    1559: `962`,
    156: `34`,
    1560: `962`,
    1561: `963`,
    1562: `963`,
    1563: `963`,
    1564: `964`,
    1565: `966`,
    1566: `967`,
    1567: `968`,
    1568: `968`,
    1569: `968`,
    157: `35`,
    1570: `969`,
    1571: `970`,
    1572: `970`,
    1573: `973`,
    1574: `973`,
    1575: `974`,
    1576: `974`,
    1577: `975`,
    1578: `976`,
    1579: `977`,
    158: `36`,
    1580: `978`,
    1581: `978`,
    1582: `979`,
    1583: `980`,
    1584: `980`,
    1585: `981`,
    1586: `981`,
    1587: `982`,
    1588: `982`,
    1589: `983`,
    159: `37`,
    1590: `984`,
    1591: `985`,
    1592: `985`,
    1593: `986`,
    1594: `987`,
    1595: `988`,
    1596: `989`,
    1597: `989`,
    1598: `990`,
    1599: `991`,
    16: `2`,
    160: `37`,
    1600: `992`,
    1601: `994`,
    1602: `995`,
    1603: `995`,
    1604: `995`,
    1605: `996`,
    1606: `996`,
    1607: `997`,
    1608: `998`,
    1609: `998`,
    161: `38`,
    1610: `999`,
    1611: `1000`,
    1612: `1000`,
    1613: `1001`,
    1614: `1002`,
    1615: `1002`,
    1616: `1003`,
    1617: `1004`,
    1618: `1004`,
    1619: `1005`,
    162: `39`,
    1620: `1006`,
    1621: `1006`,
    1622: `1007`,
    1623: `1008`,
    1624: `1008`,
    1625: `1009`,
    1626: `1010`,
    1627: `1010`,
    1628: `1011`,
    1629: `1012`,
    163: `39`,
    1630: `1012`,
    1631: `1013`,
    1632: `1014`,
    1633: `1014`,
    1634: `1015`,
    1635: `1016`,
    1636: `1016`,
    1637: `1017`,
    1638: `1018`,
    1639: `1018`,
    164: `40`,
    1640: `1019`,
    1641: `1020`,
    1642: `1020`,
    1643: `1021`,
    1644: `1022`,
    1645: `1022`,
    1646: `1023`,
    1647: `1024`,
    1648: `1024`,
    1649: `1025`,
    165: `41`,
    1650: `1026`,
    1651: `1026`,
    1652: `1027`,
    1653: `1028`,
    1654: `1028`,
    1655: `1029`,
    1656: `1030`,
    1657: `1030`,
    1658: `1031`,
    1659: `1032`,
    166: `42`,
    1660: `1032`,
    1661: `1033`,
    1662: `1033`,
    1663: `1033`,
    1664: `1034`,
    1665: `1034`,
    1666: `1035`,
    1667: `1037`,
    1668: `1038`,
    1669: `1038`,
    167: `43`,
    1670: `1038`,
    1671: `1039`,
    1672: `1039`,
    1673: `1040`,
    1674: `1041`,
    1675: `1041`,
    1676: `1042`,
    1677: `1043`,
    1678: `1043`,
    1679: `1044`,
    168: `44`,
    1680: `1045`,
    1681: `1045`,
    1682: `1046`,
    1683: `1047`,
    1684: `1047`,
    1685: `1048`,
    1686: `1049`,
    1687: `1049`,
    1688: `1050`,
    1689: `1051`,
    169: `44`,
    1690: `1051`,
    1691: `1052`,
    1692: `1053`,
    1693: `1053`,
    1694: `1054`,
    1695: `1055`,
    1696: `1055`,
    1697: `1056`,
    1698: `1056`,
    1699: `1057`,
    17: `2`,
    170: `46`,
    1700: `1058`,
    1701: `1058`,
    1702: `1059`,
    1703: `1061`,
    1704: `1062`,
    1705: `1062`,
    1706: `1063`,
    1707: `1065`,
    1708: `1066`,
    1709: `1067`,
    171: `47`,
    1710: `1068`,
    1711: `1069`,
    1712: `1069`,
    1713: `1070`,
    1714: `1071`,
    1715: `1072`,
    1716: `1073`,
    1717: `1075`,
    1718: `1075`,
    1719: `1076`,
    172: `47`,
    1720: `1076`,
    1721: `1077`,
    1722: `1078`,
    1723: `1079`,
    1724: `1079`,
    1725: `1079`,
    1726: `1080`,
    1727: `1080`,
    1728: `1080`,
    1729: `1082`,
    173: `48`,
    1730: `1083`,
    1731: `1083`,
    1732: `1083`,
    1733: `1085`,
    1734: `1086`,
    1735: `1086`,
    1736: `1087`,
    174: `49`,
    175: `50`,
    176: `50`,
    177: `50`,
    178: `51`,
    179: `51`,
    18: `2`,
    180: `52`,
    181: `53`,
    182: `54`,
    183: `54`,
    184: `55`,
    185: `55`,
    186: `56`,
    187: `56`,
    188: `56`,
    189: `57`,
    19: `2`,
    190: `57`,
    191: `58`,
    192: `58`,
    193: `58`,
    194: `58`,
    195: `58`,
    196: `58`,
    197: `59`,
    198: `59`,
    199: `60`,
    2: `2`,
    20: `2`,
    200: `61`,
    201: `62`,
    202: `62`,
    203: `63`,
    204: `64`,
    205: `66`,
    206: `66`,
    207: `67`,
    208: `67`,
    209: `67`,
    21: `2`,
    210: `68`,
    211: `68`,
    212: `69`,
    213: `69`,
    214: `70`,
    215: `71`,
    216: `72`,
    217: `72`,
    218: `73`,
    219: `74`,
    22: `2`,
    220: `75`,
    221: `75`,
    222: `75`,
    223: `75`,
    224: `75`,
    225: `75`,
    226: `76`,
    227: `76`,
    228: `76`,
    229: `78`,
    23: `2`,
    230: `78`,
    231: `78`,
    232: `79`,
    233: `80`,
    234: `80`,
    235: `82`,
    236: `83`,
    237: `84`,
    238: `85`,
    239: `85`,
    24: `2`,
    240: `86`,
    241: `87`,
    242: `88`,
    243: `89`,
    244: `90`,
    245: `91`,
    246: `92`,
    247: `92`,
    248: `93`,
    249: `93`,
    25: `2`,
    250: `93`,
    251: `96`,
    252: `97`,
    253: `98`,
    254: `98`,
    255: `100`,
    256: `101`,
    257: `101`,
    258: `102`,
    259: `103`,
    26: `2`,
    260: `104`,
    261: `104`,
    262: `104`,
    263: `105`,
    264: `105`,
    265: `106`,
    266: `107`,
    267: `108`,
    268: `108`,
    269: `109`,
    27: `2`,
    270: `109`,
    271: `109`,
    272: `109`,
    273: `109`,
    274: `109`,
    275: `110`,
    276: `110`,
    277: `111`,
    278: `112`,
    279: `113`,
    28: `2`,
    280: `115`,
    281: `115`,
    282: `116`,
    283: `116`,
    284: `116`,
    285: `117`,
    286: `117`,
    287: `118`,
    288: `118`,
    289: `119`,
    29: `2`,
    290: `120`,
    291: `122`,
    292: `123`,
    293: `123`,
    294: `124`,
    295: `124`,
    296: `124`,
    297: `124`,
    298: `124`,
    299: `124`,
    3: `2`,
    30: `2`,
    300: `124`,
    301: `124`,
    302: `124`,
    303: `124`,
    304: `125`,
    305: `125`,
    306: `126`,
    307: `127`,
    308: `127`,
    309: `127`,
    31: `4`,
    310: `128`,
    311: `129`,
    312: `130`,
    313: `130`,
    314: `131`,
    315: `132`,
    316: `132`,
    317: `132`,
    318: `133`,
    319: `133`,
    32: `4`,
    320: `134`,
    321: `135`,
    322: `135`,
    323: `136`,
    324: `137`,
    325: `138`,
    326: `139`,
    327: `139`,
    328: `140`,
    329: `140`,
    33: `5`,
    330: `141`,
    331: `142`,
    332: `142`,
    333: `143`,
    334: `144`,
    335: `144`,
    336: `145`,
    337: `146`,
    338: `146`,
    339: `147`,
    34: `5`,
    340: `148`,
    341: `149`,
    342: `149`,
    343: `150`,
    344: `151`,
    345: `152`,
    346: `152`,
    347: `153`,
    348: `153`,
    349: `154`,
    35: `5`,
    350: `154`,
    351: `155`,
    352: `155`,
    353: `157`,
    354: `157`,
    355: `158`,
    356: `158`,
    357: `159`,
    358: `159`,
    359: `160`,
    36: `6`,
    360: `160`,
    361: `161`,
    362: `162`,
    363: `162`,
    364: `163`,
    365: `163`,
    366: `165`,
    367: `166`,
    368: `166`,
    369: `167`,
    37: `7`,
    370: `167`,
    371: `168`,
    372: `172`,
    373: `172`,
    374: `173`,
    375: `174`,
    376: `174`,
    377: `175`,
    378: `176`,
    379: `176`,
    38: `8`,
    380: `177`,
    381: `178`,
    382: `179`,
    383: `180`,
    384: `180`,
    385: `180`,
    386: `181`,
    387: `181`,
    388: `181`,
    389: `182`,
    39: `9`,
    390: `183`,
    391: `183`,
    392: `184`,
    393: `184`,
    394: `184`,
    395: `184`,
    396: `184`,
    397: `184`,
    398: `184`,
    399: `184`,
    4: `2`,
    40: `10`,
    400: `184`,
    401: `184`,
    402: `185`,
    403: `185`,
    404: `186`,
    405: `187`,
    406: `188`,
    407: `188`,
    408: `189`,
    409: `189`,
    41: `11`,
    410: `190`,
    411: `191`,
    412: `191`,
    413: `192`,
    414: `193`,
    415: `194`,
    416: `195`,
    417: `199`,
    418: `200`,
    419: `200`,
    42: `11`,
    420: `201`,
    421: `201`,
    422: `202`,
    423: `202`,
    424: `204`,
    425: `204`,
    426: `205`,
    427: `205`,
    428: `205`,
    429: `207`,
    43: `12`,
    430: `207`,
    431: `208`,
    432: `208`,
    433: `209`,
    434: `210`,
    435: `211`,
    436: `211`,
    437: `212`,
    438: `213`,
    439: `214`,
    44: `13`,
    440: `214`,
    441: `215`,
    442: `216`,
    443: `217`,
    444: `217`,
    445: `218`,
    446: `219`,
    447: `220`,
    448: `220`,
    449: `221`,
    45: `14`,
    450: `222`,
    451: `223`,
    452: `223`,
    453: `224`,
    454: `225`,
    455: `226`,
    456: `226`,
    457: `227`,
    458: `228`,
    459: `229`,
    46: `14`,
    460: `229`,
    461: `230`,
    462: `231`,
    463: `232`,
    464: `232`,
    465: `233`,
    466: `234`,
    467: `235`,
    468: `235`,
    469: `236`,
    47: `15`,
    470: `237`,
    471: `238`,
    472: `238`,
    473: `240`,
    474: `240`,
    475: `241`,
    476: `241`,
    477: `242`,
    478: `243`,
    479: `243`,
    48: `16`,
    480: `244`,
    481: `244`,
    482: `244`,
    483: `245`,
    484: `246`,
    485: `247`,
    486: `248`,
    487: `248`,
    488: `248`,
    489: `249`,
    49: `17`,
    490: `250`,
    491: `251`,
    492: `251`,
    493: `252`,
    494: `253`,
    495: `253`,
    496: `254`,
    497: `255`,
    498: `256`,
    499: `257`,
    5: `2`,
    50: `18`,
    500: `257`,
    501: `258`,
    502: `259`,
    503: `260`,
    504: `262`,
    505: `262`,
    506: `262`,
    507: `264`,
    508: `264`,
    509: `265`,
    51: `19`,
    510: `265`,
    511: `265`,
    512: `267`,
    513: `267`,
    514: `267`,
    515: `267`,
    516: `267`,
    517: `267`,
    518: `268`,
    519: `268`,
    52: `21`,
    520: `269`,
    521: `270`,
    522: `272`,
    523: `273`,
    524: `276`,
    525: `277`,
    526: `281`,
    527: `281`,
    528: `282`,
    529: `283`,
    53: `21`,
    530: `284`,
    531: `286`,
    532: `286`,
    533: `286`,
    534: `289`,
    535: `289`,
    536: `290`,
    537: `291`,
    538: `292`,
    539: `292`,
    54: `21`,
    540: `292`,
    541: `293`,
    542: `293`,
    543: `294`,
    544: `295`,
    545: `296`,
    546: `299`,
    547: `299`,
    548: `299`,
    549: `300`,
    55: `21`,
    550: `300`,
    551: `301`,
    552: `302`,
    553: `302`,
    554: `303`,
    555: `303`,
    556: `303`,
    557: `306`,
    558: `306`,
    559: `307`,
    56: `21`,
    560: `308`,
    561: `309`,
    562: `309`,
    563: `309`,
    564: `310`,
    565: `310`,
    566: `311`,
    567: `312`,
    568: `313`,
    569: `316`,
    57: `21`,
    570: `316`,
    571: `316`,
    572: `317`,
    573: `317`,
    574: `318`,
    575: `318`,
    576: `319`,
    577: `319`,
    578: `319`,
    579: `322`,
    58: `21`,
    580: `322`,
    581: `323`,
    582: `324`,
    583: `325`,
    584: `325`,
    585: `325`,
    586: `326`,
    587: `326`,
    588: `327`,
    589: `328`,
    59: `21`,
    590: `329`,
    591: `332`,
    592: `332`,
    593: `332`,
    594: `333`,
    595: `334`,
    596: `334`,
    597: `335`,
    598: `335`,
    599: `335`,
    6: `2`,
    60: `21`,
    600: `338`,
    601: `338`,
    602: `339`,
    603: `340`,
    604: `341`,
    605: `341`,
    606: `341`,
    607: `342`,
    608: `342`,
    609: `343`,
    61: `21`,
    610: `344`,
    611: `345`,
    612: `348`,
    613: `348`,
    614: `348`,
    615: `349`,
    616: `349`,
    617: `350`,
    618: `351`,
    619: `351`,
    62: `21`,
    620: `352`,
    621: `352`,
    622: `352`,
    623: `354`,
    624: `354`,
    625: `355`,
    626: `356`,
    627: `357`,
    628: `357`,
    629: `358`,
    63: `21`,
    630: `358`,
    631: `359`,
    632: `360`,
    633: `361`,
    634: `361`,
    635: `362`,
    636: `362`,
    637: `363`,
    638: `363`,
    639: `364`,
    64: `21`,
    640: `365`,
    641: `372`,
    642: `372`,
    643: `373`,
    644: `373`,
    645: `374`,
    646: `375`,
    647: `382`,
    648: `382`,
    649: `383`,
    65: `21`,
    650: `383`,
    651: `384`,
    652: `385`,
    653: `392`,
    654: `393`,
    655: `393`,
    656: `394`,
    657: `394`,
    658: `394`,
    659: `394`,
    66: `21`,
    660: `394`,
    661: `394`,
    662: `394`,
    663: `394`,
    664: `394`,
    665: `394`,
    666: `395`,
    667: `395`,
    668: `396`,
    669: `397`,
    67: `21`,
    670: `397`,
    671: `397`,
    672: `398`,
    673: `399`,
    674: `400`,
    675: `400`,
    676: `401`,
    677: `402`,
    678: `402`,
    679: `402`,
    68: `21`,
    680: `403`,
    681: `403`,
    682: `404`,
    683: `404`,
    684: `405`,
    685: `405`,
    686: `406`,
    687: `407`,
    688: `408`,
    689: `409`,
    69: `21`,
    690: `409`,
    691: `410`,
    692: `410`,
    693: `411`,
    694: `411`,
    695: `412`,
    696: `412`,
    697: `413`,
    698: `413`,
    699: `414`,
    7: `2`,
    70: `21`,
    700: `414`,
    701: `415`,
    702: `415`,
    703: `416`,
    704: `416`,
    705: `417`,
    706: `417`,
    707: `418`,
    708: `418`,
    709: `418`,
    71: `21`,
    710: `420`,
    711: `420`,
    712: `421`,
    713: `422`,
    714: `423`,
    715: `424`,
    716: `424`,
    717: `425`,
    718: `426`,
    719: `427`,
    72: `21`,
    720: `434`,
    721: `434`,
    722: `435`,
    723: `435`,
    724: `436`,
    725: `437`,
    726: `444`,
    727: `444`,
    728: `444`,
    729: `444`,
    73: `21`,
    730: `444`,
    731: `444`,
    732: `445`,
    733: `445`,
    734: `446`,
    735: `447`,
    736: `447`,
    737: `448`,
    738: `449`,
    739: `449`,
    74: `21`,
    740: `450`,
    741: `451`,
    742: `452`,
    743: `452`,
    744: `453`,
    745: `454`,
    746: `455`,
    747: `457`,
    748: `457`,
    749: `458`,
    75: `21`,
    750: `458`,
    751: `459`,
    752: `460`,
    753: `460`,
    754: `461`,
    755: `461`,
    756: `461`,
    757: `461`,
    758: `461`,
    759: `461`,
    76: `21`,
    760: `462`,
    761: `462`,
    762: `463`,
    763: `464`,
    764: `464`,
    765: `465`,
    766: `466`,
    767: `466`,
    768: `467`,
    769: `468`,
    77: `21`,
    770: `469`,
    771: `471`,
    772: `472`,
    773: `472`,
    774: `473`,
    775: `473`,
    776: `473`,
    777: `473`,
    778: `473`,
    779: `473`,
    78: `21`,
    780: `473`,
    781: `473`,
    782: `473`,
    783: `473`,
    784: `474`,
    785: `474`,
    786: `475`,
    787: `476`,
    788: `476`,
    789: `476`,
    79: `21`,
    790: `477`,
    791: `478`,
    792: `479`,
    793: `479`,
    794: `480`,
    795: `481`,
    796: `481`,
    797: `481`,
    798: `482`,
    799: `482`,
    8: `2`,
    80: `21`,
    800: `483`,
    801: `483`,
    802: `484`,
    803: `484`,
    804: `485`,
    805: `486`,
    806: `486`,
    807: `486`,
    808: `487`,
    809: `487`,
    81: `21`,
    810: `488`,
    811: `488`,
    812: `489`,
    813: `490`,
    814: `490`,
    815: `492`,
    816: `492`,
    817: `493`,
    818: `493`,
    819: `494`,
    82: `21`,
    820: `495`,
    821: `495`,
    822: `495`,
    823: `496`,
    824: `496`,
    825: `497`,
    826: `497`,
    827: `498`,
    828: `499`,
    829: `499`,
    83: `21`,
    830: `501`,
    831: `501`,
    832: `502`,
    833: `503`,
    834: `503`,
    835: `504`,
    836: `504`,
    837: `505`,
    838: `505`,
    839: `506`,
    84: `21`,
    840: `506`,
    841: `507`,
    842: `507`,
    843: `508`,
    844: `508`,
    845: `509`,
    846: `509`,
    847: `510`,
    848: `510`,
    849: `511`,
    85: `21`,
    850: `511`,
    851: `511`,
    852: `513`,
    853: `513`,
    854: `514`,
    855: `514`,
    856: `515`,
    857: `515`,
    858: `516`,
    859: `516`,
    86: `21`,
    860: `517`,
    861: `517`,
    862: `518`,
    863: `519`,
    864: `520`,
    865: `520`,
    866: `521`,
    867: `521`,
    868: `522`,
    869: `522`,
    87: `21`,
    870: `522`,
    871: `523`,
    872: `523`,
    873: `524`,
    874: `524`,
    875: `524`,
    876: `524`,
    877: `524`,
    878: `524`,
    879: `525`,
    88: `21`,
    880: `525`,
    881: `526`,
    882: `527`,
    883: `528`,
    884: `528`,
    885: `529`,
    886: `530`,
    887: `532`,
    888: `532`,
    889: `533`,
    89: `21`,
    890: `533`,
    891: `533`,
    892: `534`,
    893: `534`,
    894: `535`,
    895: `535`,
    896: `536`,
    897: `537`,
    898: `537`,
    899: `538`,
    9: `2`,
    90: `21`,
    900: `538`,
    901: `539`,
    902: `539`,
    903: `540`,
    904: `541`,
    905: `541`,
    906: `542`,
    907: `542`,
    908: `543`,
    909: `544`,
    91: `21`,
    910: `545`,
    911: `545`,
    912: `546`,
    913: `546`,
    914: `547`,
    915: `548`,
    916: `549`,
    917: `549`,
    918: `551`,
    919: `551`,
    92: `21`,
    920: `552`,
    921: `552`,
    922: `553`,
    923: `554`,
    924: `555`,
    925: `555`,
    926: `556`,
    927: `557`,
    928: `558`,
    929: `558`,
    93: `21`,
    930: `559`,
    931: `560`,
    932: `561`,
    933: `561`,
    934: `562`,
    935: `563`,
    936: `564`,
    937: `564`,
    938: `565`,
    939: `566`,
    94: `21`,
    940: `567`,
    941: `567`,
    942: `568`,
    943: `569`,
    944: `570`,
    945: `571`,
    946: `571`,
    947: `572`,
    948: `572`,
    949: `572`,
    95: `21`,
    950: `574`,
    951: `575`,
    952: `575`,
    953: `576`,
    954: `577`,
    955: `578`,
    956: `578`,
    957: `578`,
    958: `579`,
    959: `579`,
    96: `21`,
    960: `580`,
    961: `581`,
    962: `581`,
    963: `582`,
    964: `582`,
    965: `582`,
    966: `582`,
    967: `582`,
    968: `582`,
    969: `583`,
    97: `21`,
    970: `583`,
    971: `584`,
    972: `585`,
    973: `586`,
    974: `588`,
    975: `588`,
    976: `589`,
    977: `589`,
    978: `589`,
    979: `590`,
    98: `21`,
    980: `590`,
    981: `591`,
    982: `591`,
    983: `592`,
    984: `593`,
    985: `596`,
    986: `596`,
    987: `597`,
    988: `597`,
    989: `597`,
    99: `21`,
    990: `598`,
    991: `599`,
    992: `599`,
    993: `600`,
    994: `600`,
    995: `601`,
    996: `602`,
    997: `603`,
    998: `604`,
    999: `605`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 136,
  unsupported: [],
  version: 13,
  warnings: [`Step 4 calls a remote object at /app/index.rsh:106:37:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program calls a remote object at /app/index.rsh:111:39:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program calls a remote object at /app/index.rsh:112:43:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"_algoperUnit","type":"uint256"},{"internalType":"address payable","name":"_gridCtc","type":"address"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_units","type":"uint256"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"internalType":"struct T10","name":"v1417","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"_algoperUnit","type":"uint256"},{"internalType":"address payable","name":"_gridCtc","type":"address"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_units","type":"uint256"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T1","name":"_Consumer_applyOrder0_56","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Consumer_settle0_56","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v814","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v900","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v921","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v929","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v945","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v959","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v977","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"transferAmount","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"}],"name":"transferToken","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v1404","type":"uint256"},{"internalType":"address payable","name":"v1405","type":"address"}],"name":"Consumer_applyOrder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1411","type":"uint256"}],"name":"Consumer_settle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Consumer_timeUp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Order_consumer","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Order_pricePerUnit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Order_producer","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Order_started","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Order_units","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v1420","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T1","name":"_Consumer_applyOrder0_56","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Consumer_settle0_56","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v1423","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T6","name":"v1426","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f196200295a38819003601f810183168401926001600160401b039290918585108486111762000413578086926040968752833981010360a0811262000429578351948486019186831085841117620004135783928652815187526080928391011262000429578451908282018281108682111762000413578652602092838201518352620000938783016200042e565b8484015280606092620000a88482016200042e565b898601520151828401528388019283524360035586519261012084019380851088861117620004135761010094895260009481868093528288820152828b820152828682015282858201528260a08201528260c08201528260e0820152015260049860ff8a5416620003fc57885133815281518782015282518051828c0152808801516001600160a01b0390811683880152818c01518116838701529086015160a083015294939291907fb7d4b63b9fed7328b961351088a92c71ee7f19214cf9501743da6ff6f6651aeb9060c090a1518015908115620003ef575b5015620003d85734620003c15788519260c084018481108a821117620003ae579286928b9c95928997958d52858d818a87019c8d9582848a01948b8652878b01988c8a528a8c019b8d8d5260a081019d8e523390524390528251015116845285815101518752805151895251015116875260019e8f808d5543905580519c8d8c3391015251908d01525116908a015251908801525160a0870152511660c085015260c0845260e08401848110878211176200039b57885283519586116200038857600254908782811c921680156200037d575b838310146200036a5750601f81116200031e575b508093601f8611600114620002b657505091839491849394620002aa575b50501b916000199060031b1c1916176002555b516125169081620004448239f35b01519250388062000289565b600283528183209493928692918316915b88838310620003035750505010620002e9575b505050811b016002556200029c565b015160001960f88460031b161c19169055388080620002da565b858701518855909601959485019487935090810190620002c7565b60028352818320601f870160051c8101918388106200035f575b601f0160051c019087905b828110620003535750506200026b565b84815501879062000343565b909150819062000338565b634e487b7160e01b845260229052602483fd5b91607f169162000257565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b634e487b7160e01b875260418c52602487fd5b885163100960cb60e01b81526012818c0152602490fd5b885163100960cb60e01b81526011818c0152602490fd5b9050600154143862000184565b885163100960cb60e01b81526010818c0152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b51906001600160a01b0382168203620004295756fe60806040526004361015610018575b361561001657005b005b60003560e01c80630ea28e13146101585780631e93b0f11461014f57806336e56ea514610146578063479872cc1461013d5780634a96b4cf14610134578063573b85101461012b57806374c2f3e41461012257806374d188d6146101195780637a35e5701461011057806383230757146101075780639e6f4199146100fe578063a17ec3d1146100f5578063a1b975ae146100ec578063ab53f2c6146100e3578063b301b52f146100da5763c5d86f6f0361000e576100d56109d8565b61000e565b506100d56109a4565b506100d561092f565b506100d56108c0565b506100d56107f7565b506100d5610745565b506100d5610726565b506100d56106b3565b506100d5610661565b506100d5610614565b506100d5610468565b506100d561040a565b506100d561036b565b506100d56102aa565b506100d5610240565b506100d5610183565b6001600160a01b031690565b6001600160a01b0381160361017e57565b600080fd5b50604036600319011261017e5761023c61022a6024356101a28161016d565b6101aa610c18565b610223816101b6610c7c565b60043581526001600160a01b039485166020808301918252604051909690916101de83610aa4565b6101e6610c7c565b8352878301936101f4610ca4565b855251835152511686825101526000825152518582510152610214610cd9565b90600082525185820152610ee6565b0151151590565b60405190151581529081906020820190565b0390f35b503461017e57600036600319011261017e576020600354604051908152f35b6002111561026957565b634e487b7160e01b600052602160045260246000fd5b919091604080606083019480516102958161025f565b84526020810151151560208501520151910152565b503461017e57602036600319011261017e576004356102c88161016d565b6102d0610bf9565b506102d9610bf9565b9060018060a01b031690816000526005602052600160ff604060002054166103008161025f565b036103565750600052600560205261023c604060002060016040519161032583610acc565b60ff81548181166103358161025f565b855260081c1615156020840152015460408201525b6040519182918261027f565b61023c9150600081526000602082015261034a565b503461017e57600036600319011261017e5761023c60a061038a610c18565b60005460078110156103d75760016103a2911461146e565b60806103be6103af610b41565b602080825183010191016123fb565b0151828201525b01516040519081529081906020820190565b60076103e3911461144e565b60606103ff6103f0610b41565b60208082518301019101610d63565b0151828201526103c5565b503461017e57600036600319011261017e5761023c61010061042a610c18565b600054600781101561044f57600161044291146114ae565b60606103be6103af610b41565b600761045b911461148e565b60406103ff6103f0610b41565b50602036600319011261017e5761047d610c18565b506105fc61048a36612485565b6104986001600054146114ce565b6105056104a66103af610b41565b916104c26104bd6104b960045460ff1690565b1590565b6114ee565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a1518015908115610608575b5061150e565b61050f341561152e565b61052b3360018060a01b036105248451610161565b161461154e565b6105f06105e6610539610e66565b9261054d6105478251610161565b85610c95565b6105bb6105b26040830161056d6105648251610161565b60208901610c95565b606084015160408801526080840151606088015261059a61059160a0860151610161565b60808901610c95565b6105a760208501516124c5565b60a088015251610161565b60c08601610c95565b600060e085015260006101008501526105d8610120850160019052565b600061014085015251610161565b6101608301610c95565b43610180820152611c1b565b60405160008152602090f35b905060015414386104ff565b50604036600319011261017e57610629610c18565b6040519061063682610aa4565b600435825260243591821515830361017e57610656926020820152612148565b602060405160008152f35b50600036600319011261017e576020606061067a610c18565b6106a78160405161068a81610ae7565b60008152610696610c7c565b906000825251151586820152612148565b01511515604051908152f35b503461017e57600036600319011261017e5761023c61022a60e06106d5610c18565b60005460078110156107035760016106ed911461158e565b6106f86103af610b41565b506001910181905290565b600761070f911461156e565b61071a6103f0610b41565b50600182820152610223565b503461017e57600036600319011261017e576020600154604051908152f35b5060a036600319011261017e5761075a610c18565b60409081519061076982610aa4565b6004358252608036602319011261017e5782519161078683610acc565b602435600281101561017e5783528360431936011261017e576107e09284516107ae81610aa4565b60443581526064356107bf8161016d565b602082015260208201526107d2366124a5565b858201526020820152610ee6565b5160008152602090f35b6001600160a01b03169052565b503461017e57600036600319011261017e5761023c61086a60c0610819610c18565b600054600781101561088457600161083191146115ce565b61086361083c610b41565b80516001600160a01b0391610859918101602090810191016123fb565b5116838301610c95565b0151610161565b6040516001600160a01b0390911681529081906020820190565b600761089091146115ae565b610898610b41565b80516001600160a01b03916108b591810160209081019101610d63565b511682820152610863565b50602036600319011261017e57602060406108d9610c18565b6106a78183516108e881610aa4565b84516108f381610ae7565b60008152815285810190610905610ca4565b82526004358151526001825152518582510152610920610cd9565b90600082525186820152610ee6565b503461017e576000806003193601126109a157805461094c610b41565b906040519283918252602090604082840152835191826040850152815b83811061098a57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610969565b80fd5b503461017e57600036600319011261017e576109be610c18565b5060405163100960cb60e01b815260076004820152602490fd5b503461017e57602036600319011261017e576004356109f68161016d565b6109fe610bf9565b50610a07610bf9565b9060018060a01b031690816000526006602052600160ff60406000205416610a2e8161025f565b036103565750600052600660205261023c604060002060016040519161032583610acc565b90600182811c92168015610a83575b6020831014610a6d57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610a62565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610abf57604052565b610ac7610a8d565b604052565b606081019081106001600160401b03821117610abf57604052565b602081019081106001600160401b03821117610abf57604052565b61016081019081106001600160401b03821117610abf57604052565b601f909101601f19168101906001600160401b03821190821017610abf57604052565b6040519060008260025491610b5583610a53565b808352600193808516908115610bcb5750600114610b7d575b50610b7b92500383610b1e565b565b600260009081526000805160206124ea83398151915294602093509091905b818310610bb3575050610b7b935082010138610b6e565b85548884018501529485019487945091830191610b9c565b9050610b7b94506020925060ff191682840152151560051b82010138610b6e565b60405190610b7b82610b02565b60405190610c0682610acc565b60006040838281528260208201520152565b6040519061012082016001600160401b03811183821017610c6f575b604052816101006000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201520152565b610c77610a8d565b610c34565b60405190610c8982610aa4565b60006020838281520152565b6001600160a01b039091169052565b60405190610cb182610acc565b8160008152610cbe610c7c565b60208201526040805191610cd183610ae7565b600083520152565b60405190610ce682610aa4565b81600081526020610cf5610ca4565b910152565b6040519060a082016001600160401b03811183821017610d4b575b6040526000608083610d25610c7c565b8152604051610d3381610ae7565b83815260208201528260408201528260608201520152565b610d53610a8d565b610d15565b5190610b7b8261016d565b908161016091031261017e57610d77610bec565b90610d8181610d58565b8252610d8f60208201610d58565b60208301526040810151604083015260608101516060830152610db460808201610d58565b608083015260a081015160a0830152610dcf60c08201610d58565b60c083015260e081015160e083015261010080820151908301526101208082015190830152610e02610140809201610d58565b9082015290565b90604060a091949394602060c0850196600180861b0380931686528051828701520151908151610e388161025f565b83860152602080830151805160608801520151166080850152015151910152565b51610e638161025f565b90565b604051906101a082016001600160401b03811183821017610ed9575b604052816101806000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015282610140820152826101608201520152565b610ee1610a8d565b610e82565b610eee610cfa565b600091610efe60078454146115ee565b610f06610b41565b90610f1b602092838082518301019101610d63565b610f32610f2d6104b960045460ff1690565b61160e565b60407fd4b1b7de0379a75a8e25ecfe370da6ed18ed75f0fe5299e9cb512935735d0209815180610f63863383610e09565b0390a1610f7b835180159081156113b7575b5061162e565b8360a0830193610f8d8551431061164e565b01610f988151610e59565b610fa18161025f565b6111185751840151855281516001600160a01b03979033908990610fc490610161565b160361110e57610fd3876116ce565b84865151918385019283511015610fe9906116ee565b87518201516001600160a01b03168286019a8b5161100690610161565b61100f90610161565b91161461101b9061170e565b611025341561172e565b8351600181527f2e95e2e011e57cf488b06e63ab809d5ee8189ee55bb24742229218c9514e592390602090a1600191015261105e610e66565b97835161106a90610161565b611074908a610c95565b5161107e90610161565b61108a90898701610c95565b519087015260608101516060870152608001516110a690610161565b6110b39060808701610c95565b5160a0850152815101516001600160a01b03166110d39060c08501610c95565b515160e0830152610100820181905260016101208301526101408201526110fe336101608301610c95565b43610180820152610b7b90611c1b565b610fd360016116ce565b600161112c82999896999593949551610e59565b6111358161025f565b14611145575b5050505050505050565b82905101519261115d8887019480865251151561166e565b6101409661117f3360018060a01b036111788b860151610161565b161461168e565b61118934156116ae565b6111938251610161565b9360e08301957f4cd3b8e1db578a22f999ba1a66e23742fc7e8f947552f977317885cdccddb8c3875160c08601976111fc6111ce8a51610161565b86516001600160a01b0393841681523360208201526040810194909452909116606083015281906080820190565b0390a161129d828851947f01f47471411335b9332003baa783ab9b851bccf64987f05a8b561c8d3b7dd3b6828d61123960608b01998a51906113ef565b91829101526112488951610161565b84516001600160a01b039190911681523360208201526040810191909152606090a18151600181527f154c608eaedd0ef5f2cf76850a48f0943dfc865bcfe929754d4e00988474b78190602090a10160019052565b865181515111156113ac576112b68151518851906113da565b60608a01525b865181515110156113a05786519051516112d5916113da565b60808901525b6112e3610e66565b9983516112ef90610161565b6112f9908c610c95565b8084015161130690610161565b611311918c01610c95565b80830151908a01525160608901526080015161132c90610161565b6113399060808901610c95565b5160a08701525161134990610161565b6113569060c08701610c95565b5160e085015260608201516101008501526101208401526080015190820152611383336101608301610c95565b4361018082015261139390611c1b565b388080808080808061113b565b508660808901526112db565b8760608a01526112bc565b90506001541438610f75565b50634e487b7160e01b600052601160045260246000fd5b9081039081116113e75790565b610e636113c3565b91906000928115918215611407575b50501561017e57565b81819293955002828104821483151715611441575b809461142b57041438806113fe565b634e487b7160e01b600052601260045260246000fd5b6114496113c3565b61141c565b1561145557565b60405163100960cb60e01b815260096004820152602490fd5b1561147557565b60405163100960cb60e01b815260086004820152602490fd5b1561149557565b60405163100960cb60e01b8152600f6004820152602490fd5b156114b557565b60405163100960cb60e01b8152600e6004820152602490fd5b156114d557565b60405163100960cb60e01b815260136004820152602490fd5b156114f557565b60405163100960cb60e01b815260146004820152602490fd5b1561151557565b60405163100960cb60e01b815260156004820152602490fd5b1561153557565b60405163100960cb60e01b815260166004820152602490fd5b1561155557565b60405163100960cb60e01b815260176004820152602490fd5b1561157557565b60405163100960cb60e01b8152600d6004820152602490fd5b1561159557565b60405163100960cb60e01b8152600c6004820152602490fd5b156115b557565b60405163100960cb60e01b8152600b6004820152602490fd5b156115d557565b60405163100960cb60e01b8152600a6004820152602490fd5b156115f557565b60405163100960cb60e01b815260186004820152602490fd5b1561161557565b60405163100960cb60e01b815260196004820152602490fd5b1561163557565b60405163100960cb60e01b8152601a6004820152602490fd5b1561165557565b60405163100960cb60e01b8152601b6004820152602490fd5b1561167557565b60405163100960cb60e01b815260206004820152602490fd5b1561169557565b60405163100960cb60e01b815260216004820152602490fd5b156116b557565b60405163100960cb60e01b815260226004820152602490fd5b156116d557565b60405163100960cb60e01b8152601c6004820152602490fd5b156116f557565b60405163100960cb60e01b8152601d6004820152602490fd5b1561171557565b60405163100960cb60e01b8152601e6004820152602490fd5b1561173557565b60405163100960cb60e01b8152601f6004820152602490fd5b1561175557565b60405163100960cb60e01b8152602f6004820152602490fd5b1561177557565b60405163100960cb60e01b8152602b6004820152602490fd5b1561179557565b60405163100960cb60e01b8152602d6004820152602490fd5b156117b557565b60405163100960cb60e01b815260236004820152602490fd5b156117d557565b602460405163100960cb60e01b8152816004820152fd5b156117f357565b60405163100960cb60e01b815260256004820152602490fd5b1561181357565b60405163100960cb60e01b815260266004820152602490fd5b1561183357565b60405163100960cb60e01b815260276004820152602490fd5b1561185357565b60405163100960cb60e01b815260296004820152602490fd5b6040519061187982610b02565b60006101408382815261188a610c7c565b6020820152611897610c7c565b60408201526118a4610c7c565b60608201526118b1610c7c565b60808201528260a08201526118c4610c7c565b60c08201526118d1610c7c565b60e082015282610100820152826101208201520152565b8181106118f3575050565b600081556001016118e8565b61190a600254610a53565b806119125750565b601f811160011461192557506000600255565b600260005261196a90601f0160051c6000805160206124ea833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6118e8565b6000602081208160025555565b600160ff196004541617600455565b9081526001600160a01b03909116602082015260400190565b3d156119e7573d906001600160401b0382116119da575b604051916119ce601f8201601f191660200184610b1e565b82523d6000602084013e565b6119e2610a8d565b6119b6565b606090565b8151815260209182015115159181019190915260400190565b60405190611a1282610b02565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201520152565b610b7b90929192610160810193611a708282516107ea565b611a82602082015160208401906107ea565b6040810151604083015260608101516060830152611aa8608082015160808401906107ea565b60a081015160a0830152611ac460c082015160c08401906107ea565b60e081015160e083015261010080820151908301526101208082015190830152610140809101519101906107ea565b90601f8211611b00575050565b610b7b9160026000526020600020906020601f840160051c83019310611b2e575b601f0160051c01906118e8565b9091508190611b21565b80519091906001600160401b038111611c0e575b611b6081611b5b600254610a53565b611af3565b602080601f8311600114611b9c5750819293600092611b91575b50508160011b916000199060031b1c191617600255565b015190503880611b7a565b6002600052601f198316949091906000805160206124ea833981519152926000905b878210611bf6575050836001959610611bdd575b505050811b01600255565b015160001960f88460031b161c19169055388080611bd2565b80600185968294968601518155019501930190611bbe565b611c16610a8d565b611b4c565b611c2361186c565b9061012091611c3483830151151590565b15611d385750611d33611d2591611d03610b7b94611cfb610160611c56611a05565b94611c6a611c648251610161565b87610c95565b611c83611c7a6020830151610161565b60208801610c95565b6040810151604087015260608101516060870152611cb0611ca76080830151610161565b60808801610c95565b60a081015160a0870152611cd3611cca60c0830151610161565b60c08801610c95565b60e081015160e087015261010080820151908701526101409384820151908701520151610161565b908301610c95565b611d0d6007600055565b611d1643600155565b60405192839160208301611a58565b03601f198101835282610b1e565b611b38565b61010082810180519094919015611f4757611d8f9447918401918252611d5c611977565b5193610160810190610140611d718351610161565b6040519889916020830199637deb602560e01b8b5260248401611986565b0391611da3601f19938481018b528a610b1e565b611e3d6080820195611ddc611dc0611dbb8951610161565b610161565b9b6000809d819d82809451925af1611dd661199f565b90612067565b50611dec60ff1960045416600455565b47905190036020890190815152517f5c88d59ae0ed02c6b9c3b212bacf946b86a2df6e874f90f30e4823b07b4dbd1d611e3260408b0192808452604051918291826119ec565b0390a151511561176e565b01805190919015611f36578680611ec2608095611f229a611ed4611dbb611f179a611ece611ee7998f9b7f348dc8cc73be707aabe912c3cc40cf182f94a97cbeeebd8457b41470094ff19f9f90611ea491479e019d8e52611e9c611977565b519751610161565b60405198899160208301996320c4d34760e11b8b5260248401611986565b03908101885287610b1e565b51610161565b9251925af1611ee161199f565b90612097565b50611ef760ff1960045416600455565b4790519003606085019081515251930192808452604051918291826119ec565b0390a151511561178e565b8055611f2e6000600155565b610b7b6118ff565b50505050505055611f2e6000600155565b505061014080830180519394509192156120255760e083611fdc600080611fbb6120179982611fc9611dbb60807ff29cdb296de9c9fa99e4bd0ba690fafdcbe6bffaab3edcd0d0cb6a42dcb662ba9c61200c9c479b019a8b52611fa8611977565b5194610863611ea4610160830151610161565b03601f198101895288610b1e565b9251925af1611fd661199f565b90612037565b50611fec60ff1960045416600455565b479051900360c085019081515251930192808452604051918291826119ec565b0390a151511561174e565b60008055611f2e6000600155565b5050505060008055611f2e6000600155565b1561203f5790565b80511561204e57805190602001fd5b60405163100960cb60e01b8152602e6004820152602490fd5b1561206f5790565b80511561207e57805190602001fd5b60405163100960cb60e01b8152602a6004820152602490fd5b1561209f5790565b8051156120ae57805190602001fd5b60405163100960cb60e01b8152602c6004820152602490fd5b156120cf5790565b8051156120de57805190602001fd5b60405163100960cb60e01b815260286004820152602490fd5b60405190608082016001600160401b0381118382101761213b575b6040526000606083828152612125610c7c565b6020820152612132610c7c565b60408201520152565b612143610a8d565b612112565b6121506120f7565b9161215f6007600054146117ae565b612167610b41565b9261217c602094858082518301019101610d63565b9261219461218f6104b960045460ff1690565b6117ce565b60408051338152825160208083019190915283015115158183015290916121ec917faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072290606090a15180159081156123ef575b506117ec565b60a084019283514310156121ff9061180c565b612209341561182c565b8151600181527f4e146136365cff4442841b4b40e45ebe7b07f38f9d02030e33257a9d677979c390602090a16060016122429060019052565b479160608101928352612253611977565b8185019082825194875161226690610161565b825180978b8201926320c4d34760e11b8452602483019161228692611986565b03601f19810188526122989088610b1e565b608089019687516122a890610161565b6122b190610161565b90515a9260008094938194f16122c561199f565b6122ce916120c7565b506122de60ff1960045416600455565b4790519003888301908151525191019080825283516122fe8192826119ec565b037f1db2837d30a688c278adebecf996f748af01b1ad91ab3ac00a6258be5b9e68eb91a151511561232e9061184c565b612336610e66565b95855161234290610161565b61234c9088610c95565b8086015161235990610161565b612364918801610c95565b5190850152606083015160608501525161237d90610161565b61238a9060808501610c95565b5160a083015260c081015161239e90610161565b6123ab9060c08401610c95565b60e081015160e083015261010080820151908301526101208083016000905281015190610140918284015201516123e190610161565b6110fe906101608301610c95565b905060015414386121e6565b908160c091031261017e576040519060a09060c083016001600160401b03811184821017612478575b60405280516124328161016d565b835260208101516020840152604081015161244c8161016d565b6040840152606081015160608401526080810151608084015201516124708161016d565b60a082015290565b612480610a8d565b612424565b602090600319011261017e576040519061249e82610ae7565b6004358252565b602090608319011261017e57604051906124be82610ae7565b6084358252565b906103848201918281116124dc575b821061017e57565b6124e46113c3565b6124d456fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 10586,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:50:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:115:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:115:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:115:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:115:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:65:97:after expr stmt semicolon',
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
  "Consumer_applyOrder": Consumer_applyOrder,
  "Consumer_settle": Consumer_settle,
  "Consumer_timeUp": Consumer_timeUp,
  "Producer": Producer
  };
export const _APIs = {
  Consumer: {
    applyOrder: Consumer_applyOrder,
    settle: Consumer_settle,
    timeUp: Consumer_timeUp
    }
  };
