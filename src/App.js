import React from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';
import mrbluelogo from './img/Letras_blancas.png';
import logo from './img/Logo.png';

function App() {
  return (
    <div className="App">

    <div className='logo-con-letras'>

      <img
        className='letras'
        src={mrbluelogo}
        alt='Letras del logo de Mr. Blue' />

      <img
        className='logo'
        src={logo}
        alt='Logo de Mr. Blue' />

    </div>


        <div>
          <SearchBar
            onSearch={(ciudad) => alert(ciudad)}
          />
        </div>
      <div>
        {/* <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        /> */}
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;
