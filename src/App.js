import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import Login from './components/Form/Login';
import Favorites from './components/Favorites/Favorites';



function App() {
  const [characters, setCharacters] = useState([]);
  const [shownCharacterIds, setShownCharacterIds] = useState([]);
  const [access, setAccess] = useState(false);
  
  const navigate = useNavigate();

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name && !shownCharacterIds.includes(data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
          setShownCharacterIds((oldIds) => [...oldIds, data.id]);
        } else {
          window.alert('¡No hay personajes con este ID o ya se mostró previamente!');
        }
      });
  }

  const logout = () => {
    setAccess(false); // Cerrar sesión
    navigate('/'); 
   }

  const handleRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 671) + 1; 
    onSearch(randomId);
  };
const handleOnClose = (id) => {
   setCharacters((oldChars)=> oldChars.filter((ch)=>ch.id !== +id));
 };

 const login = (userData) => {
  const EMAIL = 'fhuayller@gmail.com'; 
  const PASSWORD = 'contraseña'; 
  
  
  if (userData.password === PASSWORD && userData.email === EMAIL) {
    navigate('/home');
  } else {
    window.alert('Credenciales incorrectas');
  }
};
  return (
    <div className='App'>
      {useLocation().pathname !== '/' && (<Nav onSearch={onSearch} onRandomCharacter={handleRandomCharacter} onLogout={logout}/>)}
      <Routes>
         <Route path='/' element={<Login login={login} />}/>
         <Route path='/home' element={<Cards characters={characters} onClose={handleOnClose}/>} />
         <Route path='/About'element={<About/>} />
         <Route path='/Detail/:id'element={<Detail/>}/>
         <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

