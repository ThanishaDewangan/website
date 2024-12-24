import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What are your shipping times?",
    answer: "We typically process and ship orders within 1-2 business days. Delivery times vary by location, usually 3-5 business days for domestic orders."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unworn items in original condition with tags attached. Returns are free for domestic orders."
  },
  {
    question: "How do I find my size?",
    answer: "Check our detailed size guide in the product description. If you're between sizes, we recommend sizing up."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide! International shipping times vary by location, typically 7-14 business days."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`} />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}