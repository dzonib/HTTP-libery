const http = new HTTP();

http.get('https://jsonplaceholder.typicode.com/users')
  .then(resData => {
    console.log(resData);
  });
