// import Contract from "web3/eth/contract";

const employer=({ state })=>{

  
    const postjob=async(event)=>{
      event.preventDefault();
      const { contract }=state;
      const name=document.querySelector("#jname").value;
      const description=document.querySelector("#jdesc").value;
      const mode=document.querySelector("#jmode").value;
      const budejet=document.querySelector("#budjet").value;
      const location=document.querySelector("#jlocation").value;


      console.log(name,description,mode,budejet,location,contract);
      // alert(name+description+mode+budejet+location+contract);


      const job =await contract.postjob(name,description,budejet,location,mode);
      await job.wait();
      alert("Job Posted");
    }
    return(
    <>
    
    <form onSubmit={postjob}>
    <label >Name</label>
    <input type="text" id="jname" placeholder="Enter your name" />
    <br />
      {/* <input type="text" id="jname" placeholder="Enter your name"> </input> */}
      <label >Job Description</label>
      <input type="text" id="jdesc" placeholder="Enter your Job-Description"/>
      <br />
      <label >Job-Mode</label>
      <input type="text" id="jmode" placeholder="Enter your Job-Mode"/>
      <br />
      <label >Budjet</label>
      <input type="number" id="budjet" placeholder="Enter your Budjet"/>
      <br />
      <label >Location</label>
      <input type="text" id="jlocation" placeholder="Enter your Location"/> 
      <br />
      <button type="submit">Post Job</button>
    </form>
    </>
    );
}
export default employer