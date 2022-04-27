//let backendAddress = 'http://localhost:4002'
let backendAddress = 'https://nganph5-imagequiz-backend.herokuapp.com'

let APIAccess = {
  addCustomer: (name, email, password) => {
    return fetch(`${backendAddress}/register`, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    })
    .then(x => x.json())
    .then(x => {
      return x;
    })
  },

  login: (email, password) => {
    return fetch(`${backendAddress}/login`, {
      method: 'Post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Include-Credentials': true
      },
      body: JSON.stringify({email, password})
    })
    .then(x => x.json())
    .then(x => {
      return x;
    })
  },

  getFlowers: () => {
    return fetch(`${backendAddress}/flowers`, {
      method: 'Get',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Include-Credentials': true
      }
    })
    .then(x => x.json())
    .then(x => {
      return x;
    })
  },

  getQuizz: (name) => {
    return fetch(`${backendAddress}/quiz/${name}`, {
      method: 'Get',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Include-Credentials': true
      }
    })
    .then(x => x.json())
    .then(x => {
      console.log(x);
      return x;
    })
  },

  addScore: (quizTaker, quizName, score) => {
    return fetch(`${backendAddress}/score`, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({quizTaker, quizName, score})
    })
    .then(x => x.json())
    .then(x => {
      return x;
    })
  },
}
export default APIAccess;