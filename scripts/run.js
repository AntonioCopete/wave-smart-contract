const main = async () => {
  const [contractOwner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", contractOwner.address);

  let totalWaves;
  totalWaves = await waveContract.getTotalWaves();

  let waveNumber = await waveContract.wave();
  await waveNumber.wait();

  totalWaves = await waveContract.getTotalWaves();

  waveNumber = await waveContract.connect(randomPerson).wave();
  await waveNumber.wait();

  totalWaves = await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(erro);
    process.exit(1);
  }
};

runMain();
