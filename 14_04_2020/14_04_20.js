// 1. Дан массив из двух элементов. Элементы необходимо поменять местами.

// const myArray = ['First', 'Second'];

// function changePlaces(arr) {
//   const [first, second] = arr;
//   return [second, first];
// }

// console.log(changePlaces(myArray));

// 2. Необходимо удалить каждый второй элемент в массиве.

// const myArray = ['Оставить', 'Удалить', 'Оставить', 'Удалить', 'Оставить', 'Удалить', 'Оставить', 'Удалить'];

// function deleteEverySecondElement(arr) {
//   return arr.filter((item, index) => index % 2 === 0);
// }

// console.log(deleteEverySecondElement(myArray));

// 3. Сделайте из числа массив чисел в обратном порядке.

// const myNumber = 4281645;

// function toArrayOfReversedNumbers(num) {
//   return String(num).split('').reverse().map(Number);
// }

// console.log(toArrayOfReversedNumbers(myNumber));

// 4. На семейном куррорте несколько семьи отправляются на экскурсию. 
// Туоропераотру необходимо вычислить какое количество семей сможет влезть в автобус.

// const families = [4, 4, 4, 3, 3];
// const busCapacity = 12;

// const familiesSecond = [4, 4, 4, 3, 3];
// const busCapacitySecond = 11;

// const familiesThird = [2, 3, 4, 5];
// const busCapacityThird = 250;


// function calculateFamiliesCapacity(fams, capacity) {
//   let currentCapacity = capacity;
//   return fams.reduce((acc, familyMembers) => {
//     if (currentCapacity > familyMembers) {
//       currentCapacity -= familyMembers;
//       return acc += 1;
//     }
//     return acc;
//   }, 0);
// }

// console.log(calculateFamiliesCapacity(families, busCapacity));
// console.log(calculateFamiliesCapacity(familiesSecond, busCapacitySecond));
// console.log(calculateFamiliesCapacity(familiesThird, busCapacityThird));

// 5. Дан массив возрастов людей в магазине.
// Необходимо вычислить двух самых старых и сказать им выйти из магазина. 
// Коронавирус детка :)
// should return [age1, age2]

// const agesArray = [2, 10, 3, 34, 24, 53, 14, 72, 43];

// function findTwoOldest(ages) {
//   // const agesClone = [...ages]; чтобы sort не мутировал данные.
//   ages.sort((a, b) => b - a);
//   return ages.slice(0, 2);
// }

// console.log(findTwoOldest(agesArray));

// console.log(agesArray)


// решение к 5 задаче ********************* */

// function arrayMax(arr) {
//   return arr.reduce((acc, element, index) => {
//     if (element > acc.value) {
//       acc.value = element;
//       acc.index = index;
//     }
//     return acc;
//   }, { value: 0, index: null });
// }

// const agesArray = [2, 10, 3, 34, 24, 53, 14, 72, 43];

// function findTwoOldest(ages) {
//   const max1 = arrayMax(ages);
//   ages.splice(max1.index, 1);
//   const max2 = arrayMax(ages);
//   return [max1.value, max2.value];
// }

// console.log(findTwoOldest(agesArray));