document.addEventListener("DOMContentLoaded", () => {
    let conversationHistory = [];

    chrome.storage.local.get("selectedText", (data) => {
        const selectedText = data.selectedText || "";
        if (selectedText !== "") {
            displayMessage(selectedText, 'user');
            simulateChatbotResponse();
        }
    });

    document.getElementById("send-btn").addEventListener("click", () => {
        const userInput = document.getElementById("user-input").value.trim();
        if (userInput) {
            document.getElementById("user-input").value = '';
            displayMessage(userInput, 'user');
            simulateChatbotResponse();
        }
    });

    function displayTypingIndicator() {
        const chatContainer = document.getElementById("chat-container");
        const typingElement = document.createElement("div");
        typingElement.id = "typing-indicator";
        typingElement.textContent = "...";
        typingElement.className = "message bot";
        chatContainer.appendChild(typingElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingIndicator = document.getElementById("typing-indicator");
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    function displayMessage(message, sender) {
        const chatContainer = document.getElementById("chat-container");
        const messageElement = document.createElement("div");
        const avatarContainer = document.createElement("div");
        const avatarIcon = document.createElement("i");
        
        avatarIcon.className = sender === 'user' ? 'fa-sharp fa-solid fa-user-ninja' : 'fa-solid fa-robot';
        avatarContainer.className = `avatar-icon ${sender}`;
        avatarContainer.appendChild(avatarIcon);
        
        const textElement = document.createElement("span");
        const senderTag = document.createElement("strong");
        senderTag.textContent = `${sender === 'user' ? 'Vous: ' : 'Chatbot: '}`;
        textElement.appendChild(senderTag);
        textElement.appendChild(document.createTextNode(message));
        textElement.className = "message-content";
        
        messageElement.appendChild(avatarContainer);
        messageElement.appendChild(textElement);
        messageElement.className = `message ${sender}`;
        
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        updateConversationHistory(sender, message);
    }

    function updateConversationHistory(role, message) {
        conversationHistory.push({role, message});
        if (conversationHistory.length > 20) conversationHistory.shift();
    }

    function simulateChatbotResponse() {
        displayTypingIndicator();
    
        const payload = conversationHistory.map(({role, message}) =>
            `${role === 'user' ? 'Vous' : 'Bot'}: ${message}`).join("\n");
    
        fetch('http://localhost:3000/chatbot-response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: payload }),
        })
        .then(response => response.json())
        .then(data => {
            removeTypingIndicator();
            displayMessage(data.message, 'bot');
        })
        .catch((error) => {
            console.error('Error:', error);
            removeTypingIndicator();
            displayMessage("Désolé, je n'ai pas pu récupérer de réponse.", 'bot');
        });
    }
});
