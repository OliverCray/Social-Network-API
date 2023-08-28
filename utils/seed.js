const connection = require('../config/connection')
const { User, Thought } = require('../models')
const {
  getRandomUsername,
  getRandomThoughts,
  getRandomFriends,
} = require('./data')

connection.on('error', (err) => err)

connection.once('open', async () => {
  console.log('connected')

  let thoughtCheck = await connection.db
    .listCollections({ name: 'thoughts' })
    .toArray()
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts')
  }

  let userCheck = await connection.db
    .listCollections({ name: 'users' })
    .toArray()
  if (userCheck.length) {
    await connection.dropCollection('users')
  }

  const users = []

  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername()
    const friends = getRandomFriends(username, Math.floor(Math.random() * 6))

    users.push({
      username,
      email: `${username.toLowerCase().split(' ').join('')}@gmail.com`,
      friends,
    })
  }

  const thoughts = getRandomThoughts(20)

  await User.collection.insertMany(users)

  await Thought.collection.insertMany(thoughts)

  console.table(users)
  console.table(thoughts)

  console.info('Seeding complete! 🌱')

  process.exit(0)
})
