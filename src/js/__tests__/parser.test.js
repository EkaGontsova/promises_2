import json from '../parser.js';

describe('Testing json function', () => {
  test('json should convert ArrayBuffer to string', async () => {
    const str = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    
    const buffer = new Uint16Array([...str].map(char => char.charCodeAt(0))).buffer;

    const result = await json(buffer);
    expect(result).toBe(str); 
  });
});