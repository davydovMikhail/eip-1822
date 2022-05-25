//SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

import "./MyFinalContract.sol";

contract NewContract is MyFinalContract {
    function double() public {
        myUint = myUint * 2;
    }
}