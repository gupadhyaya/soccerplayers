var SoccerPlayers = artifacts.require("SoccerPlayers");

module.exports = function () {
  async function display() {
    let instance = await SoccerPlayers.deployed();
    let total = await instance.totalSupply();
    console.log("total players: " + total.toString());
    for (i = 0; i < total; i++) {
      let res = await instance.getPlayer(i);
      console.log("========== Player info (index: " + i + ")==========");
      console.log("name", res.playerName);
      console.log("internalPlayerId", res.internalPlayerId);
      console.log("sellingPrice", res.sellingPrice);
      console.log("owner", res.owner);
      console.log("transactions", res.transactionCount);
    }
  }
    display().then(() => {
      console.log("done!!!");
      process.exit(0);
    });
};
