import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import mrbluelogo from './img/Letras_negras.png';

function App() {
  const [cities, setCities] = useState([]);

  //cities = []
    //setCities => f(queactualiza el estado) 0
  
  const REACT_APP_API_KEY = '0b7a8754f07cdfa66bd71db0163e7348';
  
  function onSearch(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${REACT_APP_API_KEY}&units=metric`)
      .then(response => response.json())
      .then(response_json => {
        if(response_json.main !== undefined){
          const city = {
            min: response_json.main.temp_min,
            max: response_json.main.temp_max,
            img: response_json.weather[0].icon,
            id: response_json.id,
            wind: response_json.wind.speed,
            temp: response_json.main.temp,
            name: response_json.name,
            weather:response_json.weather[0].main,
            clouds: response_json.clouds.all,
            logitude: response_json.coord.lon,
            latitude: response_json.coord.lat
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
            alert('Ciudad no encontrada');
        }
      })
      .catch(e => console.log(e));
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !== id));

  }
  

  return (
    <div className="App">

      <div className='logo-con-letras'>
        <img
          className='letras'
          src={mrbluelogo}
          alt='Letras del logo de Mr. Blue' />
      </div>

      <div>
        <Nav onSearch={onSearch}/>
      </div>

      <div>
        <Cards
          cities={cities} 
          onClose={onClose}
        />
      </div>


    </div>
  );
}

export default App;
