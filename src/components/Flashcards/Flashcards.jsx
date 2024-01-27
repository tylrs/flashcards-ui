import { useEffect, useState } from "react"
import Flashcard from "../flashcard/FlashCard"
import { mockAPI } from "../../testData"
import NewFlashcardForm from "../NewFlashcardForm/NewFlashcardForm"

const Flashcards = ({ deck_id }) => {
  const [flashcardsData, setFlashcardsData] = useState([
    {
      id: 0,
      deck_id: 0,
      front: "",
      back: "",
    },
  ])

  const getFlashcards = async () => {
    const data = await mockAPI("filterFlashcards", { deck_id })

    setFlashcardsData(data)
  }

  useEffect(() => {
    getFlashcards()
  }, [])

  const flashcards = flashcardsData.map((cardData) => (
    <Flashcard key={cardData.id} cardData={cardData} />
  ))

  const formKey = crypto.randomUUID()

  flashcards.push(<NewFlashcardForm key={formKey} deck_id={deck_id} setFlashcardsData={setFlashcardsData} />)

  return <div className="grid grid-cols-3 gap-4 pt-8">{flashcards}</div>
}

export default Flashcards
