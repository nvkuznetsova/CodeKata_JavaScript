// (2 способа решения)
// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub,
// запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет,
// то функция должна возвращать null в массиве результатов.

const api = 'https://api.github.com/users/';
const names = ['eroslyakov', 'perioad', 'rylkovalex', 'dfjdhfjkdg'];

// fetch
async function getUsers(arr) {
    let promises = arr.map(username => fetch(`${api}${username}`)
        .then(
            resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    return null;
                }
            },
            rejResp => null
        )
  );
  const result = await Promise.all(promises);
  console.log(result)
}

// getUsers(names);

// xhr
function getUsers2(arr) {
    const results = [];
    arr.forEach(username => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${api}${username}`);
    
    xhr.onload = () => {
        results.push(xhr.status > 200 ? null : xhr.response);
        if (results.length === arr.length) {
            results.forEach(res => console.log(res))
        }
    }
    
    xhr.onerror = () => {
        throw new Error('network error!');
    }
    
    xhr.send();
  })
}

// getUsers2(names)
