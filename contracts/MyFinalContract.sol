//SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

import "./MyContract.sol";
import "./Proxiable.sol";

contract MyFinalContract is MyContract, Proxiable {

    function updateCode(address newCode) onlyOwner public {
        updateCodeAddress(newCode);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner is allowed to perform this action");
        _;
    }

    function decrement() public {
        myUint--;
    }
}