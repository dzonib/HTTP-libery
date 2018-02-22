const http = new HTTP();
const data = {
  username: 'dzonib',
  email: 'batman@gmail.com',
  adress: {
    city: 'Gotham',
    street: 'Bat Cave 1'
  }
};

// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(resData => {
//     console.log(resData);
//   });

// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(resData => console.log(resData))
//   .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/1', data)
//   .then(resData => console.log(resData))
//   .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/1', data)
//   .then(console.log('Item deleted'))
//   .catch(err => console.log(err));