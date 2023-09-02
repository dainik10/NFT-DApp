const main=async()=>{

  const Marketplace=await hre.ethers.getContractFactory("Marketplace");
  const marketplaces=await Marketplace.deploy(5);
  await marketplaces.deployed();
  console.log("Transactionts deployed to:",marketplaces.address);
}


const runMain=async()=>{
  try{
    await main();
    process.exit(0);
  }
  catch(error){
    console.log(error);
    process.exit(1);
  }
}

runMain();