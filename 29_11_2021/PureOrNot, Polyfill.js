//EXERCISE 1, pure or impure
const getDate = () => new Date().toDateString();
//Not pure, Date is part of the outside world, not an argument. I can call it multiple times on different days and get different answers

const getWorkshopDate = () => new Date(2021, 6, 7).toDateString();
// pure, is is deterministic, we will always get the same result

////////////////

const getRandomInt = () => Math.random();
//impure

const square = (num) => Math.pow(num, 2);
//pure

////////////////////

const user = { name: 'Ivan', position: 'Student' };

const changePosition = (obj, position) => {
    obj.position = position;
    return obj;
};
//impure

console.log(changePosition(user, 'Developer'))

////////////////

const toHex = (n) => {
    let hex = n.toString(16);
    return hex.padStart(2, "0");
};
//pure, function which depends only on it input argument

const rgbToHex = (R, G, B) => {
    return `#${[toHex(R), toHex(G), toHex(B)].join("")}`;
};
//pure, function which depends only on it input argument

const setColor = (R, G, B) => {
    const hex = rgbToHex(R, G, B);
    const colorMe = document.getElementById("color-me");
    colorMe.setAttribute("style", "color: " + hex);
};
//impure, not returning anything, accessing the DOM - interacting with the outer world

////////////////

const filename = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";

const readJsonFile = async (filename) => {
    const request = await fetch(filename);
    return await request.json();
};
//impure, fetching the data from the outside url - something is coming from the outside world into the function.
//also, if the data inside that url changes, we will no longer get the same results with the same input

//are all async interactions in JS impure? No, because the operation we are doing asynchronously might not be impure

const writeJsonString = (object) => {
    return JSON.stringify(object);
};
//pure, the function is just taking in an object & outputting a string based on its input object
// tricky bit: in JS objects & arrays are mutable by default, so we can actually change our input even if it is in const
// therefore, we can get different results wit this function even if we are calling it on the "same" object

////////////////
// EXERCISE 2
////////////////CURRY

const sum = (a, b, c) => a + b + c;

const curry = (a) => (b) => (c) => a + b + c

function curry1(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

console.log(sum(2, 3, 4));
console.log(curry(1)(2)(3));

////////////////// Even / Odd

const isEven = (n) => n % 2 === 0

const isOdd = (n) => n % 2

//////////////// Filter polyfill
const arr = [1, 4, 2, 6, 8, 5, 3];

const filter = (array, func) => {
    let result = []
    array.forEach(item => {
        if (func(item)) {
            result.push(item)
        }
    });
    return result
}

console.log(filter(arr, isEven));

/////////////// Map polyfill
const arr1 = [1, 4, 2, 6, 8, 5, 3];

const mapCustom = (array, func) => {
    let result = JSON.parse(JSON.stringify(array))
    for (let i = 0; i < result.length; i++) {
        result[i] = func(result[i])
    }
    return result
}

console.log(mapCustom(arr1, item => item * 2));

/////////// Reduce polyfill to homework
