/*
Разминка: циклы

Напишем функцию, которая принимает массив чисел и возвращает массив из двух вложенных массивов - из четных и нечетных чисел соответственно.

1. Создать 2 массива для четных и нечетных
2. Проводить проверку
3. Добавлять в нужный массив
*/

function oddEven(arr) {
    const odd = [];
    const even = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else odd.push(arr[i])
    }
    return [odd,even]
}


console.log(oddEven([1,2])); //[[1],[2]]
console.log(oddEven([1,2,3])); //[[1,3],[2]]
console.log(oddEven([3,2,1])); //[[3,1],[2]]
console.log(oddEven([10,20,30]));//[[],[10,20,30]]
console.log(oddEven([11,21,31]));//[[11,21,31],[]]
console.log(oddEven([8,1,5,4,6,1,1]));//[[1,5,1,1],[8,4,6]]