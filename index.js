function validateLineup(lineup) {
  const totalSalaries = lineup.reduce((agg, element) => {
    return element.salary + agg
  }, 0)
  const OFPosition = lineup.reduce(function (agg, element) {
    return agg + (element.position === 'OF')
  }, 0)
  const numberOfPlayers = lineup.reduce(function (agg, element) {
    return agg + (element.position !== 'OF')
  }, 0)
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
  const positionDuplicates = (lineup) => lineup.reduce((countWords, word) => {
    countWords[word.position] = ++countWords[word.position] || 1

    return countWords
  }, [])
  const oneOfEachPosition = Object.keys(positionDuplicates(lineup))

  return totalSalaries <= 45000 && OFPosition === 3 && games <= 3 && teams <= 2 &&
oneOfEachPosition.includes('P' && '3B' && '1B' && 'SS' && '2B' && 'C') && numberOfPlayers === 6
}











module.exports = validateLineup
