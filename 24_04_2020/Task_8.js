/*
Дополнительное задание для самостоятельного изучения
(подробное описание решения: https://youtu.be/k7-N8R0-KY4)

Напишите функцию, которая:
//1. принимает в себя "плоский" объект с описанием классов и подклассов животных
2. возвращает древо вложенных объектов, показывающее классификацию этих животных
*/

let categories = [
{id: 'animals', 'parent':null},
{ id: 'mammals', 'parent': 'animals' },
{ id: 'cats', 'parent': 'mammals' },
{ id: 'dogs', 'parent': 'mammals' },
{ id: 'chihuahua', 'parent': 'dogs' },
{ id: 'labrador', 'parent': 'dogs' },
{ id: 'persian', 'parent': 'cats' },
{ id: 'siamese', 'parent': 'cats' },
]
 
function makeTree(categories, parent) {
    
}

console.log(
    JSON.stringify(
        makeTree(categories, null), null, 2))

/* console.log(
    JSON.stringify(
        makeTree(categories, null), null, 2)) должно вывести в консоль:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua,
                labrador
            }
            cats: {
                persian,
                siamese
            }
        }
    }
}
*/