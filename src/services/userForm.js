const Store = require("electron-store")
const store = new Store(); // Create an instance of Electron-store

const suerFormBtn = document.getElementById('userName');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const errorMessage = document.getElementById('error-message')

// Event listener for the "Next" button
suerFormBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const enterFirstName = firstName.value;
  const enterLastName = lastName.value;

  const fullName = enterFirstName + ' ' + enterLastName ;
 store.set("fullName" ,fullName)

 if(enterFirstName.length > 0 && enterLastName.length > 0){
  window.location.href = "../views/new-chat.html";
 }else{
    errorMessage.textContent = ' Please Enter Both Name'
 }

});