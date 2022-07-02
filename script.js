import { QUOTES } from "./quote.js";

function getRandomInt() {
    return Math.floor(Math.random() * QUOTES.length);
}

let RANDOM_VALUE = getRandomInt();
let DEFAULT_QUOTE = QUOTES[RANDOM_VALUE];

console.log("DFAU", DEFAULT_QUOTE);

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const authorProfession = document.getElementById("author-profession");
const topicDOMUL = document.getElementById("topics");
const newQuoteBtn = document.getElementById("new-quote");
const shareBtn = document.getElementById("share-btn");

function contentGenerator(DEFAULT_QUOTE){
    quoteText.innerText = `" ${DEFAULT_QUOTE["quote"]} "`;
    quoteAuthor.innerText = `~ ${DEFAULT_QUOTE["author"]}`;
    authorProfession.innerText = `( ${DEFAULT_QUOTE["profession"]} )`;

    const topicItems = DEFAULT_QUOTE["topics"];
    topicDOMUL.innerHTML = "";
    for (let t of topicItems){
        const topicItem = document.createElement("li");
        topicItem.classList = "text-slate-500 underline decoration-green-400";
        topicItem.innerText = t;
        topicDOMUL.append(topicItem);
    }
};

contentGenerator(DEFAULT_QUOTE);

newQuoteBtn.addEventListener("click", function(){
    const randomIndex = getRandomInt();
    let newQuote = QUOTES[randomIndex];
    contentGenerator(newQuote);
});

shareBtn.addEventListener("click", function(){
    const quote = quoteText.innerText;
    const author = quoteAuthor.innerText;
    const profession = authorProfession.innerText;

    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}
                        ${author}${profession}`;
    window.open(twitterUrl, "_blank");
});