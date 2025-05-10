import { useState } from 'react';

function App() {
  const [website, setWebsite] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Website: ${website}\nQuestion: ${question}`);
    // Replace this alert with your API call or chatbot logic
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">ChatBot for Websites</h1>
        <p className="text-gray-400 mt-2">
          Enter a website link and ask questions about it. Let our AI assist you!
        </p>
      </header>
      <main className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-300">
              Website Link
            </label>
            <input
              type="url"
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="https://example.com"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="question" className="block text-sm font-medium text-gray-300">
              Your Question
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="What do you want to know about the website?"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            Ask the ChatBot
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;