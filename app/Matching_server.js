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
            "0x49afC8DEa6628E6e40F42d367E6c4e0c189069eE",
            1000000000,
            { from: producerAccount, gas: 300000000 }
          );
          TecContract.transferFrom(
            producerAccount,
            "0xB1444F4E57491260A2C59458d36E1Da63cbFE624",
            1000000000,
            { from: producerAccount, gas: 300000000 }
          );
          TecContract.transferFrom(
            producerAccount,
            "0x1E1ecaB94754cc2D2c8B8D8A38C2F0c4adEbF2E9",
            1000000000,
            { from: producerAccount, gas: 300000000 }
          );
          TecContract.transferFrom(
            producerAccount,
            "0x04bce989CA6bfCfF00144212cC429ec3ad255F03",
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
