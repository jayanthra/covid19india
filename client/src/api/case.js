import axios from 'axios'
const cases = { 
  loadAllCasesIndia() {
    return axios.get('/india')
      .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error);
    })
  },

  loadAllCasesWorld() {
    return axios.get('/world')
      .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

export default cases