const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Kass", "Edward", "Blu"],
    ["QmZ9fX7F4D4ezeqj6ru4mDT2LaxkgqsEwviYmmZS7u6zti",
    "QmciuDcbCZCu8ePo8TsiRQsbuHSz3aFqVJsc1RwakgMUMr", 
    "QmTZ7EbXHiA7sDGKQCXi2hE7Dr2urk3NX8rLHJEr57t7Km"],
    [100, 300, 200],
    [100, 25, 50],
    "Roy",
    "QmUQfkotjAW8uN7VAqB9auaVXP5HnBKrx1ZjDfLFFZuAHq",
    10000,
    50
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
