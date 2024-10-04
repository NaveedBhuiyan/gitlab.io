document.getElementById('sendButton').addEventListener('click', sendMessage);

function sendMessage() {
    const userMessage = document.getElementById('userInput').value;
    if (userMessage.trim() === '') return;

    // Display user message
    displayMessage('You: ' + userMessage);

    // Clear input field
    document.getElementById('userInput').value = '';

    // Chatbot response (simple logic)
    const botResponse = getBotResponse(userMessage);
    displayMessage('Bot: ' + botResponse);
}

function displayMessage(message) {
    const chatbox = document.getElementById('chatbox');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatbox.appendChild(newMessage);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(userMessage) {
    // Simple predefined responses (you can expand this logic)
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes('hello')) {
        return 'Hello! How can I help you today?';
    } else if (userMessage.includes('project')) {
        return 'You can check out my projects on the GitHub repository.';
    } else if (userMessage.includes('help')) {
        return 'I am here to assist you with any questions!';
    } else {
        return 'Sorry, I didn\'t understand that.';
    }
}
