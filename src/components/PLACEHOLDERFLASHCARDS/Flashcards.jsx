import React, { useEffect, useState } from "react"
import Flashcard from "../flashcard/FlashCard"
import { mockAPI } from "../../testData"

const Flashcards = () => {
  const [flashcardsData, setFlashcardsData] = useState([{
    id: 0,
    folder_id: 0,
    front: "",
    back: "4",
  }])

  const getFlashcards = async () => {
    const data = await mockAPI("flashcards")
    // const data = await response.json()

    setFlashcardsData(data)
  }

  useEffect(() => {
    getFlashcards()
  }, [])

  const flashcards = flashcardsData.map((cardData => <Flashcard key={cardData.id} cardData={cardData} />))

  return (
    <div>
      {flashcards}
    </div>
  )
}

export default Flashcards