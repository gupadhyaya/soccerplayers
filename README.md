# soccerplayer.app
A soccer player crypto game ported to [Harmony](http://harmony.one) blockchain

## Install instructions

### Requirements 

* nodejs 
* truffle
* solidity (solc)

### Commands

* Fetch repo 

```
git clone https://github.com/gupadhyaya/soccerplayers.git
```

* Install dependencies

```
npm install
```

* Compile soccer player smart contract

```
truffle compile
```

* Deploy soccer player smart contract. You will need a testnet funded account. Fund your harmony one address [here](https://harmony-faucet.ibriz.ai)

```
truffle migrate --reset --network testnet
```
or 
```
node examples/deploy.js
```

* Create soccer players

```
node examples/create.js
```

* Purchase soccer players
```
node examples/purchase.js
```

## Disclaimer

This project is sourced from [CryptoSoccerToken](https://etherscan.io/address/0xc95c0910d39d1f6cd3bd71e4b689660c18172b7b#code). We are building it for technology demonstration, and not for commercial purposes.