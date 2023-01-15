const ethers = require("ethers");

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com");

// The address of the deployed smart contract
const contractAddress = "0x5CE9B170aAf6d9A2b73a78773bf2984fE993550F";

// The ABI (Application Binary Interface) of the smart contract
const contractABI = [ 
    "function subWall() view returns (uint8)","function latest(uint256) view returns (string[] tags,address[] addrs,uint256[] times)",
];

// The private key of the account to send the transaction from
const privateKey = "29ebf1146b7af5d5240b9418bab2c9476cdbfdec29c7e004ede94adc2365e410";

// Create a wallet from the private key
const wallet = new ethers.Wallet(privateKey, provider);

// Connect to the smart contract
const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Call the "latest" function
async function callLatest(last) {
    const result = await contract.latest(3,{ from: '0x9D31e30003f253563Ff108BC60B16Fdf2c93abb5'});
    console.log(result)
}

// Example usage
callLatest(1);
