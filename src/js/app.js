import GameSavingLoader from './gameSavingLoader.js';

(async () => {
  try {
    const saving = await GameSavingLoader.load(); 
    console.log('Game saving loaded successfully:', saving);
  } catch (error) {
    console.error('Error:', error.message); 
  }
})();