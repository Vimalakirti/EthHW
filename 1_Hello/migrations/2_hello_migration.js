const HelloWorld = artifacts.require("./Helloworld.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
};
