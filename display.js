var CryptoSoccrToken = artifacts.require("CryptoSoccrToken");
const myAddress = "0xc162199cDaeAa5a82f00651dd4536F5d2d4277C5";

module.exports = function () {
  async function display() {
    let instance = await CryptoSoccrToken.deployed();
    let total = await instance.totalSupply();
    console.log("total players: " + total.toString());
    for (i = 0; i < total; i++) {
      let res = await instance.getPlayer(i);
      console.log("========== Player info (index: " + i + ")==========");
      console.log("name", res.playerName);
      console.log("internalPlayerId", res.internalPlayerId);
      console.log("sellingPrice", res.sellingPrice);
      console.log("owner", res.owner);
    }
  }
    display().then(() => {
      console.log("done!!!");
      process.exit(0);
    });
};
