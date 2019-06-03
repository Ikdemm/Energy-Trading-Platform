pragma solidity >=0.4.22 <= 0.5.7;
pragma experimental ABIEncoderV2;


import "./TEC.sol";

contract Matching {
    
    uint256 public valueOneToken;
    address public buyer;
    uint256 public amountTokens;
    address public coinAddr;
    uint256 public numberOffers;
    uint256 public numberDemands;
    
    struct Offer {
     uint256 idOffer;
     address addrSeller;
     string nameSeller;
     uint256 unitPrice;
     uint256 tokenNumber;
     string debut;
     string end;
    }
    
    struct Demand {
     uint256 idDemand;
     address addrBuyer;
     string nameBuyer;
     uint256 maxUnitPrice;
     string debut;
     string end;
    }
    
    mapping(uint256 => Demand) public demands;
    mapping(uint256 => Offer) public offers;
    
    constructor () public  {
        numberOffers=0;
        numberDemands=0;
    }
    
    /*******************getCurrentUser*****************/
    function getCurrentMatchingUser() public view returns (address) {
        return msg.sender;
    }   
    /*********************token value******************/
    function setTokenValue(uint256 _valueOneToken) public {
        valueOneToken=_valueOneToken;
    }
    function getTokenValue() public view returns (uint256) {
        return(valueOneToken);
    }
    /*********set the address of the token as the tec contract********/
    function setCoinAddr (address _addr) public {
        coinAddr=_addr;
    }
    
    /***********Verify that the buyer has enough ether**********/
    modifier hasEther {
        require(buyer.balance > amountTokens*valueOneToken);
        _;
    }
  
    /***********seller sends Token and seller receive ether**********/
    function receiveTEC(address _seller) hasEther public returns (bool) {
            ERC20 _coin = ERC20(coinAddr);
            _coin.transferFrom(_seller,msg.sender,amountTokens);
    }
    
    /******Producer place an offer*****/
    function placeOffer (address _addrSeller,string memory _nameSeller,uint256 _unitPrice,uint256 _tokenNumber,string memory _debut,string memory _end) public {
       Offer memory o;
       o.addrSeller=_addrSeller;
       o.nameSeller=_nameSeller;
       o.unitPrice=_unitPrice;
       o.tokenNumber=_tokenNumber;
       o.debut=_debut;
       o.end=_end;
       o.idOffer= numberOffers;
       offers[numberOffers]=o;
       numberOffers++;
       
    } 
  
    /******consumer place a demand*****/
    function placeDemand (address _addrBuyer,string memory _nameBuyer,uint256 _maxUnitPrice,string memory _debut,string memory _end) public {
       Demand memory d;
       d.idDemand=numberDemands;
       d.addrBuyer=_addrBuyer;
       d.nameBuyer=_nameBuyer;
       d.maxUnitPrice=_maxUnitPrice;
       d.debut=_debut;
       d.end=_end;
       demands[numberDemands]=d;
       numberDemands++;
    } 
    
    /**********************************/
    function getOffersLength() public view returns (uint256) {
        return(numberOffers);
    }
    
    function getDemandsLength() public view returns (uint256) {
        return(numberDemands);
    }
    
    function getOfferByAddr(address addr) public view returns (address,string memory,uint256,uint256,string memory,string memory){
        for(uint i=0; i<numberOffers;i++){
            if(offers[i].addrSeller==addr){
                return (offers[i].addrSeller,offers[i].nameSeller,offers[i].unitPrice,offers[i].tokenNumber,offers[i].debut,offers[i].end);
            }
        }
    }

    function getDemandByAddr(address addr) public view returns (address,string memory,uint256,string memory,string memory){
        for(uint i=0; i<numberDemands;i++){
            if(demands[i].addrBuyer==addr){
                return (demands[i].addrBuyer,demands[i].nameBuyer,demands[i].maxUnitPrice,demands[i].debut,demands[i].end);
            }
        }
    }

    function getOfferById (uint256 _id) public view returns (address,string memory,uint256,uint256,string memory,string memory){
        return (offers[_id].addrSeller,offers[_id].nameSeller,offers[_id].unitPrice,offers[_id].tokenNumber,offers[_id].debut,offers[_id].end);
    }
    
    function getDemandById (uint256 _id) public view returns (address,string memory,uint256,string memory,string memory){
        return (demands[_id].addrBuyer,demands[_id].nameBuyer,demands[_id].maxUnitPrice,demands[_id].debut,demands[_id].end);
    }
    /*************************************************/
   function link(uint256 idOffer ,address Buyer, address Seller , address TecAddr) public {
        this.setCoinAddr(TecAddr);
        ERC20 _coin = ERC20(coinAddr);
        _coin.transferFrom(Seller,Buyer,offers[idOffer].tokenNumber);
        delete offers[idOffer];
    }
    /*************************************************/
    function getAllOffers() public view returns (Offer[] memory) {
        Offer[] memory offersTab = new Offer[](numberOffers);
        
        for(uint i=0;i<numberOffers;i++){
            offersTab[i]=offers[i];
        }
        return(offersTab);
    }

    function getAllDemands() public view returns (Demand[] memory) {
        Demand[] memory demandsTab = new Demand[](numberDemands);
        
        for(uint i=0;i<numberDemands;i++){
            demandsTab[i]=demands[i];
        }
        return(demandsTab);
    }
}

