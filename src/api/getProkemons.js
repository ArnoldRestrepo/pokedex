import axiosInstance from './config'

export const getProkemons = ({ limit = 151 }) => axiosInstance(`pokemon?limit=${limit}`)