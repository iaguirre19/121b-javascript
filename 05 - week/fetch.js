//fetching pokeapi

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

async function getPokemon(url){
    const response = await fetch(url);
    // Check to see if the fetch was succesfull

    if(response.ok){
        // the API will send us JSON... but we have to covert the response 
        // .json() also returns a promises... so we await it as well

        const data = await response.json();

        doStuff(data);
    }
}

function doStuff(data){
    results = data;
    console.log("first", results);
}

getPokemon(url)
console.log("second: ", results);