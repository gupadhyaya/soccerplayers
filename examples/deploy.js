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
const options = {
  gasPrice: process.env.GAS_PRICE, // 1000000000 (1 GWei)
  gasLimit: process.env.GAS_LIMIT, // 103802 should be good
};
const contractJson = require("../build/contracts/SoccerPlayers.json");
let soccerPlayers = hmy.contracts.createContract(contractJson.abi);

soccerPlayers.wallet.addByPrivateKey(
  process.env.PRIVATE_KEY
);

async function deploy() {
  const deployer = soccerPlayers.wallet.signer.address;
  let deployObj = soccerPlayers.deploy({
    from: deployer,
    data: contractJson.bytecode,
  });
  await deployObj.send(options);
  let contractAddr = deployObj.contract.address;
  console.log(contractAddr);
}

deploy().then(() => {
  process.exit(0);
});
