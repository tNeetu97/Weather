import './App.css'
import './Info.css'
export default function Info({infomation}){
  let Hot_Url=import.meta.env.VITE_HOT_URL;
  let Cold_Url=import.meta.env.VITE_COLD_URL;
  let Rain_Url=import.meta.env.VITE_RAIN_URL;
    
     return (
        <div className='info' >
      
      <h2><i>{infomation.city.toUpperCase()} Weather</i> </h2>
          <img src={infomation.humidity>80 ? Rain_Url:infomation.temp>15?Hot_Url:Cold_Url}   alt='Image' />
          <p>Temperature:&nbsp; <i>{infomation.temp}</i></p>
          <p>Min-Temperature:&nbsp; <i>{infomation.tempMin}</i></p>
          <p>Max-Temperature:&nbsp; <i>{infomation.tempMax}</i></p>
          <p>Humidity:&nbsp; <i>{infomation.humidity}</i></p>
          <p>Pressure:&nbsp; <i>{infomation.pressure}</i></p>
          <p>Description:&nbsp; <i>{infomation.description}</i></p>
          <p>Wind_degree:&nbsp; <i>{infomation.wind_degree}</i></p>
          <p style={{paddingBottom:'10px'}}>Wind-speed:&nbsp; <i>{infomation.wind_speed}</i></p>
          <hr />
      
    </div>
  );
}
         
     