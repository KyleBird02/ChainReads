import Web3 from "web3";

let web3;

if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    window.ethereum.enable().catch((error) => {
        // Handle error
    });
} else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
} else {
    // Fallback to a local provider
    const provider = new Web3.providers.HttpProvider("http://localhost:9264");
    web3 = new Web3(provider);
}

export default web3;
