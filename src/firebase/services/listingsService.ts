
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com'
});

export const getListings = async () => {
  const { data } = await api.get('/listings');
  return data;
};
