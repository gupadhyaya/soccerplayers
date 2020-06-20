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

* Compile crypto soccer smart contract

```
truffle compile
```

* Deploy crypto soccer smart contract

```
truffle migrate --reset --network testnet
```

* Running an example that creates a player and displays the player information.

```
truffle exec ./test.js --network testnet
```

## Credits

Smart contract code of CryptoSoccerToken is adopted from: https://etherscan.io/address/0xc95c0910d39d1f6cd3bd71e4b689660c18172b7b#code 