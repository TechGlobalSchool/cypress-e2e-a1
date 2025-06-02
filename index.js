

function getNextWeekDate() {
  const today = new Date()
  const nextWeek = new Date(today)

  nextWeek.setDate(today.getDate() + 7)

  return nextWeek.toISOString().split('T')[0]
}

console.log(getNextWeekDate())

// YYYY-MM-DD
// October 02, 2025
// DD/MM/YYYY


date-fns