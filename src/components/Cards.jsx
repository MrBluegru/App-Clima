import React from 'react';
import Card from './Card';
import '../styles/Cards.css';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map

  if (!cities) return <h1>No hay ciudades disponibles</h1>

  return (
    <div className='conteiner'>
      {
        cities && cities.map(city => (    // validacion para evitar que la pag rompa en caso de que city sea undefined(true && true === true)

          <Card
            key={city.key}
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
          />

        ))
      }
    </div>
  )
};