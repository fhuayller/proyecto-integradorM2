import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Detail.module.css"

function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
  
    useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    }, [id]);
  
    return (
      <div className={styles.detailContainer}>
        <div className={styles.cardContainer}>
          <h1 className={styles.data}>{character.name}</h1>
          <h2 className={styles.data}>Status: {character.status}</h2>
          <h2 className={styles.data}>Species: {character.species}</h2>
          <h2 className={styles.data}>Gender: {character.gender}</h2>
          <h2 className={styles.data}>Origin: {character.origin?.name}</h2>
          <img src={character.image} alt={character.name} className={styles.img} />
        </div>
      </div>
    );
  }

export default Detail;