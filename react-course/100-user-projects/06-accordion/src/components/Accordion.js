import React from "react";

export default function Accordion({ faqs }) {
  const [curOpen, setCurOpen] = React.useState(null);

  function handleCurOpen(index) {
    curOpen === index ? setCurOpen(null) : setCurOpen(index);
  }

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          num={index}
          curOpen={curOpen}
          onClick={handleCurOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ faq, num, curOpen, onClick }) {
  const isOpen = curOpen === num;
  return (
    <div className={`item ${isOpen && "open"}`}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{faq.title}</p>
      <p className="icon" onClick={() => onClick(num)}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && <div className="content-box">{faq.text}</div>}
    </div>
  );
}
