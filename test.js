const { getAddress } = require('@harmony-js/crypto')
var CryptoSoccrToken = artifacts.require("CryptoSoccrToken");

//mint account address
//test account with 100 ONEs
//one1c93pn8x6a2j6stcqv5wag5m0t5k5ya79ge86sg
//1f054c21a0f57ebc402c00e14bd1707ddf45542d4ed9989933dbefc4ea96ca68
//0xc162199cDaeAa5a82f00651dd4536F5d2d4277C5
const myAddress = "0xc162199cDaeAa5a82f00651dd4536F5d2d4277C5";
// const  myOneAddress = getAddress(myAddress).bech32;

//test account address, keys under
//one1793mvw79d8eech2m8xd7uptgxwdd07cnlyde63
const  testAccount = "0xF163B63Bc569F39C5D5b399bEE0568339aD7FB13";
// const  testAccOneAddr = getAddress(testAccount).bech32;

module.exports = function() {
    async function contractInfo() {
        let instance = await CryptoSoccrToken.deployed();
        let name = await instance.name();
        let total = await instance.totalSupply();
        console.log("CryptoSoccrToken is deployed at address " + instance.address);
        console.log("CryptoSoccrToken Name: " + name);
        console.log("total numebr of players: " + total.toString());
    }
    async function createOnePlayer(addr, name, price, id) {
        let instance = await CryptoSoccrToken.deployed();

        // createPromoPlayer(address _owner, string memory _name, uint256 _price, uint256 _internalPlayerId)
        // only contract deployer (treated as ceo can create initial players)
        res = await instance.createPromoPlayer(addr, name, price, id);
        console.log("result: ", res);
    }
    async function fetchPlayer(index) {
        let instance = await CryptoSoccrToken.deployed();
        let total = await instance.totalSupply();

        console.log("total numebr of players: " + total.toString());
        let res = await instance.getPlayer(index);
        console.log("player info: ", res);
        process.exit(0);
    }
    contractInfo().then(() => {
        createOnePlayer(testAccount, "bruno", 1, 0).then(() => {
            fetchPlayer(0);
        })
    })
};
