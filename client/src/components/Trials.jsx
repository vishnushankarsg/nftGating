import ReactPlayer from 'react-player'
const Trials=()=>{

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