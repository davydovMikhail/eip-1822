const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("eip-1822", function () {
  it("Pattern checking", async function () {
    const MyFinalContract = await ethers.getContractFactory("MyFinalContract");
    const myFinalContract = await MyFinalContract.deploy();
    await myFinalContract.deployed();
    const constructdata = web3.utils.sha3('constructor1()').substring(0, 10)
    const Proxy = await ethers.getContractFactory("Proxy");
    const proxyE = await Proxy.deploy(constructdata, myFinalContract.address);
    await proxyE.deployed();
    let proxy = MyFinalContract.attach(proxyE.address)
    await proxy.increment()
    const checkUint = await proxy.myUint()
    console.log(checkUint)
    await proxy.decrement()
    const checkUint1 = await proxy.myUint()
    console.log(checkUint1)
    await proxy.increment()
    await proxy.increment()
    const NewContract = await ethers.getContractFactory("NewContract");
    const newContract = await NewContract.deploy();
    await newContract.deployed();
    proxy = NewContract.attach(proxyE.address)
    await proxy.updateCode(newContract.address)
    await proxy.double()
    const checkUint2 = await proxy.myUint()
    console.log(checkUint2)
  });
});
