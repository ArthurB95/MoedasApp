import axios from 'axios'

//http://economia.awesomeapi.com.br/json/last/USD-BRL

const api = axios.create({
  baseURL: 'http://economia.awesomeapi.com.br/json/'
})

export default api;