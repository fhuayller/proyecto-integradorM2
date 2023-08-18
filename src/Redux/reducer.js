import { REMOVE_FAV, ADD_FAV, FILTER, ORDER } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) =>{
    const {type, payload} = action //destructuring de action

    switch (type){
        case ADD_FAV:
            return {...state, 
                myFavorites:[...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload], }
        case REMOVE_FAV:
                const updatedFavorites = state.myFavorites.filter(character => character.id !== payload);
                return { ...state, myFavorites: updatedFavorites}
        case FILTER:
            if (payload === "") {
                return {
                  ...state,
                  myFavorites: state.allCharacters, // muestro todos los personajes
                };
              }
              const filtro = state.allCharacters.filter(
                (char) => char.gender === payload
              );
              return {
                ...state,
                myFavorites: filtro,
              };
        case ORDER:
            const allCharactersA = [...state.allCharacters]
            if (payload === "A") {
                allCharactersA.sort((a, b) => a.id - b.id); // Ordena ascendente
              } else if (payload === "D") {
                allCharactersA.sort((a, b) => b.id - a.id); // Ordena descendente
              }
              return {
                ...state, myFavorites: allCharactersA
              }
             
            default:
                return state
    }   
}

export default rootReducer