const getCharacters= async (character)=> {

    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const responseJson = await response.json ();
    console.log(responseJson);

}
getCharacters();