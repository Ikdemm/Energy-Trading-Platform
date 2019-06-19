const express = require("express");
const MatchingRoutes = express.Router();
const service = require("../SC_Services/Matching_Services");
const web3 = require("../app/cl_web3");

accounts = web3.eth.accounts;
producerAccount = accounts[0];

MatchingRoutes.post("/placeOffer", (req, res) => {
  try {
    console.log(JSON.stringify(req.body));
    let addrSeller = req.body.addrSeller;
    let nameSeller = req.body.nameSeller;
    let unitPrice = req.body.unitPrice;
    let tokenNumber = req.body.tokenNumber;
    let debut = req.body.debut;
    let end = req.body.end;
    service.placeOffer(
      addrSeller,
      nameSeller,
      unitPrice,
      tokenNumber,
      debut,
      end,
      res
    );
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

MatchingRoutes.post("/placeDemand", (req, res) => {
  try {
    console.log(JSON.stringify(req.body));
    let addrBuyer = req.body.addrBuyer;
    let nameBuyer = req.body.nameBuyer;
    let maxUnitPrice = req.body.maxUnitPrice;
    let debut = req.body.debut;
    let end = req.body.end;
    service.placeDemand(addrBuyer, nameBuyer, maxUnitPrice, debut, end, res);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

MatchingRoutes.get("/getOfferById", (req, res) => {
  try {
    console.log(JSON.stringify(req.body));
    service.getOfferById(req.body.id, res);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

MatchingRoutes.get("/getDemandById", (req, res) => {
  try {
    console.log(JSON.stringify(req.body));
    service.getDemandById(req.body.id, res);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

MatchingRoutes.get("/getOfferByAddr", (req, res) => {
  try {
    console.log(JSON.stringify(req.body));
    service.getOfferByAddr(req.body.addrSeller, res);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

MatchingRoutes.get("/getDemandByAddr", (req, res) => {
  try {
    console.log(JSON.stringify(req.body));
    service.getDemandByAddr(req.body.addrBuyer, res);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

MatchingRoutes.post("/setCoinAddr", (req, res) => {
  try {
    service.setCoinAddr(TecContractAddress, res);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});


MatchingRoutes.post("/link", (req, res) => {
  try {
    JSON.parse(req.body);
    service.link(
      req.body.idOffer,
      req.body.Buyer,
      req.body.Seller,
      TecContractAddress,
      res
    );
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});


MatchingRoutes.get("/getCurrentMatchingUser", (req, res) => {
  try {
    service.getCurrentMatchingUser(res);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

MatchingRoutes.get("/getOffersLength", (req, res) => {
  try {
    service.getOffersLength(res);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

MatchingRoutes.get("/getListOffers", async (req, res) => {
  try {
    let Offers = [];
    let length = await MatchingContract.getOffersLength({
      from: producerAccount,
      gas: 300000000
    });
    for (let i = 0; i < length; i++) {
      let a = await MatchingContract.getOfferById(i, {
        from: producerAccount,
        gas: 300000000
      });
      let o = {
        addrSeller: a[0],
        nameSeller: a[1],
        unitPrice: a[2],
        tokenNumber: a[3],
        debut: a[4],
        end: a[5]
      };
      Offers.push(o);
    }
    res.send(Offers);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

module.exports = MatchingRoutes;
