import React from "react";
import Foto from "../About/1690768270284.jpg"
import styles from "./About.module.css"

function About() {
    return(
        <div className={styles.aboutContainer}>
            <h2 className={styles.titulo}> <strong>Developer:</strong> Franco Huayller</h2>
            <img className={styles.image} src={Foto} alt="Foto de Fran"/>
            <p className={styles.letras}>Sobre mi:</p>
            <p className={styles.letras}>Tengo 20 años, estudio mecánica automotriz y programación acá en Henry.</p>
            <p className={styles.letras}>Me metí al mundo de la programación debido a que siento necesario incursionarme en el este rubro. Además de que me da pie a iniciar proyectos personales.</p>
        </div>
    )
}

export default About;