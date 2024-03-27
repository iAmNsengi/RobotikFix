import React from "react";

export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/11/xAI-Grok-GettyImages-1765893916.jpeg?w=1390&crop=1"
          alt="logo"
        />
      </div>
      <div className="texts">
        <h2>
          Why Elon Musk's AI company 'open-sourcing' Grok matters — and why it
          doesn't
        </h2>
        <p className="info">
          <a href="#" className="author">
            Eliezer Nsengi
          </a>
          <time>2024-03-03 15:45</time>
        </p>
        <p className="summary">
          Elon Musk’s xAI released its Grok large language model as “open
          source” over the weekend. The billionaire clearly hopes to set his
          company at odds with rival OpenAI, which, despite its name, is not
          particularly open. But does releasing the code for something like Grok
          actually contribute to the AI development community? Yes and no.
        </p>
      </div>
    </div>
  );
}
