/*
Разминка: методы объектов

Напишем функцию, которая принимает объект и наименование свойства(ключ). Если в объекте есть свойство с таким ключом, функция удаляет это свойство и возвращает true.
В противном случае возвращается false.

1. Проверить, есть ли в объекте это свойство
2. Если есть, то его удаляем и возвращаем true
3. Если нет, то возвращаем false
*/

function removeProperty(obj,checkedKey) {
    if (obj.hasOwnProperty(checkedKey)) {
        delete obj.key;
        return true;
    } return false;
}


function removeProperty1(obj,checkedKey) {
    for (let key in obj) {
        if (key == checkedKey) {
            delete obj.key;
            return true;
        } else return false;
    }
}


console.log(removeProperty({ model: 'Ford Mustang', year: 1969, isMyCar: false, willIeverGetit: undefined }, "model")); //true

console.log(removeProperty({ model: 'Ford Mustang', year: 1969, isMyCar: false, willIeverGetit: undefined }, "year")); //true

console.log(removeProperty({ model: 'Ford Mustang', year: 1969, isMyCar: false, willIeverGetit: undefined }, "isMyCar")); //true

console.log(removeProperty({ model: 'Ford Mustang', year: 1969, isMyCar: false, willIeverGetit: undefined }, "willIeverGetit")); //true

console.log(removeProperty({model: 'Ford Mustang', year: 1969, isMyCar: false, willIeverGetit: undefined}, "maker")); //false