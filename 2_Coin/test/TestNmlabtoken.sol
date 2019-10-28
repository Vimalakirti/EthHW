pragma solidity >=0.4.25 <0.6.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Nmlabtoken.sol";

contract TestNmlabtoken {
  // Test balanceOf(account)
  function testInitialBalance() public {
    Nmlabtoken nml = Nmlabtoken(DeployedAddresses.Nmlabtoken());

    uint expected = 10000;

    Assert.equal(nml.balanceOf(msg.sender), expected, "Owner should have 10000 NML initially");
  }
  // Test totalSupply()
  function testInitialSupply() public {
    Nmlabtoken nml = Nmlabtoken(DeployedAddresses.Nmlabtoken());

    uint expected = 10000;

    Assert.equal(nml.totalSupply(), expected, "Total supply should be 10000 NML initially");
  }
  function testTransfer() public {
    // TODO
  }
  function testAllowance() public {
    // TODO
  }
  function testApprove() public {
    // TODO
  }
  function testTransferFrom() public {
    // TODO
  }
}
