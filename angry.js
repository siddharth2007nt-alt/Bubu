document.addEventListener("DOMContentLoaded", function(){

let stepAb = 0;

const angryBirdData = [
  { img: "myphoto/love10.jpg", text: "You make me smile every day 😎" },
  { img: "myphoto/love9.jpg", text: "Little moments are the best 💛" },
  { img: "myphoto/love8.jpg", text: "Always thinking of you 💖" },
  { img: "myphoto/love7.jpg", text: "You’re my happy place 🌸" },
  { img: "myphoto/love6.jpg", text: "Forever love 💕" }
];

const abButton = document.getElementById("abBtn");

function showNextAb() {
  const photoBox = document.getElementById("photoBoxAb");
  const photo = document.getElementById("photoAb");
  const quote = document.getElementById("quoteAb");

  photoBox.style.display = "block";
  photo.src = angryBirdData[stepAb].img;
  quote.innerText = angryBirdData[stepAb].text;

  stepAb++;

  if (stepAb < angryBirdData.length) {
    abButton.innerText = "Next Surprise 💌";
  } 
  else {
    window.location.href = "home.html";
  }
}

abButton.addEventListener("click", showNextAb);

});