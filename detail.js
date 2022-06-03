const baseUrl = "https://protected-taiga-89091.herokuapp.com/api/card/";
const cardCollection = document.querySelector(".sakuracard");
const error = document.querySelector(".error");

const params = new URLSearchParams(document.location.search);
const sakuraCardId = params.get("id");

async function getCard() {
  cardCollection.innerHTML = "<h2>Please wait...</h2>";
  if (!sakuraCardId) {
    return null;
  }

  try {
    const response = await fetch(baseUrl + sakuraCardId);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function createCard(card) {
  cardCollection.innerHTML = "";

  if (card && card.sakuraCard) {
    document.querySelector("title").innerText = card.englishName;

    const container = document.createElement("div");
    container.className = "cards";

    const image = document.createElement("img");
    image.src = card.sakuraCard;

    const englishName = document.createElement("h2");
    englishName.innerText = card.englishName;

    const kanji = document.createElement("h2");
    kanji.innerText = card.kanji;

    container.append(image, englishName, kanji);
    cardCollection.append(container);
  } else {
    showError("Return to the front page and try again!");
  }
}

function showError(message) {
  document.querySelectorAll("title").innerText = "Try again";
  error.innerHTML = `<h2>Oops! Something went wrong :(</h2><p>${message}</p>`;
}

getCard().then((card) => {
  createCard(card);
});
