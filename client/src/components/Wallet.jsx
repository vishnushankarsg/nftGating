import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Wallet=()=>{
   const navigateTo =useNavigate()
   const connectWallet =async()=>{   
      try{
        if(window.ethereum){
            const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
            navigateTo("/home",{state:{address:accounts[0]}})
        }else{
            alert("Install Metamask")
        }
      }catch(error){
        console.error(error)
      }
   }

   useEffect(() => {
    connectWallet();
  }, []);
}
export default Wallet;