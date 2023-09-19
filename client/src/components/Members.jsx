import {useEffect} from "react";
import {useNavigate} from "react-router-dom"
import ReactPlayer from "react-player";
const Members=()=>{
    const navigateTo = useNavigate();

    useEffect(()=>{
      async function verify(){
        const account = await window.ethereum.request({method:'eth_requestAccounts'});
        const res = await fetch(`http://3.29.24.130:5173/members`,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({from:account})
        })
        const data = await res.json();
        if(data.status === 404 || data.status === 500){
        navigateTo("/home");
        }
      }
      verify();
    },[])

    return<>
      <span>Hello! NFT holder</span>
      <br></br>
      <br></br>
      <span>The Javascript Full course</span>
      <br></br>
      <ReactPlayer
        className='react-player fixed-bottom'
        url= 'https://vimeo.com/865916901'
        width='640px'
        height='480px'
        controls = {true}
        />
    </>
 }
 export default Members;