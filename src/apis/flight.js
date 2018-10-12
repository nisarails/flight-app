import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const searchFlights = async (action) => {
  const params = {flight_type: action.filter}
  const response = await api.get('/flight_informations/', {params});
  return response;
}
