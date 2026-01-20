const prompt = require('prompt-sync')();

const showMenu = () => {
  let isRunning = true;

  while (isRunning) {
    console.log('\nMenu:');
    console.log('1. Play Round');
    console.log('2. View Stats');
    console.log('3. Exit');

    const choice = prompt('Choose an action (1-3): ').trim();

    if (choice === '1') {
      console.log('You chose: Play Round');
    } else if (choice === '2') {
      console.log('You chose: View Stats');
    } else if (choice === '3') {
      console.log('Goodbye!');
      isRunning = false;
    } else {
      console.log('Invalid choice. Please enter 1, 2, or 3.');
    }
  }
};

module.exports = { showMenu };
