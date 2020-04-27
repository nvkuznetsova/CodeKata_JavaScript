/* 
Учимся решать задачу различными способами:

Напишем функцию, которая принимает в себя массив с данными о победителях Лиги Чемпионов в разные года, и название команды, а возвращает - количество побед этой команды. 

Если данная команда ни разу не выигрывала Чемпионат, должен вернуться 0. 

1. Нужно найти название страны в этом массиве (варианты: через цикл; сделать объект с ключом-страной и значением - количеством выигрышей; )
2. Если нашли, то посчитать, сколько раз она выигрывала
3. Если не выигрывала, то вернуть 0

Как решить эту задачу циклом?
1. Создать переменную для записи количества выигрышей = 0;
2. Запускаем цикл forOf по всей длине массива
3. На каждой итерации проверяем поле
4. Делаем return после выхода из цикла
*/

const winnerList = [
   { season: '1999-00', team: 'Real Madrid', country: 'Spain'},
   { season: '2000-01', team: 'Bayern Munich', country: 'Germany'},
   { season: '2001-02', team: 'Real Madrid', country: 'Spain'},
   { season: '2002-03', team: 'Milan', country: 'Italy'},
   { season: '2003-04', team: 'Porto', country: 'Portugal'},
]

function countWins(winnerList, country) {
    let winCounter = 0;

    for (let i = 0; i < winnerList.length; i++) {
        
        if (winnerList[i].country === country) {
            winCounter = winCounter + 1;
        }
    }
    return winCounter;
}

console.log(countWins(winnerList, 'Spain')) //2 
console.log(countWins(winnerList, 'Portugal')) //1
console.log(countWins(winnerList, 'Sportland')) //0  