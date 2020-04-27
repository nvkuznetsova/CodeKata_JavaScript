/* 
Учимся разбивать задачу на подзадачи:

Напишем функцию, которая возвращает boolean - является ли переданное в неё строка палиндромом, или нет.

Палиндром - это слово или фраза, которые одинаково читаются слева направо и справа налево.

Условия:
1. Учитывать слова с нечетным числом букв
2. Приводить к lower case +
3. Удалить пробелы из строки (боковых и внутренних) -
4. Удалить знаки препинания -

Как делать (варианты):
1. Преобразовать к массиву (ArrayFrom), развернуть, проверить - через reverse
2. Делить строку на 2 половины - через длину строки, или преобразование к массиву
3. Проверить вхождение слева направо и справа налево (indexOf?)

4. Попробовать вместо regExp split
*/

function clean(str) {
    return str.toLowerCase().replace(/\s+/g, "");
}


function isPalindrome(str) {
    const newStr = clean(str);
    const reversed = newStr.split("").reverse().join("");

    return newStr == reversed;
}


//Обязательные тест кейсы
console.log(isPalindrome("nope")) //false
console.log(isPalindrome("madam")) //true
console.log(isPalindrome("AlmostsoMla")) //true

//Дополнительные тест кейсы (с усложнением)
console.log(isPalindrome("race car")) //true
console.log(isPalindrome("not a palindrome")) //false

//Go extra mile тест кейсы :)
console.log(isPalindrome("A man, a plan, a canal. Panama")) //true
console.log(isPalindrome("never odd or even")) //true
console.log(isPalindrome("My age is 0, 0 si ega ym.")) //true
console.log(isPalindrome("1 eye for of 1 eye.")) //false