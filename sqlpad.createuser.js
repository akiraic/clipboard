const axios = require('axios');

const apiUrl = 'http://your-sqlpad-url.com/api';

const newUsers = [
  {
    email: 'user1@example.com',
    password: 'password1',
    role: 'viewer',
    name: 'User One'
  },
  {
    email: 'user2@example.com',
    password: 'password2',
    role: 'editor',
    name: 'User Two'
  },
  // Add as many new users as you need to the array
  {
    email: 'user3@example.com',
    password: 'password3',
    role: 'admin',
    name: 'User Three'
  }
];

const apiRequests = newUsers.map(newUser => axios.post(`${apiUrl}/users`, newUser));

axios.all(apiRequests)
  .then(responses => {
    console.log('New users created successfully!');
    console.log(responses.map(response => response.data));
  })
  .catch(error => {
    console.error('Error creating new users:', error);
  });
