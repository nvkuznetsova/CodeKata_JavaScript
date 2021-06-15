//EXERCISE 1, pure or not pure

const getDate = () => new Date().toDateString();
//Not pure, Date is part of the outside world, not an argument. I can call it multiple times on different days and get different answers

const getWorkshopDate = () => new Date(2021, 6, 7).toDateString();
// pure, is is deterministic, we will always get the same result

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
  return JSON.stringify(object, null, 2);
};
//pure, the function is just taking in an object & outputting a string based on its input object
// tricky bit: in JS objects & arrays are mutable by default, so we can actually change our input even if it is in const
// therefore, we can get different results wit this function even if we are calling it on the "same" object

////////////////

const exclusiveOr = (A, B) => {
  return (A || B) && !(A && B);
};
//pure

////////////////

const computeTruthTable = (operator) => {
  const truthValues = [true, false];
  const table = [];

  for (const A of truthValues) {
    for (const B of truthValues) {
      const value = operator(A, B);
      table.push({ A, B, value });
    }
  }
  return table;
};
//pure, taking in an operator, and our result depends only on it
// but there is a non-functional bit here: we're mutating table, and also we are very imperative

const showTruthTable = (operator) => {
  console.table(computeTruthTable(operator));
};
//impure, console.log, no return
