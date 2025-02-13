import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch AI response. Please try again.');
      }

      const data = await res.json();
      setResponse(data.result || 'No response received.');
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  }

  const prompts = {
    "Business Grant Finder": "List grants available for Black entrepreneurs in 2024 and how to apply.",
    "Wealth Planning AI": "Provide a step-by-step wealth-building plan for a Black business owner.",
    "Policy Breakdown": "Summarize the latest federal policies affecting Black businesses."
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 text-center">
        
        {/* AI Avatar with Animation */}
        <div className="relative w-32 h-32 mx-auto">
          <Image 
            src="/Black-Polymath.svg" 
            alt="Kofa AI Logo" 
            width={128} 
            height={128} 
            className={`transition-transform ${loading ? 'animate-spin-slow' : ''}`}
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-4">Kofa AI - The Black Polymath</h1>
        <p className="text-gray-700 mt-2">"Bridging past wisdom with future intelligence."</p>

        {/* Preset Prompts */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {Object.keys(prompts).map((key) => (
            <button 
              key={key} 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => setPrompt(prompts[key])}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-6">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your question or select a preset..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows={4}
          />
          <button 
            type="submit" 
            className={`w-full py-3 text-white font-semibold rounded-lg ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Get AI Insight'}
          </button>
        </form>

        {/* AI Response */}
        {response && (
          <div className="mt-5 p-4 border rounded-lg bg-gray-100">
            <h2 className="text-lg font-semibold">AI Response:</h2>
            <p className="text-gray-700">{response}</p>
          </div>
        )}

        {/* Error Handling */}
        {error && (
          <div className="mt-5 p-3 border border-red-500 bg-red-100 text-red-700 rounded-lg">
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
    </div>
  );
}