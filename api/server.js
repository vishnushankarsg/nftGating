const express = require('express');
const cors = require('cors')
const {Web3} = require('web3');
const ABI =require('./ABI.json')
const socketIO = require('socket.io')
const app = express();
app.use(cors())
app.use(express.json());

const web3 =new Web3('https://twilight-powerful-glade.ethereum-goerli.discover.quiknode.pro/734a9a4ee97db334efe6d6345d807fe2f67f736a/')
const contractAddress = '0x953fa3cb0466466863ecdf71ff46feda6cba1e82';
const contract = new web3.eth.Contract(ABI,contractAddress);

const fetchNFTs = async(account)=>{
    try{
       const nftBalance = await contract.methods.balanceOf(account).call();
       return {userNFTs:Number(nftBalance)}
    }catch(error){
       console.log('Error fetching NFTs',error);
    }
}

app.post('/members',async(req,res)=>{
    try{
       const account = req.body.from;
       const numNFTs = await fetchNFTs(account)

       if(numNFTs.userNFTs>0){
         res.status(200).json({status:200,numNFTs})
       }else{
         res.status(404).json({status:404,message:"You don't own any nft",numNFTs});
       }
    }catch(error){
        res.status(500).json({status:500,message:"Internal Server Error"});
    }
})

app.post('/webhook',async(req,res)=>{
  try{
    const account = req.body[0].from;
    const numNFTs = await fetchNFTs(account);
    io.emit('nftsUpdated',{userNFTs:numNFTs.userNFTs})
    res.status(200).json({status:200,message:"Webhook Triggered"})
  }catch(error){
    console.error(error)
  }
})


const PORT=3030;
const server = app.listen(PORT,()=>{
    console.log(`Sever running at ${PORT}`)
})
const io = socketIO(server);
io.on('connection',()=>{
  console.log("Connected")
})
