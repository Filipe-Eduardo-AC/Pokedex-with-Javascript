const poke_container = document.getElementById("poke_container");
const pokemons_number = 151;
const colors = {
  fire: "#f17c23",
  grass: "#7dcc4f",
  water: "#6888ef",
  electric: "#e9ca2a",
  ground: "#e6c76e",
  rock: "#bba32f",
  fairy: "#d6a4d0",
  poison: "#9f44a4",
  bug: "#a7b826",
  dragon: "#6f37ee",
  psychic: "#c84569",
  flying: "#c097ea",
  fighting: "#c42a1f",
  normal: "#abae7a",
  steel: "#b7b8d3",
  dark: "#6d503f",
  ghost: "#725f8d",
  ice: "#94dbd7",
};
const main_types = Object.keys(colors);

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
  //console.log(pokemon);
};

fetchPokemon();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const type = pokemon.types[0].type.name;
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
            }.png">
        </div>
        <div class:"info">
            <span class="number">
            #${pokemon.id.toString().padStart(3, "0")}
            </span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span id="type">${type}</span></small>
        </div>
    `;

  pokemonEl.innerHTML = pokeInnerHTML;

  poke_container.appendChild(pokemonEl);
}
