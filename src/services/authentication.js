const Store = require("electron-store")
const store = new Store(); // Create an instance of Electron-store

const formBtn = document.getElementById('phone-No');
const phoneNumberInput = document.getElementById('phone-number');
const errorMessage = document.getElementById('error-message')

formBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log("clicked next button ")

  // Add a keydown event listener to prevent non-numeric characters from being typed
  phoneNumberInput.addEventListener('keydown', (event) => {
    const keyCode = event.which || event.keyCode;

    if (!(keyCode >= 48 && keyCode <= 57)) {
      event.preventDefault();// Prevent the keypress if it's not a numeric key
    }
  })
  const phoneNumber = phoneNumberInput.value;
  store.set("phone", phoneNumber) //store phone number in electron-store
  if (phoneNumber) {
    window.location.href = "../views/code-entry.html";
  }
  else {
    errorMessage.textContent = 'Please enter your phone no'
  }
});