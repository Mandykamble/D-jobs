// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.5.0 <0.9.0;

contract Djob{
    address payable[] public empssss;
    // Job struct
    struct job{
        address employer;
        string jname;
        string jobDesc;
        uint budget;
        string jlocation;
        string jmode;
    }

// Create account struct
    struct emp{
        address employee;
        string name;
        uint age;
        string role;
        uint yearsofexperiance;
        string skills;
    }

    job[] jobs;
    emp[] emps;

    mapping(uint=>job)public Jobs;
    mapping(uint=>emp)public Emps;
    mapping(address=>mapping(address=>uint)) public applied;
    mapping(address=>mapping(uint=>uint)) public hire;

    uint nextID;
    uint nextEID;

    mapping(address=>mapping(uint=>job))public jobdetails;
    mapping(address=>emp)public empdetails;

    function postjob(string memory name,string memory jdesc,uint budjet,string memory jloc,string memory jmode) external{
        Jobs[nextID]=job(msg.sender,name,jdesc,budjet,jloc,jmode);
        jobdetails[msg.sender][nextID]=job(msg.sender,name,jdesc,budjet,jloc,jmode);
        nextID++;

        jobs.push(job(msg.sender,name,jdesc,budjet,jloc,jmode));

    }

    function getJobs() public view returns(job[] memory){
        return jobs;
    } 

    function createAcc(string memory name,uint age,string memory role,uint exp,string memory skill) external{
        Emps[nextEID]=emp(msg.sender,name,age,role,exp,skill);
        nextEID++;
        empssss.push(payable(msg.sender));
        empdetails[msg.sender]=emp(msg.sender,name,age,role,exp,skill);
        emps.push(emp(msg.sender,name,age,role,exp,skill));
    }

    function getEmps() public view returns(emp[] memory){
        return emps;
    } 

    function Apply(uint jid) external{

        job storage _job =Jobs[jid];
        address emplr=_job.employer;

        applied[msg.sender][emplr]=jid;
        
    }

    function Hire(uint jid,uint eid) external{

        // emp storage _emp =Emps[eid];
        // address emple=_emp.employee;

        hire[msg.sender][jid]=eid;
        
    }

    function getbal() public view returns(uint){
        return address(this).balance;
    }

    function pay(uint eid) external payable{
        
        address payable empewhodonejob;

        empewhodonejob=empssss[eid];

        empewhodonejob.transfer(getbal());
    }


    uint public x=10 ;
        function getx() public view returns(uint) {
            return x;

        }

    




}