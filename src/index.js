import axios from 'axios';

const wtfjhtClient = axios.create({ baseURL: 'https://whatthefuckjusthappenedtoday.com/api/' });

const whatTheFuckJustHappenedToday = () => wtfjhtClient.get('/today.json').then(response => response.data);
const getStatus = () => wtfjhtClient.get('/v1/status.json').then(response => response.data);
const getAllDailyPages = () => wtfjhtClient.get('/v1/random.json').then(response => response.data);

export {
  whatTheFuckJustHappenedToday,
  getStatus,
  getAllDailyPages,
};
