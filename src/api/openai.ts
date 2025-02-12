import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getAIResponse(prompt: string) {
  const response = await openai.Completions.create({
    model: "gpt-4-turbo",
    prompt,
    max_tokens: 500,
  });
  return response;
}