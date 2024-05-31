
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FichaPokemon } from './components/FichaPokemon';

function App() {
  const [listaPokemon, setListaPokemon]= useState([])
  const[detallePokemon, setDetallePokemon]= useState({})
  const[mostrarPokemon, setMostrarPokemon]=useState(false)

  const mostrarDetallePokemon= (url)=>{
    axios.get(url)
    .then((response)=>{
      setDetallePokemon(response.data)
    })
  }


  const MostrarListaPokemon=()=>{
    setMostrarPokemon(true)
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((respuesta)=>{
          setListaPokemon(respuesta.data.results)
        })
  }
   

        
        
      
  
  return (
    <>
    
    <ul className='lista-pokemon-contenedor' >
      {mostrarPokemon
      ? listaPokemon.map((lista, index)=>
        <li className='lista-pokemon-li'  key={index}>
          <button onClick={()=> mostrarDetallePokemon(lista.url)} >{lista.name}</button>
        </li>
        )  : <button onClick={MostrarListaPokemon}  >Fetch Pokemon</button>}
      
    </ul>
    { detallePokemon.name!== undefined ? <FichaPokemon detallePokemon={detallePokemon} /> : ""}
    </>
  );
}

export default App;
