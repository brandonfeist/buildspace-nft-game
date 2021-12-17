# Buildspace NFT Game

This project was an opportunity for me to take my first steps into exploring build smart contracts with Solidity and a basic React web app that is connected to the blockchain.

You can find the tutorial for this project on Buildspace's website: [HERE!](https://app.buildspace.so/projects/CO5cc2751b-e878-41c4-99fa-a614dc910ee9)

# Setup
To be able to run this app on your local machine, you will need NPM. Once you have npm, run these commands on the base folder:

```shell
npm install --save-dev hardhat
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
npm install @openzeppelin/contracts
```

## Testing on your local machine
To run on a local chain and see test output of the app, use: `npx hardhat run scripts/run.js`

## Deploying to the Blockcahin
Before running the deploy script, you will need to make an account on Alchemy and setup your own app. You will then have to add a `.env` file to the base folder with your Alchemy key and private key.

### The `.env` File
```
STAGING_ALCHEMY_KEY=<STAGING_ALCHEMY_KEY>
PROD_ALCHEMY_KEY=<PROD_ALCHEMY_KEY>
PRIVATE_KEY=<YOUR_PRIVATE_KEY>
```

### Deploying to Rinkeby Test Net
Once you have Alchemy and the `.env` file setup, deploy the contract to the Rinkeby test network, use: `npx hardhat run scripts/deploy.js --network rinkeby`

### Deploying to Mainnet
To deploy to mainnet, simply replace rinkeby with mainnet: `npx hardhat run scripts/deploy.js --network mainnet`

### After Deploying!
After deploying, be sure to update the contract address to your deployed address in `buildspace-nft-game/client/src/constants.js`

## Running the React App
### Locally
You can run the app locally by installing all the dependencies using 
```shell
cd client
npm install
npm run dev-start
```

# My Example Website
You can find my NFT Game app up and running on Heroku: [HERE!](https://buildspace-nft-game-skylark.herokuapp.com/)

A sidenote, the app is currently being hosted on a free instance of Heroku and the images on a free CDN, so it may be slow to load at first.
