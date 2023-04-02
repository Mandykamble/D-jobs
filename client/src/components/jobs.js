import  {useState,useEffect} from "react";
import './job.css'
import Cardasj from './Cardasj.js'


const Jobs=({ state })=>{

    const[jobs,setjobs]=useState([]);
    const {contract}=state;
    useEffect(() => {
        const alljobs=async()=>{
        const jobs =await contract.getJobs();
            console.log(jobs);
        setjobs(jobs);

       }

       contract && alljobs();
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
        <div className='parentcont'>








          <div class="d-flex flex-column mb-3">
            <div class="p-2"><div className='text12'>
              <span id="Tital" className='text-dark'>Select a job </span >for you.
            </div>
            </div>
            <div class="p-2 ">
              < div className='note-list'>
                {
                  jobs.map((job) =>
                    <Cardasj job={job} />
                  )
                }

              </div>

            </div>
          </div>


        </div>
      </div>
    </>



  )
};

export default Jobs