import  {useState,useEffect} from "react";
import './Emps.css'
import Cardmrk from './Cardmrk.js'


const Emps=({ state })=>{

    const[emps,setemps]=useState([]);
    const {contract}=state;
    useEffect(() => {
        const allemps=async()=>{
        const emps =await contract.getEmps();
            console.log(emps);
            setemps(emps);

       }

       contract && allemps();
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
              <span id="Tital" className='text-dark'>Hire A Talent </span >
            </div>
            </div>
            <div class="p-2 ">
              < div className='note-list'>
                {
                  emps.map((emp) =>
                    <Cardmrk emp={emp} />
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

export default Emps