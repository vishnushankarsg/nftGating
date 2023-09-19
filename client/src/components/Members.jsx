import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import io from 'socket.io-client'
import ReactPlayer from "react-player";
const Members=()=>{
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
          if(data.userNFTs<1){
             alert("You've been logged out because you no longer hold any NFTs in collection with address 0x953fa3cb0466466863ecdf71ff46feda6cba1e82")
             navigateTo('/trials')
          }
        })
      }
    },[socket])

    return<>
      <span>Hello! NFT holder</span>
      <br></br>
      <br></br>
      <span>The Javascript Full course</span>
      <br></br>
      <ReactPlayer
        className='react-player fixed-bottom'
        url= 'https://vimeo.com/865916901'
        width='100%'
        height='100%'
        controls = {true}
        />
    </>
 }
 export default Members;