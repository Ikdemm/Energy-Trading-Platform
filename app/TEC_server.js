const web3 = require('./cl_web3');
const {TecBytecode,TecSC} = require ('./Contracts');

global.TecContractAddress = null;
global.TecContract=null;

accounts = web3.eth.accounts
producerAccount=accounts[0];

exports.deployTec = function deployTec() {
    TecContractDeployment = TecSC;
    global.TecContract=TecContractDeployment.new(producerAccount, {
      from:producerAccount,
      data:TecBytecode,
      gas:300000000},function(err, TecContractDeployment){
        if(!err) {
          if(!TecContractDeployment.address) {
            console.log("The hash of the transaction : "+TecContractDeployment.transactionHash) ;
        }else{
          global.TecContractAddress=TecContractDeployment.address;
          console.log("TEC contract address : "+TecContractAddress);
          console.log("TEC Deployment done!");
          exports.TecContractAddress=TecContractAddress;
          console.log("TecContract deploy  "+TecContract);
          global.TecContract=TecContract;
          
        }
        }else{
          console.log("Deploy TEC error :"+err)
        }
      });
  }
  
