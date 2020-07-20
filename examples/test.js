require("dotenv").config();
const { Harmony } = require("@harmony-js/core");
const { ChainID, ChainType } = require("@harmony-js/utils");
const hmy = new Harmony(
  "https://api.s0.b.hmny.io",
  {
    chainType: ChainType.Harmony,
    chainId: ChainID.HmyTestnet,
  }
);
const contractJson = require("../build/contracts/Test.json");
const contractAddr = "0xD8454584b5e60351e090Bdb5364FC739C9a29C4c";

const contract = hmy.contracts.createContract(contractJson.abi, contractAddr);
// needed for contractMethod.send
contract.wallet.addByPrivateKey(
  process.env.PRIVATE_KEY
);

const options = {
  gasPrice: process.env.GAS_PRICE,
  gas: process.env.GAS_LIMIT,
  from: "0xc162199cDaeAa5a82f00651dd4536F5d2d4277C5",
};

const methods = contract.methods;

async function test() {
  let res = await methods.calculateFee().call(options);
  console.log(res.toString());
  await methods.Enter().send(options);
  res = await methods.calculateFee().call(options);
  console.log(res.toString());
}
test().then(() => {
  process.exit(0);
});
