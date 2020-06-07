import express from 'express';

const app = express();

app.use(express.json());

const users = ['Yuri', 'Claudio', 'Erick', 'Diego'];

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.get('/users', (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;

  return response.json(filteredUsers);
});

app.post('/user', (request, response) => {
  const data = request.body;

  console.log(data);

  const user = {
    name: 'Yuri Mello',
    email: 'yuridemeellO@gmail.com'
  };

  return response.json(user);
});

app.listen(8080);
