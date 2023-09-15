let myFavorites = [];

function postFav (req, res){
    myFavorites.push(req.body)
    res.json(myFavorites)
}

function deleteFav (req, res){
    const {id} = req.params

    filteredFavs = myFavorites.filter((character) => character.id !== Number(id))
    myFavorites = filteredFavs
    return res.json(myFavorites);
}

module.exports = {postFav, deleteFav}; 