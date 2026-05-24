import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import fs from 'fs/promises';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    const knowledgeBase = await fs.readFile('../public/kb.txt', 'utf-8');

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const chat = model.startChat({
      history: history || [],
    });

    const prompt = `
      You are a helpful and friendly customer support assistant for Shivakriti Tech.
      Your goal is to answer user questions, guide them through the company's services, and help convert them into customers.
      Your answers should be concise and to the point, ideally within 1-2 sentences.
      Do not greet the user in every message. Do not repeat the user's question. Do not use markdown.
      Make conversations interactive and conversational.
      Use the following knowledge base to answer questions. If the answer is not in the knowledge base, say that you don't have that information.
      
      Knowledge Base:
      ${knowledgeBase}

      User question: ${message}
    `;

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ text });
  } catch (error) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
