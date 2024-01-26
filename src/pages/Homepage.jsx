import React from "react"
import Header from "../components/Header/Header"
import Decks from "../components/Decks/Decks"

const Homepage = () => {
  return (
    <div className="px-8 pt-10">
      <Header title={"Flashcard Decks"} />
      <Decks />
    </div>
  )
}

export default Homepage
