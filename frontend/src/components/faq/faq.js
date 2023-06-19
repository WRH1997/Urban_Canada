import React, { useState } from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";

const FaqPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const basicData = [
    {
      id: 1,
      option: "",
      answer: "list"
    },
    {
      id: 2,
      option: "Service Provider",
      answer: "list abc"
    }
  ]

  const providerData = [
    {
      id: 11,
      option: "How can I see who has booked My service?",
      answer: 'You need to Login via our Login page . Then select "Service Request" option from navigation bar at the top. You will be able to see the list of request along with sepecific message.',
    },
    {
      id: 12,
      option: "How can I accept requests?",
      answer: '"Login > Service Request >" Here you will see the list of request, On the right side there will be button "Accept". After the acceptance email will be sent to customer about the acceptance which includes your contact details from your profile.',
    },
    {
      id: 13,
      option: "What after the approval?",
      answer: 'You details will be sent automatically to customer with your contact details and the customer will contact you for further medium of communication. That\'s all.',
    },
    {
      id: 14,
      option: "How can I cancel approved request?",
      answer: 'It is very simple go to "Login > Service Request >" Here you will see the list of request, On the right side there will be button "Cancel". After the cancellation email will be sent to customer about the cancellation with small message which includes reason from your profile.',
    },
    {
      id: 15,
      option: "What if some gave you a wrong feedback without using your service?",
      answer: 'Contact admin via Contact us page you will find this option at the bottom footer section on the right side.',
    }
];

  const faqData = [
    {
      id: 1,
      question: 'What we are?',
      answer: 'This is simple platform for prople to book various types of services offered by electrician , Painter, Decoreters, Caretaker etc. ',
    },
    {
      id: 2,
      question: 'Who will provide the service?',
      answer: 'Service provider will have their profile created on our platform other people can book the services.',
    },
    {
      id: 3,
      question: 'How can i book the serivce?',
      answer: 'You need to Login via our Login page in order to book the services. Then select the Service Booking option from navigation bar at the top. Enter the relevant details like time and date and what needs to be done by service provider.',
    },
    {
      id: 4,
      question: 'How would I know my service status?',
      answer: 'You need to Login via our Login page in order to book the services. Then select the Service My Booking from navigation bar at the top. You will be able to see the list of serivices that you have requested for along with the status of it.',
    },
    {
      id: 5,
      question: 'What is the next step after the approval?',
      answer: 'Service provider will contact you via email on approval withing 24 hours.',
    },
    {
      id: 6,
      question: 'I want to give feedback on the service, I had received, where can i write it?',
      answer: '"Login > MyBooking" Here you will see the list of booked serivce. On the right side of each booked service you will find the feedback button. Click on that and You will be redirected to Form. You need to submit the form. You will be able to see updated comments on Rating Page along with your review.',
    },
    {
      id: 7,
      question: "How can I cancel approved request?",
      answer: 'It is very simple go to "Login > My Booking >" Here you will see the list of request, On the right side there will be button "Cancel". After the cancellation email will be sent to service provider about the cancellation with small message which includes reason',
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
        <h2 className="text-2xl font-bold">Consumer</h2>

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
        <h2 className="text-2xl font-bold">Service Provider</h2>
        {providerData.map((faq) => (
          <div key={faq.id} className="mb-4">
            <button
              className="flex justify-between w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              onClick={() => toggleExpand(faq.id)}
            >
              <span className="font-bold">{faq.option}</span>
              <span>{expandedId === faq.id ? '-' : '+'}</span>
            </button>
            {expandedId === faq.id && (
              <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
        <h1><br/></h1>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default FaqPage;
