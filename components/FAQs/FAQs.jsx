"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../UIcomponents/Accordion";

import { faqs } from "../../utils/FAQs";

export default function FAQs() {
  return (
    <div className="container">
      <div className="m-4 rounded-xl bg-white p-8 shadow-lg">
        <h2 className="text-center text-[40px] font-bold">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          className="flex flex-wrap justify-between lg:gap-4"
          collapsible
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="basis-1/1 w-full min-w-[100px] shrink-0 p-6 md:basis-1/2 md:text-center lg:m-6 lg:basis-1/4"
            >
              <AccordionTrigger className="rounded text-left text-xl font-bold [&[data-state=open]>svg]:rotate-180">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xl data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
