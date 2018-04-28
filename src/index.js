import axios from 'axios';

const httpClient = axios.create({ baseURL: 'https://whatthefuckjusthappenedtoday.com/api/' });

const getToday = () => httpClient.get('/today.json').then(response => response.data);
const getStatus = () => httpClient.get('/v1/status.json').then(response => response.data);
const getAllDailyPages = () => httpClient.get('/v1/random.json').then(response => response.data);

export {
  getToday,
  getStatus,
  getAllDailyPages,
};
