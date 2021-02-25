import React from 'react';
import TitleComponent from '../../Components/TitleComponent';
import OpenWeather from '../../Services/OpenWeather';
import InstaPhoto from '../../Services/InstaPhoto';

export default function HomePage(){
  return(

    <div>
      <TitleComponent>HOME</TitleComponent>
      <OpenWeather />
      <InstaPhoto />
    </div>

  );
}