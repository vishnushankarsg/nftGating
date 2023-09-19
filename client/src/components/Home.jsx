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
           const res = await fetch(`http://3.29.24.130:5173/members`,{
              method:"POST",
              headers:{
                "content-type":"application/json"
              },
              body:JSON.stringify({from:account})
           })
           const data = await res.json();
           if(data.status===200){
             navigateTo("/members")
           }else{
             navigateTo("/trials")
           }
        }catch(error){
           console.error(error)
        }
    }
 }
 export default Home;