import React from 'react';
import '../styles/Card.css';

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return(
          <div className='card'>

            <button onClick={onClose} className= 'btn'>X</button>

            <div>{name}</div>

            <div className= 'middleDiv'> 
                <div className='temperature'>
                  <div>Min</div>
                  <div>{min}</div>
                </div>
              <div className='temperature'>
                  <div>Max</div>
                  <div>{max}</div>
              </div>
            </div>

            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt= 'img'/>

          </div>
  )
};