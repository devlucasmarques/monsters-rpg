import conn from "./db-mongo";

describe('Testing connection', () => {
  it('Should returns true', async () => {
    const status = await conn.connect();

    expect(status).toBe(true);
  });
});
