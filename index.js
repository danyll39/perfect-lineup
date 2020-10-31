function validateLineup(lineup) {
  console.log(lineup)
  const totalSalaries = lineup.reduce((agg, element) => {
    return element.salary + agg
  }, 0)

  const OFPosition = lineup.reduce(function (agg, element) {
    return agg + (element.position === 'OF')
  }, 0)
  // lineup.positions must include ['C', 'P', 'SS', '1B', '2B', '3B']


  // lineup.teamId   <= 2 from each


  // lineup. gameId  <= 3 from each




  return totalSalaries <= 45000 && OFPosition === 3
}








module.exports = validateLineup
