const musicTips = [
  "Practice regularly to improve your skills.",
  "Always warm up your voice before singing.",
  "Take care of your instrument, it’s your most valuable tool.",
  "Listen to a wide variety of music to improve your understanding.",
  "Don’t be afraid to make mistakes while practicing.",
  "Practice with a metronome to improve your timing.",
  "Take breaks during long practice sessions to avoid fatigue.",
  "Sing like virgins. -Bonaventure Titus",
  "Make sure Practice at home to gain Mastery of the music.  -Bonaventure Titus",
  "Let the music be hunting. -Michael Ukpeh",
  "Sing like you have love in your lives. -Bonaventure Titus",
];


const quotes = [
  "“Music is the divine way to tell beautiful, poetic things to the heart.” – Pablo Casals",
  "“Without music, life would be a mistake.” – Friedrich Nietzsche",
  "“The only truth is music.” – Jack Kerouac",
  "“Music can change the world because it can change people.” – Bono",
  "“Music is a world within itself. It’s a language we all understand.” – Stevie Wonder",
  "You can't buy happiness, but you can buy a piano, and that's kind of the same thing.",
  "Sing like no one’s listening, dance like nobody’s watching, and play the piano like you’re Mozart.",
  "A good practice routine is key to improvement. Practice consistently, not just intensely.",
  "The more you practice, the more you play, the better you get.",
  "The best way to learn music is by doing it. Play, sing, and repeat.",
];

const tipDisplay = document.getElementById('tip-display');
const quoteDisplay = document.getElementById('quote-display');

const newTipButton = document.getElementById('new-tip');
const newQuoteButton = document.getElementById('new-quote');

function displayRandomTip() {
  const randomIndex = Math.floor(Math.random() * musicTips.length);
  const randomTip = musicTips[randomIndex];

  tipDisplay.textContent = randomTip; 
}

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteDisplay.textContent = randomQuote;
}

newTipButton.addEventListener("click", displayRandomTip);

newQuoteButton.addEventListener("click", displayRandomQuote);

displayRandomTip();
displayRandomQuote();
