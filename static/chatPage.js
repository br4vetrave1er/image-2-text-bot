 // Dummy send message function
 document.getElementById('sendButton').addEventListener('click', function() {
    handleInput()
});

// Event listener for the "Enter" key press
document.getElementById('userInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission behavior
        handleUserInput();      // Call the same function as the button click
    }
});

function handleInput() {
    var input = document.getElementById('userInput').value;
    // document.getElementById('loading-message').style.display = 'block';
    if (input.trim() !== "") {
        addUserMessage(input);
        
        document.getElementById('userInput').value = ''; // Clear the input field
        generateBotResponse(input); // Simulate the bot response
    }
}

// Add User's Message to the Chat
function addUserMessage(message) {
    var chatHistory = document.getElementById('chat-history');
    
    var newMessage = `<div class="message user-message">
                        <p>${message}</p>
                      </div>`;
    chatHistory.innerHTML += newMessage;
    chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom
}

// Simulate Bot's Response
function generateBotResponse(input) {
    document.getElementById('loading-message').style.display = 'block'
    var chatHistory = document.getElementById('chat-history');
    if (input === "") return;

    let formData = new FormData();
    formData.append('prompt', input);

    // Fetch API to send the POST request (replace with your Django URL)
    fetch(chatBotUrl, {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': '{{ csrf_token }}'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Hide the loading message once the image is received
        document.getElementById('loading-message').style.display = 'none';
        if (data.image_base64) {
            let botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        
        // Create image element for the generated image
        let imgElement = document.createElement('img');
        imgElement.id = 'generated-image';
        imgElement.src = "data:image/png;base64," + data.image_base64;
        imgElement.style.display = 'block'; // Ensure the image is visible
        imgElement.style.width = '100%'; // Set the width to 100% of the container
        imgElement.style.height = 'auto';

        botMessage.appendChild(imgElement);
        chatHistory.appendChild(botMessage)
        }
    })
        .catch(error => {
            console.error('Error:', error)
            errorMsg = `<div class="message user-message">
                        <p>Unable to load</p>
                      </div>`;
            chatHistory.innerHTML += errorMsg
        });
    
    // chatHistory.innerHTML += imgElement;
    chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom

}