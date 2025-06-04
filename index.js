require('dotenv').config()

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

// process.env.TECHGLOBAL_URL = 'techglobal'
// const url = process.env.TECHGLOBAL_URL 

// console.log(process.env.TECHGLOBAL_URL)

// process.env.API_ENDPOINT = 'https://api.techglobal-training.com/students'

console.log(process.env.API_ENDPOINT + ' TechGlobal API Endpoint')

