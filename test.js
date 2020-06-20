const { getAddress } = require('@harmony-js/crypto')
var CryptoSoccrToken = artifacts.require("CryptoSoccrToken");

//mint account address
//test account with 100 ONEs
//one1c93pn8x6a2j6stcqv5wag5m0t5k5ya79ge86sg
//1f054c21a0f57ebc402c00e14bd1707ddf45542d4ed9989933dbefc4ea96ca68
//0xc162199cDaeAa5a82f00651dd4536F5d2d4277C5
const myAddress = "0xc162199cDaeAa5a82f00651dd4536F5d2d4277C5";
const  myOneAddress = getAddress(myAddress).bech32;

//test account address, keys under
//one1793mvw79d8eech2m8xd7uptgxwdd07cnlyde63
const  testAccount = "0xF163B63Bc569F39C5D5b399bEE0568339aD7FB13";
const  testAccOneAddr = getAddress(testAccount).bech32;

const transferAmount = "200000000000000000000";

module.exports = function() {
    async function test() {
        let instance = await CryptoSoccrToken.deployed();
        let name = await instance.name();
        let total = await instance.totalSupply();

        console.log("CryptoSoccrToken is deployed at address " + instance.address);
        console.log("CryptoSoccrToken Name: " + name);
        console.log("CryptoSoccrToken Total: " + total.toString());
        console.log("My address : " + myOneAddress);
        console.log("Test account address : " + testAccOneAddr);

        // ret = await instance.transfer(testAccount, transferAmount)
        // console.log("transfer result", ret);
        // console.log("transfer rawLogs", ret.receipt.rawLogs);

        // testAccBalance = await instance.balanceOf(testAccount);

        // console.log("my new       H2O balance is: " + mybalance.toString());
        // console.log("test account H2O balance is: " + testAccBalance.toString());

        process.exit(0);
    }
    test();
};
