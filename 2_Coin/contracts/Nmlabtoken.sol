pragma solidity ^0.5.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Nmlabtoken is ERC20 {
  string public name = "Nmlab";
  string public symbol = "NML";
  uint8 public decimals = 2;
  uint public INITIAL_SUPPLY = 10000;
  constructor() public {
    _mint(msg.sender, INITIAL_SUPPLY);
  }
}
