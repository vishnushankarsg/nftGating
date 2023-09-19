import {useEffect} from "react";
import {useNavigate} from "react-router-dom"
import ReactPlayer from 'react-player'
const Trials=()=>{
  const navigateTo = useNavigate();
  useEffect(()=>{
    async function verifyAccount(){
      const account = await window.ethereum.request({method:'eth_requestAccounts'});
      
      if(!account){
      navigateTo("/");
      }
    }
    verifyAccount();
  },[])
    return<>
      <span>Trial of Javascript course</span>
      <br></br>
      <ReactPlayer
        className='react-player fixed-bottom'
        url= 'https://vimeo.com/865915617'
        width='640px'
        height='480px'
        controls = {true}
        />
    </>
 }
 export default Trials;