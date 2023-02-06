import displayError from "./components/DisplayError";

const url = "https://pokeapi.co/api/v2/pokemon";

const resultsContainer = document.querySelector(".results");

fetch(url)
  .then((response) => response.json())
  .then((data) => createHTML(data.results))
  .catch(
    (error) =>
      (resultsContainer.innerHTML = displayError(
        `An error occurred when calling the API ${error?.message}`
      ))
  );

function createHTML(results) {
  const pokemon = results;

  resultsContainer.innerHTML = "";

  for (let i = 0; i < pokemon.length; i++) {
    if (i === 10) {
      break;
    }

    resultsContainer.innerHTML += `<div class="pokemon-card">${pokemon[i].name}</div>`;
  }
}

async function getPokemon() {
  try {
    const response = await fetch(url);

    const data = await response.json();
    console.log("data", data);

    const pokemon = data.results;

    createHTML(pokemon);
  } catch (error) {
    resultsContainer.innerHTML = displayError(
      "An error occurred when calling the API"
    );
  }
}

// getPokemon();
