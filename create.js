var SoccerPlayers = artifacts.require("SoccerPlayers");
const myAddress = "0xc162199cDaeAa5a82f00651dd4536F5d2d4277C5";

module.exports = function () {
  async function createPlayers() {
    let instance = await SoccerPlayers.deployed();
    let players = [
      "Andrea Pirlo",
      "Diego Maradona",
      "Ronaldo",
      "Ronaldinho",
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Pele",
      "Zinedine Zidane",
      "Johan Cruyff",
      "Andres Iniesta",
    ];
    for (i = 0; i < 3; i++) { //players.length
      let res = await instance.createPromoPlayer(myAddress, players[i], 0, i)
      console.log("created player: " + players[i] + ", tx hash: " + res.tx);
    }
  }
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
    }
  }
  createPlayers().then(() => {
    display().then(() => {
      console.log("done!!!");
      process.exit(0);
    });
  });
};
