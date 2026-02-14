let step = 0;

const data = [
  { img: "l.jpg", text: "YE TERA FAV PHOTO ❤️" },
  { img: "l.jpg", text: "Every moment with you is my favorite memory ✨" },
  { img: "love3.jpg", text: "You are always mine and forever 💖" },
  { img: "love4.jpg", text: "kya sahi christmas tha 🌸" },
  { img: "love5.jpg", text: "Forever grateful for you 💕" }
];

function showNext() {

  const photoBox = document.getElementById("photoBox");
  const photo = document.getElementById("photo");
  const quote = document.getElementById("quote");
  const button = document.getElementById("nextBtn");

  if (step < data.length) {

    photoBox.style.display = "block";
    photo.src = data[step].img;
    quote.innerText = data[step].text;

    step++;

    if (step === 1) {
      button.innerText = "Next Surprise 💌";
    }

  } else {
    button.innerText = "Go Home 🏠";
    button.onclick = function() {
      window.location.href = "home.html";
    };
  }
}
