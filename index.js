let BASE_URL =
  "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy";

const main = document.querySelector(".centered");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
      document.querySelectorAll(".card").forEach((card) => {
        card.remove();
      });
      createCards(json);
    })
    .catch((e) => console.log(e));
});

const createCards = (js) => {
  const cards = js.results;

  for (let i = 0; i < cards.length; i++) {
    const article = document.createElement("article");
    const heading = document.createElement("h2");
    const p = document.createElement("p");
    const answerButton = document.createElement("button");
    const answerP = document.createElement("p");

    article.classList.add("card");
    heading.innerText = `${cards[i].category}`;
    p.innerText = `${cards[i].question}`;
    answerButton.type = "button";
    answerButton.classList.add("reveal-answer");
    answerButton.innerText = "Show Answer";
    answerP.classList.add("hidden");
    answerP.innerText = `${cards[i].correct_answer}`;

    article.append(heading);
    heading.after(p);
    p.after(answerButton);
    answerButton.after(answerP);
    main.append(article);

    answerButton.addEventListener("click", (e) => {
       answerP.classList.toggle("hidden");
      });
  }
};


