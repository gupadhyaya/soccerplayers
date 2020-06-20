const Migrations = artifacts.require("CryptoSoccrToken");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
