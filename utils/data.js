const usernames = [
  'CoolCat',
  'GamerGirl123',
  'FoodieAdventures',
  'TravelBuddy',
  'FitnessJunkie',
  'TechWizard',
  'BookwormLife',
  'Fashionista',
  'MusicLover22',
  'ArtisticSoul',
  'WanderlustSpirit',
  'CoffeeAddict',
  'MovieBuff',
  'PetLover365',
  'NatureExplorer',
  'DIYEnthusiast',
  'FoodieEats',
  'PositiveVibesOnly',
  'FitnessGuru',
  'StarGazer',
  'AdventureSeeker',
  'FashionFrenzy',
  'TechGeek',
  'BookNerd',
  'MusicMania',
  'CreativeDreamer',
  'SunnyDaysAhead',
  'MindfulTraveler',
  'GamingLegend',
  'CookingMaestro',
  'AnimalAdventures',
  'OutdoorExplorer',
  'CraftyCreator',
  'MovieMaven',
  'PetPal',
  'ArtisticSoul',
  'WanderlustJourney',
  'CaffeineQueen',
  'Cinephile',
  'YogaEnthusiast',
  'LifeHacks101',
  'GreenThumb',
  'WittyWordsmith',
  'FitnessFreak',
  'AstroExplorer',
  'UrbanAdventures',
  'FashionForward',
  'TechInnovator',
  'LiteraryLover',
  'MelodyMaker',
  'ImaginationUnleashed',
]

const thoughts = [
  "I'm feeling great today!",
  'What a wonderful day!',
  'Feeling a bit tired...',
  "Can't wait for the weekend!",
  'Feeling inspired!',
  'Today is a productive day.',
  'Feeling a little under the weather.',
  'Excited for the upcoming event!',
  'Feeling motivated!',
  'Just taking things one step at a time.',
  'Feeling grateful for everything.',
  'Feeling a bit overwhelmed.',
  'Enjoying some quiet time.',
  'Feeling on top of the world!',
  'Hoping for the best.',
  'Feeling adventurous!',
  "Today's a day for relaxation.",
  'Feeling creative and artistic.',
  'Missing old friends today.',
  'Feeling curious about the unknown.',
]

const reactions = [
  '👍',
  '❤️',
  '😄',
  '😊',
  '😎',
  '🤔',
  '😅',
  '😢',
  '😂',
  '😇',
  '😌',
  '🙌',
  '😋',
  '🥳',
  '🤩',
  '😓',
  '🥺',
  '🤗',
  '🙏',
  '😬',
]

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

const getRandomUsername = () => getRandomArrItem(usernames)

const getRandomFriends = (username, numFriends) => {
  const friends = []

  for (let i = 0; i < numFriends; i++) {
    let friendUsername
    do {
      friendUsername = getRandomUsername()
    } while (friendUsername === username || friends.includes(friendUsername))
    friends.push(friendUsername)
  }
  return friends
}

const getRandomReactions = (int) => {
  const results = []
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactions),
      username: getRandomUsername(),
    })
  }
  return results
}

const getRandomThoughts = (int) => {
  const results = []
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughts),
      username: getRandomUsername(),
      reactions: getRandomReactions(Math.floor(Math.random() * 6)),
    })
  }
  return results
}

module.exports = { getRandomUsername, getRandomThoughts, getRandomFriends }
