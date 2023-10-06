const Store = require("electron-store")
const path = require('path')
const store = new Store(); // Create an instance of Electron-store

const codeVerifyBtn = document.getElementById('verify-button');
const codeInput = document.getElementById('inputCode');
const errorMessage = document.getElementById('error-message')

// Event listener for the "Verify code Next" button
codeVerifyBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  
const generatedCode = "000000"
  const enterCode = codeInput.value;
 if(enterCode === generatedCode){
  window.location.href = "../views/user-form.html";
 }
 else{
errorMessage.textContent = 'Incorrect code. Please enter the correct 6-digit code.'
 }
});