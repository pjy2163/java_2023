const quotes = [
    { quote: "The way to get started is to quit talking and begin...",
        author: "Disney", },

        {quote : "ddd",
        author: "me",

    },
] ;
const quote = document.querySelector("#quote span:first-child") ; 
const author = document.querySelector("#quote span:last-child") ;
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
