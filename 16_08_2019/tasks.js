//Task 6
const arr1 = [7, 55, 34, 48, 57, 3, 55];
const arr2 = [7, 38, 44, 52, 33, 34];
const arr3 = arr1.filter(item => !arr2.includes(item))
                 .concat(arr2.filter(item => !arr1.includes(item)));
const unique = new Set(arr3);
//console.log(Array.from(unique))

//Task 7 isFalsy()
// '=NaN'
const isFalsy = (arg) => (arg !== arg) ? '=NaN' :
                         (arg === undefined) ? '=undefined' :
                         (arg === null) ? '=null' :
                         (arg === false) ? '=false' :
                         (arg === 0) ? '=0' :
                         (arg === '') ? '=empty string' : 'not falsy type';

//console.log(isFalsy(undefined));

//Task 10 func1(func2(func3(func4(str)))) 'qwe'-> '**EWQ**EWQ'
const str = 'qwe';
const str1 = str.toUpperCase().split('').reverse().join('').padStart(5, '*').repeat(2);
//console.log(str1);
const reverse = str => str.split('').reverse().join('');
const upper = str => str.toUpperCase();
const add = str => str.padEnd(5, '*');
const double = str => str.repeat(2);

//console.log(reverse(double(add(upper(str)))));