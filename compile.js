const path = require('path');
const fs = require('fs');
const solc = require ('solc');

const tecPath = path.resolve(__dirname , 'contracts','TEC.sol');
const matchingPath = path.resolve(__dirname , 'contracts','Matching.sol');

var input = {
    'TEC.sol': fs.readFileSync(tecPath, 'utf8'),
    'Matching.sol': fs.readFileSync(matchingPath, 'utf8')
};

// console.log(solc.compile ({sources: input},2));
module.exports = solc.compile ({sources: input},2).contracts;
