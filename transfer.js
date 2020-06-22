var TestTransfer = artifacts.require("TestTransfer");

module.exports = function () {
  async function test() {
    let instance = await TestTransfer.deployed();
    let val = 10000000000000000000; // 10 ONEs
    TestTransfer.defaults({value: val});
    let res = await instance.Send()
    console.log(res);
  }
  test().then(() => {
      console.log("done!!!");
      process.exit(0);
    });
};
