const ethers = require("ethers");

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com");

// The address of the deployed smart contract
const contractAddress = "0x3783b8DAf1B14d8e556ec1C681CEB0056157e810";

// The ABI (Application Binary Interface) of the smart contract
const contractABI = [ 
  
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function subs() view returns (uint256)",
    "function subWall() view returns (uint8)",
    "function price() view returns (uint256)",
    "function getTag(uint256 id) view returns (string)",
    "function owner () view returns (address)",
    "function hasSub(address to) view returns (uint)",
    "function mint(address to, string _tag)",
   "event newWall(address,string)",
    "function balanceOf(address) view returns (uint256)",
    "function createWall(string _name,string _symbol,uint256 _price,uint8 _canMod,uint8 _canChange, uint8 sub) returns (address)",
    "function mintandrenewSub(address to) payable"];


// Connect to the smart contract
const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Call the "latest" function
async function callLatest(last) {
    const result = await contract.owner({ from: '0x9D31e30003f253563Ff108BC60B16Fdf2c93abb5'});
    console.log(result)
}

// Example usage
callLatest(1);
