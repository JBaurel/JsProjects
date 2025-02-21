const quoteContainer = document.getElementById('container');
const textQuote = document.getElementById('quote');
const author = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
//const loader = document.getElementById('loader');

let apiQuotes = [];

// function loading(){
//     loader.hidden = false;
//     container.hidden = true;
// }

// function complete(){
//     container.hidden = false;
//     loader.hidden = true;
// }

function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    //console.log(quote)

    if(!quote.author){
        author.textContent = 'Unknown';
    }else{
        author.textContent = quote.author;
    }

    if(quote.text.length > 50){
        textQuote.classList.add('long-quote');
    }else{
        textQuote.classList.remove('long-quote');
    }

    textQuote.textContent = quote.text;
}

async function getQuotes() { 
    const apiUrl = "https://type.fit/api/quotes?v=1.1"
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch(error){
        //show error
        alert(error.message)

    }
}


function twitterQuote(){
    const twitterUrl = `https:////twitter.com/intent/tweet?text=${textQuote.textContent} - ${author.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);   
twitterBtn.addEventListener('click', twitterQuote);

getQuotes();
//loading()