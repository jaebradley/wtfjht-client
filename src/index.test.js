import {
  whatTheFuckJustHappenedToday,
  getStatus,
  getAllDailyPages,
} from './';

describe('client', () => {
  describe('whatTheFuckJustHappenedToday', () => {
    it('get successful response', async () => {
      const response = await whatTheFuckJustHappenedToday();
      expect(response).toBeDefined();
    });
  });
  describe('getStatus', () => {
    it('get successful response', async () => {
      const response = await getStatus();
      expect(response).toBeDefined();
    });
  });
  describe('getAllDailyPages', () => {
    it('get successful response', async () => {
      const response = await getAllDailyPages();
      expect(response).toBeDefined();
    });
  });
});
