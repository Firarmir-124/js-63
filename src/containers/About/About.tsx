import React from 'react';
import imgAbout from "../../assets/imgAbout.png";
import './About.css'

const About = () => {
  return (
    <div className='homeBlock'>
      <div className='container'>
        <div className='offerHome'>
          <span>Новый блог</span>
          <p>Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается Ричарду Макклинтоку.</p>
        </div>
        <img className='offerImg' src={imgAbout} alt='header'/>
      </div>
    </div>
  )
};

export default About;
