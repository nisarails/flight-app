import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const searchFlights = async () => {
  const response = await api.get('/flight_informations/');
  return response;
}
