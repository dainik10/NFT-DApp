// https://eth-goerli.g.alchemy.com/v2/oY4FW4QpekSCerWuYoz0P6DZe6speUmh
require("@nomiclabs/hardhat-waffle");

module.exports={
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:`https://eth-goerli.g.alchemy.com/v2/6QgoEhHO2-UndztQh11CcCDntFjyUmEh`,
      accounts:["0x5615b90c5fdd29c1d63b7aed657a6c320efb0aacd48414ec99350ef8bba1c61d"]
    }
  }
}
