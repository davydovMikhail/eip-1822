//SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

contract MyContract {

    address public owner;
    uint public myUint;

    function constructor1() public {
        require(owner == address(0), "Already initalized");
        owner = msg.sender;
    }

    function increment() public {
        require(msg.sender == owner, "Only the owner can increment"); //someone forget to uncomment this
        myUint++;
    }
}
