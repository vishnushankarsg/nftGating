import {useNavigate,useLocation} from "react-router-dom"
import './Home.css'
import ReactPlayer from 'react-player'
const Home=()=>{
    const location = useLocation()
    const navigateTo=useNavigate()

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
           }
        }catch(error){
           console.error(error)
        }
    }

    return(
      <>
          <span>Trial of Javascript course</span>
      <br></br>
      <ReactPlayer
        className='react-player fixed-bottom'
        url= 'https://vimeo.com/865915617'
        width='640px'
        height='480px'
        controls = {true}
        />
          <button onClick={revealMsg}>GetStarted to FullCourse</button>
      </>
      )
 }
 export default Home;