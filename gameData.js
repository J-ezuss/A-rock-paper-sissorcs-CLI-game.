const gameStats = {
  wins: 0,
  losses: 0,
  ties: 0,
};

const viewStats = () => {
  console.log('\n📊 Current Statistics:');
  console.log(`Games Won: ${gameStats.wins}`);
  console.log(`Games Lost: ${gameStats.losses}`);
  console.log(`Games Tied: ${gameStats.ties}`);

  const totalGames = gameStats.wins + gameStats.losses + gameStats.ties;

  console.log(`Total Games: ${totalGames}`);

  if (totalGames > 0) {
    const winRate = Math.round((gameStats.wins / totalGames) * 100);
    console.log(`Win Rate: ${winRate}%`);
  } else {
    console.log('Win Rate: 0%');
  }
};

module.exports = { gameStats, viewStats };
