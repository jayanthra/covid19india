import axios from 'axios'
const cases = { 
  loadAllCasesIndia() {
    return axios.get('http://localhost:3001/india')
      .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error);
    })
  },

  loadAllCasesWorld() {
    return axios.get('http://localhost:3001/world')
      .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

export default cases