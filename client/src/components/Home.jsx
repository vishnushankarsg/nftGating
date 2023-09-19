import {useNavigate,useLocation} from "react-router-dom"
import { useEffect } from "react"
import './Home.css'
const Home=()=>{
    const location = useLocation()
    const navigateTo=useNavigate()
    useEffect(()=>{
      revealMsg();
    },[])
    const revealMsg=async()=>{
        try{
           const account = location.state.address;
           const res = await fetch(`http://localhost:3030/members`,{
              method:"POST",
              headers:{
                "content-type":"application/json"
              },
              body:JSON.stringify({from:account})
           })
           const data = await res.json();
           const user = await window.ethereum.request({method:'eth_requestAccounts'})
           if(user){
            if(data.status===200){
              navigateTo("/members")
            }else{
              navigateTo("/trials")
            }
           }else{
            navigateTo("/")
           }
           
        }catch(error){
           console.error(error)
        }
    }
 }
 export default Home;