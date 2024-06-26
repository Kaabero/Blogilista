require('dotenv').config()
/* eslint-disable no-undef */
const PORT = process.env.PORT || 3003
const SECRET = process.env.SECRET

const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT,
  SECRET
}