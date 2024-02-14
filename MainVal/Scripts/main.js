let surBtn = document.querySelector(".sur_btn");
let modal = document.getElementById("myModal");
let messages = [
  "You light up every room you enter, even when it's just a virtual one. Happy Valentine's Day!",
  "Sharing bad jokes and good times, you make life an adventure. Thanks for being you! Happy Valentine's Day!",
  "Cheers to countless giggles, endless support, and the most epic memory bank. Happy Valentine's Day, partner in crime!",
  "You're the confidante, the hype-woman, and the reason for countless belly laughs. Happy Valentine's Day, you absolute gem! ✨",
  "From late-night talks to spontaneous outings, you're the sunshine on a cloudy day. Happy Valentine's Day, ray of light! ☀️",
  "Thanks for always knowing how to make me smile, even when I'm trying to be grumpy. Happy Valentine's Day, secret smile-inducing ninja! ",
  "Like peanut butter and jelly, we just click (and make a delicious mess sometimes). Happy Valentine's Day, my perfect match (in life, not on a sandwich)!",
  "You're the missing puzzle piece, the one who completes my sentence (even when it's nonsensical). Happy Valentine's Day, my crazy-complementary counterpart!",
  "Life throws curveballs, but having you by my side makes every hit smoother. Happy Valentine's Day, my personal cheerleader!",
  "You're the reason I have stories to tell, adventures to share, and a heart full of warmth. Happy Valentine's Day, my life's most epic co-star! ✨",
  // Bonus 20
  "Thanks for believing in me, even when I doubt myself. You're the wind beneath my wings (and sometimes the voice shouting, 'Fly, you fool!'). Happy Valentine's Day! ️",
  "You're the one I call when things are good, bad, or just plain weird. Thanks for being my ride-or-die, no matter the ride! Happy Valentine's Day! ",
  "You inspire me to be a better person, even when I'm busy being my wonderfully flawed self. Happy Valentine's Day, my personal growth guru (disguised as a friend)! ",
  "Thanks for celebrating my victories and picking me up when I fall. You're the peanut butter to my jelly, the frosting to my cupcake (sorry, not sorry)! ",
  "We may not always agree, but our disagreements never take away from the awesomeness of our bond. Happy Valentine's Day, my friendly foe (in the best way possible)! ",
  "You're the one who gets my weird jokes, my random bursts of energy, and everything in between. Thanks for accepting the full package! Happy Valentine's Day, my fellow weirdo! ",
  "From inside jokes to shared dreams, you're the soundtrack to my life's greatest hits. Happy Valentine's Day, my personal DJ! ️",
  "You have the uncanny ability to know exactly what I need, even before I do. Thanks for being my human mind-reader (without the creepy part)! Happy Valentine's Day! ",
  "Life is an adventure, and you're my favorite co-explorer. Here's to more shared journeys and unforgettable memories! Happy Valentine's Day, my intrepid buddy! ",
  "You're not just someone I talk to, you're someone I feel with. Thanks for being my emotional rock, my safe space, and my biggest cheerleader. Happy Valentine's Day, my kindred spirit! 🫂",
];

let errorPage = document.querySelector(".error_page");
let inputField = document.querySelector("#input_field");
let scrollResult = document.querySelector(".scroll_result");
let closeBtn = document.querySelector(".close");
let scrollImg = document.querySelector(".scroll_cont_bottom");
let modalName = document.querySelector(".modal_name");
let valMessage = document.querySelector(".val_message");
let nameValue = "";
let messageVal = "";

function validateInputField(inputField) {
  // Check if the input field is emp
  if (inputField.value.trim() === "") {
    errorPage.style.display = "block";
    errorPage.textContent = "Name cannnot be Empty.";
    hideErrorMessage(errorPage); // Hide error message after 5 seconds
    return false; // Abort execution immediately
  }

  // Check if the input field length is greater than 10
  if (inputField.value.length > 10) {
    errorPage.style.display = "block";
    errorPage.textContent = "Name cannot exceed 10 characters.";
    hideErrorMessage(errorPage); // Hide error message after 5 seconds
    return false; // Abort execution immediately
  }

  scrollResult.style.display = "block";
  nameValue = inputField.value;
}

function hideErrorMessage(errorMessageContainer) {
  setTimeout(() => {
    errorMessageContainer.style.display = "none"; // Hide after 5 seconds
  }, 5000);
}

function getRandomValueFromArray(arr) {
  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * arr.length);
  // Return the value at the randomly generated index
  return arr[randomIndex];
}

surBtn.addEventListener("click", () => {
  validateInputField(inputField);
});
scrollImg.addEventListener("click", () => {
  modal.style.display = "block";
  modalName.textContent = nameValue;
  valMessage.innerHTML = `<p>${getRandomValueFromArray(messages)}</p>`;
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  scrollResult.style.display = "none";
  inputField.value = "";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
