import React, { useState, useEffect } from "react";
import "./App.css";
import QuoteBox from "./QuoteBox";
import Controls from "./Controls";

function App() {
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
    fetchRandomQuote("");
  }, []);

  const handleNewQuote = () => {
    setCategory(category);
    console.log(category);
    fetchRandomQuote(category);
  };

  return (
    <div className="App">
      <QuoteBox quote={quote} author={author} />
      <Controls handleNewQuote={handleNewQuote} />
    </div>
  );
}

export default App;
