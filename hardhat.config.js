require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GPRIVATE_KEY="3e2ceadf589bed00a2c1d1ce23bd724dfaa20beb4d1510a35a77b1c1ce560ed3";
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
    localhost: {
      url: "http://127.0.0.1:7545/",
      chainId: 1337,
      accounts: [GPRIVATE_KEY],
    }
  },
};