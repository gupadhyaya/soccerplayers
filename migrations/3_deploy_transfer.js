const Migrations = artifacts.require("TestTransfer");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
