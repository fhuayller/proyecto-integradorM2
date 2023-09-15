import React, {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Card from "../Card/Card.jsx"
import { removeFav, orderCards, filterCards } from '../../Redux/actions.js';
import styles from "./Favorites.module.css"

function Favorites() {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const [order, setOrder] = useState("A"); // estado para controlar el orden
  const [genderFilter, setGenderFilter] = useState(""); // estado para controlar el filtro de género

  const handleOrderChange = (e) => {
    const selectedOrder = e.target.value;
    setOrder(selectedOrder);
    dispatch(orderCards(selectedOrder)); 
  };

  const handleFilterChange = (e) => {
    const selectedGender = e.target.value
    setGenderFilter(selectedGender)
    dispatch(filterCards(selectedGender))
  };

  const handleRemoveFavorite = (id) => {
    dispatch(removeFav(id));
  };

  return (
    <div className={styles.favContainer}>
      <div>
        <h1 className={styles.letras}>Tus Personajes Favoritos</h1>
      {/* filtro */}
        <select value={order} onChange={handleOrderChange}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      
      {/* orden */}
        <select value={genderFilter} onChange={handleFilterChange}>
          <option value="">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      
      {/* personajes */}
        <div className="favorites-list">
          {myFavorites.map((character) => (
            <Card
              key={character.id}
              {...character}
              onCloseFav={() => handleRemoveFavorite(character.id)} 
            />
          ))}
      </div>
    </div>
  </div>
    
  );
}

export default Favorites;