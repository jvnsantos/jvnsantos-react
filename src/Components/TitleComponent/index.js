import React from 'react';
import './style.css';

export default function TitleComponent(props){
  return(

      <h1 id="titleComponent">{props.children}</h1>
    
  );
}