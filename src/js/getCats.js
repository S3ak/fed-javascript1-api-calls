import displayError from "./components/DisplayError.js";

const url = "https://api.noroff.dev/api/v1/cat-facts";

const resultsContainer = document.querySelector(".results");

async function getCats() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    const facts = data.all;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      console.log(facts[i].text);

      if (i === 10) {
        break;
      }

      resultsContainer.innerHTML += `<div class="result">${facts[i].text}</div>`;
    }
  } catch (error) {
    console.log("An error occurred");
    resultsContainer.innerHTML = displayError(
      "An error occurred when calling the API"
    );
  }
}

getCats();
