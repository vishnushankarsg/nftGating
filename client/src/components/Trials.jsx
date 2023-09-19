import ReactPlayer from 'react-player'
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import io from 'socket.io-client'
const Trials=()=>{
  const [socket,setSocket]=useState(null);
  const navigateTo = useNavigate();
  useEffect(()=>{
    const socketInstance = io('http://localhost:3030');
    setSocket(socketInstance);

    return()=>{
      socketInstance.disconnect()
    }
  },[])

  useEffect(()=>{
    if(socket){
      socket.on('nftsUpdated',(data)=>{
        if(data.userNFTs>1){
           navigateTo('/members')
        }
      })
    }
  },[socket])
    return<>
      <span>Trial of Javascript course</span>
      <br></br>
      <br></br>
      <br></br>
      <ReactPlayer
        className='react-player fixed-bottom'
        url= 'https://vimeo.com/865915617'
        width='100%'
        height='100%'
        controls = {true}
        />
    </>
 }
 export default Trials;