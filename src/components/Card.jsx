import React from 'react';
import style from '../styles/Card.module.css'

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return(
          <div className={style.card}>

            <button onClick={onClose} className={`${style.btn} ${style.btnColor}`}>X</button>

            <div>{name}</div>

            <div className= {style.middleDiv}> 

              <div>Min</div>
              <div>{min}</div>

              <div>Max</div>
              <div>{max}</div>

            </div>

            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt= 'img'/>

          </div>
  )
};