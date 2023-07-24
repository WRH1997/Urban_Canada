// author: Darshil Patel

import React, { useState } from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";

const FaqPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const consumerData = [
    {
      id: 1,
      question: 'Who are we?',
      answer: 'A simple platform for people to book unique type of services offered by various service providers.',
    },
    {
      id: 2,
      question: 'Who provides the service?',
      answer: 'Service provider with their profile on our platform will provide the service and you can book the services.',
    },
    {
      id: 3,
      question: 'How to book the service?',
      answer: 'Upon successful login, select the Service option from navigation bar at the top, and select the appropriate service from the list and then proceed for booking by entering the relevant details like date, time and additional comments, if any.',
    },
    {
      id: 4,
      question: 'How to check the service status?',
      answer: 'Upon successful booking of the service, you will be redirected to the my bookings page or else you can select the option My Booking from navigation bar at the top. You will be able to see the list of services requested along with its status.',
    },
    {
      id: 5,
      question: "What's next after approval?",
      answer: 'Service provider will contact you via email on approval.',
    },
    {
      id: 6,
      question: 'How to provide feedback about service?',
      answer: 'In my bookings page, there is an option to provide feedback in the list of bookings. On the right side of each booked service you will find the feedback button. Clicking on that will redirect to feedback form. Upon successful submission of form, you will be able to see updated comments on Rating Page along with your review.',
    },
    {
      id: 7,
      question: "How to cancel approved service?",
      answer: 'In my bookings page, select "Cancel" for whichever service you want to cancel.',
    },
  ];

  const providerData = [
    {
      id: 11,
      option: "How to check my service bookings?",
      answer: 'Upon successful login, select "Service Request" option from navigation bar at the top. The list of request along with sepecific message will be displayed.',
    },
    {
      id: 12,
      option: "How to accept requests?",
      answer: 'In the list of requests, there will be button "Accept" to accept request. After the acceptance, an email will be sent to customer about the acceptance which includes your contact details you mentioned in your profile.',
    },
    {
      id: 13,
      option: "What's next after approval?",
      answer: "Customer's contact details will be shared with you and you should send an email to customer for further communication.",
    },
    {
      id: 14,
      option: "How to cancel approved request?",
      answer: "In the 'Service Request' tab, a 'Cancel' button is provided alongside the list of request. After the cancellation, an email will be sent to customer about it.",
    },
    {
      id: 15,
      option: "What if you got false feedback without using your service?",
      answer: 'You can contact admin through Contact Us page, it will be reviewed and further action will be taken to resolve the issue.',
    }
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
      <Header currentPage="/faq"/>
        <div className="container mx-auto mt-8 mb-16">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-medium mb-4">Frequently Asked Questions</h1>
            <h2 className="text-lg font-medium mb-3">Consumer</h2>

            {consumerData.map((faq) => (
              <div key={faq.id} className="mb-4">
                <button
                  className="flex justify-between w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={() => toggleExpand(faq.id)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span>{expandedId === faq.id ? '-' : '+'}</span>
                </button>

                {expandedId === faq.id && (
                  <div className="mt-2 px-4 py-2 bg-gray-100 rounded-lg">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}

            <h2 className="text-lg mt-8 font-medium mb-3">Service Provider</h2>

            {providerData.map((faq) => (
              <div key={faq.id} className="mb-4">
                <button
                  className="flex justify-between w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={() => toggleExpand(faq.id)}
                >
                  <span className="font-medium">{faq.option}</span>
                  <span>{expandedId === faq.id ? '-' : '+'}</span>
                </button>

                {expandedId === faq.id && (
                  <div className="mt-2 px-4 py-2 bg-gray-100 rounded-lg">
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