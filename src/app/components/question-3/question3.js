const arg = process.argv.slice(2);
let map = [{'id':'B-INCOMESSF','value':'10.0548'}, {'id':'BM70SSF','value':'9.9774'},
{'id':'BEQSSF','value':'11.247'}, {'id':'B-FUTURESSF','value':'11.443'}]
const o = map.find(a => a.id == arg[0]);
o!=undefined? console.log(o.value) : console.log('not found data');
