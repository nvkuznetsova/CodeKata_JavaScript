const URL = 'http://numbersapi.com/random/math?json';
const dateURL = 'http://numbersapi.com/random/date?json';
const yearURL = 'http://numbersapi.com/random/year?json';
const urls = [URL, dateURL, URL, yearURL, URL];

const getFactBtn = document.getElementById('get-fact');
const getFactsBtn = document.getElementById('get-few-facts');
const getFactBtnXhr = document.getElementById('get-fact-xhr');
const getFactsBtnXhr = document.getElementById('get-few-facts-xhr');

const factBlock = document.getElementById('fact-block');
const factsBlock = document.getElementById('facts-block');
const factBlockXhr = document.getElementById('fact-xhr');
const factsBlockXhr = document.getElementById('facts-xhr');

const getFact = () => {
  fetch(URL)
    .then(response => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error!');
      }
    })
    .then(data => {
      factBlock.innerText = data.text;
    })
    .catch(console.log);
};

const getFewFacts = () => {
  const requests = urls.map((url) => {
    return fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error!');
      }
    });
  });

  return Promise.all(requests)
  .then((data) => {
    const text = data.reduce((str, item) => {
      return `${str} ${item.text}\n`;
    }, '');
    factsBlock.innerText = text;
  })
}

function getFactXhr(block, url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'json';

  xhr.send();

  xhr.addEventListener('load', function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      const p = document.createElement('p');
      p.innerText = xhr.response.text;
      block.appendChild(p);
    } else {
      block.innerText = 'Error!';
    }
  });

  xhr.addEventListener('error', function() {
    block.innerText = 'Error!!!!';
  });
}

function getFewFactsXhr(block) {
  urls.forEach(url => {
    getFactXhr(block, url);
  })
}

getFactBtn.addEventListener('click', getFact);
getFactsBtn.addEventListener('click', getFewFacts);
getFactBtnXhr.addEventListener('click', () => getFactXhr(factBlockXhr, URL));
getFactsBtnXhr.addEventListener('click', () => getFewFactsXhr(factsBlockXhr));
