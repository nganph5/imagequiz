import congifuration from '../configuration';

let backendAddress = congifuration.backendAddress

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

  authGoogle: () => {
    return fetch(`${backendAddress}/auth/google`, {
      method: 'Get'
      // ,credentials: 'include',
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Include-Credentials': true
      // }
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

  logout: () => {
    return fetch(`${backendAddress}/logout`, {
      method: 'Post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Include-Credentials': true
      },
      body: JSON.stringify({})
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
      return x.result;
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

  isLoggedIn: () => {
    console.log(`${backendAddress}/loggedin`)
    return fetch(`${backendAddress}/loggedin`, {
        method: 'Get',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials": true
        }
     })
    .then(x => x.json())
    .then(x => {
        console.log(x);
        return x;
    });
  }
}
export default APIAccess;