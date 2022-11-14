// console.log(document.querySelector("*"));
const flipCards = document.querySelectorAll(".flip-card");
// const flipCardContainers = document.querySelector("");

console.log(flipCards);
flipCards.forEach(flipCard=>flipCard.onclick =e=> flipCard.classList.toggle("active"));

