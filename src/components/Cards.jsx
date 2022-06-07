import React from 'react';
import Card from './Card';
import '../styles/Cards.css';

export default function Cards({cities, onClose}) {

  if (cities) {
    return (
      <div className='conteiner'>
        { cities.map(city =>    
            <Card
             max={city.max}
             min={city.min}
             name={city.name}
             img={city.img}
             onClose={() => onClose(city.id)}
             id={city.id}
             key={city.id}
            />)}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
};