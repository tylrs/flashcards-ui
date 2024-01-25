import React, { useEffect, useState } from "react"
import Flashcard from "../flashcard/FlashCard"
import { mockAPI } from "../../testData"

const Flashcards = ({ deck_id }) => {
  const [flashcardsData, setFlashcardsData] = useState([
    {
      id: 0,
      deck_id: 0,
      front: "",
      back: "4",
    },
  ])

  const getFlashcards = async () => {
    const data = await mockAPI("filterFlashcards", { deck_id })
    // const data = await response.json()

    setFlashcardsData(data)
  }

  useEffect(() => {
    getFlashcards()
  }, [])

  const flashcards = flashcardsData.map((cardData) => (
    <Flashcard key={cardData.id} cardData={cardData} />
  ))

  return <div className="grid grid-cols-3 gap-4 pt-8">{flashcards}</div>
}

export default Flashcards
