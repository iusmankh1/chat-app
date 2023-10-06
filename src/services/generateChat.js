const path = require('path')


document.addEventListener("DOMContentLoaded", () => {
    const newChatButton = document.querySelector(".fab-new-chat");
    newChatButton.addEventListener("click", () => {
        const chatHtmlPath = path.join(__dirname, '../views/chat.html');
        const randomName = generateRandomName(); // Generate a random name for the new chat
        const url = `file://${chatHtmlPath}?name=${encodeURIComponent(randomName)}`; 
        window.location.href = url; // Navigate to the URL
    });

    //function to generate random name
    function generateRandomName() {
        const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }
});
