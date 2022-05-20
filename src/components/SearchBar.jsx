import React from 'react';
import '../styles/SearchBar.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className='conteiner'>

      <input type="text" placeholder='Ciudad...' />
      <button onClick={()=>props.onSearch('Buscando Ciudad')} className='btn'>Agregar</button>


    </div>

  )
};