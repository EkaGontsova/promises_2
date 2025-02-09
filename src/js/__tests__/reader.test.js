import read from '../reader.js';

describe('Testing read function', () => {
  test('read should return an ArrayBuffer', async () => {
    const result = await read();
    expect(result).toBeInstanceOf(ArrayBuffer);
  });
});