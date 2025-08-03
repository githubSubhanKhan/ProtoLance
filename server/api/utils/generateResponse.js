const Cerebras = require('@cerebras/cerebras_cloud_sdk');
require('dotenv').config();

// Initialize the Cerebras client
const client = new Cerebras({
  apiKey: process.env.API_KEY, // Ensure API Key is stored in .env
});

/**
 * Calls Cerebras AI to generate a chatbot response.
 * @param {string} prompt - The user’s input prompt.
 * @returns {Promise<string>} - AI-generated response.
 */
const generateResponse = async (prompt) => {
  try {
    const response = await client.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt.trim(),
        },
      ],
      model: 'llama3.1-8b',
    });

    // Extract response content
    const aiResponse = response.choices?.[0]?.message?.content;

    if (!aiResponse) {
      throw new Error('Failed to generate response');
    }

    return aiResponse;
  } catch (error) {
    console.error('Error generating response:', error.message);
    return 'Thank you for reaching out to us. We’ll get back to you shortly';
  }
};

module.exports = generateResponse;