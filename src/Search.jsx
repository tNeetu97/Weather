import './App.css'
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
export default function Search({updateInfo} ){
    let [city,setCity]=useState('');
    let [error,setError]=useState(false)
    let URL=import.meta.env.VITE_WEATHER_URL
    let API_Key=import.meta.env.VITE_WEATHER_API;
    let getWeatherInfo=async ()=>{
        try{
             let response=await fetch(`${URL}?q=${city}&appid=${API_Key}&units=metric`);
        let jsonResponse= await response.json();
        let result={city:city,temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            pressure:jsonResponse.main.pressure,
            description:jsonResponse.weather[0].description,
            wind_degree:jsonResponse.wind.deg,
            wind_speed:jsonResponse.wind.speed
        }
        return result;
        }catch(err){
             throw err;
        }
        
        
     }
     let handleChange=(event)=>{
        setCity(event.target.value)
        setError(false)
     }
    let handleSubmit=async (event)=>{
        try{
             event.preventDefault();
        setCity('')
        let info=await getWeatherInfo()
        updateInfo(info)
        }catch{
            setError(true)
        }
        
    }
    return (
        <div>
             
            <form onSubmit={handleSubmit} >
                <TextField required id="outlined-required" label="City Name"   onChange={handleChange}   sx={{ mt: 2}}  size='small' />&nbsp;&nbsp;
                <Button variant="contained" sx={{ mt: 2}}   startIcon={<SearchIcon />}   type='submit'> Search</Button>
            </form>
            <br />
            {error && <h3 style={{color:'red'}}>This city is not exist on WEATHER</h3>}
           
        </div>
          
    )
}