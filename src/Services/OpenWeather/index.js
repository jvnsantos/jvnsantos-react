import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

function OpenWeather(){

  const [previsao, setPrevisao] = useState(false);
  const [local, setLocal] = useState(false);

  let getPrevisao = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon:long,
        appid: process.env.REACT_APP_OW_KEY,
        lang:"pt",
        units: "metric"
      }
    });
    setPrevisao(res.data);
    console.log(res.data);
  }

    useEffect(() => {

      navigator.geolocation.getCurrentPosition((coordenada) => {

        getPrevisao(coordenada.coords.latitude, coordenada.coords.longitude)
        setLocal(true);
        })
      }, [] );

if(local === false){

  return(
  <div >
    <h1>Por favor habilidade a localização</h1>
  </div>
  );
}

else if(previsao === false){
  return(

    <div>

    <h1>Carregando Clima</h1>

  </div>
  )
}

else{

    

  return (
    <div>

          Eu amo {previsao['name']}
          Agora {previsao['main']['temp']}ºc
          {previsao['weather'][0]['description']}

          Max {previsao['main']['temp_max']}ºc
          Min {previsao['main']['temp_min']}ºc
      
    </div>
  );
  
  }
} export default OpenWeather;
