import React from "react"
import Header from "../components/Header/Header"
import Flashcards from "../components/flashcards/Flashcards"
import { useParams } from "react-router-dom"

const Deckpage = () => {
  let { id } = useParams()

  return (
    <div className="px-8 pt-10">
      <Header />
      <Flashcards deck_id={id} />
    </div>
  )
}

export default Deckpage