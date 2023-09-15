import React, { useState } from "react";
import { validateEmail, validatePassword } from "./Validation"
import styles from "./Login.module.css"

export default function Login(props){

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const[errors, setErrors] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setUserData({...userData, [name]: value})

        const newErrors = { ...errors };

  if (name === "email") {
    newErrors.email = validateEmail(value) ? "" : "Email inválido";
  }

  if (name === "password") {
    newErrors.password = validatePassword(value) ? "" : "La contraseña debe tener al menos un número";
  }

  setErrors(newErrors);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    };

    return(
        <div className={styles.formContainer}>
            <form>
            <div>
                <label htmlFor="email" className={styles.letras}>email:</label>
                <input type="text" name="email" value={userData.email} onChange={handleChange} className={styles.input}/>
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password" className={styles.letras}>password:</label>
                <input type="password"name="password"value={userData.password} onChange={handleChange} className={styles.input}/>
            </div>
            <button className={styles.submit}type="submit" onClick={handleSubmit}>Submit</button>     
        </form>
        </div>
        
    )
}