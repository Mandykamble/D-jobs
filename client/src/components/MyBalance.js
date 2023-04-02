import  {useState,useEffect} from "react";
import './job.css'
// import Cardasj from './Cardasj.js'


const MyBalance=({ state })=>{

    const[balance,setbalance]=useState("");
    const {contract}=state;
    useEffect(() => {
        const checkbalance=async()=>{
        const val =await contract.getbal();
        const balance=val.toString();
            console.log(balance);
            setbalance(balance);

       }

       contract && checkbalance();
    },[contract]);

// return( 

{/* <>

<h3>All Jobs</h3>

{jobs.map((job)=>{
return(
    <table key={job.jname}>
        <tbody>
            <tr>
                <td>{job.employer}</td>
                <td>{job.jname}</td>
                <td>{job.jobDesc}</td>
                <td>{job.budjet}</td>
                <td>{job.jlocation }</td>
                <td>{job.jmode}</td>
            </tr>
        </tbody>
    </table>



);
})}



</> */}

return (
    <>
      <div className='parentconti'>
        <button type="submit" onSubmit={MyBalance}>Check my Account Balance</button>
        <h2>{balance}</h2>
      </div>
    </>



  )
};

export default MyBalance