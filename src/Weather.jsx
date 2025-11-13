import './App.css'
import Info from './Info.jsx'
import {useState} from 'react'
import Search from './Search.jsx'
export default function Weather(){
    let [weatherInfo,setweatherInfo]=useState({ city:'delhi',temp:24,tempMin:23,tempMax:26,humidity:45,pressure:1000,description:'haze',wind_degree:199,wind_speed:2.05})
    let updateInfo=(info)=>{
        setweatherInfo(info);
    }
    return (
        <div><h1 style={{margin:'0 0 1rem 0'}}>Weather</h1>
        <Search updateInfo={updateInfo}/>
        <Info infomation={weatherInfo}/>
        </div>
    )
}