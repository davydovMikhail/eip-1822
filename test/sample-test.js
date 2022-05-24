const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("eip-1822", function () {
  it("Pattern checking", async function () {
    const MyFinalContract = await ethers.getContractFactory("MyFinalContract");
    const myFinalContract = await MyFinalContract.deploy();
    await myFinalContract.deployed();
    const constructdata = web3.utils.sha3('constructor1()').substring(0, 10)
    console.log('constructdata', constructdata);
    const Proxy = await ethers.getContractFactory("Proxy");
    const proxy = await Proxy.deploy(constructdata, myFinalContract.address);
    await proxy.deployed();
    // await myFinalContract.updateCode(proxy.address)
    // const checkUint = await proxy.myUint()
    // console.log(checkUint)
  });
});
