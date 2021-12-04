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
