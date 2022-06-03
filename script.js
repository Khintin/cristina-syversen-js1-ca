const baseUrl = "https://protected-taiga-89091.herokuapp.com/api/card";
const cardCollections = document.querySelector(".sakuracards");
const error = document.querySelector(".error");

async function getAllCards() {
  cardCollections.innerHTML = "<h2>Please wait...</h2>";

  try {
    const response = await fetch(baseUrl);
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function allCards(cards) {
  cardCollections.innerHTML = "";

  if (cards && cards.length > 0)
    cards.forEach((card) => {
      if (card.sakuraCard) {
        const container = document.createElement("div");
        container.className = "cards";

        const link = document.createElement("a");
        link.href = `details.html?id=${card._id}`;

        const image = document.createElement("img");
        image.src = card.sakuraCard;

        link.append(image);

        const englishName = document.createElement("h2");
        englishName.innerText = card.englishName;

        const kanji = document.createElement("h2");
        kanji.innerText = card.kanji;

        container.append(link, englishName, kanji);
        cardCollections.append(container);
      }
    });
  else {
    showError("Please try again later.");
  }
}

function showError(message) {
  error.innerHTML = `<h2>Oops! Something went wrong :(</h2><p>${message}</p>`;
}

getAllCards().then((cards) => {
  allCards(cards);
});
