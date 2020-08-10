const URL = 'http://numbersapi.com/random/math?json';

const getFact = document.querySelector('#get-fact');
const getFewFacts = document.querySelector('#get-few-facts');
const getFactXhr = document.querySelector('#get-fact-xhr');
const getFewFactsXhr = document.querySelector('#get-few-facts-xhr');
const getFactBlock = document.querySelector('#get-fact-block');
const getFactsBlockXhr = document.querySelector('#get-facts-block-xhr');

const fetchFact = () => {
  return fetch(URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error('Error!');
      }
    })
    .then((res) => {
      console.log(res);
      const p = document.createElement('p');
      p.innerText = res.text;
      getFactBlock.appendChild(p);
    })
    .catch(console.log);
}

const fetchFewFacts = () => {
  const requests = Array(5).fill(null).map(() => fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error('Error!');
    }
  }));
  return Promise.all(requests).then(console.log);
}

const getFactXHR = () => { 
  const xhr = new XMLHttpRequest();
  xhr.open('GET', URL, true);
  xhr.responseType = 'json';

  xhr.send();

  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.response);
    } else {
      console.log('Error!');
    }
  }

  xhr.onerror = function() {
    console.log('Error!');
  }
}

const geFewtFactsXHR = () => {
  const arr = [null, null, null, null, null];
  const results = [];
  for (var i = 0; i < arr.length; i++) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL, true);
    xhr.responseType = 'json';
  
    xhr.send();
  
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        const p = document.createElement('p');
        p.innerText = xhr.response.text;
        getFactsBlockXhr.appendChild(p);
        results.push(xhr.response);

        if (results.length === arr.length) {
          console.log(results);
        }
      } else {
        console.log('Error!');
      }
    }
  
    xhr.onerror = function() {
      console.log('Error!');
    }
  }
 }

getFact.addEventListener('click', fetchFact);
getFewFacts.addEventListener('click', fetchFewFacts);
getFactXhr.addEventListener('click', getFactXHR);
getFewFactsXhr.addEventListener('click', geFewtFactsXHR);


// Homework 
// 1 work with https://swapi.dev/
// 2 rewrite fetch requests with async/await syntax