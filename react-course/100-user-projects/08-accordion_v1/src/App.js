import "./App.css";
import React from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <main>
      <Accordion faqs={faqs} />
    </main>
  );
}

function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} num={index} />
      ))}
    </div>
  );
}

function AccordionItem({ faq, num }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={`item ${isOpen && "open"}`}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{faq.title}</p>
      <p className="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && <div className="content-box">{faq.text}</div>}
    </div>
  );
}
