import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import './style.css'

export default function InstaPhoto() {
  return( 
    <div className="instaBlock">

<InstagramEmbed
  url='https://www.instagram.com/p/CJPLiZyFfmd/'
  clientAccessToken= "EAALIpIagku4BANZCuzLFTyvARt0NEAyRCP00tsDopg026a7R6aAvfbLhnWdUG448viyMQnU01yl29HiIJllwZAjudGJEQ5c731jMZAHVak5cDsKGijo1CZCA45AiY0ZCoVLaUo8mE8qKD71NHVqiZAaLagurgbs7WzE8VrzZBZCaLQZDZD"
  maxWidth={320}
  hideCaption={true}
  protocol=''
  injectScript
  
/>
  </div>
  );
  
}