pragma solidity >=0.4.21 <0.6.0;

contract TestTransfer {
    address owner;

    function Owner() public {
        owner = msg.sender;
    }

    function Send() public payable {
        address(uint160(owner)).transfer(msg.value);
    }

    function SendBack() public payable {
        msg.sender.transfer(msg.value);
    }
}
