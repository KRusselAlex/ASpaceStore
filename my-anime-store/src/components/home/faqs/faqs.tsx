"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";


const categories = ["General", "Account", "Billing"] as const;
type Category = (typeof categories)[number];

const faqs: Record<Category, { question: string; answer: string }[]> = {
  General: [
    {
      question: "What is this platform about?",
      answer: "This platform helps you manage tasks efficiently.",
    },
    {
      question: "How can I contact support?",
      answer: "You can reach out via our contact page.",
    },
    {
      question: "What is this platform about?",
      answer: "This platform helps you manage tasks efficiently.",
    },
    {
      question: "How can I contact support?",
      answer: "You can reach out via our contact page.",
    },
    {
      question: "What is this platform about?",
      answer: "This platform helps you manage tasks efficiently.",
    },
    {
      question: "How can I contact support?",
      answer: "You can reach out via our contact page.",
    },
  ],
  Account: [
    {
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login page.",
    },
    {
      question: "Can I change my email?",
      answer: "Yes, under account settings.",
    },
    {
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login page.",
    },
    {
      question: "Can I change my email?",
      answer: "Yes, under account settings.",
    },
    {
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login page.",
    },
    {
      question: "Can I change my email?",
      answer: "Yes, under account settings.",
    },
  ],
  Billing: [
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards and PayPal.",
    },
    {
      question: "Can I get a refund?",
      answer: "Refunds are available within 14 days of purchase.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards and PayPal.",
    },
    {
      question: "Can I get a refund?",
      answer: "Refunds are available within 14 days of purchase.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards and PayPal.",
    },
    {
      question: "Can I get a refund?",
      answer: "Refunds are available within 14 days of purchase.",
    },
  ],
};

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("General");

  return (
    <div>
      <div className="bg-thirdly text-white" style={{ height: "50vh" }}>
        <div className="h-12"></div>
        <div className="flex flex-col h-full w-full justify-center  p-2 items-center">
          <h1 className=" text-xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-center  mb-8">
            Find answers to common questions below.
          </p>
        </div>
      </div>
      <div className="bg-fourthly w-full">
        <div className="max-w-4xl  mx-auto p-6 py-16 ">
          <div className="flex gap-4 justify-center mb-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-primary font-medium text-white" // Apply these classes when selected
                    : "bg-fourthly font-medium"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <Accordion type="single" collapsible>
            {faqs[selectedCategory].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="">{faq.question}</AccordionTrigger>
                <AccordionContent className="pl-3 text-gray-800">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
