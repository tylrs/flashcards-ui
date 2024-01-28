import { Resources } from "./constants"

export const mockAPI = async (dataRequested, args) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(APIIndex[dataRequested](args))
    }, 1000)
  })

  return promise
}

export const decks = [
  {
    id: 1,
    name: "Mathematics",
  },
  {
    id: 2,
    name: "Science",
  },
  {
    id: 3,
    name: "Languages",
  },
  {
    id: 4,
    name: "History",
  },
  {
    id: 5,
    name: "Art",
  },
  {
    id: 6,
    name: "Music",
  },
  {
    id: 7,
    name: "Sports",
  },
  {
    id: 8,
    name: "Technology",
  },
]

export const flashcards = [
  {
    id: 0,
    deck_id: decks[0].id,
    front: "2 + 2",
    back: "4",
  },
  {
    id: 1,
    deck_id: decks[0].id,
    front: "5 * 5",
    back: "25",
  },
  {
    id: 2,
    deck_id: decks[1].id,
    front: "Chemical symbol for water",
    back: "H2O",
  },
  {
    id: 3,
    deck_id: decks[1].id,
    front: "Newton's First Law",
    back: "An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced external force.",
  },
  {
    id: 4,
    deck_id: decks[2].id,
    front: "Spanish for 'Hello'",
    back: "Hola",
  },
  {
    id: 5,
    deck_id: decks[2].id,
    front: "French for 'Goodbye'",
    back: "Au revoir",
  },
  {
    id: 6,
    deck_id: decks[3].id,
    front: "Historical event in 1776",
    back: "Declaration of Independence",
  },
  {
    id: 7,
    deck_id: decks[4].id,
    front: "Famous painting by Leonardo da Vinci",
    back: "Mona Lisa",
  },
  {
    id: 8,
    deck_id: decks[5].id,
    front: "Musical instrument with black and white keys",
    back: "Piano",
  },
  {
    id: 9,
    deck_id: decks[6].id,
    front: "Popular sport with a round ball and goals",
    back: "Soccer",
  },
]

const filterFlashcards = ({ deck_id }) => {
  return flashcards.filter((card) => card.deck_id.toString() === deck_id)
}

const getDeckById = ({ deck_id }) => {
  return decks.find((deck) => deck.id === deck_id)
}

const submitNewDeck = ({ deck_name }) => {
  const newDeck = { id: decks[decks.length - 1].id + 1, name: deck_name }
  decks.push(newDeck)

  return decks
}

const submitNewCard = ({ deck_id, front, back }) => {
  const newCard = {
    deck_id: parseInt(deck_id),
    front,
    back,
  }
  flashcards.push(newCard)

  return filterFlashcards({ deck_id })
}

const deleteDeckById = ({ deck_id }) => {
  //would also have to do cascading delete maybe?
  return decks.filter((deck) => deck.id !== deck_id)
}

const allFlashCards = () => flashcards

const allDecks = () => decks

const APIIndex = {
  filterFlashcards,
  allFlashCards,
  allDecks,
  getDeckById,
  submitNewDeck,
  submitNewCard,
  deleteDeckById,
}

const requests = {
  filterFlashcardsbyDeckId: {
    resourceName: Resources.Flashcards,
    operation: (flashcards, params) => {
      return flashcards.filter((flashcard) => flashcard.deck_id === params.id)
    },
  },
  allDecks: {
    resourceName: Resources.Decks,
  },
}

export const getData = async (requestType, params) => {
  //temporary implementation until real API is used

  const { resourceName, operation } = requests[requestType]
  const lsItem = localStorage.getItem(resourceName)
  let data = JSON.parse(lsItem)

  if (operation) {
    data = operation(data, params)
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })

  return promise
}

const seeds = {
  decks,
  flashcards,
}

export const seedData = () => {
  Object.keys(seeds).forEach((seedName) => {
    const lsItem = localStorage.getItem(seedName)
    if (lsItem === null) {
      console.log("ITEM DOES NOT EXIT...SETTING")
      localStorage.setItem(seedName, JSON.stringify(seeds[seedName]))
    } else {
      console.log("ITEM ALREADY EXISTS IN LS", lsItem)
    }
  })
}
