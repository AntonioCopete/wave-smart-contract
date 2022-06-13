require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

const { STAGING_ALCHEMY_KEY, PROD_ALCHEMY_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: STAGING_ALCHEMY_KEY,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: PROD_ALCHEMY_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};
