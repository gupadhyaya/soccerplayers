var TestTransfer = artifacts.require("TestTransfer");

module.exports = function () {
  async function test() {
    let instance = await TestTransfer.deployed();
    let res = await instance.Owner();
    console.log("res:", res);
  }
  test().then(() => {
      console.log("done!!!");
      process.exit(0);
    });
};
