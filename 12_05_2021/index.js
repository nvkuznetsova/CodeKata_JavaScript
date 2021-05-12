const ACCESS_KEY = ''
const CURRENCY_URL = 'http://api.exchangeratesapi.io/v1/'
const URL = `${CURRENCY_URL}latest?access_key=${ACCESS_KEY}`;

// XHR 
// var req=new XMLHttpRequest();

// req.open('GET', URL);
// req.onload=function(){
//     if(req.status===200){
//         console.log(JSON.parse(req.response))
//     } else {
//         console.log('error')
//     }
// }
// req.onloadstart=function(){
//     console.log('Spinner Start')
// }
// req.onloadend=function(){
//     console.log('SpinnerStop');
// }
// req.send()

//fetch 1
// const req = async () => {
//     const resp = await fetch(URL)
//     const result = await resp.json()
//     return result
// }
// req().then(console.log);

//fetch 2
// (()=>{
//     console.log('Spinner Start');
//     fetch(URL)
//         .then(resp=>resp.json())
//         .then(console.log)
//         .catch(console.error)
//         .finally(()=>console.log('Spinner Stop'));
// })()
