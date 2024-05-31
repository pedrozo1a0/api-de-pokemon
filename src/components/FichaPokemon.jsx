export const FichaPokemon=({detallePokemon})=>{

    return(
        <article className="ficha-pokemon">
            <h2>Nombre: {detallePokemon.name}  </h2>
            <ul>
                <li>Altura: {detallePokemon.height} </li>
                <li>Peso:  {detallePokemon.weight} </li>
                <li>Id:  {detallePokemon.id} </li>
            </ul>
            <img src={detallePokemon.sprites.other.dream_world.front_default} alt= {detallePokemon.name} />



        </article>
    )
}