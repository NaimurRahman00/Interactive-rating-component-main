document.addEventListener("DOMContentLoaded", function () {
  const rateBox = document.getElementById("rating");
  const thanksBox = document.getElementById("thank");
  const submitBtm = document.getElementById("submit");
  const rateSpan = document.getElementById("rate");
  const RateBtn = document.querySelectorAll(".rate-btn");

  // CLICK BUTTON TO HIDE 'RATING' CONTAINER AND SHOW 'THANKS' CONTAINER
  submitBtm.addEventListener( "click", () => {
    thanksBox.classList.remove("d-none");
    rateBox.style.display = "none";
  });

  // GIVE RATE AND SHOW TO 'THANKS' CONTAINER
  RateBtn.forEach((rate) => {
    rate.addEventListener("click", () => {
      rateSpan.textContent = rate.textContent;
    });
  });

});  

