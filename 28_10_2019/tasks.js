// What`s the output?
const firstPromise = new Promise(function(resolve, reject) {
  return resolve("first");
 });
 
 const secondPromise = new Promise(function(resolve) {
  resolve("second"); 
 });
 
 firstPromise.then(function(res) {
  console.log(res);
  return secondPromise; 
 }).then(function(result) {
  console.log(result);
 });
 
 // What`s the output?
 var a = 5;
 setTimeout(function timeout() {
     console.log(a); 
     a = 10;
 }, 0);
 var p = new Promise(function(resolve, reject) {
     console.log(a); 
     a = 25;
     resolve();
 });
 p.then(function(){ 
   // some code 
 });
 console.log(a);
 
 // learnjs delay
 function delay (ms) {
   return new Promise((resolve, reject) => {
     setTimeout(() => resolve(), ms);
   });
 }
 
 delay(3000).then(() => { console.log('Hello') });
 
 // How this code works?
 const util = require('util');
 const EventEmitter = require('events').EventEmitter;
 
 class CrazyEmitter extends EventEmitter {
     constructor() {
         super();
         setInterval(() => {
             this.emit(Math.random() > 0.5 ? 'resolve' : 'reject');
         }, 1000);
     }
 }
 
 class Watcher {
     firstEvent(emitter) {
         return new Promise((resolve, reject) => {
             const onResolve = () => {
                 console.log('resolve');
                 emitter.removeListener('reject', onReject);
                 resolve();
             }; 
 
             const onReject = () => {
                 console.log('reject');
                 emitter.removeListener('resolve', onResolve);
                 reject();
             };
 
             emitter.once('resolve', onResolve);
             emitter.once('reject', onReject);
         });
     }
 }
 
 const watcher = new Watcher();
 const emitter = new CrazyEmitter();
 
 function runNext() {
     watcher.firstEvent(emitter).then(runNext).catch(runNext);
 }
 
 runNext();
 