import axios from '../services/axios'

export const getPokemons = ({ limit = 151 }) => axios.get(`pokemon?limit=${limit}`)
  .then(response => response.data)
  .catch(err => err)