import GameSavingLoader from '../gameSavingLoader.js';
import read from '../reader.js';

jest.mock('../reader.js', () => ({
    __esModule: true,
    default: jest.fn(() => {
        return new Promise((resolve) => {
            const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
            const buffer = new ArrayBuffer(data.length * 2);
            const bufferView = new Uint16Array(buffer);
            for (let i = 0; i < data.length; i++) {
                bufferView[i] = data.charCodeAt(i);
            }
            resolve(buffer); 
        });
    }),
}));

describe('Testing GameSavingLoader', () => {
    test('GameSavingLoader.load should return a valid GameSaving object', async () => {
        const result = await GameSavingLoader.load();
        expect(result).toEqual({
            id: 9,
            created: 1546300800,
            userInfo: {
                id: 1,
                name: "Hitman",
                level: 10,
                points: 2000,
            },
        });
    });
});

test('should handle errors correctly', async () => {
  read.mockImplementationOnce(() => Promise.reject(new Error('File not found')));

  await expect(GameSavingLoader.load()).rejects.toThrow('File not found');
});