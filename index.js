function validateLineup(lineup) {
  const totalSalaries = lineup.reduce((agg, element) => {
    return element.salary + agg
  }, 0)
  const OFPosition = lineup.reduce(function (agg, element) {
    return agg + (element.position === 'OF')
  }, 0)
  // lineup.positions must include ['C', 'P', 'SS', '1B', '2B', '3B']
  const gameDuplicates = (lineup) => lineup.reduce((countWords, word) => {
    countWords[word.gameId] = ++countWords[word.gameId] || 1

    return countWords
  }, [])
  const games = gameDuplicates(lineup).reduce(function (a, b) {
    return Math.max(a, b)
  })
  const teamDuplicates = (lineup) => lineup.reduce((countWords, word) => {
    countWords[word.teamId] = ++countWords[word.teamId] || 1

    return countWords
  }, [])
  const teams = teamDuplicates(lineup).reduce(function (a, b) {
    return Math.max(a, b)
  })

  return totalSalaries <= 45000 && OFPosition === 3 && games <= 3 && teams <= 2
}









module.exports = validateLineup
