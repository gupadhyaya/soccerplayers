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
const contractAddr = "0x224802786fee2e0DAfCA627ee173f45FAdE69bE6";

const soccerPlayers = hmy.contracts.createContract(
  contractJson.abi,
  contractAddr
);
// soccerPlayers.wallet.addByPrivateKey(
//   "1f054c21a0f57ebc402c00e14bd1707ddf45542d4ed9989933dbefc4ea96ca68"
// );

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
    console.log("transactions", res.transactionCount);
  }
}
display().then(() => {
    process.exit(0);
});