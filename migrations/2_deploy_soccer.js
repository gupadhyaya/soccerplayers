const Migrations = artifacts.require("SoccerPlayers");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
