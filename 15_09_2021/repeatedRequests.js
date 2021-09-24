const url = 'https://codinggym-c10f8-default-rtdb.firebaseio.com/menu.json';
const wrongUrl = 'https://codinggy-c10f8-default-rtdb.firebaseio.com/menu.json';

//  Write a repeatedRequest function, which 

// 1. sends a GET requst to the stated URL

//  2. if the request succeed - logs into the console its' response

//  3. if request failed - sends request 3 more times with 2 sec interval (one by one, not in parallel*)

// 4. if additional requests fail - logs into the console the status of the initial response + ' additional requests also failed'

// 5. if some of the additional requests succeed - logs into the console the first successful response and stops sending following requests

//*  If you want to complicate the task – try to run the requests in parallel, and abort all other requests when the first of them succeeds

// one by one

const repeatedRequest = async (url) => {
  try {
    const initialResponse = await fetch(url);
    if (initialResponse.ok) {
      const jsonRes = await initialResponse.json();
      console.log(jsonRes);
    } else {
      throw new Error('404 not found');
    }
  } catch(error) {
    const successfulResponse = null;

    for (let i = 0; i < 3; i++) {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          resolve(fetch(url));
        }, 2000);
      })
      const response = await promise;
      if (response.ok) {
        successfulResponse = response;
        break;
      }
    }

    if (!successfulResponse) {
      console.log(error.message + ' repeated requests also failed');
    } else {
      const jsonRes = await successfulResponse.json();
      console.log(jsonRes);
    }
  }
};

// repeatedRequest(wrongUrl);