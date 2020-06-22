var CryptoSoccrToken = artifacts.require("CryptoSoccrToken");
//test account address, keys under
//one1793mvw79d8eech2m8xd7uptgxwdd07cnlyde63
const testAccount = "0xF163B63Bc569F39C5D5b399bEE0568339aD7FB13";

module.exports = function () {
  async function purchase(id) {
    let val = 10;
    // let price = 30000000000
    CryptoSoccrToken.defaults({value: val});//, gasPrice: price})
    let instance = await CryptoSoccrToken.deployed();
    let res = await instance.purchase(id);
    console.log("tx hash:" + res.tx);
    res.logs.forEach(event => {
      if (event.event == "TokenSold") {
        console.log(event.args);
      }
    });
  }
  // purchase Lionel Messi
  purchase(1).then(() => {
      console.log("done!!!");
      process.exit(0);
  });
};