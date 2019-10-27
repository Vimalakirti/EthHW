pragma solidity ^0.5.0;


contract Helloworld {
  string message;
  constructor() public {
    message = "NMLAB";
  }

  function strConcat(string memory _a, string memory _b) internal pure returns (string memory){
    bytes memory _ba = bytes(_a);
    bytes memory _bb = bytes(_b);
    string memory _c = new string(_ba.length + _bb.length);
    bytes memory _bc = bytes(_c);
    uint k = 0;
    for (uint i = 0; i < _ba.length; i++) _bc[k++] = _ba[i];
    for (uint i = 0; i < _bb.length; i++) _bc[k++] = _bb[i];
    return string(_bc);
  }

  // A Getter function
  function SayHello() public view returns (string memory) {
    return strConcat("Hello ", message);
  }

  // A Setter function
  function SetMessage(string memory newMessage) public {
    message = newMessage;
  }
}
