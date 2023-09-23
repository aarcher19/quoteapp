import React, { useEffect, useState } from "react";

function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const categorySelect = document.getElementById("categorySelect");
  let category = categorySelect.value;

  function setCategory() {
    category = categorySelect.value;
  }

  async function fetchRandomQuote() {
    try {
      const response = await fetch(
        "https://api.api-ninjas.com/v1/quotes?category=" + category,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "S4gNkF1P2Bf5YUZ8xWy5vw==DCq3eQdVrMNqf2fb",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();

      if (data.length === 0) {
        throw new Error("No quotes found");
      }

      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];

      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author || "Unkown");
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  }

  useEffect(() => {
    fetchRandomQuote(category);
  }, []);

  const handleNewQuote = () => {
    setCategory(category);
    console.log(category);
    fetchRandomQuote(category);
  };

  return (
    <div className="container">
      <div className="quote">
        <i>"{quote}"</i>
      </div>
      <div className="author">
        <p>{author}</p>
      </div>
      <div>
        <select id="categorySelect" className="categorySelect">
          <option value="">Pick a category</option>
          <option value="age">Age</option>
          <option value="alone">Alone</option>
          <option value="amazing">Amazing</option>
          <option value="anger">Anger</option>
          <option value="architecture">Architecture</option>
          <option value="art">Art</option>
          <option value="attitude">Attitude</option>
          <option value="beauty">Beauty</option>
          <option value="best">Best</option>
          <option value="birthday">Birthday</option>
          <option value="business">Business</option>
          <option value="car">Car</option>
          <option value="change">Change</option>
          <option value="communications">Communications</option>
          <option value="computers">Computers</option>
          <option value="cool">Cool</option>
          <option value="courage">Courage</option>
          <option value="dad">Dad</option>
          <option value="dating">Dating</option>
          <option value="death">Death</option>
          <option value="design">Design</option>
          <option value="dreams">Dreams</option>
          <option value="education">Education</option>
          <option value="environmental">Environmental</option>
          <option value="equality">Equality</option>
          <option value="experience">Experience</option>
          <option value="failure">Failure</option>
          <option value="faith">Faith</option>
          <option value="family">Family</option>
          <option value="famous">Famous</option>
          <option value="fear">Fear</option>
          <option value="fitness">Fitness</option>
          <option value="food">Food</option>
          <option value="forgiveness">Forgiveness</option>
          <option value="freedom">Freedom</option>
          <option value="friendship">Friendship</option>
          <option value="funny">Funny</option>
          <option value="future">Future</option>
          <option value="god">God</option>
          <option value="good">Good</option>
          <option value="government">Government</option>
          <option value="graduation">Graduation</option>
          <option value="great">Great</option>
          <option value="happiness">Happiness</option>
          <option value="health">Health</option>
          <option value="history">History</option>
          <option value="home">Home</option>
          <option value="hope">Hope</option>
          <option value="humor">Humor</option>
          <option value="imagination">Imagination</option>
          <option value="inspirational">Inspirational</option>
          <option value="intelligence">Intelligence</option>
          <option value="jealousy">Jealousy</option>
          <option value="knowledge">Knowledge</option>
          <option value="leadership">Leadership</option>
          <option value="learning">Learning</option>
          <option value="legal">Legal</option>
          <option value="life">Life</option>
          <option value="love">Love</option>
          <option value="marriage">Marriage</option>
          <option value="medical">Medical</option>
          <option value="men">Men</option>
          <option value="mom">Mom</option>
          <option value="money">Money</option>
          <option value="morning">Morning</option>
          <option value="movies">Movies</option>
          <option value="success">Success</option>
        </select>
        <button className="newQuoteBtn" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
