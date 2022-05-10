var quotes_fr = [
    ["",""],
    ["",""],
    ["",""],
    ]
    
var quotes_uk = [
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""]
    ["", ""]
]

var quotes_it = [
    ["",""],
    ["",""],
    ["",""],
    ["!","o"],
    ["",""],
]

function newQuote_fr() {
    var randomNumber = Math.floor(Math.random()*(quotes_fr.length));
    document.getElementById('quoteDisplay').innerHTML = quotes_fr[randomNumber][0];
    document.getElementById('citeDisplay').innerHTML = quotes_fr[randomNumber][1];
}

function newQuote_uk() {
    var randomNumber = Math.floor(Math.random()*(quotes_uk.length));
    document.getElementById('quoteDisplay').innerHTML = quotes_uk[randomNumber][0];
    document.getElementById('citeDisplay').innerHTML = quotes_uk[randomNumber][1];
}

function newQuote_it() {
    var randomNumber = Math.floor(Math.random()*(quotes_it.length));
    document.getElementById('quoteDisplay').innerHTML = quotes_it[randomNumber][0];
    document.getElementById('citeDisplay').innerHTML = quotes_it[randomNumber][1];
}