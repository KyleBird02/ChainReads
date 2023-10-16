import web3 from "./web3";
import contractjson from "./BookShareContract.json";

const contractAddress = "0xc976c4Da394D7e70b58EEa1177F9276548e9d279"; // Replace with your contract address
const contractABI = contractjson.abi; // Replace with your contract ABI

const contract = new web3.eth.Contract(contractABI, contractAddress);

export default contract;
