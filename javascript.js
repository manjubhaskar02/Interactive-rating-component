const mainContainer = document.querySelector(".main");
const credit = document.querySelector(".credit");
const submitButton = document.getElementById("submit");
const ratingButton = document.getElementById("advance")
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
const starContainer = document.getElementById("star-container");
const sentences = document.querySelectorAll(".sentence");


submitButton.addEventListener("click", () => {
    credit.classList.remove("hidden");
    mainContainer.style.display = "none";

    sentences.forEach((sentence, i) => {
        setTimeout(() => {
            sentence.classList.remove("sentence");
        }, i * 1000)
    })

    starContainer.innerHTML = "";
    for (let i = 0; i < rating.innerHTML; i++) {
        starContainer.innerHTML += ` <img class="star animate-[pulse_1s_ease-out_infinite] " src="images/icon-star.svg" alt="star">`
    }
})


rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})

ratingButton.addEventListener("click", () => {
    mainContainer.style.display = "block";
    credit.classList.add("hidden");

    sentences.forEach((sentence, i) => {
        sentence.classList.add("sentence");
    })
})