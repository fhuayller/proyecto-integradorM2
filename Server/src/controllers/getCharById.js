const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios')

function getCharById(req, res) {
 
  const {id} = req.params
  
  axios.get(`${URL}${id}`)
  .then((response) =>{
    if (response.data) {
      const {name, gender, species, origin = origin.name, image, status} = data
      const character = {name, gender, species, origin, image, status}
      res.status(201).json(character) 
      
    }else{
        res.status(404).json({message: 'not found'})
      }
  })
  .catch((error) =>{
    res.status(500).json({message: 'Error en el servidor', error: error.message})
  })
}

module.exports = getCharById