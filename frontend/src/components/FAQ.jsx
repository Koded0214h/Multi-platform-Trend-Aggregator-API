// src/components/FAQ.jsx
import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What platforms do you support?",
      answer: "Our API currently supports Twitter, Reddit, Google Trends, and major news outlets. We are continuously working on adding more platforms based on user demand."
    },
    {
      question: "How up-to-date is the data?",
      answer: "We aim for real-time data aggregation. Depending on the source platform, data is refreshed anywhere from every few minutes to every hour."
    },
    {
      question: "What are the rate limits for the API?",
      answer: "For the Free tier, you can make up to 100 requests per day. The upcoming Pro tier will offer significantly higher rate limits and dedicated support."
    }
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-3 text-base text-gray-300 sm:text-lg lg:mt-4 lg:text-xl">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <div className="mt-8 mx-auto max-w-4xl space-y-4 sm:mt-12 lg:mt-16">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => (
  <details className="group rounded-lg border border-primary/20 bg-background-dark/50 p-4 sm:p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between">
      <h3 className="text-base font-medium text-gray-100 sm:text-lg">{question}</h3>
      <span className="relative h-5 w-5 shrink-0">
        <svg className="absolute h-5 w-5 opacity-100 transition-opacity group-open:opacity-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6v12M6 12h12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg className="absolute h-5 w-5 opacity-0 transition-opacity group-open:opacity-100" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </summary>
    <p className="mt-3 text-sm text-gray-300 sm:mt-4 sm:text-base">{answer}</p>
  </details>
);

export default FAQ;