// TASK 1
// Write function findAverage which calculates average of numbers in given list.
// console.log(findAverage([8, 10, 15])) // should return 11

function findAverage(arr) {
    let rez = 0;
    arr.forEach(item => {
        rez += item;
    });

    return rez/arr.length;
}

console.log(findAverage([8, 10, 15]))

// TASK 2
// Your task is to count the cats hidden in the backyard (presented by two-dimensional Array).
// Cats hide well, but their ears ("^^") are clearly visible.
// Your task is to implement the countCats(backyard) function that will count cats. Good luck!
//
// Number of cats found should be number. If no cats found, function should return 0.


// function countCats(arr) {
//   let newArr = arr.reduce((a, b) => a.concat(b))
//   return newArr.filter(item => item == '^^').length

// }

function countCats(arr) {
    return arr.reduce((allCats,item)=> {
            return allCats+item.reduce((cats,item)=> item ==='^^'? cats+=1:cats,0)
        },0
    )
}

console.log(countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]))

// TASK 3
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
// Examples:
// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" // name not given
// hello ''       => "Hello, World!" // name is an empty string

function hello(arg) {
    // Ruslan
    let name;
    if (arg && arg.trim()) {
        name = arg.toLowerCase().trim();
        name = [name[0].toUpperCase(), name.slice(1)].join('');
    }

    return `Hello, ${name || 'World'}!`
}

console.log(hello(' BOss '));

// TASK 4
// Given a long number, return all the possible sum of two digits of it.
//
// For example, 12345: all possible sum of two digits from that number are:
// [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
//
// Therefore the result must be:
// [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

function digits(arr){
    let newArr = arr.toString().split('')
    let result = []
    for(let i = 0; i < newArr.length - 1; i++){
        for(let x = i + 1; x < newArr.length; x++){
            result.push(Number(newArr[i]) + Number(newArr[x]))
        }
    }
    return result
}

console.log(digits(12345)) // should return array of [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

// TASK 5
// Implement a function named generateRange(min, max, step),
// which takes three arguments and generates a range of integers
// from min to max, with the step.
// The first integer is the minimum value,
// the second is the maximum of the range and the third is the step. (min < max)
//
// console.log(generateRange(2, 10, 2)) // should return array of [2, 4, 6, 8, 10]
// console.log(generateRange(1, 10, 3)) // should return array of [1, 4, 7, 10]
