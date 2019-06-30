const web3 = require("./cl_web3");
const { TecSC, MatchingSC, MatchingBytecode } = require("./Contracts");

var MatchingContractAddress = null;
global.MatchingContract = null;

accounts = web3.eth.accounts;
consumerAccount = accounts[1];
producerAccount = accounts[0];

exports.deployMatching = function deployMatching() {
  matchingContractDeployment = MatchingSC;
  MatchingContract = matchingContractDeployment.new(
    producerAccount,
    {
      from: consumerAccount,
      data: MatchingBytecode,
      gas: 300000000
    },
    function(err, matchingContractDeployment) {
      if (!err) {
        if (!matchingContractDeployment.address) {
          console.log(
            "The hash of the transaction : " +
              matchingContractDeployment.transactionHash
          ); // The hash of the transaction, which deploys the contract
        } else {
          MatchingContractAddress = matchingContractDeployment.address;
          console.log("Matching contract address : " + MatchingContractAddress);
          console.log("Matching Deployment done!");
          global.MatchingContract = MatchingContract;
          MatchingContract.setCoinAddr(TecContractAddress, {
            from: producerAccount,
            gas: 300000000
          });
          TecContract.transferFrom(
            producerAccount,
            "0x1C346c48640c435c52226553b606Ac5Aa6C7e4ff",
            1000000000,
            { from: producerAccount, gas: 300000000 }
          );
          TecContract.transferFrom(
            producerAccount,
            "0x27b5391Ceac07Bbf084F01C387A60487D72Bb7Cb",
            1000000000,
            { from: producerAccount, gas: 300000000 }
          );
          TecContract.transferFrom(
            producerAccount,
            "0x22147F375334BBae1247bC8338f1Ab8055601757",
            1000000000,
            { from: producerAccount, gas: 300000000 }
          );
          TecContract.transferFrom(
            producerAccount,
            "0xFF96c42713E5a8421e6562F903758831e172810B",
            1000000000,
            { from: producerAccount, gas: 300000000 }
          );
        }
      } else {
        console.log("Deploy matching error :" + err);
      }
    }
  );
};
