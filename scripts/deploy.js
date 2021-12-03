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
