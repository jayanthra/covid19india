import axios from 'axios'
const cases = { 

loadAllCases() {
  return axios.get('http://localhost:3001/all')
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

export default cases