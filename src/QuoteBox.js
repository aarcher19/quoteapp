import React from "react";

function QuoteBox({ quote }, { author }) {
  return (
    <div className="container">
      <div className="quote">
        <i>"{quote}"</i>
      </div>
      <div className="author">
        <p>{author}</p>
      </div>
    </div>
  );
}

export default QuoteBox;
