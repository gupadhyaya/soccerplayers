pragma solidity >=0.4.21 <0.6.0;

contract Test {
    struct Entrant {
        address payable entrantAddress;
    }

    uint256 fee = 1 ether;
    Entrant[] entrants;

    function calculateFee() public view returns (uint256) {
        uint256 calculatedFee = fee;
        for (uint256 i; i < entrants.length; i++) {
            if (msg.sender == entrants[i].entrantAddress) {
                calculatedFee = calculatedFee * 2;
            }
        }

        return calculatedFee;
    }

    function Enter() public {
        Entrant memory entrant = Entrant(msg.sender);
        entrants.push(entrant);
    }
}
