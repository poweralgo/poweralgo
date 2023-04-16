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
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const Order_consumer = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v882, v883, v884, v885, v886, v887, v891] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
      const [v882, v883, v884, v885, v886, v904, v905, v906, v909, v910, v917, v918] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Order_pricePerUnit = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v882, v883, v884, v885, v886, v887, v891] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
      const [v882, v883, v884, v885, v886, v904, v905, v906, v909, v910, v917, v918] = svs;
      return (await ((async () => {
        
        
        return v885;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Order_producer = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v882, v883, v884, v885, v886, v887, v891] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
      const [v882, v883, v884, v885, v886, v904, v905, v906, v909, v910, v917, v918] = svs;
      return (await ((async () => {
        
        
        return v882;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Order_started = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v882, v883, v884, v885, v886, v887, v891] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
      const [v882, v883, v884, v885, v886, v904, v905, v906, v909, v910, v917, v918] = svs;
      return (await ((async () => {
        
        
        return true;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Order_units = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v882, v883, v884, v885, v886, v887, v891] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
      const [v882, v883, v884, v885, v886, v904, v905, v906, v909, v910, v917, v918] = svs;
      return (await ((async () => {
        
        
        return v884;}))(...args));
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
          rng: ctc2
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
          rng: ctc2
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc2, ctc6],
      11: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc0, ctc6, ctc2]
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
export async function _Consumer_applyOrder11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Consumer_applyOrder11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Consumer_applyOrder11 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Data({
    Consumer_applyOrder0_93: ctc7,
    Consumer_settle0_93: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v882, v883, v884, v885, v886, v904, v905, v906, v909, v910, v917, v918] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc0, ctc1, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc0, ctc6, ctc2]);
  const v926 = ctc.selfAddress();
  const v928 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:86:51:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to "runConsumer_applyOrder0_93" (defined at: ./index.rsh:86:10:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
    msg: 'in',
    who: 'Consumer_applyOrder'
    });
  const v929 = v928[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v933 = stdlib.addressEq(v882, v926);
  const v934 = v933 ? false : true;
  stdlib.assert(v934, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:87:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:51:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to "runConsumer_applyOrder0_93" (defined at: ./index.rsh:86:10:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
    msg: 'Producer and consumer should be diffrent',
    who: 'Consumer_applyOrder'
    });
  const v936 = stdlib.gt(v929, stdlib.checkedBigNumberify('./index.rsh:89:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v936, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:89:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:51:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to "runConsumer_applyOrder0_93" (defined at: ./index.rsh:86:10:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
    msg: 'Units should not be zero',
    who: 'Consumer_applyOrder'
    });
  const v938 = stdlib.le(v929, v884);
  stdlib.assert(v938, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:92:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:51:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to "runConsumer_applyOrder0_93" (defined at: ./index.rsh:86:10:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
    msg: 'Insuffiecient tokens',
    who: 'Consumer_applyOrder'
    });
  const v947 = ['Consumer_applyOrder0_93', v928];
  
  const txn1 = await (ctc.sendrecv({
    args: [v882, v883, v884, v885, v886, v904, v905, v906, v909, v910, v917, v918, v947],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:93:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v987], secs: v989, time: v988, didSend: v577, from: v986 } = txn1;
      
      switch (v987[0]) {
        case 'Consumer_applyOrder0_93': {
          const v990 = v987[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Consumer_applyOrder"
            });
          const v995 = v990[stdlib.checkedBigNumberify('./index.rsh:86:10:spread', stdlib.UInt_max, '0')];
          ;
          const v1027 = true;
          const v1028 = await txn1.getOutput('Consumer_applyOrder', 'v1027', ctc4, v1027);
          
          const v1729 = v995;
          const v1730 = stdlib.checkedBigNumberify('./index.rsh:96:17:decimal', stdlib.UInt_max, '0');
          const v1732 = stdlib.checkedBigNumberify('./index.rsh:96:20:decimal', stdlib.UInt_max, '0');
          const v1733 = v986;
          const v1735 = v917;
          const v1736 = v918;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Consumer_settle0_93': {
          const v1059 = v987[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc0, ctc6, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v987], secs: v989, time: v988, didSend: v577, from: v986 } = txn1;
  switch (v987[0]) {
    case 'Consumer_applyOrder0_93': {
      const v990 = v987[1];
      undefined /* setApiDetails */;
      const v995 = v990[stdlib.checkedBigNumberify('./index.rsh:86:10:spread', stdlib.UInt_max, '0')];
      const v997 = stdlib.addressEq(v882, v986);
      const v998 = v997 ? false : true;
      stdlib.assert(v998, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:87:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:51:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
        msg: 'Producer and consumer should be diffrent',
        who: 'Consumer_applyOrder'
        });
      const v1000 = stdlib.gt(v995, stdlib.checkedBigNumberify('./index.rsh:89:23:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1000, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:89:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:51:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
        msg: 'Units should not be zero',
        who: 'Consumer_applyOrder'
        });
      const v1002 = stdlib.le(v995, v884);
      stdlib.assert(v1002, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:92:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:51:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
        msg: 'Insuffiecient tokens',
        who: 'Consumer_applyOrder'
        });
      ;
      const v1027 = true;
      const v1028 = await txn1.getOutput('Consumer_applyOrder', 'v1027', ctc4, v1027);
      if (v577) {
        stdlib.protect(ctc10, await interact.out(v990, v1028), {
          at: './index.rsh:86:11:application',
          fs: ['at ./index.rsh:86:11:application call to [unknown function] (defined at: ./index.rsh:86:11:function exp)', 'at ./index.rsh:94:10:application call to "k" (defined at: ./index.rsh:93:24:function exp)', 'at ./index.rsh:93:24:application call to [unknown function] (defined at: ./index.rsh:93:24:function exp)'],
          msg: 'out',
          who: 'Consumer_applyOrder'
          });
        }
      else {
        }
      
      const v1729 = v995;
      const v1730 = stdlib.checkedBigNumberify('./index.rsh:96:17:decimal', stdlib.UInt_max, '0');
      const v1732 = stdlib.checkedBigNumberify('./index.rsh:96:20:decimal', stdlib.UInt_max, '0');
      const v1733 = v986;
      const v1735 = v917;
      const v1736 = v918;
      return;
      
      break;
      }
    case 'Consumer_settle0_93': {
      const v1059 = v987[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Consumer_settle11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Consumer_settle11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Consumer_settle11 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([ctc2]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc9 = stdlib.T_Data({
    Consumer_applyOrder0_93: ctc8,
    Consumer_settle0_93: ctc7
    });
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([ctc2, ctc10]);
  
  
  const [v882, v883, v884, v885, v886, v904, v905, v906, v909, v910, v917, v918] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc0, ctc1, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc0, ctc6, ctc2]);
  const v949 = ctc.selfAddress();
  const v951 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:99:42:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to "runConsumer_settle0_93" (defined at: ./index.rsh:99:10:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
    msg: 'in',
    who: 'Consumer_settle'
    });
  const v952 = v951[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v954 = stdlib.gt(v952, stdlib.checkedBigNumberify('./index.rsh:100:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v954, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:100:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:42:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to "runConsumer_settle0_93" (defined at: ./index.rsh:99:10:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
    msg: 'Units can not be zero',
    who: 'Consumer_settle'
    });
  const v956 = stdlib.lt(v952, v884);
  stdlib.assert(v956, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:101:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:42:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to "runConsumer_settle0_93" (defined at: ./index.rsh:99:10:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
    msg: 'Unit should not exceed',
    who: 'Consumer_settle'
    });
  const v958 = stdlib.addressEq(v910, v949);
  stdlib.assert(v958, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:42:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to "runConsumer_settle0_93" (defined at: ./index.rsh:99:10:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
    msg: 'Winner can not be different',
    who: 'Consumer_settle'
    });
  const v965 = ['Consumer_settle0_93', v951];
  
  const v985 = stdlib.safeMul(v952, v885);
  
  const txn1 = await (ctc.sendrecv({
    args: [v882, v883, v884, v885, v886, v904, v905, v906, v909, v910, v917, v918, v965],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v985, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v987], secs: v989, time: v988, didSend: v577, from: v986 } = txn1;
      
      switch (v987[0]) {
        case 'Consumer_applyOrder0_93': {
          const v990 = v987[1];
          
          break;
          }
        case 'Consumer_settle0_93': {
          const v1059 = v987[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Consumer_settle"
            });
          const v1074 = v1059[stdlib.checkedBigNumberify('./index.rsh:99:10:spread', stdlib.UInt_max, '0')];
          const v1081 = stdlib.safeMul(v1074, v885);
          const v1083 = stdlib.add(v918, v1081);
          sim_r.txns.push({
            amt: v1081,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1114 = true;
          const v1115 = await txn1.getOutput('Consumer_settle', 'v1114', ctc4, v1114);
          
          const v1121 = stdlib.lt(v905, v1074);
          let v1122;
          if (v1121) {
            const v1123 = stdlib.safeSub(v1074, v905);
            v1122 = v1123;
            }
          else {
            v1122 = stdlib.checkedBigNumberify('./index.rsh:107:68:decimal', stdlib.UInt_max, '0');
            }
          const v1124 = stdlib.gt(v905, v1074);
          let v1125;
          if (v1124) {
            const v1126 = stdlib.safeSub(v905, v1074);
            v1125 = v1126;
            }
          else {
            v1125 = stdlib.checkedBigNumberify('./index.rsh:108:68:decimal', stdlib.UInt_max, '0');
            }
          const v1914 = stdlib.safeMul(v1125, v885);
          const v1915 = stdlib.safeSub(v1083, v1914);
          const v1916 = stdlib.sub(v1083, v1915);
          sim_r.txns.push({
            kind: 'from',
            to: v882,
            tok: undefined /* Nothing */
            });
          const v1917 = v917[stdlib.checkedBigNumberify('./index.rsh:122:20:application', stdlib.UInt_max, '0')];
          const v1918 = v1917[stdlib.checkedBigNumberify('./index.rsh:122:20:application', stdlib.UInt_max, '0')];
          const v1919 = stdlib.safeSub(v1918, v1125);
          sim_r.txns.push({
            kind: 'from',
            to: v986,
            tok: v883
            });
          const v1920 = stdlib.gt(v1916, stdlib.checkedBigNumberify('./index.rsh:125:20:decimal', stdlib.UInt_max, '0'));
          if (v1920) {
            sim_r.txns.push({
              kind: 'from',
              to: v986,
              tok: undefined /* Nothing */
              });
            const v1921 = stdlib.gt(v1125, stdlib.checkedBigNumberify('./index.rsh:126:23:decimal', stdlib.UInt_max, '0'));
            if (v1921) {
              sim_r.txns.push({
                kind: 'from',
                to: v882,
                tok: v883
                });
              const v1922 = stdlib.gt(v1122, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
              if (v1922) {
                const v1923 = [];
                const v1924 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v886,
                    remote: ({
                      accs: [v986],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
                await txn1.getOutput('internal', 'v1924', ctc11, v1924);
                const v1928 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v886,
                    remote: ({
                      accs: [v882],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
                await txn1.getOutput('internal', 'v1928', ctc11, v1928);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v883
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v1932 = [];
                const v1933 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v886,
                    remote: ({
                      accs: [v882],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
                await txn1.getOutput('internal', 'v1933', ctc11, v1933);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v883
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1937 = stdlib.gt(v1122, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
              if (v1937) {
                const v1938 = [];
                const v1939 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v886,
                    remote: ({
                      accs: [v986],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
                await txn1.getOutput('internal', 'v1939', ctc11, v1939);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v883
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v883
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v1943 = stdlib.gt(v1125, stdlib.checkedBigNumberify('./index.rsh:126:23:decimal', stdlib.UInt_max, '0'));
            if (v1943) {
              sim_r.txns.push({
                kind: 'from',
                to: v882,
                tok: v883
                });
              const v1944 = stdlib.gt(v1122, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
              if (v1944) {
                const v1945 = [];
                const v1946 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v886,
                    remote: ({
                      accs: [v986],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
                await txn1.getOutput('internal', 'v1946', ctc11, v1946);
                const v1950 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v886,
                    remote: ({
                      accs: [v882],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
                await txn1.getOutput('internal', 'v1950', ctc11, v1950);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v883
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v1954 = [];
                const v1955 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v886,
                    remote: ({
                      accs: [v882],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
                await txn1.getOutput('internal', 'v1955', ctc11, v1955);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v883
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1959 = stdlib.gt(v1122, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
              if (v1959) {
                const v1960 = [];
                const v1961 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v886,
                    remote: ({
                      accs: [v986],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
                await txn1.getOutput('internal', 'v1961', ctc11, v1961);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v883
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v883
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc0, ctc6, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v987], secs: v989, time: v988, didSend: v577, from: v986 } = txn1;
  switch (v987[0]) {
    case 'Consumer_applyOrder0_93': {
      const v990 = v987[1];
      return;
      break;
      }
    case 'Consumer_settle0_93': {
      const v1059 = v987[1];
      undefined /* setApiDetails */;
      const v1074 = v1059[stdlib.checkedBigNumberify('./index.rsh:99:10:spread', stdlib.UInt_max, '0')];
      const v1075 = stdlib.gt(v1074, stdlib.checkedBigNumberify('./index.rsh:100:27:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1075, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:100:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:42:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
        msg: 'Units can not be zero',
        who: 'Consumer_settle'
        });
      const v1077 = stdlib.lt(v1074, v884);
      stdlib.assert(v1077, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:101:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:42:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
        msg: 'Unit should not exceed',
        who: 'Consumer_settle'
        });
      const v1079 = stdlib.addressEq(v910, v986);
      stdlib.assert(v1079, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:42:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
        msg: 'Winner can not be different',
        who: 'Consumer_settle'
        });
      const v1081 = stdlib.safeMul(v1074, v885);
      const v1083 = stdlib.add(v918, v1081);
      ;
      const v1114 = true;
      const v1115 = await txn1.getOutput('Consumer_settle', 'v1114', ctc4, v1114);
      if (v577) {
        stdlib.protect(ctc10, await interact.out(v1059, v1115), {
          at: './index.rsh:99:11:application',
          fs: ['at ./index.rsh:99:11:application call to [unknown function] (defined at: ./index.rsh:99:11:function exp)', 'at ./index.rsh:105:10:application call to "k" (defined at: ./index.rsh:104:45:function exp)', 'at ./index.rsh:104:45:application call to [unknown function] (defined at: ./index.rsh:104:45:function exp)'],
          msg: 'out',
          who: 'Consumer_settle'
          });
        }
      else {
        }
      
      const v1121 = stdlib.lt(v905, v1074);
      let v1122;
      if (v1121) {
        const v1123 = stdlib.safeSub(v1074, v905);
        v1122 = v1123;
        }
      else {
        v1122 = stdlib.checkedBigNumberify('./index.rsh:107:68:decimal', stdlib.UInt_max, '0');
        }
      const v1124 = stdlib.gt(v905, v1074);
      let v1125;
      if (v1124) {
        const v1126 = stdlib.safeSub(v905, v1074);
        v1125 = v1126;
        }
      else {
        v1125 = stdlib.checkedBigNumberify('./index.rsh:108:68:decimal', stdlib.UInt_max, '0');
        }
      const v1914 = stdlib.safeMul(v1125, v885);
      const v1915 = stdlib.safeSub(v1083, v1914);
      const v1916 = stdlib.sub(v1083, v1915);
      ;
      const v1917 = v917[stdlib.checkedBigNumberify('./index.rsh:122:20:application', stdlib.UInt_max, '0')];
      const v1918 = v1917[stdlib.checkedBigNumberify('./index.rsh:122:20:application', stdlib.UInt_max, '0')];
      const v1919 = stdlib.safeSub(v1918, v1125);
      ;
      const v1920 = stdlib.gt(v1916, stdlib.checkedBigNumberify('./index.rsh:125:20:decimal', stdlib.UInt_max, '0'));
      if (v1920) {
        ;
        const v1921 = stdlib.gt(v1125, stdlib.checkedBigNumberify('./index.rsh:126:23:decimal', stdlib.UInt_max, '0'));
        if (v1921) {
          ;
          const v1922 = stdlib.gt(v1122, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
          if (v1922) {
            const v1923 = [];
            const v1924 = undefined /* Remote */;
            const v1925 = await txn1.getOutput('internal', 'v1924', ctc11, v1924);
            const v1926 = v1925[stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0')];
            const v1927 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1926);
            stdlib.assert(v1927, {
              at: './index.rsh:128:39:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Consumer_settle'
              });
            const v1928 = undefined /* Remote */;
            const v1929 = await txn1.getOutput('internal', 'v1928', ctc11, v1928);
            const v1930 = v1929[stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0')];
            const v1931 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1930);
            stdlib.assert(v1931, {
              at: './index.rsh:129:43:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Consumer_settle'
              });
            return;
            }
          else {
            const v1932 = [];
            const v1933 = undefined /* Remote */;
            const v1934 = await txn1.getOutput('internal', 'v1933', ctc11, v1933);
            const v1935 = v1934[stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0')];
            const v1936 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1935);
            stdlib.assert(v1936, {
              at: './index.rsh:129:43:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Consumer_settle'
              });
            return;
            }}
        else {
          const v1937 = stdlib.gt(v1122, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
          if (v1937) {
            const v1938 = [];
            const v1939 = undefined /* Remote */;
            const v1940 = await txn1.getOutput('internal', 'v1939', ctc11, v1939);
            const v1941 = v1940[stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0')];
            const v1942 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1941);
            stdlib.assert(v1942, {
              at: './index.rsh:128:39:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Consumer_settle'
              });
            return;
            }
          else {
            return;
            }}}
      else {
        const v1943 = stdlib.gt(v1125, stdlib.checkedBigNumberify('./index.rsh:126:23:decimal', stdlib.UInt_max, '0'));
        if (v1943) {
          ;
          const v1944 = stdlib.gt(v1122, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
          if (v1944) {
            const v1945 = [];
            const v1946 = undefined /* Remote */;
            const v1947 = await txn1.getOutput('internal', 'v1946', ctc11, v1946);
            const v1948 = v1947[stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0')];
            const v1949 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1948);
            stdlib.assert(v1949, {
              at: './index.rsh:128:39:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Consumer_settle'
              });
            const v1950 = undefined /* Remote */;
            const v1951 = await txn1.getOutput('internal', 'v1950', ctc11, v1950);
            const v1952 = v1951[stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0')];
            const v1953 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1952);
            stdlib.assert(v1953, {
              at: './index.rsh:129:43:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Consumer_settle'
              });
            return;
            }
          else {
            const v1954 = [];
            const v1955 = undefined /* Remote */;
            const v1956 = await txn1.getOutput('internal', 'v1955', ctc11, v1955);
            const v1957 = v1956[stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0')];
            const v1958 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1957);
            stdlib.assert(v1958, {
              at: './index.rsh:129:43:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Consumer_settle'
              });
            return;
            }}
        else {
          const v1959 = stdlib.gt(v1122, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
          if (v1959) {
            const v1960 = [];
            const v1961 = undefined /* Remote */;
            const v1962 = await txn1.getOutput('internal', 'v1961', ctc11, v1961);
            const v1963 = v1962[stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0')];
            const v1964 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1963);
            stdlib.assert(v1964, {
              at: './index.rsh:128:39:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Consumer_settle'
              });
            return;
            }
          else {
            return;
            }}}
      break;
      }
    }
  
  
  };
export async function _Consumer_timeUp11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Consumer_timeUp11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Consumer_timeUp11 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Tuple([ctc2, ctc8]);
  
  
  const [v882, v883, v884, v885, v886, v904, v905, v906, v909, v910, v917, v918] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc0, ctc1, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc0, ctc6, ctc2]);
  const v1130 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:115:7:application',
    fs: ['at ./index.rsh:115:7:application call to [unknown function] (defined at: ./index.rsh:115:7:function exp)', 'at ./index.rsh:114:36:application call to [unknown function] (defined at: ./index.rsh:114:36:function exp)'],
    msg: 'in',
    who: 'Consumer_timeUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v882, v883, v884, v885, v886, v904, v905, v906, v909, v910, v917, v918, v1130],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:115:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1132], secs: v1134, time: v1133, didSend: v731, from: v1131 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Consumer_timeUp"
        });
      ;
      const v1135 = true;
      const v1136 = await txn1.getOutput('Consumer_timeUp', 'v1135', ctc4, v1135);
      
      const v1142 = [];
      const v1143 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v886,
          remote: ({
            accs: [v882],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:117:37:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:117:37:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
      const v1144 = await txn1.getOutput('internal', 'v1143', ctc9, v1143);
      const v1146 = v1144[stdlib.checkedBigNumberify('./index.rsh:117:37:application', stdlib.UInt_max, '0')];
      const v1151 = stdlib.add(v918, v1146);
      const v1973 = stdlib.safeMul(v909, v885);
      const v1974 = stdlib.safeSub(v1151, v1973);
      const v1975 = stdlib.sub(v1151, v1974);
      sim_r.txns.push({
        kind: 'from',
        to: v882,
        tok: undefined /* Nothing */
        });
      const v1976 = v917[stdlib.checkedBigNumberify('./index.rsh:122:20:application', stdlib.UInt_max, '0')];
      const v1977 = v1976[stdlib.checkedBigNumberify('./index.rsh:122:20:application', stdlib.UInt_max, '0')];
      const v1978 = stdlib.safeSub(v1977, v909);
      sim_r.txns.push({
        kind: 'from',
        to: v910,
        tok: v883
        });
      const v1979 = stdlib.gt(v1975, stdlib.checkedBigNumberify('./index.rsh:125:20:decimal', stdlib.UInt_max, '0'));
      if (v1979) {
        sim_r.txns.push({
          kind: 'from',
          to: v910,
          tok: undefined /* Nothing */
          });
        const v1980 = stdlib.gt(v909, stdlib.checkedBigNumberify('./index.rsh:126:23:decimal', stdlib.UInt_max, '0'));
        if (v1980) {
          sim_r.txns.push({
            kind: 'from',
            to: v882,
            tok: v883
            });
          const v1981 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
          if (v1981) {
            const v1983 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v886,
                remote: ({
                  accs: [v910],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
            await txn1.getOutput('internal', 'v1983', ctc9, v1983);
            const v1987 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v886,
                remote: ({
                  accs: [v882],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
            await txn1.getOutput('internal', 'v1987', ctc9, v1987);
            sim_r.txns.push({
              kind: 'halt',
              tok: v883
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v1992 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v886,
                remote: ({
                  accs: [v882],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
            await txn1.getOutput('internal', 'v1992', ctc9, v1992);
            sim_r.txns.push({
              kind: 'halt',
              tok: v883
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v1996 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
          if (v1996) {
            const v1998 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v886,
                remote: ({
                  accs: [v910],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
            await txn1.getOutput('internal', 'v1998', ctc9, v1998);
            sim_r.txns.push({
              kind: 'halt',
              tok: v883
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v883
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v2002 = stdlib.gt(v909, stdlib.checkedBigNumberify('./index.rsh:126:23:decimal', stdlib.UInt_max, '0'));
        if (v2002) {
          sim_r.txns.push({
            kind: 'from',
            to: v882,
            tok: v883
            });
          const v2003 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
          if (v2003) {
            const v2005 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v886,
                remote: ({
                  accs: [v910],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
            await txn1.getOutput('internal', 'v2005', ctc9, v2005);
            const v2009 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v886,
                remote: ({
                  accs: [v882],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
            await txn1.getOutput('internal', 'v2009', ctc9, v2009);
            sim_r.txns.push({
              kind: 'halt',
              tok: v883
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v2014 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v886,
                remote: ({
                  accs: [v882],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
            await txn1.getOutput('internal', 'v2014', ctc9, v2014);
            sim_r.txns.push({
              kind: 'halt',
              tok: v883
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v2018 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
          if (v2018) {
            const v2020 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v886,
                remote: ({
                  accs: [v910],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
            await txn1.getOutput('internal', 'v2020', ctc9, v2020);
            sim_r.txns.push({
              kind: 'halt',
              tok: v883
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v883
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc0, ctc6, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1132], secs: v1134, time: v1133, didSend: v731, from: v1131 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1135 = true;
  const v1136 = await txn1.getOutput('Consumer_timeUp', 'v1135', ctc4, v1135);
  stdlib.protect(ctc8, await interact.out(v1132, v1136), {
    at: './index.rsh:115:7:application',
    fs: ['at ./index.rsh:115:7:application call to [unknown function] (defined at: ./index.rsh:115:7:function exp)', 'at ./index.rsh:116:8:application call to "k" (defined at: ./index.rsh:115:7:function exp)', 'at ./index.rsh:114:36:application call to [unknown function] (defined at: ./index.rsh:114:36:function exp)'],
    msg: 'out',
    who: 'Consumer_timeUp'
    });
  
  const v1142 = [];
  const v1143 = undefined /* Remote */;
  const v1144 = await txn1.getOutput('internal', 'v1143', ctc9, v1143);
  const v1146 = v1144[stdlib.checkedBigNumberify('./index.rsh:117:37:application', stdlib.UInt_max, '0')];
  const v1151 = stdlib.add(v918, v1146);
  const v1152 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1146);
  stdlib.assert(v1152, {
    at: './index.rsh:117:37:application',
    fs: ['at ./index.rsh:114:36:application call to [unknown function] (defined at: ./index.rsh:114:36:function exp)'],
    msg: 'remote bill check',
    who: 'Consumer_timeUp'
    });
  const v1973 = stdlib.safeMul(v909, v885);
  const v1974 = stdlib.safeSub(v1151, v1973);
  const v1975 = stdlib.sub(v1151, v1974);
  ;
  const v1976 = v917[stdlib.checkedBigNumberify('./index.rsh:122:20:application', stdlib.UInt_max, '0')];
  const v1977 = v1976[stdlib.checkedBigNumberify('./index.rsh:122:20:application', stdlib.UInt_max, '0')];
  const v1978 = stdlib.safeSub(v1977, v909);
  ;
  const v1979 = stdlib.gt(v1975, stdlib.checkedBigNumberify('./index.rsh:125:20:decimal', stdlib.UInt_max, '0'));
  if (v1979) {
    ;
    const v1980 = stdlib.gt(v909, stdlib.checkedBigNumberify('./index.rsh:126:23:decimal', stdlib.UInt_max, '0'));
    if (v1980) {
      ;
      const v1981 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
      if (v1981) {
        const v1983 = undefined /* Remote */;
        const v1984 = await txn1.getOutput('internal', 'v1983', ctc9, v1983);
        const v1985 = v1984[stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0')];
        const v1986 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1985);
        stdlib.assert(v1986, {
          at: './index.rsh:128:39:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Consumer_timeUp'
          });
        const v1987 = undefined /* Remote */;
        const v1988 = await txn1.getOutput('internal', 'v1987', ctc9, v1987);
        const v1989 = v1988[stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0')];
        const v1990 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1989);
        stdlib.assert(v1990, {
          at: './index.rsh:129:43:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Consumer_timeUp'
          });
        return;
        }
      else {
        const v1992 = undefined /* Remote */;
        const v1993 = await txn1.getOutput('internal', 'v1992', ctc9, v1992);
        const v1994 = v1993[stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0')];
        const v1995 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1994);
        stdlib.assert(v1995, {
          at: './index.rsh:129:43:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Consumer_timeUp'
          });
        return;
        }}
    else {
      const v1996 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
      if (v1996) {
        const v1998 = undefined /* Remote */;
        const v1999 = await txn1.getOutput('internal', 'v1998', ctc9, v1998);
        const v2000 = v1999[stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0')];
        const v2001 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2000);
        stdlib.assert(v2001, {
          at: './index.rsh:128:39:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Consumer_timeUp'
          });
        return;
        }
      else {
        return;
        }}}
  else {
    const v2002 = stdlib.gt(v909, stdlib.checkedBigNumberify('./index.rsh:126:23:decimal', stdlib.UInt_max, '0'));
    if (v2002) {
      ;
      const v2003 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
      if (v2003) {
        const v2005 = undefined /* Remote */;
        const v2006 = await txn1.getOutput('internal', 'v2005', ctc9, v2005);
        const v2007 = v2006[stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0')];
        const v2008 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2007);
        stdlib.assert(v2008, {
          at: './index.rsh:128:39:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Consumer_timeUp'
          });
        const v2009 = undefined /* Remote */;
        const v2010 = await txn1.getOutput('internal', 'v2009', ctc9, v2009);
        const v2011 = v2010[stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0')];
        const v2012 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2011);
        stdlib.assert(v2012, {
          at: './index.rsh:129:43:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Consumer_timeUp'
          });
        return;
        }
      else {
        const v2014 = undefined /* Remote */;
        const v2015 = await txn1.getOutput('internal', 'v2014', ctc9, v2014);
        const v2016 = v2015[stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0')];
        const v2017 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2016);
        stdlib.assert(v2017, {
          at: './index.rsh:129:43:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Consumer_timeUp'
          });
        return;
        }}
    else {
      const v2018 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
      if (v2018) {
        const v2020 = undefined /* Remote */;
        const v2021 = await txn1.getOutput('internal', 'v2020', ctc9, v2020);
        const v2022 = v2021[stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0')];
        const v2023 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2022);
        stdlib.assert(v2023, {
          at: './index.rsh:128:39:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Consumer_timeUp'
          });
        return;
        }
      else {
        return;
        }}}
  
  
  };
export async function Producer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Producer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Producer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Object({
    algoperUnit: ctc0,
    gridCtc: ctc1,
    token: ctc2,
    units: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Data({
    Consumer_applyOrder0_93: ctc4,
    Consumer_settle0_93: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Tuple([ctc0, ctc9]);
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Tuple([ctc0, ctc0, ctc7]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v862 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v863 = [v862];
  const v869 = stdlib.protect(ctc3, await interact.startOrder(), {
    at: './index.rsh:40:83:application',
    fs: ['at ./index.rsh:39:16:application call to [unknown function] (defined at: ./index.rsh:39:20:function exp)'],
    msg: 'startOrder',
    who: 'Producer'
    });
  const v870 = v869.algoperUnit;
  const v871 = v869.gridCtc;
  const v872 = v869.token;
  const v873 = v869.units;
  const v878 = stdlib.gt(v873, stdlib.checkedBigNumberify('./index.rsh:42:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v878, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:42:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:39:16:application call to [unknown function] (defined at: ./index.rsh:39:20:function exp)'],
    msg: 'Unit shoube be greater than zero',
    who: 'Producer'
    });
  const v880 = stdlib.gt(v870, stdlib.checkedBigNumberify('./index.rsh:43:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v880, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:43:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:39:16:application call to [unknown function] (defined at: ./index.rsh:39:20:function exp)'],
    msg: 'Per unit price shoube be greater than zero',
    who: 'Producer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v872, v873, v870, v871],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc0, ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v883, v884, v885, v886], secs: v888, time: v887, didSend: v70, from: v882 } = txn1;
      
      const v889 = v863[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0')];
      const v890 = stdlib.Array_set(v889, '0', stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0'));
      const v891 = stdlib.Array_set(v863, stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0'), v890);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v883
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v883, v884, v885, v886], secs: v888, time: v887, didSend: v70, from: v882 } = txn1;
  const v889 = v863[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0')];
  const v890 = stdlib.Array_set(v889, '0', stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0'));
  const v891 = stdlib.Array_set(v863, stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0'), v890);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v882, v883, v884, v885, v886, v887, v891],
    evt_cnt: 0,
    funcNum: 1,
    lct: v887,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:12:dot', stdlib.UInt_max, '0'), [[v884, v883]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v895, time: v894, didSend: v77, from: v893 } = txn2;
      
      ;
      const v896 = v891[stdlib.checkedBigNumberify('./index.rsh:52:12:dot', stdlib.UInt_max, '0')];
      const v897 = v896[stdlib.checkedBigNumberify('./index.rsh:52:12:dot', stdlib.UInt_max, '0')];
      const v898 = stdlib.add(v897, v884);
      const v900 = stdlib.Array_set(v896, '0', v898);
      const v901 = stdlib.Array_set(v891, stdlib.checkedBigNumberify('./index.rsh:52:12:dot', stdlib.UInt_max, '0'), v900);
      sim_r.txns.push({
        amt: v884,
        kind: 'to',
        tok: v883
        });
      const v904 = stdlib.safeAdd(v887, stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, '900'));
      const v905 = stdlib.checkedBigNumberify('./index.rsh:83:102:decimal', stdlib.UInt_max, '0');
      const v906 = stdlib.checkedBigNumberify('./index.rsh:83:93:decimal', stdlib.UInt_max, '0');
      const v907 = true;
      const v909 = stdlib.checkedBigNumberify('./index.rsh:83:95:decimal', stdlib.UInt_max, '0');
      const v910 = v882;
      const v911 = v894;
      const v917 = v901;
      const v918 = stdlib.checkedBigNumberify('./index.rsh:36:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v907;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1156 = stdlib.safeMul(v909, v885);
        const v1157 = stdlib.safeSub(v918, v1156);
        const v1161 = stdlib.sub(v918, v1157);
        sim_r.txns.push({
          kind: 'from',
          to: v882,
          tok: undefined /* Nothing */
          });
        const v1162 = v917[stdlib.checkedBigNumberify('./index.rsh:122:20:application', stdlib.UInt_max, '0')];
        const v1163 = v1162[stdlib.checkedBigNumberify('./index.rsh:122:20:application', stdlib.UInt_max, '0')];
        const v1164 = stdlib.safeSub(v1163, v909);
        sim_r.txns.push({
          kind: 'from',
          to: v910,
          tok: v883
          });
        const v1175 = stdlib.gt(v1161, stdlib.checkedBigNumberify('./index.rsh:125:20:decimal', stdlib.UInt_max, '0'));
        if (v1175) {
          sim_r.txns.push({
            kind: 'from',
            to: v910,
            tok: undefined /* Nothing */
            });
          const v1181 = stdlib.gt(v909, stdlib.checkedBigNumberify('./index.rsh:126:23:decimal', stdlib.UInt_max, '0'));
          if (v1181) {
            sim_r.txns.push({
              kind: 'from',
              to: v882,
              tok: v883
              });
            const v1191 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
            if (v1191) {
              const v1194 = [];
              const v1195 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v886,
                  remote: ({
                    accs: [v910],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
              await txn3.getOutput('internal', 'v1195', ctc10, v1195);
              const v1209 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v886,
                  remote: ({
                    accs: [v882],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
              await txn3.getOutput('internal', 'v1209', ctc10, v1209);
              sim_r.txns.push({
                kind: 'halt',
                tok: v883
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v1232 = [];
              const v1233 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v886,
                  remote: ({
                    accs: [v882],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
              await txn3.getOutput('internal', 'v1233', ctc10, v1233);
              sim_r.txns.push({
                kind: 'halt',
                tok: v883
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v1253 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
            if (v1253) {
              const v1256 = [];
              const v1257 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v886,
                  remote: ({
                    accs: [v910],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
              await txn3.getOutput('internal', 'v1257', ctc10, v1257);
              sim_r.txns.push({
                kind: 'halt',
                tok: v883
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v883
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}
        else {
          const v1315 = stdlib.gt(v909, stdlib.checkedBigNumberify('./index.rsh:126:23:decimal', stdlib.UInt_max, '0'));
          if (v1315) {
            sim_r.txns.push({
              kind: 'from',
              to: v882,
              tok: v883
              });
            const v1325 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
            if (v1325) {
              const v1328 = [];
              const v1329 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v886,
                  remote: ({
                    accs: [v910],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
              await txn3.getOutput('internal', 'v1329', ctc10, v1329);
              const v1343 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v886,
                  remote: ({
                    accs: [v882],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
              await txn3.getOutput('internal', 'v1343', ctc10, v1343);
              sim_r.txns.push({
                kind: 'halt',
                tok: v883
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v1366 = [];
              const v1367 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v886,
                  remote: ({
                    accs: [v882],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
              await txn3.getOutput('internal', 'v1367', ctc10, v1367);
              sim_r.txns.push({
                kind: 'halt',
                tok: v883
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v1387 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
            if (v1387) {
              const v1390 = [];
              const v1391 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v886,
                  remote: ({
                    accs: [v910],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
              await txn3.getOutput('internal', 'v1391', ctc10, v1391);
              sim_r.txns.push({
                kind: 'halt',
                tok: v883
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v883
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc2, ctc0, ctc0, ctc1, ctc0, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v895, time: v894, didSend: v77, from: v893 } = txn2;
  ;
  const v896 = v891[stdlib.checkedBigNumberify('./index.rsh:52:12:dot', stdlib.UInt_max, '0')];
  const v897 = v896[stdlib.checkedBigNumberify('./index.rsh:52:12:dot', stdlib.UInt_max, '0')];
  const v898 = stdlib.add(v897, v884);
  const v900 = stdlib.Array_set(v896, '0', v898);
  const v901 = stdlib.Array_set(v891, stdlib.checkedBigNumberify('./index.rsh:52:12:dot', stdlib.UInt_max, '0'), v900);
  ;
  const v902 = stdlib.addressEq(v882, v893);
  stdlib.assert(v902, {
    at: './index.rsh:52:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Producer'
    });
  const v904 = stdlib.safeAdd(v887, stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, '900'));
  let v905 = stdlib.checkedBigNumberify('./index.rsh:83:102:decimal', stdlib.UInt_max, '0');
  let v906 = stdlib.checkedBigNumberify('./index.rsh:83:93:decimal', stdlib.UInt_max, '0');
  let v907 = true;
  let v909 = stdlib.checkedBigNumberify('./index.rsh:83:95:decimal', stdlib.UInt_max, '0');
  let v910 = v882;
  let v911 = v894;
  let v917 = v901;
  let v918 = stdlib.checkedBigNumberify('./index.rsh:36:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v907;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: ['time', v904],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc8],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1132], secs: v1134, time: v1133, didSend: v731, from: v1131 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v1135 = true;
      await txn5.getOutput('Consumer_timeUp', 'v1135', ctc7, v1135);
      const v1142 = [];
      const v1143 = undefined /* Remote */;
      const v1144 = await txn5.getOutput('internal', 'v1143', ctc10, v1143);
      const v1146 = v1144[stdlib.checkedBigNumberify('./index.rsh:117:37:application', stdlib.UInt_max, '0')];
      const v1151 = stdlib.add(v918, v1146);
      const v1152 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1146);
      stdlib.assert(v1152, {
        at: './index.rsh:117:37:application',
        fs: ['at ./index.rsh:114:36:application call to [unknown function] (defined at: ./index.rsh:114:36:function exp)'],
        msg: 'remote bill check',
        who: 'Producer'
        });
      const cv905 = v905;
      const cv906 = v906;
      const cv907 = false;
      const cv909 = v909;
      const cv910 = v910;
      const cv911 = v1133;
      const cv917 = v917;
      const cv918 = v1151;
      
      v905 = cv905;
      v906 = cv906;
      v907 = cv907;
      v909 = cv909;
      v910 = cv910;
      v911 = cv911;
      v917 = cv917;
      v918 = cv918;
      
      txn3 = txn5;
      continue;
      }
    else {
      const {data: [v987], secs: v989, time: v988, didSend: v577, from: v986 } = txn4;
      switch (v987[0]) {
        case 'Consumer_applyOrder0_93': {
          const v990 = v987[1];
          undefined /* setApiDetails */;
          const v995 = v990[stdlib.checkedBigNumberify('./index.rsh:86:10:spread', stdlib.UInt_max, '0')];
          const v997 = stdlib.addressEq(v882, v986);
          const v998 = v997 ? false : true;
          stdlib.assert(v998, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:87:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:51:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
            msg: 'Producer and consumer should be diffrent',
            who: 'Producer'
            });
          const v1000 = stdlib.gt(v995, stdlib.checkedBigNumberify('./index.rsh:89:23:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1000, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:89:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:51:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
            msg: 'Units should not be zero',
            who: 'Producer'
            });
          const v1002 = stdlib.le(v995, v884);
          stdlib.assert(v1002, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:92:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:86:51:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:86:51:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
            msg: 'Insuffiecient tokens',
            who: 'Producer'
            });
          ;
          const v1027 = true;
          await txn4.getOutput('Consumer_applyOrder', 'v1027', ctc7, v1027);
          const cv905 = v995;
          const cv906 = stdlib.checkedBigNumberify('./index.rsh:96:17:decimal', stdlib.UInt_max, '0');
          const cv907 = true;
          const cv909 = stdlib.checkedBigNumberify('./index.rsh:96:20:decimal', stdlib.UInt_max, '0');
          const cv910 = v986;
          const cv911 = v988;
          const cv917 = v917;
          const cv918 = v918;
          
          v905 = cv905;
          v906 = cv906;
          v907 = cv907;
          v909 = cv909;
          v910 = cv910;
          v911 = cv911;
          v917 = cv917;
          v918 = cv918;
          
          txn3 = txn4;
          continue;
          break;
          }
        case 'Consumer_settle0_93': {
          const v1059 = v987[1];
          undefined /* setApiDetails */;
          const v1074 = v1059[stdlib.checkedBigNumberify('./index.rsh:99:10:spread', stdlib.UInt_max, '0')];
          const v1075 = stdlib.gt(v1074, stdlib.checkedBigNumberify('./index.rsh:100:27:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1075, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:100:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:42:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
            msg: 'Units can not be zero',
            who: 'Producer'
            });
          const v1077 = stdlib.lt(v1074, v884);
          stdlib.assert(v1077, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:101:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:42:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
            msg: 'Unit should not exceed',
            who: 'Producer'
            });
          const v1079 = stdlib.addressEq(v910, v986);
          stdlib.assert(v1079, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:42:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:99:42:function exp)', 'at ./index.rsh:83:90:application call to [unknown function] (defined at: ./index.rsh:83:90:function exp)'],
            msg: 'Winner can not be different',
            who: 'Producer'
            });
          const v1081 = stdlib.safeMul(v1074, v885);
          const v1083 = stdlib.add(v918, v1081);
          ;
          const v1114 = true;
          await txn4.getOutput('Consumer_settle', 'v1114', ctc7, v1114);
          const v1121 = stdlib.lt(v905, v1074);
          let v1122;
          if (v1121) {
            const v1123 = stdlib.safeSub(v1074, v905);
            v1122 = v1123;
            }
          else {
            v1122 = stdlib.checkedBigNumberify('./index.rsh:107:68:decimal', stdlib.UInt_max, '0');
            }
          const v1124 = stdlib.gt(v905, v1074);
          let v1125;
          if (v1124) {
            const v1126 = stdlib.safeSub(v905, v1074);
            v1125 = v1126;
            }
          else {
            v1125 = stdlib.checkedBigNumberify('./index.rsh:108:68:decimal', stdlib.UInt_max, '0');
            }
          const cv905 = v1074;
          const cv906 = v1122;
          const cv907 = false;
          const cv909 = v1125;
          const cv910 = v986;
          const cv911 = v988;
          const cv917 = v917;
          const cv918 = v1083;
          
          v905 = cv905;
          v906 = cv906;
          v907 = cv907;
          v909 = cv909;
          v910 = cv910;
          v911 = cv911;
          v917 = cv917;
          v918 = cv918;
          
          txn3 = txn4;
          continue;
          break;
          }
        }}
    
    }
  const v1156 = stdlib.safeMul(v909, v885);
  const v1157 = stdlib.safeSub(v918, v1156);
  const v1161 = stdlib.sub(v918, v1157);
  ;
  const v1162 = v917[stdlib.checkedBigNumberify('./index.rsh:122:20:application', stdlib.UInt_max, '0')];
  const v1163 = v1162[stdlib.checkedBigNumberify('./index.rsh:122:20:application', stdlib.UInt_max, '0')];
  const v1164 = stdlib.safeSub(v1163, v909);
  ;
  const v1175 = stdlib.gt(v1161, stdlib.checkedBigNumberify('./index.rsh:125:20:decimal', stdlib.UInt_max, '0'));
  if (v1175) {
    ;
    const v1181 = stdlib.gt(v909, stdlib.checkedBigNumberify('./index.rsh:126:23:decimal', stdlib.UInt_max, '0'));
    if (v1181) {
      ;
      const v1191 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
      if (v1191) {
        const v1194 = [];
        const v1195 = undefined /* Remote */;
        const v1196 = await txn3.getOutput('internal', 'v1195', ctc10, v1195);
        const v1198 = v1196[stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0')];
        const v1204 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1198);
        stdlib.assert(v1204, {
          at: './index.rsh:128:39:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Producer'
          });
        const v1209 = undefined /* Remote */;
        const v1210 = await txn3.getOutput('internal', 'v1209', ctc10, v1209);
        const v1212 = v1210[stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0')];
        const v1218 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1212);
        stdlib.assert(v1218, {
          at: './index.rsh:129:43:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Producer'
          });
        return;
        }
      else {
        const v1232 = [];
        const v1233 = undefined /* Remote */;
        const v1234 = await txn3.getOutput('internal', 'v1233', ctc10, v1233);
        const v1236 = v1234[stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0')];
        const v1242 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1236);
        stdlib.assert(v1242, {
          at: './index.rsh:129:43:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Producer'
          });
        return;
        }}
    else {
      const v1253 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
      if (v1253) {
        const v1256 = [];
        const v1257 = undefined /* Remote */;
        const v1258 = await txn3.getOutput('internal', 'v1257', ctc10, v1257);
        const v1260 = v1258[stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0')];
        const v1266 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1260);
        stdlib.assert(v1266, {
          at: './index.rsh:128:39:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Producer'
          });
        return;
        }
      else {
        return;
        }}}
  else {
    const v1315 = stdlib.gt(v909, stdlib.checkedBigNumberify('./index.rsh:126:23:decimal', stdlib.UInt_max, '0'));
    if (v1315) {
      ;
      const v1325 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
      if (v1325) {
        const v1328 = [];
        const v1329 = undefined /* Remote */;
        const v1330 = await txn3.getOutput('internal', 'v1329', ctc10, v1329);
        const v1332 = v1330[stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0')];
        const v1338 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1332);
        stdlib.assert(v1338, {
          at: './index.rsh:128:39:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Producer'
          });
        const v1343 = undefined /* Remote */;
        const v1344 = await txn3.getOutput('internal', 'v1343', ctc10, v1343);
        const v1346 = v1344[stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0')];
        const v1352 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1346);
        stdlib.assert(v1352, {
          at: './index.rsh:129:43:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Producer'
          });
        return;
        }
      else {
        const v1366 = [];
        const v1367 = undefined /* Remote */;
        const v1368 = await txn3.getOutput('internal', 'v1367', ctc10, v1367);
        const v1370 = v1368[stdlib.checkedBigNumberify('./index.rsh:129:43:application', stdlib.UInt_max, '0')];
        const v1376 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1370);
        stdlib.assert(v1376, {
          at: './index.rsh:129:43:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Producer'
          });
        return;
        }}
    else {
      const v1387 = stdlib.gt(v906, stdlib.checkedBigNumberify('./index.rsh:128:20:decimal', stdlib.UInt_max, '0'));
      if (v1387) {
        const v1390 = [];
        const v1391 = undefined /* Remote */;
        const v1392 = await txn3.getOutput('internal', 'v1391', ctc10, v1391);
        const v1394 = v1392[stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0')];
        const v1400 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1394);
        stdlib.assert(v1400, {
          at: './index.rsh:128:39:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Producer'
          });
        return;
        }
      else {
        return;
        }}}
  
  
  
  };
export async function Consumer_applyOrder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Consumer_applyOrder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Consumer_applyOrder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 11) {return _Consumer_applyOrder11(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Consumer_settle(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Consumer_settle expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Consumer_settle expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 11) {return _Consumer_settle11(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Consumer_timeUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Consumer_timeUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Consumer_timeUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 11) {return _Consumer_timeUp11(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Consumer_applyOrder(uint64,uint64)byte`, `Consumer_settle(uint64)byte`, `Consumer_timeUp()byte`, `_reachp_0((uint64,uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[16])))void`, `_reachp_4((uint64,()))void`],
    pure: [`Order_consumer()address`, `Order_pricePerUnit()uint64`, `Order_producer()address`, `Order_started()byte`, `Order_units()uint64`],
    sigs: [`Consumer_applyOrder(uint64,uint64)byte`, `Consumer_settle(uint64)byte`, `Consumer_timeUp()byte`, `Order_consumer()address`, `Order_pricePerUnit()uint64`, `Order_producer()address`, `Order_started()byte`, `Order_units()uint64`, `_reachp_0((uint64,uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[16])))void`, `_reachp_4((uint64,()))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAMAAEGCAsgQKCNBigwOAQmBgAFYXBwSUQEm+JSoAEBBN4sK5MBADEYQQR1KGRJIls1ASVbNQInBWQrZFCCDAQU29T2BCHDwwwEPIgOPwRFp2BBBF4xpz4EePwYEwR7z3qIBKMVTVUEv4aWtgTWO0i6BN1P0QEE39kjKDYaAI4MAccBqABYAZcBjQBuAbgAAQP+A9gD8wPoADYaARc2GgIXNQs1DCWvJwU0DBY0CxZQUFA1CyEENAESRIgIPzQLIls1DDQLVwgRNRuABDp2Ank0DBZQNBtQsDQMiAhwMgY0FQxENBsiVY0CB+oH7UL/qDYaARc1CyWvKzQLFlAlr1BQNQtC/64lrzULIQQ0ARJEiAfpNAsiWzUMgARv9I4pNAwWULA0DIgIJDIGNBUPRCM1C4AIAAAAAAAABG80CxZRBwhQsDQLFlEHCDUEKTQWFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNBayGCqyGjQYFrIaNBpJshyyGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAABHc0C1CwNAtJNQwiWzULIjQLEkQiMgY0DTQLCDUNNQ81EjQSQQMNNBo0GRZQNBgWUDQXFlA0FhZQNBUWUDQUFlA0ExZQNBEWUDQQUDQOUDQNFlAhBDIGNQI1AScFSwFXAH9nK0xXfxpnKDQBFjQCFlBnMRkiEkSIB0c0A0AACoAEFR98dTQEULAjQyJEMRkiEkRC/+o0ASEEEkSIBsQ0FxY1BEL/5zQBIQQSRIgGszQaNQRC/9c0ASEEEkSIBqMrNQRC/8g0ASEEEkSIBpQ0GBY1BEL/tzQbVwEQIls1DDQaMQATRDQMIg1ENAw0GA5EIzULgAgAAAAAAAAEAzQLFlEHCFCwNAsWUQcINQQ0DCIjIjEAMgY1DzUQNRE1EjUTNRRC/v00GyNbSTUcIg1ENBw0GAxENBAxABJENBw0FwtJNRuIBo0jNQuACAAAAAAAAARaNAsWUQcIULA0CxZRBwg1BDQUNBwMQQG9NBw0FAk1DDQUNBwNQQG0NBQ0HAk1CzQcNAwiNAsxADIGNA00Gwg1DTUPNRA1ETUSNRM1FEL+gDEANRoyBjUbNAsiWzUMNAslWzUZNAuBEFs1GDQLgRhbNRc0CyEFWzUWgARNfgcnNAwWUDQZFlA0GBZQNBcWUDQWFlCwNAyIBciBEa9JNQtJVwARJa9cAFwANQwhB4gFyyI0GTIKiAWlNBo0GRZQNBgWUDQXFlA0FhZQNBsWUDQMUCEGr1AjMgZC/iojNAESRElXACA1GkkhBVs1GUkhCFs1GEkhCVs1F0khCls1FkkhBls1G1dIETUMNAsXNRWABNUVGRQ0FRZQsDQViAVDNAxXABE1CzQYNBkxFjQAIwhJNQAJRwM4FDIKEkQ4ECELEkQ4EU8CEkQ4EhJENBoxABJENBuBhAcINRUiIiMiNBoyBjQMNAtJIls0GAgWXABcACI1DTUONQ81EDURNRI1EzUUQv1MiATSIQeIBO82GgE1C0L+vIgEwjYaATULQv88iAS3NhoBNQtC/B6IBKw2GgE1C0L8aSIxNBJEgQMxNRJEIjE2EkQiMTcSRIgEjIGZAa8iIkL9LyI1DEL+RCI1C0L+TTQNNBE0FwsJNQs0DTQLCTUMNAs0GogEcTQOVwARIls0EQk0GTQQiARSNAwiDUEA/jQMNBCIBFI0ESINQQHWNBE0GTQaiAQ0NBMiDUECOig1DCk0FhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASSyEDQWshgnBLIaNBMWsho0EEmyHLIaszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAAEqzQLULA0CzUNIjQNIlsSRCk0FhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASSyEDQWshgqsho0ERayGjQaSbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAS5NAtQsDQLNQwiNAwiWxJEIjQZMgoyCYgDDjEZgQUSRIgDaiIyCjIJiAOQQvwYNBEiDUEBzDQRNBk0GogDPTQTIg1BAjAoNQwpNBYWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEkshA0FrIYJwSyGjQTFrIaNBBJshyyGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAABTE0C1CwNAs1DSI0DSJbEkQpNBYWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEkshA0FrIYKrIaNBEWsho0GkmyHLIaszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAAFPzQLULA0CzUMIjQMIlsSRCI0GTIKMgmIAhdC/wY0EyINQQDZKTQWFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNBayGCcEsho0ExayGjQQSbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAATpNAtQsDQLNQwiNAwiWxJEIjQZMgoyCYgBo0L+kik0FhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASSyEDQWshgqsho0ERayGjQaSbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAATRNAtQsDQLNQwiNAwiWxJEIjQZMgoyCYgBN0L+JiI0GTIKMgmIASpC/hk0EyINQQDZKTQWFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNBayGCcEsho0ExayGjQQSbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAVvNAtQsDQLNQwiNAwiWxJEIjQZMgoyCYgAtkL9pSk0FhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASSyEDQWshgqsho0ERayGjQaSbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAVXNAtQsDQLNQwiNAwiWxJEIjQZMgoyCYgASkL9OSI0GTIKMgmIAD1C/SwisgEjshCyB7IIs4kisgEhC7IQshSyEbISs4lC+ZZC+eJIiUwJSTUGMgmIAG6JCUlB/+5JNQaIAHiJsbIVQv/MSVcAIDUaSSEFWzUZSSEIWzUYSSEJWzUXSSEKWzUWSSEGWzUVSYFIWzUUSYFQWzUTSYFYWzURSVdgIDUQSVeAETUOgZEBWzUNiSM1A4mxQv97SSISTDQCEhFEibFC/2E0BjQHSg9B/3tC/4M0Bgg1BokxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJsbIJQv8t`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `607`,
    1001: `608`,
    1002: `608`,
    1003: `609`,
    1004: `610`,
    1005: `610`,
    1006: `611`,
    1007: `612`,
    1008: `612`,
    1009: `613`,
    101: `21`,
    1010: `613`,
    1011: `613`,
    1012: `614`,
    1013: `614`,
    1014: `615`,
    1015: `615`,
    1016: `616`,
    1017: `617`,
    1018: `617`,
    1019: `618`,
    102: `21`,
    1020: `618`,
    1021: `618`,
    1022: `618`,
    1023: `618`,
    1024: `618`,
    1025: `619`,
    1026: `619`,
    1027: `620`,
    1028: `621`,
    1029: `622`,
    103: `21`,
    1030: `624`,
    1031: `624`,
    1032: `625`,
    1033: `625`,
    1034: `625`,
    1035: `626`,
    1036: `626`,
    1037: `627`,
    1038: `627`,
    1039: `627`,
    104: `21`,
    1040: `628`,
    1041: `628`,
    1042: `629`,
    1043: `629`,
    1044: `630`,
    1045: `630`,
    1046: `633`,
    1047: `633`,
    1048: `634`,
    1049: `634`,
    105: `21`,
    1050: `635`,
    1051: `636`,
    1052: `637`,
    1053: `638`,
    1054: `638`,
    1055: `639`,
    1056: `640`,
    1057: `640`,
    1058: `641`,
    1059: `641`,
    106: `21`,
    1060: `642`,
    1061: `642`,
    1062: `643`,
    1063: `644`,
    1064: `645`,
    1065: `645`,
    1066: `646`,
    1067: `646`,
    1068: `647`,
    1069: `648`,
    107: `21`,
    1070: `649`,
    1071: `649`,
    1072: `650`,
    1073: `650`,
    1074: `651`,
    1075: `652`,
    1076: `653`,
    1077: `653`,
    1078: `654`,
    1079: `655`,
    108: `21`,
    1080: `658`,
    1081: `658`,
    1082: `659`,
    1083: `659`,
    1084: `660`,
    1085: `661`,
    1086: `664`,
    1087: `664`,
    1088: `665`,
    1089: `665`,
    109: `21`,
    1090: `665`,
    1091: `666`,
    1092: `667`,
    1093: `667`,
    1094: `668`,
    1095: `669`,
    1096: `670`,
    1097: `671`,
    1098: `672`,
    1099: `672`,
    11: `2`,
    110: `21`,
    1100: `673`,
    1101: `673`,
    1102: `674`,
    1103: `674`,
    1104: `675`,
    1105: `675`,
    1106: `676`,
    1107: `677`,
    1108: `678`,
    1109: `679`,
    111: `21`,
    1110: `679`,
    1111: `680`,
    1112: `681`,
    1113: `682`,
    1114: `682`,
    1115: `683`,
    1116: `683`,
    1117: `684`,
    1118: `685`,
    1119: `685`,
    112: `21`,
    1120: `686`,
    1121: `686`,
    1122: `687`,
    1123: `687`,
    1124: `688`,
    1125: `688`,
    1126: `689`,
    1127: `689`,
    1128: `690`,
    1129: `690`,
    113: `21`,
    1130: `691`,
    1131: `691`,
    1132: `692`,
    1133: `692`,
    1134: `693`,
    1135: `693`,
    1136: `693`,
    1137: `695`,
    1138: `695`,
    1139: `695`,
    114: `21`,
    1140: `696`,
    1141: `696`,
    1142: `697`,
    1143: `697`,
    1144: `697`,
    1145: `698`,
    1146: `698`,
    1147: `698`,
    1148: `699`,
    1149: `699`,
    115: `21`,
    1150: `700`,
    1151: `700`,
    1152: `700`,
    1153: `702`,
    1154: `702`,
    1155: `702`,
    1156: `703`,
    1157: `703`,
    1158: `703`,
    1159: `704`,
    116: `21`,
    1160: `704`,
    1161: `705`,
    1162: `705`,
    1163: `705`,
    1164: `707`,
    1165: `707`,
    1166: `707`,
    1167: `708`,
    1168: `708`,
    1169: `708`,
    117: `21`,
    1170: `709`,
    1171: `709`,
    1172: `710`,
    1173: `710`,
    1174: `710`,
    1175: `712`,
    1176: `712`,
    1177: `712`,
    1178: `713`,
    1179: `713`,
    118: `21`,
    1180: `713`,
    1181: `714`,
    1182: `714`,
    1183: `715`,
    1184: `715`,
    1185: `715`,
    1186: `717`,
    1187: `718`,
    1188: `718`,
    1189: `719`,
    119: `21`,
    1190: `720`,
    1191: `721`,
    1192: `721`,
    1193: `722`,
    1194: `722`,
    1195: `723`,
    1196: `724`,
    1197: `725`,
    1198: `726`,
    1199: `726`,
    12: `2`,
    120: `21`,
    1200: `727`,
    1201: `728`,
    1202: `729`,
    1203: `730`,
    1204: `730`,
    1205: `731`,
    1206: `732`,
    1207: `733`,
    1208: `733`,
    1209: `733`,
    121: `21`,
    1210: `734`,
    1211: `734`,
    1212: `734`,
    1213: `735`,
    1214: `736`,
    1215: `737`,
    1216: `738`,
    1217: `738`,
    1218: `738`,
    1219: `740`,
    122: `21`,
    1220: `741`,
    1221: `741`,
    1222: `742`,
    1223: `742`,
    1224: `742`,
    1225: `744`,
    1226: `745`,
    1227: `745`,
    1228: `746`,
    1229: `746`,
    123: `21`,
    1230: `746`,
    1231: `748`,
    1232: `748`,
    1233: `749`,
    1234: `749`,
    1235: `750`,
    1236: `750`,
    1237: `751`,
    1238: `752`,
    1239: `753`,
    124: `22`,
    1240: `753`,
    1241: `754`,
    1242: `754`,
    1243: `755`,
    1244: `755`,
    1245: `756`,
    1246: `757`,
    1247: `757`,
    1248: `758`,
    1249: `758`,
    125: `22`,
    1250: `760`,
    1251: `760`,
    1252: `761`,
    1253: `761`,
    1254: `761`,
    1255: `762`,
    1256: `762`,
    1257: `763`,
    1258: `763`,
    1259: `763`,
    126: `22`,
    1260: `764`,
    1261: `765`,
    1262: `766`,
    1263: `766`,
    1264: `767`,
    1265: `769`,
    1266: `769`,
    1267: `771`,
    1268: `771`,
    1269: `772`,
    127: `23`,
    1270: `772`,
    1271: `772`,
    1272: `773`,
    1273: `773`,
    1274: `774`,
    1275: `775`,
    1276: `776`,
    1277: `776`,
    1278: `776`,
    1279: `777`,
    128: `23`,
    1280: `777`,
    1281: `778`,
    1282: `778`,
    1283: `779`,
    1284: `779`,
    1285: `779`,
    1286: `780`,
    1287: `780`,
    1288: `781`,
    1289: `782`,
    129: `23`,
    1290: `783`,
    1291: `783`,
    1292: `783`,
    1293: `784`,
    1294: `784`,
    1295: `785`,
    1296: `785`,
    1297: `786`,
    1298: `786`,
    1299: `787`,
    13: `2`,
    130: `23`,
    1300: `787`,
    1301: `787`,
    1302: `788`,
    1303: `788`,
    1304: `789`,
    1305: `790`,
    1306: `791`,
    1307: `791`,
    1308: `791`,
    1309: `792`,
    131: `23`,
    1310: `793`,
    1311: `793`,
    1312: `794`,
    1313: `795`,
    1314: `795`,
    1315: `796`,
    1316: `797`,
    1317: `798`,
    1318: `799`,
    1319: `799`,
    132: `23`,
    1320: `800`,
    1321: `800`,
    1322: `801`,
    1323: `802`,
    1324: `802`,
    1325: `803`,
    1326: `804`,
    1327: `804`,
    1328: `805`,
    1329: `806`,
    133: `23`,
    1330: `806`,
    1331: `807`,
    1332: `808`,
    1333: `809`,
    1334: `809`,
    1335: `810`,
    1336: `811`,
    1337: `812`,
    1338: `812`,
    1339: `813`,
    134: `23`,
    1340: `814`,
    1341: `814`,
    1342: `815`,
    1343: `815`,
    1344: `817`,
    1345: `817`,
    1346: `818`,
    1347: `818`,
    1348: `819`,
    1349: `819`,
    135: `23`,
    1350: `820`,
    1351: `820`,
    1352: `821`,
    1353: `822`,
    1354: `822`,
    1355: `823`,
    1356: `823`,
    1357: `824`,
    1358: `825`,
    1359: `825`,
    136: `23`,
    1360: `826`,
    1361: `826`,
    1362: `827`,
    1363: `830`,
    1364: `830`,
    1365: `831`,
    1366: `832`,
    1367: `832`,
    1368: `833`,
    1369: `834`,
    137: `23`,
    1370: `834`,
    1371: `835`,
    1372: `836`,
    1373: `837`,
    1374: `838`,
    1375: `838`,
    1376: `838`,
    1377: `839`,
    1378: `839`,
    1379: `839`,
    138: `23`,
    1380: `840`,
    1381: `841`,
    1382: `841`,
    1383: `842`,
    1384: `842`,
    1385: `842`,
    1386: `842`,
    1387: `842`,
    1388: `842`,
    1389: `842`,
    139: `23`,
    1390: `842`,
    1391: `842`,
    1392: `842`,
    1393: `843`,
    1394: `843`,
    1395: `844`,
    1396: `845`,
    1397: `846`,
    1398: `846`,
    1399: `847`,
    14: `2`,
    140: `23`,
    1400: `847`,
    1401: `848`,
    1402: `849`,
    1403: `849`,
    1404: `850`,
    1405: `851`,
    1406: `852`,
    1407: `853`,
    1408: `856`,
    1409: `857`,
    141: `23`,
    1410: `857`,
    1411: `858`,
    1412: `859`,
    1413: `860`,
    1414: `861`,
    1415: `861`,
    1416: `862`,
    1417: `862`,
    1418: `863`,
    1419: `864`,
    142: `23`,
    1420: `864`,
    1421: `865`,
    1422: `866`,
    1423: `866`,
    1424: `867`,
    1425: `868`,
    1426: `868`,
    1427: `869`,
    1428: `870`,
    1429: `871`,
    143: `23`,
    1430: `871`,
    1431: `872`,
    1432: `873`,
    1433: `874`,
    1434: `874`,
    1435: `875`,
    1436: `876`,
    1437: `876`,
    1438: `877`,
    1439: `877`,
    144: `23`,
    1440: `878`,
    1441: `878`,
    1442: `879`,
    1443: `880`,
    1444: `880`,
    1445: `881`,
    1446: `881`,
    1447: `882`,
    1448: `883`,
    1449: `883`,
    145: `23`,
    1450: `884`,
    1451: `884`,
    1452: `885`,
    1453: `886`,
    1454: `886`,
    1455: `887`,
    1456: `887`,
    1457: `888`,
    1458: `891`,
    1459: `891`,
    146: `23`,
    1460: `892`,
    1461: `893`,
    1462: `893`,
    1463: `894`,
    1464: `895`,
    1465: `895`,
    1466: `896`,
    1467: `897`,
    1468: `898`,
    1469: `899`,
    147: `23`,
    1470: `899`,
    1471: `899`,
    1472: `900`,
    1473: `900`,
    1474: `900`,
    1475: `901`,
    1476: `902`,
    1477: `902`,
    1478: `903`,
    1479: `903`,
    148: `23`,
    1480: `903`,
    1481: `903`,
    1482: `903`,
    1483: `903`,
    1484: `903`,
    1485: `903`,
    1486: `903`,
    1487: `903`,
    1488: `904`,
    1489: `904`,
    149: `23`,
    1490: `905`,
    1491: `906`,
    1492: `907`,
    1493: `907`,
    1494: `908`,
    1495: `908`,
    1496: `909`,
    1497: `910`,
    1498: `910`,
    1499: `911`,
    15: `2`,
    150: `23`,
    1500: `912`,
    1501: `913`,
    1502: `914`,
    1503: `918`,
    1504: `919`,
    1505: `919`,
    1506: `920`,
    1507: `920`,
    1508: `921`,
    1509: `921`,
    151: `23`,
    1510: `922`,
    1511: `922`,
    1512: `922`,
    1513: `924`,
    1514: `924`,
    1515: `925`,
    1516: `925`,
    1517: `926`,
    1518: `927`,
    1519: `929`,
    152: `23`,
    1520: `929`,
    1521: `929`,
    1522: `931`,
    1523: `932`,
    1524: `932`,
    1525: `933`,
    1526: `933`,
    1527: `934`,
    1528: `934`,
    1529: `934`,
    153: `25`,
    1530: `935`,
    1531: `935`,
    1532: `935`,
    1533: `937`,
    1534: `937`,
    1535: `938`,
    1536: `939`,
    1537: `940`,
    1538: `940`,
    1539: `940`,
    154: `27`,
    1540: `941`,
    1541: `941`,
    1542: `942`,
    1543: `942`,
    1544: `943`,
    1545: `943`,
    1546: `944`,
    1547: `944`,
    1548: `944`,
    1549: `945`,
    155: `27`,
    1550: `945`,
    1551: `946`,
    1552: `947`,
    1553: `948`,
    1554: `948`,
    1555: `948`,
    1556: `949`,
    1557: `950`,
    1558: `950`,
    1559: `951`,
    156: `27`,
    1560: `952`,
    1561: `952`,
    1562: `953`,
    1563: `954`,
    1564: `955`,
    1565: `956`,
    1566: `956`,
    1567: `957`,
    1568: `957`,
    1569: `958`,
    157: `28`,
    1570: `959`,
    1571: `959`,
    1572: `960`,
    1573: `961`,
    1574: `961`,
    1575: `962`,
    1576: `963`,
    1577: `963`,
    1578: `964`,
    1579: `965`,
    158: `29`,
    1580: `966`,
    1581: `966`,
    1582: `967`,
    1583: `968`,
    1584: `969`,
    1585: `969`,
    1586: `970`,
    1587: `971`,
    1588: `971`,
    1589: `972`,
    159: `29`,
    1590: `972`,
    1591: `974`,
    1592: `974`,
    1593: `975`,
    1594: `975`,
    1595: `976`,
    1596: `976`,
    1597: `977`,
    1598: `977`,
    1599: `978`,
    16: `2`,
    160: `29`,
    1600: `979`,
    1601: `979`,
    1602: `980`,
    1603: `980`,
    1604: `981`,
    1605: `982`,
    1606: `982`,
    1607: `983`,
    1608: `983`,
    1609: `984`,
    161: `30`,
    1610: `987`,
    1611: `987`,
    1612: `988`,
    1613: `989`,
    1614: `989`,
    1615: `990`,
    1616: `991`,
    1617: `991`,
    1618: `992`,
    1619: `993`,
    162: `31`,
    1620: `994`,
    1621: `995`,
    1622: `995`,
    1623: `995`,
    1624: `996`,
    1625: `996`,
    1626: `996`,
    1627: `997`,
    1628: `998`,
    1629: `998`,
    163: `31`,
    1630: `999`,
    1631: `999`,
    1632: `999`,
    1633: `999`,
    1634: `999`,
    1635: `999`,
    1636: `999`,
    1637: `999`,
    1638: `999`,
    1639: `999`,
    164: `32`,
    1640: `1000`,
    1641: `1000`,
    1642: `1001`,
    1643: `1002`,
    1644: `1003`,
    1645: `1003`,
    1646: `1004`,
    1647: `1004`,
    1648: `1005`,
    1649: `1006`,
    165: `32`,
    1650: `1006`,
    1651: `1007`,
    1652: `1008`,
    1653: `1009`,
    1654: `1010`,
    1655: `1013`,
    1656: `1014`,
    1657: `1014`,
    1658: `1015`,
    1659: `1016`,
    166: `34`,
    1660: `1017`,
    1661: `1018`,
    1662: `1018`,
    1663: `1019`,
    1664: `1019`,
    1665: `1020`,
    1666: `1021`,
    1667: `1021`,
    1668: `1022`,
    1669: `1023`,
    167: `35`,
    1670: `1023`,
    1671: `1024`,
    1672: `1025`,
    1673: `1025`,
    1674: `1026`,
    1675: `1027`,
    1676: `1028`,
    1677: `1028`,
    1678: `1029`,
    1679: `1030`,
    168: `36`,
    1680: `1031`,
    1681: `1031`,
    1682: `1032`,
    1683: `1033`,
    1684: `1033`,
    1685: `1034`,
    1686: `1034`,
    1687: `1035`,
    1688: `1035`,
    1689: `1036`,
    169: `36`,
    1690: `1037`,
    1691: `1037`,
    1692: `1038`,
    1693: `1038`,
    1694: `1039`,
    1695: `1040`,
    1696: `1040`,
    1697: `1041`,
    1698: `1041`,
    1699: `1042`,
    17: `2`,
    170: `37`,
    1700: `1043`,
    1701: `1043`,
    1702: `1044`,
    1703: `1044`,
    1704: `1045`,
    1705: `1048`,
    1706: `1048`,
    1707: `1049`,
    1708: `1050`,
    1709: `1050`,
    171: `37`,
    1710: `1051`,
    1711: `1052`,
    1712: `1052`,
    1713: `1053`,
    1714: `1054`,
    1715: `1055`,
    1716: `1056`,
    1717: `1056`,
    1718: `1056`,
    1719: `1057`,
    172: `38`,
    1720: `1057`,
    1721: `1057`,
    1722: `1058`,
    1723: `1059`,
    1724: `1059`,
    1725: `1060`,
    1726: `1060`,
    1727: `1060`,
    1728: `1060`,
    1729: `1060`,
    173: `39`,
    1730: `1060`,
    1731: `1060`,
    1732: `1060`,
    1733: `1060`,
    1734: `1060`,
    1735: `1061`,
    1736: `1061`,
    1737: `1062`,
    1738: `1063`,
    1739: `1064`,
    174: `39`,
    1740: `1064`,
    1741: `1065`,
    1742: `1065`,
    1743: `1066`,
    1744: `1067`,
    1745: `1067`,
    1746: `1068`,
    1747: `1069`,
    1748: `1070`,
    1749: `1071`,
    175: `40`,
    1750: `1075`,
    1751: `1076`,
    1752: `1076`,
    1753: `1077`,
    1754: `1077`,
    1755: `1078`,
    1756: `1078`,
    1757: `1079`,
    1758: `1079`,
    1759: `1079`,
    176: `41`,
    1760: `1080`,
    1761: `1080`,
    1762: `1080`,
    1763: `1082`,
    1764: `1082`,
    1765: `1083`,
    1766: `1084`,
    1767: `1085`,
    1768: `1085`,
    1769: `1085`,
    177: `42`,
    1770: `1086`,
    1771: `1087`,
    1772: `1087`,
    1773: `1088`,
    1774: `1089`,
    1775: `1090`,
    1776: `1091`,
    1777: `1091`,
    1778: `1092`,
    1779: `1092`,
    178: `43`,
    1780: `1093`,
    1781: `1094`,
    1782: `1094`,
    1783: `1095`,
    1784: `1096`,
    1785: `1096`,
    1786: `1097`,
    1787: `1098`,
    1788: `1098`,
    1789: `1099`,
    179: `44`,
    1790: `1100`,
    1791: `1101`,
    1792: `1101`,
    1793: `1102`,
    1794: `1103`,
    1795: `1104`,
    1796: `1104`,
    1797: `1105`,
    1798: `1106`,
    1799: `1106`,
    18: `2`,
    180: `44`,
    1800: `1107`,
    1801: `1107`,
    1802: `1109`,
    1803: `1109`,
    1804: `1110`,
    1805: `1110`,
    1806: `1111`,
    1807: `1111`,
    1808: `1112`,
    1809: `1112`,
    181: `46`,
    1810: `1113`,
    1811: `1114`,
    1812: `1114`,
    1813: `1115`,
    1814: `1115`,
    1815: `1116`,
    1816: `1117`,
    1817: `1117`,
    1818: `1118`,
    1819: `1118`,
    182: `46`,
    1820: `1119`,
    1821: `1122`,
    1822: `1122`,
    1823: `1123`,
    1824: `1124`,
    1825: `1124`,
    1826: `1125`,
    1827: `1126`,
    1828: `1126`,
    1829: `1127`,
    183: `47`,
    1830: `1128`,
    1831: `1129`,
    1832: `1130`,
    1833: `1130`,
    1834: `1130`,
    1835: `1131`,
    1836: `1131`,
    1837: `1131`,
    1838: `1132`,
    1839: `1133`,
    184: `47`,
    1840: `1133`,
    1841: `1134`,
    1842: `1134`,
    1843: `1134`,
    1844: `1134`,
    1845: `1134`,
    1846: `1134`,
    1847: `1134`,
    1848: `1134`,
    1849: `1134`,
    185: `48`,
    1850: `1134`,
    1851: `1135`,
    1852: `1135`,
    1853: `1136`,
    1854: `1137`,
    1855: `1138`,
    1856: `1138`,
    1857: `1139`,
    1858: `1139`,
    1859: `1140`,
    186: `49`,
    1860: `1141`,
    1861: `1141`,
    1862: `1142`,
    1863: `1143`,
    1864: `1144`,
    1865: `1145`,
    1866: `1149`,
    1867: `1150`,
    1868: `1150`,
    1869: `1151`,
    187: `50`,
    1870: `1151`,
    1871: `1152`,
    1872: `1152`,
    1873: `1153`,
    1874: `1153`,
    1875: `1153`,
    1876: `1154`,
    1877: `1154`,
    1878: `1154`,
    1879: `1156`,
    188: `50`,
    1880: `1157`,
    1881: `1157`,
    1882: `1158`,
    1883: `1159`,
    1884: `1160`,
    1885: `1161`,
    1886: `1161`,
    1887: `1162`,
    1888: `1162`,
    1889: `1163`,
    189: `50`,
    1890: `1164`,
    1891: `1164`,
    1892: `1165`,
    1893: `1166`,
    1894: `1166`,
    1895: `1167`,
    1896: `1168`,
    1897: `1168`,
    1898: `1169`,
    1899: `1170`,
    19: `2`,
    190: `51`,
    1900: `1171`,
    1901: `1171`,
    1902: `1172`,
    1903: `1173`,
    1904: `1174`,
    1905: `1174`,
    1906: `1175`,
    1907: `1176`,
    1908: `1176`,
    1909: `1177`,
    191: `51`,
    1910: `1177`,
    1911: `1179`,
    1912: `1179`,
    1913: `1180`,
    1914: `1181`,
    1915: `1181`,
    1916: `1182`,
    1917: `1182`,
    1918: `1183`,
    1919: `1184`,
    192: `52`,
    1920: `1184`,
    1921: `1185`,
    1922: `1185`,
    1923: `1186`,
    1924: `1187`,
    1925: `1187`,
    1926: `1188`,
    1927: `1188`,
    1928: `1189`,
    1929: `1192`,
    193: `53`,
    1930: `1192`,
    1931: `1193`,
    1932: `1194`,
    1933: `1194`,
    1934: `1195`,
    1935: `1196`,
    1936: `1196`,
    1937: `1197`,
    1938: `1198`,
    1939: `1199`,
    194: `54`,
    1940: `1200`,
    1941: `1200`,
    1942: `1200`,
    1943: `1201`,
    1944: `1201`,
    1945: `1201`,
    1946: `1202`,
    1947: `1203`,
    1948: `1203`,
    1949: `1204`,
    195: `54`,
    1950: `1204`,
    1951: `1204`,
    1952: `1204`,
    1953: `1204`,
    1954: `1204`,
    1955: `1204`,
    1956: `1204`,
    1957: `1204`,
    1958: `1204`,
    1959: `1205`,
    196: `55`,
    1960: `1205`,
    1961: `1206`,
    1962: `1207`,
    1963: `1208`,
    1964: `1208`,
    1965: `1209`,
    1966: `1209`,
    1967: `1210`,
    1968: `1211`,
    1969: `1211`,
    197: `55`,
    1970: `1212`,
    1971: `1213`,
    1972: `1214`,
    1973: `1215`,
    1974: `1219`,
    1975: `1220`,
    1976: `1220`,
    1977: `1221`,
    1978: `1221`,
    1979: `1222`,
    198: `56`,
    1980: `1222`,
    1981: `1223`,
    1982: `1223`,
    1983: `1223`,
    1984: `1224`,
    1985: `1224`,
    1986: `1224`,
    1987: `1227`,
    1988: `1228`,
    1989: `1228`,
    199: `56`,
    1990: `1229`,
    1991: `1229`,
    1992: `1230`,
    1993: `1230`,
    1994: `1231`,
    1995: `1231`,
    1996: `1231`,
    1997: `1232`,
    1998: `1232`,
    1999: `1232`,
    2: `2`,
    20: `2`,
    200: `56`,
    2000: `1234`,
    2001: `1234`,
    2002: `1235`,
    2003: `1236`,
    2004: `1237`,
    2005: `1237`,
    2006: `1237`,
    2007: `1238`,
    2008: `1239`,
    2009: `1239`,
    201: `57`,
    2010: `1240`,
    2011: `1241`,
    2012: `1242`,
    2013: `1243`,
    2014: `1243`,
    2015: `1244`,
    2016: `1244`,
    2017: `1245`,
    2018: `1246`,
    2019: `1246`,
    202: `57`,
    2020: `1247`,
    2021: `1248`,
    2022: `1248`,
    2023: `1249`,
    2024: `1250`,
    2025: `1250`,
    2026: `1251`,
    2027: `1252`,
    2028: `1253`,
    2029: `1253`,
    203: `58`,
    2030: `1254`,
    2031: `1255`,
    2032: `1256`,
    2033: `1256`,
    2034: `1257`,
    2035: `1258`,
    2036: `1258`,
    2037: `1259`,
    2038: `1259`,
    2039: `1261`,
    204: `58`,
    2040: `1261`,
    2041: `1262`,
    2042: `1262`,
    2043: `1263`,
    2044: `1263`,
    2045: `1264`,
    2046: `1264`,
    2047: `1265`,
    2048: `1266`,
    2049: `1266`,
    205: `58`,
    2050: `1267`,
    2051: `1267`,
    2052: `1268`,
    2053: `1269`,
    2054: `1269`,
    2055: `1270`,
    2056: `1270`,
    2057: `1271`,
    2058: `1274`,
    2059: `1274`,
    206: `58`,
    2060: `1275`,
    2061: `1276`,
    2062: `1276`,
    2063: `1277`,
    2064: `1278`,
    2065: `1278`,
    2066: `1279`,
    2067: `1280`,
    2068: `1281`,
    2069: `1282`,
    207: `58`,
    2070: `1282`,
    2071: `1282`,
    2072: `1283`,
    2073: `1283`,
    2074: `1283`,
    2075: `1284`,
    2076: `1285`,
    2077: `1285`,
    2078: `1286`,
    2079: `1286`,
    208: `58`,
    2080: `1286`,
    2081: `1286`,
    2082: `1286`,
    2083: `1286`,
    2084: `1286`,
    2085: `1286`,
    2086: `1286`,
    2087: `1286`,
    2088: `1287`,
    2089: `1287`,
    209: `59`,
    2090: `1288`,
    2091: `1289`,
    2092: `1290`,
    2093: `1290`,
    2094: `1291`,
    2095: `1291`,
    2096: `1292`,
    2097: `1293`,
    2098: `1293`,
    2099: `1294`,
    21: `2`,
    210: `59`,
    2100: `1295`,
    2101: `1296`,
    2102: `1297`,
    2103: `1301`,
    2104: `1302`,
    2105: `1302`,
    2106: `1303`,
    2107: `1303`,
    2108: `1304`,
    2109: `1304`,
    211: `60`,
    2110: `1305`,
    2111: `1305`,
    2112: `1305`,
    2113: `1306`,
    2114: `1306`,
    2115: `1306`,
    2116: `1308`,
    2117: `1309`,
    2118: `1309`,
    2119: `1310`,
    212: `61`,
    2120: `1311`,
    2121: `1312`,
    2122: `1313`,
    2123: `1313`,
    2124: `1314`,
    2125: `1314`,
    2126: `1315`,
    2127: `1316`,
    2128: `1316`,
    2129: `1317`,
    213: `62`,
    2130: `1318`,
    2131: `1318`,
    2132: `1319`,
    2133: `1320`,
    2134: `1320`,
    2135: `1321`,
    2136: `1322`,
    2137: `1323`,
    2138: `1323`,
    2139: `1324`,
    214: `62`,
    2140: `1325`,
    2141: `1326`,
    2142: `1326`,
    2143: `1327`,
    2144: `1328`,
    2145: `1328`,
    2146: `1329`,
    2147: `1329`,
    2148: `1331`,
    2149: `1331`,
    215: `63`,
    2150: `1332`,
    2151: `1333`,
    2152: `1333`,
    2153: `1334`,
    2154: `1334`,
    2155: `1335`,
    2156: `1336`,
    2157: `1336`,
    2158: `1337`,
    2159: `1337`,
    216: `64`,
    2160: `1338`,
    2161: `1339`,
    2162: `1339`,
    2163: `1340`,
    2164: `1340`,
    2165: `1341`,
    2166: `1344`,
    2167: `1344`,
    2168: `1345`,
    2169: `1346`,
    217: `66`,
    2170: `1346`,
    2171: `1347`,
    2172: `1348`,
    2173: `1348`,
    2174: `1349`,
    2175: `1350`,
    2176: `1351`,
    2177: `1352`,
    2178: `1352`,
    2179: `1352`,
    218: `66`,
    2180: `1353`,
    2181: `1353`,
    2182: `1353`,
    2183: `1354`,
    2184: `1355`,
    2185: `1355`,
    2186: `1356`,
    2187: `1356`,
    2188: `1356`,
    2189: `1356`,
    219: `67`,
    2190: `1356`,
    2191: `1356`,
    2192: `1356`,
    2193: `1356`,
    2194: `1356`,
    2195: `1356`,
    2196: `1357`,
    2197: `1357`,
    2198: `1358`,
    2199: `1359`,
    22: `2`,
    220: `67`,
    2200: `1360`,
    2201: `1360`,
    2202: `1361`,
    2203: `1361`,
    2204: `1362`,
    2205: `1363`,
    2206: `1363`,
    2207: `1364`,
    2208: `1365`,
    2209: `1366`,
    221: `67`,
    2210: `1367`,
    2211: `1371`,
    2212: `1372`,
    2213: `1372`,
    2214: `1373`,
    2215: `1373`,
    2216: `1374`,
    2217: `1374`,
    2218: `1375`,
    2219: `1375`,
    222: `68`,
    2220: `1375`,
    2221: `1376`,
    2222: `1376`,
    2223: `1376`,
    2224: `1379`,
    2225: `1380`,
    2226: `1380`,
    2227: `1381`,
    2228: `1381`,
    2229: `1382`,
    223: `68`,
    2230: `1382`,
    2231: `1383`,
    2232: `1383`,
    2233: `1383`,
    2234: `1384`,
    2235: `1384`,
    2236: `1384`,
    2237: `1386`,
    2238: `1387`,
    2239: `1387`,
    224: `69`,
    2240: `1388`,
    2241: `1389`,
    2242: `1389`,
    2243: `1390`,
    2244: `1390`,
    2245: `1391`,
    2246: `1391`,
    2247: `1392`,
    2248: `1393`,
    2249: `1395`,
    225: `69`,
    2250: `1396`,
    2251: `1396`,
    2252: `1397`,
    2253: `1397`,
    2254: `1398`,
    2255: `1398`,
    2256: `1399`,
    2257: `1399`,
    2258: `1400`,
    2259: `1400`,
    226: `70`,
    2260: `1401`,
    2261: `1401`,
    2262: `1402`,
    2263: `1403`,
    2264: `1405`,
    2265: `1405`,
    2266: `1405`,
    2267: `1407`,
    2268: `1407`,
    2269: `1407`,
    227: `71`,
    2270: `1409`,
    2271: `1410`,
    2272: `1412`,
    2273: `1413`,
    2274: `1414`,
    2275: `1415`,
    2276: `1415`,
    2277: `1416`,
    2278: `1416`,
    2279: `1417`,
    228: `72`,
    2280: `1417`,
    2281: `1417`,
    2282: `1418`,
    2283: `1420`,
    2284: `1421`,
    2285: `1422`,
    2286: `1422`,
    2287: `1422`,
    2288: `1423`,
    2289: `1424`,
    229: `72`,
    2290: `1424`,
    2291: `1425`,
    2292: `1425`,
    2293: `1425`,
    2294: `1426`,
    2295: `1428`,
    2296: `1429`,
    2297: `1429`,
    2298: `1430`,
    2299: `1430`,
    23: `2`,
    230: `73`,
    2300: `1430`,
    2301: `1432`,
    2302: `1433`,
    2303: `1433`,
    2304: `1433`,
    2305: `1434`,
    2306: `1434`,
    2307: `1435`,
    2308: `1436`,
    2309: `1436`,
    231: `74`,
    2310: `1437`,
    2311: `1438`,
    2312: `1438`,
    2313: `1439`,
    2314: `1440`,
    2315: `1440`,
    2316: `1441`,
    2317: `1442`,
    2318: `1442`,
    2319: `1443`,
    232: `75`,
    2320: `1444`,
    2321: `1444`,
    2322: `1445`,
    2323: `1446`,
    2324: `1446`,
    2325: `1447`,
    2326: `1448`,
    2327: `1448`,
    2328: `1449`,
    2329: `1450`,
    233: `75`,
    2330: `1450`,
    2331: `1451`,
    2332: `1452`,
    2333: `1452`,
    2334: `1453`,
    2335: `1454`,
    2336: `1454`,
    2337: `1455`,
    2338: `1456`,
    2339: `1456`,
    234: `75`,
    2340: `1457`,
    2341: `1458`,
    2342: `1458`,
    2343: `1459`,
    2344: `1460`,
    2345: `1460`,
    2346: `1461`,
    2347: `1462`,
    2348: `1462`,
    2349: `1463`,
    235: `75`,
    2350: `1464`,
    2351: `1464`,
    2352: `1465`,
    2353: `1466`,
    2354: `1466`,
    2355: `1467`,
    2356: `1468`,
    2357: `1468`,
    2358: `1468`,
    2359: `1469`,
    236: `75`,
    2360: `1469`,
    2361: `1470`,
    2362: `1471`,
    2363: `1471`,
    2364: `1471`,
    2365: `1472`,
    2366: `1472`,
    2367: `1473`,
    2368: `1473`,
    2369: `1473`,
    237: `75`,
    2370: `1474`,
    2371: `1475`,
    2372: `1475`,
    2373: `1476`,
    2374: `1478`,
    2375: `1479`,
    2376: `1479`,
    2377: `1480`,
    2378: `1482`,
    2379: `1483`,
    238: `76`,
    2380: `1483`,
    2381: `1483`,
    2382: `1485`,
    2383: `1486`,
    2384: `1487`,
    2385: `1488`,
    2386: `1489`,
    2387: `1489`,
    2388: `1490`,
    2389: `1491`,
    239: `76`,
    2390: `1492`,
    2391: `1493`,
    2392: `1495`,
    2393: `1496`,
    2394: `1496`,
    2395: `1496`,
    2396: `1498`,
    2397: `1498`,
    2398: `1499`,
    2399: `1499`,
    24: `2`,
    240: `76`,
    2400: `1500`,
    2401: `1501`,
    2402: `1502`,
    2403: `1502`,
    2404: `1502`,
    2405: `1503`,
    2406: `1503`,
    2407: `1503`,
    2408: `1505`,
    2409: `1505`,
    241: `78`,
    2410: `1506`,
    2411: `1507`,
    2412: `1507`,
    2413: `1508`,
    2414: `1511`,
    2415: `1511`,
    2416: `1512`,
    2417: `1512`,
    2418: `1513`,
    2419: `1514`,
    242: `78`,
    2420: `1515`,
    2421: `1516`,
    2422: `1516`,
    2423: `1517`,
    2424: `1518`,
    2425: `1518`,
    2426: `1519`,
    2427: `1519`,
    2428: `1520`,
    2429: `1520`,
    243: `78`,
    2430: `1521`,
    2431: `1522`,
    2432: `1523`,
    2433: `1523`,
    2434: `1524`,
    2435: `1525`,
    2436: `1526`,
    2437: `1527`,
    2438: `1527`,
    2439: `1528`,
    244: `79`,
    2440: `1529`,
    2441: `1530`,
    2442: `1532`,
    2443: `1533`,
    2444: `1533`,
    2445: `1534`,
    245: `80`,
    246: `80`,
    247: `82`,
    248: `83`,
    249: `84`,
    25: `2`,
    250: `85`,
    251: `85`,
    252: `86`,
    253: `87`,
    254: `88`,
    255: `89`,
    256: `90`,
    257: `91`,
    258: `92`,
    259: `92`,
    26: `2`,
    260: `93`,
    261: `93`,
    262: `93`,
    263: `96`,
    264: `97`,
    265: `98`,
    266: `98`,
    267: `100`,
    268: `100`,
    269: `101`,
    27: `2`,
    270: `101`,
    271: `102`,
    272: `103`,
    273: `104`,
    274: `104`,
    275: `104`,
    276: `105`,
    277: `105`,
    278: `106`,
    279: `107`,
    28: `2`,
    280: `108`,
    281: `108`,
    282: `109`,
    283: `109`,
    284: `109`,
    285: `109`,
    286: `109`,
    287: `109`,
    288: `110`,
    289: `110`,
    29: `2`,
    290: `111`,
    291: `112`,
    292: `113`,
    293: `115`,
    294: `115`,
    295: `116`,
    296: `116`,
    297: `116`,
    298: `117`,
    299: `117`,
    3: `2`,
    30: `2`,
    300: `118`,
    301: `118`,
    302: `119`,
    303: `120`,
    304: `122`,
    305: `123`,
    306: `123`,
    307: `124`,
    308: `124`,
    309: `124`,
    31: `2`,
    310: `124`,
    311: `124`,
    312: `124`,
    313: `124`,
    314: `124`,
    315: `124`,
    316: `124`,
    317: `125`,
    318: `125`,
    319: `126`,
    32: `2`,
    320: `127`,
    321: `127`,
    322: `127`,
    323: `128`,
    324: `129`,
    325: `130`,
    326: `130`,
    327: `131`,
    328: `132`,
    329: `132`,
    33: `2`,
    330: `132`,
    331: `133`,
    332: `133`,
    333: `134`,
    334: `135`,
    335: `135`,
    336: `136`,
    337: `137`,
    338: `138`,
    339: `139`,
    34: `2`,
    340: `139`,
    341: `140`,
    342: `140`,
    343: `141`,
    344: `142`,
    345: `142`,
    346: `143`,
    347: `144`,
    348: `144`,
    349: `145`,
    35: `2`,
    350: `146`,
    351: `146`,
    352: `147`,
    353: `148`,
    354: `149`,
    355: `149`,
    356: `150`,
    357: `151`,
    358: `152`,
    359: `152`,
    36: `2`,
    360: `153`,
    361: `154`,
    362: `154`,
    363: `155`,
    364: `155`,
    365: `157`,
    366: `157`,
    367: `158`,
    368: `159`,
    369: `159`,
    37: `2`,
    370: `160`,
    371: `160`,
    372: `161`,
    373: `162`,
    374: `162`,
    375: `163`,
    376: `163`,
    377: `165`,
    378: `166`,
    379: `166`,
    38: `2`,
    380: `167`,
    381: `167`,
    382: `168`,
    383: `172`,
    384: `172`,
    385: `173`,
    386: `174`,
    387: `174`,
    388: `175`,
    389: `176`,
    39: `2`,
    390: `176`,
    391: `177`,
    392: `178`,
    393: `179`,
    394: `180`,
    395: `180`,
    396: `180`,
    397: `181`,
    398: `181`,
    399: `181`,
    4: `2`,
    40: `4`,
    400: `182`,
    401: `183`,
    402: `183`,
    403: `184`,
    404: `184`,
    405: `184`,
    406: `184`,
    407: `184`,
    408: `184`,
    409: `184`,
    41: `4`,
    410: `184`,
    411: `184`,
    412: `184`,
    413: `185`,
    414: `185`,
    415: `186`,
    416: `187`,
    417: `188`,
    418: `188`,
    419: `189`,
    42: `5`,
    420: `190`,
    421: `190`,
    422: `191`,
    423: `192`,
    424: `193`,
    425: `193`,
    426: `194`,
    427: `195`,
    428: `195`,
    429: `196`,
    43: `5`,
    430: `197`,
    431: `201`,
    432: `202`,
    433: `202`,
    434: `203`,
    435: `203`,
    436: `204`,
    437: `204`,
    438: `205`,
    439: `206`,
    44: `5`,
    440: `206`,
    441: `207`,
    442: `207`,
    443: `208`,
    444: `208`,
    445: `210`,
    446: `210`,
    447: `211`,
    448: `211`,
    449: `211`,
    45: `6`,
    450: `213`,
    451: `213`,
    452: `214`,
    453: `214`,
    454: `215`,
    455: `216`,
    456: `217`,
    457: `217`,
    458: `218`,
    459: `219`,
    46: `7`,
    460: `220`,
    461: `220`,
    462: `221`,
    463: `222`,
    464: `223`,
    465: `223`,
    466: `224`,
    467: `225`,
    468: `226`,
    469: `226`,
    47: `8`,
    470: `227`,
    471: `228`,
    472: `229`,
    473: `229`,
    474: `230`,
    475: `231`,
    476: `232`,
    477: `232`,
    478: `233`,
    479: `234`,
    48: `9`,
    480: `235`,
    481: `235`,
    482: `236`,
    483: `237`,
    484: `238`,
    485: `238`,
    486: `239`,
    487: `240`,
    488: `240`,
    489: `241`,
    49: `10`,
    490: `242`,
    491: `242`,
    492: `243`,
    493: `244`,
    494: `245`,
    495: `245`,
    496: `246`,
    497: `246`,
    498: `248`,
    499: `248`,
    5: `2`,
    50: `11`,
    500: `249`,
    501: `249`,
    502: `250`,
    503: `250`,
    504: `251`,
    505: `251`,
    506: `252`,
    507: `252`,
    508: `252`,
    509: `253`,
    51: `11`,
    510: `254`,
    511: `255`,
    512: `256`,
    513: `256`,
    514: `256`,
    515: `257`,
    516: `258`,
    517: `259`,
    518: `259`,
    519: `260`,
    52: `12`,
    520: `261`,
    521: `261`,
    522: `262`,
    523: `263`,
    524: `264`,
    525: `265`,
    526: `265`,
    527: `266`,
    528: `267`,
    529: `268`,
    53: `13`,
    530: `270`,
    531: `270`,
    532: `270`,
    533: `272`,
    534: `272`,
    535: `273`,
    536: `273`,
    537: `273`,
    538: `275`,
    539: `275`,
    54: `14`,
    540: `275`,
    541: `275`,
    542: `275`,
    543: `275`,
    544: `276`,
    545: `276`,
    546: `277`,
    547: `278`,
    548: `280`,
    549: `281`,
    55: `14`,
    550: `284`,
    551: `285`,
    552: `289`,
    553: `289`,
    554: `290`,
    555: `291`,
    556: `292`,
    557: `294`,
    558: `294`,
    559: `294`,
    56: `15`,
    560: `297`,
    561: `297`,
    562: `298`,
    563: `298`,
    564: `299`,
    565: `300`,
    566: `303`,
    567: `303`,
    568: `303`,
    569: `304`,
    57: `15`,
    570: `304`,
    571: `305`,
    572: `306`,
    573: `306`,
    574: `307`,
    575: `307`,
    576: `307`,
    577: `310`,
    578: `310`,
    579: `311`,
    58: `16`,
    580: `311`,
    581: `312`,
    582: `313`,
    583: `316`,
    584: `316`,
    585: `316`,
    586: `317`,
    587: `317`,
    588: `318`,
    589: `318`,
    59: `17`,
    590: `319`,
    591: `319`,
    592: `319`,
    593: `322`,
    594: `322`,
    595: `323`,
    596: `323`,
    597: `324`,
    598: `325`,
    599: `328`,
    6: `2`,
    60: `18`,
    600: `328`,
    601: `328`,
    602: `329`,
    603: `330`,
    604: `330`,
    605: `331`,
    606: `331`,
    607: `331`,
    608: `334`,
    609: `334`,
    61: `19`,
    610: `335`,
    611: `335`,
    612: `336`,
    613: `337`,
    614: `340`,
    615: `340`,
    616: `340`,
    617: `341`,
    618: `341`,
    619: `342`,
    62: `21`,
    620: `343`,
    621: `343`,
    622: `344`,
    623: `344`,
    624: `344`,
    625: `346`,
    626: `346`,
    627: `347`,
    628: `347`,
    629: `347`,
    63: `21`,
    630: `348`,
    631: `349`,
    632: `350`,
    633: `350`,
    634: `351`,
    635: `351`,
    636: `352`,
    637: `352`,
    638: `353`,
    639: `354`,
    64: `21`,
    640: `361`,
    641: `361`,
    642: `362`,
    643: `363`,
    644: `364`,
    645: `371`,
    646: `371`,
    647: `372`,
    648: `372`,
    649: `373`,
    65: `21`,
    650: `374`,
    651: `381`,
    652: `382`,
    653: `382`,
    654: `383`,
    655: `383`,
    656: `383`,
    657: `383`,
    658: `383`,
    659: `383`,
    66: `21`,
    660: `383`,
    661: `383`,
    662: `383`,
    663: `383`,
    664: `384`,
    665: `384`,
    666: `385`,
    667: `386`,
    668: `386`,
    669: `386`,
    67: `21`,
    670: `387`,
    671: `388`,
    672: `389`,
    673: `389`,
    674: `390`,
    675: `391`,
    676: `391`,
    677: `391`,
    678: `392`,
    679: `392`,
    68: `21`,
    680: `393`,
    681: `393`,
    682: `394`,
    683: `395`,
    684: `396`,
    685: `397`,
    686: `397`,
    687: `398`,
    688: `398`,
    689: `399`,
    69: `21`,
    690: `399`,
    691: `400`,
    692: `400`,
    693: `401`,
    694: `401`,
    695: `402`,
    696: `402`,
    697: `403`,
    698: `403`,
    699: `404`,
    7: `2`,
    70: `21`,
    700: `404`,
    701: `405`,
    702: `405`,
    703: `405`,
    704: `407`,
    705: `407`,
    706: `408`,
    707: `409`,
    708: `410`,
    709: `411`,
    71: `21`,
    710: `411`,
    711: `412`,
    712: `413`,
    713: `414`,
    714: `421`,
    715: `421`,
    716: `422`,
    717: `422`,
    718: `423`,
    719: `424`,
    72: `21`,
    720: `431`,
    721: `431`,
    722: `432`,
    723: `432`,
    724: `433`,
    725: `434`,
    726: `441`,
    727: `441`,
    728: `442`,
    729: `442`,
    73: `21`,
    730: `443`,
    731: `444`,
    732: `445`,
    733: `445`,
    734: `446`,
    735: `446`,
    736: `446`,
    737: `449`,
    738: `450`,
    739: `450`,
    74: `21`,
    740: `451`,
    741: `451`,
    742: `451`,
    743: `451`,
    744: `451`,
    745: `451`,
    746: `451`,
    747: `451`,
    748: `451`,
    749: `451`,
    75: `21`,
    750: `452`,
    751: `452`,
    752: `453`,
    753: `454`,
    754: `454`,
    755: `454`,
    756: `455`,
    757: `456`,
    758: `457`,
    759: `457`,
    76: `21`,
    760: `458`,
    761: `459`,
    762: `459`,
    763: `459`,
    764: `460`,
    765: `460`,
    766: `461`,
    767: `461`,
    768: `462`,
    769: `462`,
    77: `21`,
    770: `463`,
    771: `464`,
    772: `464`,
    773: `464`,
    774: `465`,
    775: `465`,
    776: `466`,
    777: `466`,
    778: `467`,
    779: `468`,
    78: `21`,
    780: `468`,
    781: `470`,
    782: `470`,
    783: `471`,
    784: `471`,
    785: `472`,
    786: `473`,
    787: `473`,
    788: `473`,
    789: `474`,
    79: `21`,
    790: `474`,
    791: `475`,
    792: `475`,
    793: `476`,
    794: `477`,
    795: `477`,
    796: `479`,
    797: `479`,
    798: `480`,
    799: `480`,
    8: `2`,
    80: `21`,
    800: `481`,
    801: `482`,
    802: `482`,
    803: `483`,
    804: `483`,
    805: `484`,
    806: `484`,
    807: `485`,
    808: `485`,
    809: `486`,
    81: `21`,
    810: `486`,
    811: `487`,
    812: `488`,
    813: `488`,
    814: `489`,
    815: `489`,
    816: `490`,
    817: `490`,
    818: `491`,
    819: `491`,
    82: `21`,
    820: `492`,
    821: `492`,
    822: `493`,
    823: `493`,
    824: `494`,
    825: `494`,
    826: `495`,
    827: `495`,
    828: `495`,
    829: `497`,
    83: `21`,
    830: `497`,
    831: `498`,
    832: `498`,
    833: `499`,
    834: `499`,
    835: `500`,
    836: `500`,
    837: `501`,
    838: `501`,
    839: `502`,
    84: `21`,
    840: `503`,
    841: `504`,
    842: `504`,
    843: `505`,
    844: `505`,
    845: `506`,
    846: `507`,
    847: `508`,
    848: `508`,
    849: `509`,
    85: `21`,
    850: `509`,
    851: `510`,
    852: `510`,
    853: `511`,
    854: `512`,
    855: `512`,
    856: `513`,
    857: `513`,
    858: `514`,
    859: `514`,
    86: `21`,
    860: `515`,
    861: `516`,
    862: `516`,
    863: `517`,
    864: `517`,
    865: `518`,
    866: `518`,
    867: `519`,
    868: `520`,
    869: `520`,
    87: `21`,
    870: `521`,
    871: `521`,
    872: `521`,
    873: `521`,
    874: `521`,
    875: `521`,
    876: `522`,
    877: `522`,
    878: `523`,
    879: `524`,
    88: `21`,
    880: `525`,
    881: `525`,
    882: `526`,
    883: `527`,
    884: `528`,
    885: `528`,
    886: `529`,
    887: `530`,
    888: `531`,
    889: `531`,
    89: `21`,
    890: `532`,
    891: `533`,
    892: `534`,
    893: `534`,
    894: `535`,
    895: `536`,
    896: `537`,
    897: `539`,
    898: `539`,
    899: `540`,
    9: `2`,
    90: `21`,
    900: `540`,
    901: `540`,
    902: `541`,
    903: `541`,
    904: `542`,
    905: `543`,
    906: `544`,
    907: `544`,
    908: `545`,
    909: `546`,
    91: `21`,
    910: `546`,
    911: `546`,
    912: `547`,
    913: `548`,
    914: `549`,
    915: `549`,
    916: `550`,
    917: `550`,
    918: `551`,
    919: `551`,
    92: `21`,
    920: `552`,
    921: `552`,
    922: `553`,
    923: `553`,
    924: `553`,
    925: `554`,
    926: `556`,
    927: `556`,
    928: `557`,
    929: `557`,
    93: `21`,
    930: `558`,
    931: `558`,
    932: `558`,
    933: `560`,
    934: `560`,
    935: `561`,
    936: `561`,
    937: `562`,
    938: `563`,
    939: `564`,
    94: `21`,
    940: `564`,
    941: `565`,
    942: `566`,
    943: `567`,
    944: `567`,
    945: `568`,
    946: `569`,
    947: `570`,
    948: `570`,
    949: `571`,
    95: `21`,
    950: `572`,
    951: `573`,
    952: `573`,
    953: `574`,
    954: `575`,
    955: `576`,
    956: `576`,
    957: `577`,
    958: `578`,
    959: `578`,
    96: `21`,
    960: `579`,
    961: `580`,
    962: `581`,
    963: `582`,
    964: `582`,
    965: `583`,
    966: `583`,
    967: `583`,
    968: `585`,
    969: `586`,
    97: `21`,
    970: `586`,
    971: `587`,
    972: `588`,
    973: `590`,
    974: `591`,
    975: `591`,
    976: `591`,
    977: `592`,
    978: `592`,
    979: `593`,
    98: `21`,
    980: `594`,
    981: `594`,
    982: `595`,
    983: `596`,
    984: `596`,
    985: `597`,
    986: `598`,
    987: `598`,
    988: `599`,
    989: `600`,
    99: `21`,
    990: `600`,
    991: `601`,
    992: `602`,
    993: `602`,
    994: `603`,
    995: `604`,
    996: `604`,
    997: `605`,
    998: `606`,
    999: `606`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 2,
  stateSize: 153,
  unsupported: [],
  version: 13,
  warnings: [`API Consumer_timeUp may use up to 5 accounts, but the limit is 4. API Consumer_timeUp starts at /app/index.rsh:115:7:application.`, `Step 4 calls a remote object at /app/index.rsh:117:37:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 4 may use up to 5 accounts, but the limit is 4. Step 4 starts at /app/index.rsh:115:7:dot.`, `This program calls a remote object at /app/index.rsh:128:39:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program calls a remote object at /app/index.rsh:129:43:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"address payable","name":"elem4","type":"address"}],"internalType":"struct T9","name":"v2052","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"address payable","name":"elem4","type":"address"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_Consumer_applyOrder0_93","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"_Consumer_settle0_93","type":"tuple"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1027","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1114","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1135","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v1143","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v1195","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v1209","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v1233","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v1257","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v1329","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v1343","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v1367","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v1391","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v2039","type":"uint256"},{"internalType":"address payable","name":"v2040","type":"address"}],"name":"Consumer_applyOrder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v2046","type":"uint256"}],"name":"Consumer_settle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Consumer_timeUp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Order_consumer","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Order_pricePerUnit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Order_producer","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Order_started","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Order_units","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"v2055","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_Consumer_applyOrder0_93","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"_Consumer_settle0_93","type":"tuple"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v2058","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T5","name":"v2061","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200387c38819003918201601f19168301916001600160401b03831184841017620004c85780849260a094604052833981010312620005b3576040519060a082016001600160401b03811183821017620004c8576200009491608091604052805184526200007460208201620005d4565b6020850152604081015160408501526060810151606085015201620005d4565b60808201524360035560405161012081016001600160401b03811182821017620004c857600091610100916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201520152604051906040820182811060018060401b03821117620004c85760405262000118620005e9565b8252620001246200060a565b602083015260ff600454166200059a577fde012a7fde91f17aeeb4e3c8cbeeb3018bf0d343e9dbd0c8c464c6f262fc739860c06040513381528351602082015260018060a01b036020850151166040820152604084015160608201526060840151608082015260018060a01b0360808501511660a0820152a1805180159081156200058d575b501562000574576000825152600060208351015260006040835101528151602083015152346200055b57604051916001600160401b0360e0840190811190841117620004c85760209160e0840160405260008452600083850152600060408501526000606085015260006080850152600060a08501526200022a6200060a565b60c085015233845260018060a01b038382015116838501526040810151604085015260608101516060850152608060018060a01b039101511660808401524360a084015201518051604060208201519101511515604051916200028d83620005b8565b6000835260208301526040820152620002a56200060a565b9160005b600181106200050b575050815260c082015260016000554360015560c06040519160018060a01b03815116602084015260018060a01b036020820151166040840152604081015160608401526060810151608084015260018060a01b0360808201511660a084015260a081015182840152015160e082016000905b60018210620004de5761012084528361014081016001600160401b03811182821017620004c85760405280516001600160401b038111620004c857600254600181811c91168015620004bd575b6020821014620004a757601f81116200043d575b50602091601f8211600114620003d357918192600092620003c7575b50508160011b916000199060031b1c1916176002555b60405161320290816200067a8239f35b015190508280620003a1565b601f19821692600260005260206000209160005b85811062000424575083600195106200040a575b505050811b01600255620003b7565b015160001960f88460031b161c19169055828080620003fb565b91926020600181928685015181550194019201620003e7565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c810191602084106200049c575b601f0160051c01905b8181106200048f575062000385565b6000815560010162000480565b909150819062000477565b634e487b7160e01b600052602260045260246000fd5b90607f169062000371565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000324565b62000517818362000651565b5162000524828662000651565b5262000531818562000651565b5060001981146200054557600101620002a9565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b90506001541438620001aa565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b606081019081106001600160401b03821117620004c857604052565b51906001600160a01b0382168203620005b357565b60405190620005f882620005b8565b60006040838281528260208201520152565b6040519060208083016001600160401b03811184821017620004c8576040528260005b8281106200063a57505050565b829062000646620005e9565b81840152016200062d565b906001811015620006635760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630ea28e13146101305780631e93b0f114610127578063479872cc1461011e5780634a96b4cf14610115578063573b85101461010c57806374c2f3e41461010357806374d188d6146100fa5780637a35e570146100f157806383230757146100e85780639e6f4199146100df578063a17ec3d1146100d6578063a1b975ae146100cd578063ab53f2c6146100c45763b301b52f0361000e576100bf610817565b61000e565b506100bf6107a2565b506100bf610733565b506100bf6106bf565b506100bf610624565b506100bf610605565b506100bf61059b565b506100bf610549565b506100bf6104ff565b506100bf6102f3565b506100bf6102a3565b506100bf610237565b506100bf610218565b506100bf61015b565b6001600160a01b031690565b6001600160a01b0381160361015657565b600080fd5b5060403660031901126101565761021461020260243561017a81610145565b610182610a15565b6101fb8161018e610a79565b60043581526001600160a01b039485166020808301918252604051909690916101b68361089c565b6101be610a79565b8352878301936101cc610aa1565b8552518351525116868251015260008251525185825101526101ec610af6565b90600082525185820152610df8565b0151151590565b60405190151581529081906020820190565b0390f35b5034610156576000366003190112610156576020600354604051908152f35b503461015657600036600319011261015657610251610a15565b600b6000540361028a5760a0602091606061027b61026d61091d565b858082518301019101610c07565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b5034610156576000366003190112610156576102bd610a15565b600b600054036102da57610100602091604061027b61026d61091d565b60405163100960cb60e01b8152600b6004820152602490fd5b5060208060031936011261015657610309610a15565b506104e961031636612ff8565b9161032560016000541461128f565b6104d661034161033361091d565b838082518301019101613038565b61035c61035761035360045460ff1690565b1590565b6112af565b604080513381528651602082015290956103a6917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908890a15180159081156104f3575b506112cf565b6103b034156112ef565b828101926104d160c06103c38651610139565b936103dc6103d78a830196875190336130f8565b61130f565b6103f83360018060a01b036103f18451610139565b161461132f565b610428610420610406610d6a565b9861041a6104148551610139565b8b610a92565b51610139565b858901610a92565b845189880152606081015160608801526104516104486080830151610139565b60808901610a92565b61045e60a08201516130d4565b60a0880152600082880152600060e088015261047e610100880160019052565b600061012088015261049d6104938251610139565b6101408901610a92565b4361016088015201519182519384519051019388828201519101511515916104c36109c8565b958652850152151587840152565b613178565b61018082015260006101a0820152611d5f565b5160008152602090f35b905060015414386103a0565b5060403660031901126101565761053e610517610a15565b6040516105238161089c565b600435815260243561053481610b80565b6020820152612cf4565b602060405160008152f35b5060003660031901126101565760206060610562610a15565b61058f81604051610572816108c4565b6000815261057e610a79565b906000825251151586820152612cf4565b01511515604051908152f35b5034610156576000366003190112610156576105b5610a15565b600b600054036105ec5760e06001916105de6105cf61091d565b60208082518301019101610c07565b500152602060405160018152f35b60405163100960cb60e01b8152600a6004820152602490fd5b5034610156576000366003190112610156576020600154604051908152f35b5060a036600319011261015657610639610a15565b6040908151906106488261089c565b6004358252608036602319011261015657825191610665836108df565b602435600281101561015657835283604319360112610156576104e992845161068d8161089c565b604435815260643561069e81610145565b602082015260208201526106b136613018565b858201526020820152610df8565b5034610156576000366003190112610156576106d9610a15565b600b6000540361071a5760c06020916106f061091d565b80516001600160a01b039161070b9181018601908601610c07565b51169182910152604051908152f35b60405163100960cb60e01b815260096004820152602490fd5b506020366003190112610156576020604061074c610a15565b61058f81835161075b8161089c565b8451610766816108c4565b60008152815285810190610778610aa1565b82526004358151526001825152518582510152610793610af6565b90600082525186820152610df8565b5034610156576000806003193601126108145780546107bf61091d565b906040519283918252602090604082840152835191826040850152815b8381106107fd57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016107dc565b80fd5b503461015657600036600319011261015657610831610a15565b5060405163100960cb60e01b815260076004820152602490fd5b90600182811c9216801561087b575b602083101461086557565b634e487b7160e01b600052602260045260246000fd5b91607f169161085a565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176108b757604052565b6108bf610885565b604052565b602081019081106001600160401b038211176108b757604052565b606081019081106001600160401b038211176108b757604052565b601f909101601f19168101906001600160401b038211908210176108b757604052565b60405190600082600254916109318361084b565b8083526001938085169081156109a75750600114610959575b50610957925003836108fa565b565b600260009081526000805160206131d683398151915294602093509091905b81831061098f57505061095793508201013861094a565b85548884018501529485019487945091830191610978565b905061095794506020925060ff191682840152151560051b8201013861094a565b60405190610957826108df565b6040519061018082016001600160401b038111838210176108b757604052565b6040519061060082016001600160401b038111838210176108b757604052565b6040519061012082016001600160401b03811183821017610a6c575b604052816101006000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201520152565b610a74610885565b610a31565b60405190610a868261089c565b60006020838281520152565b6001600160a01b039091169052565b60405190610aae826108df565b8160008152610abb610a79565b60208201526040805191610ace836108c4565b600083520152565b60021115610ae057565b634e487b7160e01b600052602160045260246000fd5b60405190610b038261089c565b81600081526020610b12610aa1565b910152565b6040519060a082016001600160401b03811183821017610b68575b6040526000608083610b42610a79565b8152604051610b50816108c4565b83815260208201528260408201528260608201520152565b610b70610885565b610b32565b519061095782610145565b8015150361015657565b9080601f8301121561015657604091825192610ba5846108c4565b836060938484019381851161015657915b848310610bc65750505050505090565b85838303126101565783518691610bdc826108df565b84518252602091828601518382015286860151610bf881610b80565b87820152815201920191610bb6565b6101c081830312610156576101a090610c1e6109d5565b92610c2882610b75565b8452610c3660208301610b75565b60208501526040820151604085015260608201516060850152610c5b60808301610b75565b608085015260a082015160a085015260c082015160c085015260e082015160e08501526101008083015190850152610120610c97818401610b75565b90850152610caa61014091828401610b8a565b90840152015161016082015290565b6001600160a01b039182168152825160208083019190915290920151805160c08401949392916002821015610ae05760a09260409283860152602080830151805160608801520151166080850152015151910152565b516002811015610ae05790565b6040805191610d2a836108c4565b8291600090815b602080821015610d61579060209184845191610d4c836108df565b81835282015284848201528188015201610d31565b50505050909150565b604051906101c082016001600160401b03811183821017610deb575b604052816101a06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015282610160820152610de1610d1c565b6101808201520152565b610df3610885565b610d86565b610e00610b17565b906000610e10600b82541461134f565b610e1861091d565b92610e2d602094858082518301019101610c07565b92610e45610e4061035360045460ff1690565b61136f565b60407fd4b1b7de0379a75a8e25ecfe370da6ed18ed75f0fe5299e9cb512935735d0209815180610e76853383610cb9565b0390a1610e8e825180159081156111f5575b5061138f565b8560a0860192610ea0845143106113af565b0196610eac8851610d0f565b610eb581610ad6565b61100657866109579851015184523360018060a01b03610ed58851610139565b1603610ffc57610ee48561144f565b610ef1845151151561146f565b610f4b8785515192610f09858a01948551101561148f565b610f1334156114af565b8451600181527fa3cb14ae6718898b4b8231912aad3287962e9cafffb74ee66b946710fee6fdcf9080602081015b0390a10160019052565b610f7e610f56610d6a565b97610f6a610f648951610139565b8a610a92565b610f7681890151610139565b908901610a92565b519086015260608401516060860152610fa6610f9d6080860151610139565b60808701610a92565b5160a0850152515160c08401528060e0840152610fc7610100840160019052565b61012083015261014090610fdd33838501610a92565b61016091438385015281015161018084015201516101a0820152611d5f565b610ee4600161144f565b95966001611018829694939651610d0f565b61102181610ad6565b14611031575b5050505050505050565b849051015190611049888501928084525115156113cf565b81515161105b868801918251116113ef565b6101209561107d3360018060a01b036110768a8c0151610139565b161461140f565b835151916110d98261109560608c0195865190611230565b9b6110a78d838c019e8f52341461142f565b8151600181527f59719a440030f0c4c249963baeef1c713f1f7e14eda66817eb571298de65da03908060208101610f41565b60c08901805186515111156111ea576110f6865151825190611218565b60608901525b805186515110156111de575185515161111491611218565b60808801525b611122610d6a565b9a895161112e90610139565b611138908d610a92565b808a015161114590610139565b611150918d01610a92565b51908a0152516060890152608086015161116990610139565b6111769060808a01610a92565b5160a0880152515160c0870152606082015160e08701526101008601526080015190840152610140906111ab33838601610a92565b61016091438386015281015161018085015201519051016101a08201526111d190611d5f565b3880808080808080611027565b5085608088015261111a565b8660608901526110fc565b90506001541438610e88565b50634e487b7160e01b600052601160045260246000fd5b9081039081116112255790565b61122d611201565b90565b91906000928115918215611248575b50501561015657565b81819293955002828104821483151715611282575b809461126c570414388061123f565b634e487b7160e01b600052601260045260246000fd5b61128a611201565b61125d565b1561129657565b60405163100960cb60e01b8152600f6004820152602490fd5b156112b657565b60405163100960cb60e01b815260106004820152602490fd5b156112d657565b60405163100960cb60e01b815260116004820152602490fd5b156112f657565b60405163100960cb60e01b815260126004820152602490fd5b1561131657565b60405163100960cb60e01b815260136004820152602490fd5b1561133657565b60405163100960cb60e01b815260146004820152602490fd5b1561135657565b60405163100960cb60e01b815260156004820152602490fd5b1561137657565b60405163100960cb60e01b815260166004820152602490fd5b1561139657565b60405163100960cb60e01b815260176004820152602490fd5b156113b657565b60405163100960cb60e01b815260186004820152602490fd5b156113d657565b60405163100960cb60e01b8152601d6004820152602490fd5b156113f657565b60405163100960cb60e01b8152601e6004820152602490fd5b1561141657565b60405163100960cb60e01b8152601f6004820152602490fd5b1561143657565b60405163100960cb60e01b815260206004820152602490fd5b1561145657565b60405163100960cb60e01b815260196004820152602490fd5b1561147657565b60405163100960cb60e01b8152601a6004820152602490fd5b1561149657565b60405163100960cb60e01b8152601b6004820152602490fd5b156114b657565b60405163100960cb60e01b8152601c6004820152602490fd5b156114d657565b60405163100960cb60e01b8152603e6004820152602490fd5b156114f657565b602460405163100960cb60e01b815260406004820152fd5b1561151557565b60405163100960cb60e01b8152603b6004820152602490fd5b1561153557565b60405163100960cb60e01b8152603d6004820152602490fd5b1561155557565b60405163100960cb60e01b815260356004820152602490fd5b1561157557565b60405163100960cb60e01b815260376004820152602490fd5b1561159557565b60405163100960cb60e01b815260386004820152602490fd5b156115b557565b60405163100960cb60e01b8152603a6004820152602490fd5b156115d557565b60405163100960cb60e01b815260326004820152602490fd5b156115f557565b60405163100960cb60e01b815260346004820152602490fd5b1561161557565b60405163100960cb60e01b8152602f6004820152602490fd5b1561163557565b60405163100960cb60e01b815260316004820152602490fd5b1561165557565b60405163100960cb60e01b815260296004820152602490fd5b1561167557565b60405163100960cb60e01b8152602b6004820152602490fd5b1561169557565b60405163100960cb60e01b8152602c6004820152602490fd5b156116b557565b60405163100960cb60e01b8152602e6004820152602490fd5b156116d557565b60405163100960cb60e01b815260216004820152602490fd5b156116f557565b60405163100960cb60e01b815260226004820152602490fd5b1561171557565b60405163100960cb60e01b815260236004820152602490fd5b1561173557565b602460405163100960cb60e01b8152816004820152fd5b1561175357565b60405163100960cb60e01b815260256004820152602490fd5b1561177357565b60405163100960cb60e01b815260266004820152602490fd5b1561179357565b60405163100960cb60e01b815260286004820152602490fd5b6117b46109f5565b9060008083528060208401528060408401526117ce610a79565b60608401526117db610a79565b60808401526117e8610a79565b60a08401526117f5610a79565b60c08401528060e0840152611808610a79565b610100840152611816610a79565b6101208401528061014084015261182b610a79565b610160840152611839610a79565b610180840152806101a084015261184e610a79565b6101c084015261185c610a79565b6101e084015261186a610a79565b610200840152611878610a79565b6102208401528061024084015261188d610a79565b61026084015261189b610a79565b610280840152806102a08401526118b0610a79565b6102c08401526118be610a79565b6102e08401528061030084015280610320840152806103408401528061036084015280610380840152806103a0840152806103c0840152806103e08401528061040084015280610420840152806104408401528061046084015280610480840152806104a0840152806104c0840152806104e08401528061050084015280610520840152806105408401528061056084015280610580840152806105a0840152806105c08401526105e0830152565b506040513d6000823e3d90fd5b90600181101561198b5760051b0190565b634e487b7160e01b600052603260045260246000fd5b8181106119ac575050565b600081556001016119a1565b6119c360025461084b565b806119cb5750565b601f81116001146119de57506000600255565b6002600052611a2390601f0160051c6000805160206131d6833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6119a1565b6000602081208160025555565b600160ff196004541617600455565b60ff1960045416600455565b9081526001600160a01b03909116602082015260400190565b3d15611aac573d906001600160401b038211611a9f575b60405191611a93601f8201601f1916602001846108fa565b82523d6000602084013e565b611aa7610885565b611a7b565b606090565b8151815260209182015115159181019190915260400190565b6040519061018082016001600160401b03811183821017611b3d575b604052816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152611b33610d1c565b6101408201520152565b611b45610885565b611ae6565b6000915b60018310611b5b57505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611b4e565b81516001600160a01b031681526101c0810192916101a090610160906020818101516001600160a01b03169085015260408181015190850152606080820151908501526080808201516001600160a01b03169085015260a0818101519085015260c0808201519085015260e080820151908501526101008082015190850152610120808201516001600160a01b031690850152611c306101408083015190860190611b4a565b0151910152565b90601f8211611c44575050565b6109579160026000526020600020906020601f840160051c83019310611c72575b601f0160051c01906119a1565b9091508190611c65565b80519091906001600160401b038111611d52575b611ca481611c9f60025461084b565b611c37565b602080601f8311600114611ce05750819293600092611cd5575b50508160011b916000199060031b1c191617600255565b015190503880611cbe565b6002600052601f198316949091906000805160206131d6833981519152926000905b878210611d3a575050836001959610611d21575b505050811b01600255565b015160001960f88460031b161c19169055388080611d16565b80600185968294968601518155019501930190611d02565b611d5a610885565b611c90565b611d676117ac565b9061010091611d7883830151151590565b15611e7a5750611e75610957926101a0611e6793611d94611aca565b92611da8611da28351610139565b85610a92565b611dc1611db86020840151610139565b60208601610a92565b6040820151604085015260608201516060850152611dee611de56080840151610139565b60808601610a92565b60a082015160a085015260c082015160c085015260e082015160e0850152610120908183015190850152611e3361014091611e2b83850151610139565b908601610a92565b610180820151908401520151610160820152611e4f600b600055565b611e5843600155565b60405192839160208301611b8a565b03601f1981018352826108fa565b611c7c565b916101a082019182519261012091611ea583820195611e9f8751606085015190611230565b90611218565b809281885251036000808080602096878c01958652611ecc611ec78851610139565b610139565b828215612943575bf115612936575b82820193611ee98551610139565b91610140840192611efa8451610139565b91611f2761018092611f138489015151518d5190611218565b6001600160a01b0395909190861690612b8c565b80511561248957600080808093611f41611ec78a51610139565b905190828215612480575bf115612473575b88511561231d5750611f7d90611f698751610139565b611f738651610139565b8a51921690612b8c565b60e083018051909690156121fa5750508351611f9890610139565b30611fa291612c31565b94610320880195865247906103008901918252611fbd611a30565b519151611fc990610139565b95604051809386820198637deb602560e01b8a526024830191611feb92611a4b565b0396601f1997888101855261200090856108fa565b6080850193845161201090610139565b61201990610139565b90515a9260008094938194f161202d611a64565b61203691612a6c565b5061203f611a3f565b30865161204b90610139565b9061205591612c31565b90518082036103408b015261206a911461164e565b4790519003606088019081515251608088019080825260405161208e819282611ab1565b037f5423d6662178aa6b429c1817b62ddc587abc76b371f42d2a19a6869e1dfe32c891a15151156120be9061166e565b3084516120ca90610139565b906120d491612c31565b946103808801958652479661036089019788526120ef611a30565b5192516120fb90610139565b6040516320c4d34760e11b95810195865293849161211c9160248401611a4b565b03908101835261212c90836108fa565b5161213690610139565b61213f90610139565b90515a9260008094938194f1612153611a64565b61215c91612a9c565b50612165611a3f565b30905161217190610139565b9061217b91612c31565b90518082036103a0850152612190911461168e565b479051900360a0820190815152519060c001908082526040516121b4819282611ab1565b037f69e1ba8addc25e8f77a5b82cf0d944843a1be206c632a35560cf071c144ef85991a15151156121e4906116ae565b600080556121f26000600155565b6109576119b8565b927fae6a018a05b621413573d6678a30973c6c79bbdf27c27b6f99e3e382da452c3a96508897889350866122c96000806122f396996121e49e96826122b6611ec76123129f6122e29a6103e061225c61225560809451610139565b3090612c31565b9d019c8d526103c0479f019e8f52612272611a30565b51946122af6122818251610139565b976122a1604051998a928301996320c4d34760e11b8b5260248401611a4b565b03601f1981018952886108fa565b0151610139565b9251925af16122c3611a64565b90612a3c565b506122d2611a3f565b6122dd309151610139565b612c31565b90518082036104008a01521461160e565b4790519003908501908151525193019280845260405191829182611ab1565b0390a151511561162e565b975050509350919060e08301938451151560001461245e57825161234090610139565b3061234a91612c31565b93610440880194855247956104208901968752612365611a30565b51915161237190610139565b604051637deb602560e01b9481019485529283916123929160248401611a4b565b03601f19810183526123a490836108fa565b608001516123b190610139565b6123ba90610139565b90515a9260008094938194f16123ce611a64565b6123d791612a0c565b506123e0611a3f565b3090516123ec90610139565b906123f691612c31565b905180820361046086015261240b91146115ce565b47905190036101608301908151525191019080825260405161242e819282611ab1565b037f19bef5d0f74268dfda518399b7e61586ffe5661f989d516f4d0d8d59ba52362291a15151156121e4906115ee565b50505050505050600080556121f26000600155565b61247b61196d565b611f53565b506108fc611f4c565b50508751929650911590506127e4576124ba906124a68551610139565b6124b08451610139565b8851921690612b8c565b60e081018051909490156127235783516124d390610139565b306124dd91612c31565b946104a08801958652479061048089019182526124f8611a30565b51915161250490610139565b95604051809386820198637deb602560e01b8a52602483019161252692611a4b565b0396601f1997888101855261253b90856108fa565b6080850193845161254b90610139565b61255490610139565b90515a9260008094938194f1612568611a64565b612571916129ac565b5061257a611a3f565b30865161258690610139565b9061259091612c31565b90518082036104c08b01526125a5911461154e565b47905190036101c0880190815152516101e08801908082526040516125cb819282611ab1565b037f462f72e22ba1ab3098c512b01253b9a3562d3478e83fb9ecb4cfed9823f007ba91a15151156125fb9061156e565b30845161260790610139565b9061261191612c31565b94610500880195865247966104e0890197885261262c611a30565b51925161263890610139565b6040516320c4d34760e11b9581019586529384916126599160248401611a4b565b03908101835261266990836108fa565b5161267390610139565b61267c90610139565b90515a9260008094938194f1612690611a64565b612699916129dc565b506126a2611a3f565b3090516126ae90610139565b906126b891612c31565b90518082036105208501526126cd911461158e565b4790519003610200820190815152519061022001908082526040516126f3819282611ab1565b037f79c709bacdaf6a39c8a3577406a917c151cf08c94a53e01c31e6e7beaed4a41791a15151156121e4906115ae565b507fec28f4b5bc5b9aeba418219063ab7a41fba21e861a4129ac8ebfce6cbc4c71f59350946127b8816127a7856122c9600080610280986121e49d82612794899f60806127d99f9161056061277e612255611ec79551610139565b9d019c8d52610540479f019e8f52612272611a30565b9251925af16127a1611a64565b9061297c565b90518082036105808901521461150e565b47905190036102608501908151525193019280845260405191829182611ab1565b0390a151511561152e565b5060e0810180519095509093901561292257825161280190610139565b3061280b91612c31565b936105c0870194855247956105a08801968752612826611a30565b51915161283290610139565b604051637deb602560e01b9481019485529283916128539160248401611a4b565b03601f198101835261286590836108fa565b6080015161287290610139565b61287b90610139565b90515a9260008094938194f161288f611a64565b6128989161294c565b506128a1611a3f565b3090516128ad90610139565b906128b791612c31565b90518082036105e08501526128cc91146114cf565b47905190036102c082019081515251906102e001908082526040516128f2819282611ab1565b037f28fe264be22ec360e510d0c234b604b397540bae0f54567a2838551ffd1a855a91a15151156121e4906114ef565b505050505050600080556121f26000600155565b61293e61196d565b611edb565b506108fc611ed4565b156129545790565b80511561296357805190602001fd5b60405163100960cb60e01b8152603f6004820152602490fd5b156129845790565b80511561299357805190602001fd5b60405163100960cb60e01b8152603c6004820152602490fd5b156129b45790565b8051156129c357805190602001fd5b60405163100960cb60e01b815260366004820152602490fd5b156129e45790565b8051156129f357805190602001fd5b60405163100960cb60e01b815260396004820152602490fd5b15612a145790565b805115612a2357805190602001fd5b60405163100960cb60e01b815260336004820152602490fd5b15612a445790565b805115612a5357805190602001fd5b60405163100960cb60e01b815260306004820152602490fd5b15612a745790565b805115612a8357805190602001fd5b60405163100960cb60e01b8152602a6004820152602490fd5b15612aa45790565b805115612ab357805190602001fd5b60405163100960cb60e01b8152602d6004820152602490fd5b15612ad45790565b805115612ae357805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15612b045790565b805115612b1357805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b15612b345790565b805115612b4357805190602001fd5b60405163100960cb60e01b815260276004820152602490fd5b15612b645790565b805115612b7357805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152612c0893600093849392849190608081016001600160401b03811182821017612c0f575b6040525193165af1612bf8612bf1611a64565b8092612acc565b5060208082518301019101612c1c565b1561015657565b612c17610885565b612bde565b90816020910312610156575161122d81610b80565b6040516370a0823160e01b602082019081526001600160a01b039384166024808401919091528252600093849392849190612c6b816108df565b5193165af1612c82612c7b611a64565b8092612afc565b50602081805181010312610156576020015190565b6040519060c082016001600160401b03811183821017612ce7575b604052600060a083828152612cc5610a79565b6020820152612cd2610a79565b60408201528260608201528260808201520152565b612cef610885565b612cb2565b90612cfd612c97565b90612d0c600b600054146116ce565b612d1461091d565b90612d29602092838082518301019101610c07565b91612d41612d3c61035360045460ff1690565b6116ee565b6040805133815286516020808301919091528701511515818301529095612d99917faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072290606090a1518015908115612fec575b5061170e565b60a08301918251431015612dac9061172e565b612db6341561174c565b8551600181527fd667d8d3ff9344ab88173acff7c4a1c26143b3b414f37bb822cb4d9193747d9f90602090a1606001612def9060019052565b808301948551612dfe90610139565b30612e0891612c31565b9160808601928352479060608701918252612e21611a30565b82808701928351958851612e3490610139565b83518098868201926320c4d34760e11b84526024830191612e5492611a4b565b03601f1981018952612e6690896108fa565b60808a01978851612e7690610139565b612e7f90610139565b90515a9260008094938194f1612e93611a64565b612e9c91612b2c565b50612ea5611a3f565b308b51612eb190610139565b90612ebb91612c31565b905180820360a08c0152612ecf911461176c565b479051900382890190815152519701968088528351612eef819282611ab1565b037fab7c0a614ed0b1889a4a07f5b2ae518dc5bd5944213115b9b0382daaa96acbd391a186515115612f209061178c565b612f28610d6a565b978651612f3490610139565b612f3e908a610a92565b51612f4890610139565b612f53918901610a92565b51908601526060830151606086015251612f6c90610139565b612f799060808601610a92565b5160a084015260c081015160c084015260e081015160e0840152610100808401600090528101516101209081850152810151612fb490610139565b6101409190612fc590858401610a92565b6101609143838601528101516101808501520151905151016101a082015261095790611d5f565b90506001541438612d93565b60209060031901126101565760405190613011826108c4565b6004358252565b60209060831901126101565760405190613031826108c4565b6084358252565b906101208282031261015657604051916130bf919060c09060e085016001600160401b038111868210176130c7575b604052805161307581610145565b8552602081015161308581610145565b602086015260408101516040860152606081015160608601526130aa60808201610b75565b608086015260a081015160a086015201610b8a565b60c082015290565b6130cf610885565b613067565b906103848201918281116130eb575b821061015657565b6130f3611201565b6130e3565b6040516323b872dd60e01b602082019081526001600160a01b03928316602483015230604483015260648083019590955293815261122d936000938493909284919060a081016001600160401b0381118282101761316b575b6040525193165af1612bf8613164611a64565b8092612b5c565b613173610885565b613151565b9190613182610d1c565b9260005b600181106131945750508252565b806131a16001928461197a565b516131ac828861197a565b526131b7818761197a565b5060001981146131c8575b01613186565b6131d0611201565b6131c256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 14460,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:132:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:132:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:132:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:132:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:132:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:132:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:132:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:132:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:83:90:after expr stmt semicolon',
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
