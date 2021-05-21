/* 
function countDownFrom(num) {
    if (num === 0) return;
    console.log(num)
    countDownFrom(num - 1);
}
Факториал натурального число - это число, умноженное на "себя минут один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n! 

3. Факториал можно брать только у натуральных чисел (т.е. целых)

0. У отрицательных чисел - не считается (вывести -1)
1. Крайний случай: факториал 0 равен 1
2. Крайний случай: факториал 1 равен 1

Порядок действий:
1. Проверяем, больше/равно 0 или 1, сразу возвращаем 1
2. Вычисление: наш параметр умножить на функцию с нашим параметром - 1
*/

function factorialize(num) {
    if (num % 1 != 0) return -1;
    
    else if (num < 0) return -1;
    else if (num === 0) return 1;
    else if (num === 1) return 1;

    else {
        return (num * factorialize(num - 1));
    }
}

console.log(factorialize(1)) //1
console.log(factorialize(2)) //2
console.log(factorialize(3)) //6
console.log(factorialize(4)) //24
console.log(factorialize(5)) //120
console.log(factorialize(5.77)) //120