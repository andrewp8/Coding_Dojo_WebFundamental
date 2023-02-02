console.log('script online!');

async function getPokemonData(pokeName) {
    // await executes this code and does not run the next line until it is completed.
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    var pokeData = await response.json();

    return pokeData;
}




async function displayPokemonData() {
    var name = document.querySelector('.name');
    var hp = document.querySelector('.hp');
    var img = document.querySelector('.img-wrapper');
    var type = document.querySelector('.type')
    var height = document.querySelector('.height')
    var weight = document.querySelector('.weight')
    var exp = document.querySelector('.exp')
    var pokemon = await getPokemonData(document.querySelector('#pokeSearch').value.toLowerCase());
    // var pokeDiv = document.querySelector('#pokemonData');

    // pokeDiv.innerHTML = "";
    // pokeDiv.innerHTML += `<h1> ${pokemon.name} </h1>`;
    // pokeDiv.innerHTML += `<img src='${pokemon.sprites.front_default}' alt='${pokemon.name}'>`

    name.innerText = `${pokemon.name}`;
    hp.innerText = `HP ${Math.round(Math.random() * 200)}xp`;
    img.innerHTML = `<img class="image" src='${pokemon.sprites.front_default}' alt='${pokemon.name}'>`;
    type.innerHTML = `<p>Type: ${pokemon.types[0].type.name}</p>`
    height.innerHTML = `<p>Height: ${pokemon.height}</p>`
    weight.innerHTML = `<p>Weight: ${pokemon.weight}</p>`
    exp.innerHTML = `<p>Base Experience: ${pokemon.base_experience}</p>`

}

function pickingCard() {
    var input = document.querySelector('#cardSearch');
    if (input.value == 'red') {
        displayPokemonData();
    }
}
