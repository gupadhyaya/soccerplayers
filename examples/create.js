require("dotenv").config();
const { Harmony } = require("@harmony-js/core");
const { ChainID, ChainType } = require("@harmony-js/utils");
const hmy = new Harmony(
  // let's assume we deploy smart contract to this end-point URL
  "https://api.s0.b.hmny.io",
  {
    chainType: ChainType.Harmony,
    chainId: ChainID.HmyTestnet,
  }
);
const contractJson = require("../build/contracts/SoccerPlayers.json");
const contractAddr = "0x16B729874BD8d54A1a3b5d2B0Ff344d3C6604eE0";

const soccerPlayers = hmy.contracts.createContract(
  contractJson.abi,
  contractAddr
);
soccerPlayers.wallet.addByPrivateKey(
  "1f054c21a0f57ebc402c00e14bd1707ddf45542d4ed9989933dbefc4ea96ca68"
);
const ceoAddress = soccerPlayers.wallet.signer.address;

const options = {
  gasPrice: process.env.GAS_PRICE,
  gasLimit: process.env.GAS_LIMIT,
};
const instance = soccerPlayers.methods;

async function display() {
  let total = await instance.totalSupply().call(options);
  console.log("total players: " + total.toString());
  for (i = 0; i < total; i++) {
    let res = await instance.getPlayer(i).call(options);
    console.log("========== Player info (index: " + i + ")==========");
    console.log("name", res.playerName);
    console.log("internalPlayerId", res.internalPlayerId);
    console.log("sellingPrice", res.sellingPrice);
    console.log("owner", res.owner);
  }
}
async function createPlayers() {
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
  for (i = 0; i < players.length; i++) {
    let res = await instance
      .createPromoPlayer(ceoAddress, players[i], 0, i)
      .send(options);
    console.log(
      "created player: " +
        players[i] +
        ", tx hash: " +
        res.transaction.receipt.transactionHash
    );
  }
}
createPlayers().then(() => {
  display().then(() => {
    process.exit(0);
  });
});
