document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.querySelector(".send-message");
    const sendButton = document.querySelector(".send-button");
    const chatMessages = document.getElementById("chat-messages");

    // Get the name from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const chatName = urlParams.get("name");
    const options = { hour: 'numeric', minute: 'numeric' };
    const time = new Date().toLocaleTimeString(undefined, options);

    // Initialize the message variable as an empty string
    let storedMessage = "";
    let replyMessage = " Hey how are you looking for what ??"

    // Update the chat header username
    const chatHeaderUsername = document.getElementById("chat-header-username");
    chatHeaderUsername.textContent = chatName;

    // Update the left section sidebar username
    const sidebarUsername = document.getElementById("sidebar-username");
    sidebarUsername.textContent = chatName;

    const sidebarTime = document.getElementById('sidebar-time');
    sidebarTime.textContent = time;



    sendButton.addEventListener("click", () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            storedMessage = messageText;
            // Update the left section sidebar username
            const sidebarMessage = document.getElementById("new-message");
            sidebarMessage.textContent = storedMessage;

            // Create a message element and display the stored message
            const messageElement = document.createElement("div");
            messageElement.className = "bubble me"; // send message and show on the right side 
            messageElement.innerHTML = `
                ${storedMessage}
                <div class="relative">
                    <span class="timestamp">${time}</span>
                    <img src="check-doble.svg" alt="">
                </div> `;

            chatMessages.appendChild(messageElement);

            const replyMessageElement = document.createElement("div");
            replyMessageElement.className = "bubble you"; // reply on the left side 
            replyMessageElement.innerHTML = `
                ${storedMessage}
                <div class="">
                    <span class="timestamp">${time}</span>
                </div>`;

                chatMessages.appendChild(replyMessageElement);
            // Clear the input field
            messageInput.value = "";
        }
    });

    // Handle pressing Enter key
    messageInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
});
