
import abi from "./contract/Djob.json"
import {useState,useEffect} from "react";
import {ethers} from "ethers";

import Employer from "./components/employer";
import Jobs from "./components/jobs";
import Freelancer from "./components/freelancer";
import Emps from "./components/Emps";
import MyBalance from "./components/MyBalance";
// import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/navbar.js';
import Homepage from './components/Homepage/homepage.js';
import About from './components/About/about.js';
// import Loginemp from './components/Login/loginemp.js';
// import Loginboss from './components/Login/loginboss.js';
// import Register from './components/Register/register.js';
import Select from './components/Selectlogin/select.js';
// import Post from './components/Post_a_job/postajob.js';
// import Submission from './components/Submission/submission.js';
// import Cardasj from './components/Job/Cardasj';
import './App.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  // const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xCD1209c0A768c47DF29096d03147C7CF0FE6a59a";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          // window.ethereum.on("chainChanged", () => {
          //   window.location.reload();
          // });

          // window.ethereum.on("accountsChanged", () => {
          //   window.location.reload();
          // });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          // setAccount(account);
          setState({ provider, signer, contract });
        } 
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  // console.log(state);
  return (

    <div className="App">
   <Employer state={state}></Employer>
   <Jobs state={state}></Jobs>

    <Freelancer state={state} ></Freelancer>
    <Emps state={state}></Emps>
    
    <MyBalance state={state} ></MyBalance>
    </div>

  );
}

export default App;
