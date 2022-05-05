import React from 'react';
import style from '../styles/SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={style.conteiner}>

      <input type="text" placeholder='Ciudad...' />
      <button onClick={()=>props.onSearch('Buscando Ciudad')} className={style.btn}>Agregar</button>


    </div>

  )
};