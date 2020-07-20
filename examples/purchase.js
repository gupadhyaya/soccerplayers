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
soccerPlayers.wallet.addByPrivateKey(
  process.env.PRIVATE_KEY
);
const options = {
  gasPrice: process.env.GAS_PRICE,
  gasLimit: process.env.GAS_LIMIT,
  value: 100000000000000000000, // 100 ONEs
};
const instance = soccerPlayers.methods;
async function purchase(id) {
  let res = await instance.purchase(id).send(options);
//   console.log(
//     "purchased player: " +
//       id +
//       ", tx hash: " +
//       res.transaction.receipt
//   );
    console.log(res.transaction.receipt);
}
purchase(2).then(() => {
  process.exit(0);
});
