const express = require('express');
const { OpenAI } = require('openai');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: 'votre_api' // Remplacer par votre api OPENAI
});

async function fetchChatbotResponse(userMessage) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: userMessage },
      ],
    });
    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error fetching chatbot response:", error);
    throw error; 
  }
}

app.post('/chatbot-response', async (req, res) => {
    const userMessage = req.body.message;
    try {
        const botResponse = await fetchChatbotResponse(userMessage);
        res.json({ message: botResponse });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching the chatbot response.' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
