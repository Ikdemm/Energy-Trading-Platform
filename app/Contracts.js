const web3 = require('./cl_web3');
const compiledContracts = require ('../compile');

const TecSC = web3.eth.contract(JSON.parse(compiledContracts['TEC.sol:TEC'].interface));
const MatchingSC = web3.eth.contract(JSON.parse(compiledContracts['Matching.sol:Matching'].interface));

const TecBytecode = '0x'+compiledContracts['TEC.sol:TEC'].bytecode;
const MatchingBytecode = '0x'+compiledContracts['Matching.sol:Matching'].bytecode;

module.exports = {
    TecSC,
    MatchingSC,
    MatchingBytecode,
    TecBytecode
}