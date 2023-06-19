import React, { useState } from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";

const FaqPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      id: 2,
      question: 'Question 2',
      answer: 'Answer 2',
    },
    // Add more FAQ items as needed
  ];

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div>
    <Header currentPage="/faq"  />
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
        {faqData.map((faq) => (
          <div key={faq.id} className="mb-4">
            <button
              className="flex justify-between w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              onClick={() => toggleExpand(faq.id)}
            >
              <span className="font-bold">{faq.question}</span>
              <span>{expandedId === faq.id ? '-' : '+'}</span>
            </button>
            {expandedId === faq.id && (
              <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default FaqPage;
