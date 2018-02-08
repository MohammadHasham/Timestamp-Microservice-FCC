var express = require('express');
var moment = require('moment');
const app = express();

app.get('/:timestamp',(req,res)=>{

  if(isNaN(req.params.timestamp)){
    var time = parseInt(Date.parse(req.params.timestamp)/1000).toFixed(0);
    res.send({"unix":time, "natural": req.params.timestamp});
  }
  else if(!isNaN(req.params.timestamp)){ //if unix time entered
    var d = new Date(req.params.timestamp * 1000);
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var year = d.getFullYear();
    var month = months[d.getMonth()];
    var date = d.getDate();
    var time = `${month} ${date}, ${year}`;
    res.send({"unix":req.params.timestamp, "natural": time});
  }
});
app.get('/',(req,res)=>{
  res.send({"unix":null,"natural":null});
});
app.listen(3000,()=>{
  console.log('server listening on port 3000');
});
