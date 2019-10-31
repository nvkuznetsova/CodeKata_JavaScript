// XHR https://kodaktor.ru/j/ips
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://kodaktor.ru/j/ips', true);
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(xhr.response);
  } else {
    console.log(`Error: ${xhr.status}. ${xhr.statusText}`);
  }
}

xhr.onerror = () => {
  console.log(`Error: ${xhr.status}. Not HTTP error`);
}
xhr.send();

// FETCH
const fetchData = fetch('https://kodaktor.ru/j/ipsfgd');
fetchData.then(res => {
  if(res.ok) {
    return res.json();
  } else {
    throw new Error(`Error: ${res.status}`);
  }
})
.then(res => console.log(res),
      err => err.message,
     )
.then(res => console.log(`${res} Error!!!`))
.catch(err => err.message);