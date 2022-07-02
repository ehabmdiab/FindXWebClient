import React from 'react'
import MapStyle from './Map.css'

export default function MapLocation(props) {


    
// const {isLoded}=useLoadScript({

//     googleMapsApiKey:"AIzaSyBm9AVd2_9C9OiJBIOjUGzC73581bzgzAw"
// })

//     if(!isLoded)return <div>loading.....</div>

//   return (
//    <Map/>
//   )
// }


// function Map(){

//     return  <GoogleMap zoom={10} center={{lat:44,lng:-80}} mapContainerClassName={makeStyles.Map_Container}></GoogleMap>;
// }




return (
    <div >

        <iframe className={`${MapStyle.map}`} title='Find' src={`https://maps.google.com/maps?q=${props.lat},${props.long}&hl=es;&output=embed`} width="100%" height="250"  allowFullScreen="" loading="lazy" referrerPolicy='no-referrer-when-downgrade'></iframe>
    </div>
    

)
}