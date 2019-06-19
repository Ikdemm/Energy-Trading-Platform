const web3 = require('../app/cl_web3');
const contract=require('../app/TEC_server');

accounts = web3.eth.accounts
producerAccount=accounts[0];

module.exports =  {
  getBalanceOf: async function(owner,res){
    console.log("TecContractInstance : " + TecContract);
      console.log(owner);
  res.json(TecContract.balanceOf(owner,{from: producerAccount, gas:300000000 }));
  },

  transfer: async function(account,value,res){
    console.log("TecContractInstance : " + TecContract);
    res.json(TecContract.transfer(account,value,{from: producerAccount, gas:300000000 }));
  },

  transferFrom: async function(accountFrom,accountTo,value,res){
    console.log("TecContractInstance : " + TecContract);
    res.json(TecContract.transferFrom(accountFrom,accountTo,value,{from: producerAccount, gas:300000000 }));
  },
}
  
  

