
const url = 'http://127.0.0.1:8080/names/Vanya';
// const url = 'https://swapi.dev/api/'
{


    // var xhr = new XMLHttpRequest()

    // event listenres

    // xhr.addEventListener('loadstart', function(){
    //     console.log('load started');
    // })
    // xhr.open('get', url)
    // xhr.send()
    // xhr.addEventListener('error', function(){
    //     console.log('ERROR');
    //     alert('error')
    // })
    // xhr.addEventListener('loadend', function(){
    //     console.log(JSON.parse(xhr.responseText));
    // })

    // xhr.onerror = function () {
    //     console.log('ERROR');
    //     alert('error')
    // }
    // xhr.onloadend = function () {
    //     console.log(JSON.parse(xhr.responseText));
    // }
    // xhr.onloadstart = function () {
    //     console.log('load started');
    // }
    // xhr.send()
    // console.log(JSON.parse(xhr.responseText));

    // xhr2=new XMLHttpRequest()
    // xhr2.open('put', url)
    // var body='Piter'
    // var jsonBody=JSON.stringify(body)
    // xhr2.send("jsonBody")

    // xhr.send()

}
let swapiData
fetch(url, {
    method:"get"
})
    .then(response=>{
        if(response.ok){
            response.json().then(result=>{console.log(result); swapiData=result})
        } else {
            throw new Error("status is not 200")
        }
    }).catch(er=>{
        console.log('ERROR', er);
    })


// const getdata = async ()=>{ let response = await fetch(url); response= await response.json(); return response}
// // const swapidata= getdata(url)
// // const response=await swapidata.json()
// // console.log(response)
// console.log(
//     getdata()
// );

