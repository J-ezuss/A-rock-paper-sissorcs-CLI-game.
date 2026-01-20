const { showMenu } = require('./menu');

const startApp = () => {
  console.clear();
  console.log('🎮 Welcome to Rock–Paper–Scissors!');
  showMenu();
  console.log('\nThanks for playing!');
};

startApp();
