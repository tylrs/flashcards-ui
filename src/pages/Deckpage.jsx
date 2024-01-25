import React, { useEffect, useState } from "react"
import Header from "../components/Header/Header"
import Flashcards from "../components/flashcards/Flashcards"
import { useParams } from "react-router-dom"
import { mockAPI } from "../testData"

const Deckpage = () => {
  const [deck, setDeck] = useState({
    id: 0,
    name: "",
  })

  let { id } = useParams()

  const getDeckData = async () => {
    const data = await mockAPI("getDeckById", { deck_id: id })
    setDeck(data)
  }

  useEffect(() => {
    getDeckData()
  }, [])

  return (
    <div className="px-8 pt-10">
      <Header title={deck.name} />
      <Flashcards deck_id={id} />
    </div>
  )
}

export default Deckpage