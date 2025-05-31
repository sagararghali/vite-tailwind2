// src/components/FAQ.jsx
import { useState } from 'react';

const FAQ = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'How do I search for a movie?',
      answer: 'You can use the search bar at the top of the page to find movies by title, genre, or cast members.',
    },
    {
      question: 'Is it free to use this website?',
      answer: 'Yes, browsing movie information is free. However, certain features (like premium reviews or advanced search filters) may require an account.',
    },
    {
      question: 'Do I need to create an account to use the website?',
      answer: 'You can browse most features without an account. However, creating an account allows you to save favorite movies, write reviews, and receive personalized recommendations.',
    },
    {
      question: 'How can I find upcoming movie releases?',
      answer: 'Check the “Upcoming Movies” section on the homepage or use the release date filter in the search.',
    },
    {
      question: 'Is there a mobile app for this website?',
      answer: 'Not at the moment, but the website is mobile-friendly. You can enjoy it through any web browser on your smartphone or tablet.',
    }
  ];

  return (
    <div className="mt-8 max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="w-full text-left flex justify-between items-center"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-xl font-semibold">{item.question}</span>
              <svg
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  openQuestionIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className={`mt-2 ${openQuestionIndex === index ? '' : 'hidden'}`}>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
