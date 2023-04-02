// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function getbalences(address){
  const Bigint =await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(Bigint);
}

async function consolebalences(addreses){
  let cnt=0;
  for(const address of addreses){
    console.log(`Address ${cnt} balence:`,await getbalences(address))
    cnt++;
  }
}

async function consoleJobs(jobs){
  for(const job of jobs){
    const empoyer=job.employer;
    const name=job.jname;
    const jdesc=job.jobDesc;
    const jmode =job.jmode;
    const budjet=job.budget;
    const location=job.jlocation;

    console.log(`Empoyer:${empoyer},Name: ${name},Job Decription: ${jdesc},Job Budejet: ${budjet},Job Mode: ${jmode},Location: ${location}`)
    
  }
}


async function main() {
 
const [employer,from1,from2,from3]=await hre.ethers.getSigners();
const djob =await hre.ethers.getContractFactory("Djob");
const contract =await djob.deploy();

await contract.deployed();

console.log("Address of contract:",contract.address);

const addreses=[employer.address,from1.address,from2.address,from3.address];
console.log("balances of address:");

await consolebalences(addreses);


await contract.connect(from1).postjob("from1","Bild a cloud project",5,"pune","WFH");
await contract.connect(from2).postjob("from2","Bild a app",4,"pune","WFH");
await contract.connect(from3).postjob("from3","social media marketing",3,"pune","WFH");

const jdata=await contract.getJobs();

consoleJobs(jdata);

}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
