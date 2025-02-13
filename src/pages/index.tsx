import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.result || 'Error generating response');
    setLoading(false);
  }

  const prompts = {
    "Business Grant Finder": "List grants available for Black entrepreneurs in 2024 and how to apply.",
    "Wealth Planning AI": "Provide a step-by-step wealth-building plan for a Black business owner.",
    "Policy Breakdown": "Summarize the latest federal policies affecting Black businesses."
  };
  
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Kofa.ai - AI Business & Policy Assistant</h1>
      <div className="mb-4">
        {Object.keys(prompts).map((key) => (
          <button 
            key={key} 
            className="m-2 p-2 bg-gray-300 rounded-lg"
            onClick={() => setPrompt(prompts[key])}
          >
            {key}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your question or select a preset..."
          className="w-full p-3 border rounded-lg"
        />
        <button type="submit" className="mt-3 p-2 bg-blue-600 text-white rounded-lg">
          {loading ? 'Processing...' : 'Get AI Insight'}
        </button>
      </form>
      {response && (
        <div className="mt-5 p-4 border rounded-lg w-full max-w-lg">
          <h2 className="text-xl font-semibold">AI Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}