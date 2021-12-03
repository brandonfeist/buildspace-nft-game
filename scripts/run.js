const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Kass", "Edward", "Blu"],          // Names
    ["https://i.imgur.com/Cup83aL.jpeg", // Images
    "https://i.imgur.com/GGDIjZW.jpeg", 
    "https://i.imgur.com/RWivlOy.jpeg"],
    [100, 300, 200],                    // HP values
    [100, 25, 50],                       // Attack damage values
    "Roy",
    "https://i.imgur.com/IlZiWbP.jpeg",
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
