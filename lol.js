const ethers = require("ethers");

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com");

// The address of the deployed smart contract
const contractAddress = "0x5A79c7A1bde8e9baf57EF69aA862f0298760072f";

// The ABI (Application Binary Interface) of the smart contract
const contractABI = [ 
  
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function subs() view returns (uint256)",
    "function subWall() view returns (uint8)",
    "function price() view returns (uint256)",
    "function getTag(uint256 id) view returns (string)",
    "function latest(uint256) view returns (string[] tags,address[] addrs,uint256[] times)",
    "function hasSub(address to) view returns (uint)",
    "function mint(address to, string _tag)",
   "event newWall(address,string)",
    "function balanceOf(address) view returns (uint256)",
    "function createWall(string _name,string _symbol,uint256 _price,uint8 _canMod,uint8 _canChange, uint8 sub) returns (address)",
    "function mintandrenewSub(address to) payable"];

// The private key of the account to send the transaction from
const privateKey = "29ebf1146b7af5d5240b9418bab2c9476cdbfdec29c7e004ede94adc2365e410";

// Create a wallet from the private key
const wallet = new ethers.Wallet(privateKey, provider);

// Connect to the smart contract
const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Call the "latest" function
async function callLatest(last) {
    const result = await contract.latest(1,{ from: '0x9D31e30003f253563Ff108BC60B16Fdf2c93abb5'});
    console.log(result)
}

// Example usage
callLatest(1);
