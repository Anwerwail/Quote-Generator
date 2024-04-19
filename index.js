const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "Stay hungry, stay foolish. - Steve Jobs",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "If you want to buy something without looking to the price you should work without looking to the clock. - A wise man"
];

const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote-btn");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayRandomQuote() {
  const randomQuote = getRandomQuote();
  quoteElement.textContent = randomQuote;
}

newQuoteButton.addEventListener("click", displayRandomQuote);

// Display a random quote when the page loads
displayRandomQuote();
