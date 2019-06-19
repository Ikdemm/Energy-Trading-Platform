const web3 = require('../app/cl_web3');
const contract=require('../app/TEC_server');

accounts = web3.eth.accounts;
producerAccount=accounts[0];
consumerAccount=accounts[1];

module.exports =  {
    placeOffer: async function(addrSeller,nameSeller,unitPrice,tokenNumber,debut,end,res){
    console.log(addrSeller+nameSeller+unitPrice+tokenNumber+debut+end);  
    console.log("MatchingContractInstance : " + MatchingContract);
  res.json(MatchingContract.placeOffer(addrSeller,nameSeller,unitPrice,tokenNumber,debut,end,{from: producerAccount, gas:300000000 }));
  },

  placeDemand: async function(addrBuyer,nameBuyer,maxUnitPrice,debut,end,res){
    console.log("MatchingContractInstance : " + MatchingContract);
  res.json(MatchingContract.placeDemand(addrBuyer,nameBuyer,maxUnitPrice,debut,end,{from: consumerAccount, gas:300000000 }));
  },

  getOfferById: async function(id,res){
    console.log("MatchingContractInstance : " + MatchingContract);
    console.log("id in get :" + id);
  res.json(MatchingContract.getOfferById(id,{from: consumerAccount, gas:300000000 }));
  },
  
  getDemandById: async function(id,res){
    console.log("MatchingContractInstance : " + MatchingContract);
  res.json(MatchingContract.getDemandById(id,{from: producerAccount, gas:300000000 }));
  },

  getOfferByAddr: async function(addrSeller,res){
    console.log("MatchingContractInstance : " + MatchingContract);
  res.json(MatchingContract.getOfferByAddr(addrSeller,{from: consumerAccount, gas:300000000 }));
  },

  getDemandByAddr: async function(addrBuyer,res){
    console.log("MatchingContractInstance : " + MatchingContract);
  res.json(MatchingContract.getDemandByAddr(addrBuyer,{from: producerAccount, gas:300000000 }));
  },

  setCoinAddr: async function(addr,res){
    console.log("address coin : " + addr);
  res.json(MatchingContract.setCoinAddr(addr,{from: consumerAccount, gas:300000000 }));
  },

  link: async function(idOffer,Buyer,Seller,addrCoin,res){
  res.json(MatchingContract.setCoinAddr(idOffer,Buyer,Seller,addrCoin,{from: consumerAccount, gas:300000000 }));
  },
  
  getCurrentMatchingUser: async function(res){
  res.json(MatchingContract.getCurrentMatchingUser({from: consumerAccount , gas:300000000 }));
  },
  
  getOffersLength: function(res){
  res.json(MatchingContract.getOffersLength({from: producerAccount , gas:300000000 }));
  },

  // getListOffers: function(res){
  //   var length = MatchingContract.getOffersLength({from: producerAccount , gas:300000000 });
  //   var offer = {
  //     addrSeller : String,
  //     nameSeller : String,
  //     unitPrice = 0,
  //     tokenNumber = 0,
  //     debut : String,
  //     end : String,
  //   };
  //   var offers ;
  //   for(var i=0;i<length;i++){
  //     var o: offer;

  //   }
  // }
  
}
  
  

