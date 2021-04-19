// 1. Дан массив из двух элементов. Элементы необходимо поменять местами.

const myArray = ['Second', 'First', 'Third'];

// console.log(myArray.reverse());

// let tmp = myArray[0];
// myArray[0] = myArray[1];
// myArray[1] = tmp;

// console.log(myArray);

// [myArray[0], myArray[1]] = [myArray[1], myArray[0]];

// console.log(myArray)

// 2. Необходимо удалить каждый второй элемент в массиве.

// const myAnotherArray = ['Оставить', 'Удалить', 'Оставить', 'Удалить', 'Оставить', 'Удалить', 'Оставить', 'Удалить'];

// const result = myAnotherArray.filter((item, index) => index % 2 === 0);

// console.log(result)

// 3. Удалить повторяющиеся элементы массива.

// const myAnotherAnotherArray = ['Оставить', 'Удалить', 'Оставить', 'Удалить', 'Оставить', 'Удалить', 'Оставить', 'Удалить'];

// const result = new Set(myAnotherAnotherArray);

// console.log(Array.from(result));

// 4. Сделайте из числа массив чисел в обратном порядке.

// const myNumber = 4281645;

// const result = Number(myNumber.toString().split('').reverse().join(''));

// console.log(parseInt('1234hhhhhhh'));
// console.log(Number('1234hhhhhhh'));
// console.log(result);

// 5. На семейном курорте несколько семей отправляются на экскурсию.
// Туроператору необходимо вычислить какое количество семей сможет влезть в автобус.

// const families = [4, 4, 4, 3, 3];
// const busCapacity = 12;

// const familiesSecond = [4, 4, 4, 3, 3];
// const busCapacitySecond = 11;

// const familiesThird = [2, 3, 2, 4, 4, 2, 5];
// const busCapacityThird = 17;

// let result = 0;
// let currentCapacity = 0;

// for (let familyMembers of familiesThird) {
// 	currentCapacity += familyMembers;

// 	if (currentCapacity <= busCapacityThird) {
// 		result += 1;
// 	} else {
// 		break;
// 	}
// }

// console.log(result);

// 6. Посетители пришли в кафе. Необходимо вычислить тех, кому за 60 и вежливо сказать им покинуть заведение
// Никакой дискриминации - просто коронавирус

// const peopleInCoffeeShop = [
// 	{
// 		name: 'Rick',
// 		age: 98,
// 	},
// 	{
// 		name: 'Jonny',
// 		age: 23,
// 	},
// 	{
// 		name: 'Cara',
// 		age: 60,
// 	},
// 	{
// 		name: 'Summer',
// 		age: 35,
// 	},
// 	{
// 		name: 'Alex',
// 		age: 3,
// 	},
// 	{
// 		name: 'Nancy',
// 		age: 51,
// 	},
// 	{
// 		name: 'Bob',
// 		age: 74,
// 	},
// ];

// for (let person of peopleInCoffeeShop) {
// 	if (person.age > 60) {
// 		console.log(`${person.name}, please leave the coffee shop`);
// 	}
// }

// peopleInCoffeeShop.forEach((person) => {
// 	if (person.age > 60) {
// 		console.log(`${person.name}, please leave the coffee shop`);
// 	}
// });

// 7. Найдите самый часто используемый элемент массива.

// const againSomeArray = [7, 'z', 'z', 'z', 3, 7, 7, 7, 'z', 7, 'z', 3, 5, 9, 7];

// function findTheMostAppearedValue (arr) {
// 	const counter = arr.reduce((acc, cur) => {
// 		return {
// 			...acc,
// 			[cur]: acc[cur] ? acc[cur] + 1 : 1
// 		};
// 	}, {});
// 	let result = 0;
// 	let theMostAppearedValue;

// 	Object.entries(counter).forEach(item => {
// 		const [key, value] = item;
// 		console.log(typeof key);

// 		if (result < value) {
// 			result = value;
// 			theMostAppearedValue = key;
// 		}
// 	});

// 	return theMostAppearedValue;
// }

// console.log(findTheMostAppearedValue(againSomeArray));

// 8. Найти первое не последовательное число. (unfinished)

// const myNumbers = [45, 46, 47, 48, 49, 50, 51, 62, 63, 64, 65, 66];
// const myAnotherNumbers = [4, 10];

// function firstNonconsec(arr) {
// 	let arrNonconsec = arr.reduce((acc, currentNumber, index) => {
// 		if (index !== 0 && currentNumber - arr[index - 1] !== 1) {
// 			acc.push(currentNumber);
// 			// return acc ? [...acc, currentNumber] : [currentNumber];
// 		}

// 		return acc;
// 	}, []);

// 	return arrNonconsec[0];
// }

// console.log(firstNonconsec(myNumbers))

// 9. Сократите имена и отчества. (undone)

// const peopleRegistry = [
//   'Павлов Чарльз Романович',
//   'Борисов Семён Вадимович',
//   'Колесник Жерар Леонидович',
//   'Савин Зиновий Григорьевич',
//   'Тарасюк Ждан Виталиевич',
//   'Чумак Захар Григорьевич',
//   'Осипов Елисей Борисович',
// ];