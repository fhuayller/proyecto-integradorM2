import { Link } from "react-router-dom";
import { removeFav, addFav } from "../../Redux/actions";
import { useState } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Card.module.css";

export function Card(props) {
   const { id, onClose, name, status, species, gender, origin, image, myFavorites, addFav, removeFav, onCloseFav } = props

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () =>{
      if (isFav === true){
         setIsFav(false)
         removeFav(id)
      } else{
         setIsFav(true)
         addFav(props)
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const isFavoritesView = useLocation().pathname === '/favorites';

   return (
      <div className={styles.cardContainer}>
         {/* <button onClick={onClose}>X</button> */}
            <div classname={styles.buttonsContainer}>
               {isFav?(<button onClick={handleFavorite} className={styles.corazonButton}>❤️</button>):
                  (<button onClick={handleFavorite} className={styles.corazonButton}>🤍</button>)}
                  {isFavoritesView ? (
                  <button onClick={() => onCloseFav(id)} className={styles.cruzButton}>❌</button> // Elimina de la vista Favorites
               ) : (
                  <button onClick={() => onClose(id)} className={styles.cruzButton}>❌</button> // Elimina de la vista Cards
               )}
            </div>
         <Link to={`/detail/${id}`}>
            <h3 className={styles.data}>Nombre: {name}</h3>
         </Link>
            <h2 className={styles.data}>Status: {status}</h2>
            <h2 className={styles.data}>Species: {species}</h2>
            <h2 className={styles.data}>Gender: {gender}</h2>
            <h2 className={styles.data}>Origin: {origin.name}</h2>
            <img src={image} alt='' className={styles.img}/>
      </div>
   );
}

const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{

   return {
     addFav: function(character){
      dispatch(addFav(character))
     },
     removeFav: function(id){
      dispatch(removeFav(id))
     }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);