// const url = 'http://127.0.0.1:8080';

// fetch(url + '/names').then(async (response) => {
//   const result = await response.json();
//   console.log(result);
// });

// const newMember = { name: 'Ariel' };

// fetch(url + '/names', { method: 'PUT', body: JSON.stringify(newMember) })
//   .then((res) => res.json())
//   .then((body) => console.log(body));

// const deleteUrl = 'http://127.0.0.1:8080/names';

// // function deleteName(req, res) {
// //   const name = req.params.name;
// //   if (names.includes(name)) {
// //     names.splice(names.indexOf(name), 1);
// //     res.json({ message: `${name} is deleted!`, dbState: names });
// //   } else {
// //     res.json({ message: `${name} doesn't exist!` });
// //   }
// // }

// fetch(deleteUrl + '/Ariel', { method: 'DELETE' }).then((res) => {
//   res.json().then((body) => console.log(body));
// });

// fetch(deleteUrl + '/Areil', { method: 'DELETE' })
//   .then((res) => {
//     res.json().then((body) => console.log(body));
//   })
//   .catch((res) => res.json())
//   .then((err) => console.log('ERROR:', err));

const url = 'https://api.github.com/users/';

const names = ['bjnslv', 'mansuedei', 'obozhe', 'perioad', 'ljasDNJdasklD'];

function getUsers(names) {
  const queries = [];
  names.forEach((name) => {
    const query = fetch(url + name).then((resp) => resp.json());
    queries.push(query);
  });

  Promise.all(queries).then((result) => {
    console.log(result);
  });
}
// getUsers(names);

function getUsers2(names) {
  const responses = [];
  names.forEach((name) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url + name);

    xhr.onload = () => {
      const response = xhr.status > 201 ? null : JSON.parse(xhr.response);
      responses.push(response);

      if (responses.length === names.length) {
        console.log(responses);
      }

    };

    xhr.send();
  });
}
// getUsers2(names);
