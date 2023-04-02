// import Contract from "web3/eth/contract";

const freelancer=({ state })=>{

  
    const createACC=async(event)=>{
      event.preventDefault();
      const { contract }=state;
      const name=document.querySelector("#name").value;
      const age=document.querySelector("#age").value;
      const role=document.querySelector("#role").value;
      const yearsofexperiance=document.querySelector("#yearsofexperiance").value;
      const skills=document.querySelector("#skills").value;


      console.log(name,age,role,yearsofexperiance,skills,contract);
      // alert(name+description+mode+budejet+location+contract);


      const acnt =await contract.createAcc(name,age,role,yearsofexperiance,skills);
      await acnt.wait();
      alert("Account Created");
    }
    return(
    <>

    <form onSubmit={createACC}>
    <label >Name</label>
    <input type="text" id="name" placeholder="Enter your Name" />
    <br />
      {/* <input type="text" id="jname" placeholder="Enter your name"> </input> */}
      <label >Age</label>
      <input type="number" id="age" placeholder="Enter your Age"/>
      <br />
      <label >Role</label>
      <input type="text" id="role" placeholder="Enter your Job-Role"/>
      <br />
      <label >Years-of-Experiance</label>
      <input type="number" id="yearsofexperiance" placeholder="Years-of-Experiance"/>
      <br />
      <label >Skills</label>
      <input type="text" id="skills" placeholder="Enter your Location"/> 
      <br />
      <button type="submit">Create a profile</button>
    </form>
    </>
    );
}
export default freelancer