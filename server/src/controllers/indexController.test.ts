/* eslint import/no-extraneous-dependencies: off */

import request from 'supertest';
import app from '../app';

describe('Test IndexController', () => {
  it('Should return status 200 and "Monsters RPG"!', async () => {
    const result = await request(app).get('/').send();

    expect(result.status).toBe(200);
    expect(result.text).toBe('Monsters RPG');
  });

  it('Should return 404"!', async () => {
    const result = await request(app).get('/404').send();

    expect(result.status).toBe(404);
  });
});
