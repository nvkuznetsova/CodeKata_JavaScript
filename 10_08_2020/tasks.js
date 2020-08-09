const URL = 'http://numbersapi.com/random/math?json'

const getFact = document.querySelector('#get-fact');
const getFewFacts = document.querySelector('#get-few-facts');
const getFactXhr = document.querySelector('#get-fact-xhr');
const getFewFactsXhr = document.querySelector('#get-few-facts-xhr');

const fetchFact = () => {}

const fetchFewFacts = () => {}

const getFactXHR = () => {}

const geFewtFactsXHR = () => {}

getFact.addEventListener('click', fetchFact);
getFewFacts.addEventListener('click', fetchFewFacts);
getFactXhr.addEventListener('click', getFactXHR);
getFewFactsXhr.addEventListener('click', geFewtFactsXHR);


// Homework 
// work with https://swapi.dev/