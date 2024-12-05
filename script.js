const quotes = [
  "A good practice routine is key to improvement. Practice consistently, not just intensely.",
  "The more you practice, the more you play, the better you get.",
  "The best way to learn music is by doing it. Play, sing, and repeat.",
  "Music is the universal language of mankind. – Henry Wadsworth Longfellow",
  "Without music, life would be a mistake. – Friedrich Nietzsche",
  "Sing like virgins. -Bonaventure Titus",
  "Let the music be hunting. -Michael Ukpeh",
  "Sing like you have love in your lives. -Bonaventure Titus",
  "The only truth is music. – Jack Kerouac",
  "Don’t practice until you get it right. Practice until you can’t get it wrong.",
  "You can't buy happiness, but you can buy a piano, and that's kind of the same thing.",
  "Sing like no one’s listening, dance like nobody’s watching, and play the piano like you’re Mozart."
];

const quoteDisplay = document.getElementById('quote-display');
const newQuoteButton = document.getElementById('new-quote');

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDisplay.textContent = randomQuote;
}

newQuoteButton.addEventListener("click", displayRandomQuote);
