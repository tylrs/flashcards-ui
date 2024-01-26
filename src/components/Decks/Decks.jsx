import React, { useEffect, useState } from "react"
import Deck from "../Deck/Deck"
import { mockAPI } from "../../testData"
import NewDeckForm from "../NewDeckForm/NewDeckForm"

const Decks = () => {
  const [decksData, setDecksData] = useState([
    {
      id: 0,
      name: "",
    },
  ])

  const getDecks = async () => {
    const data = await mockAPI("allDecks")

    setDecksData(data)
  }

  useEffect(() => {
    getDecks()
  }, [])

  const Decks = decksData.map((deckData) => (
    <Deck key={deckData.id} deckData={deckData} setDecksData={setDecksData} />
  ))

  return <div className="grid grid-cols-3 gap-4 mt-4">
    {Decks}
    <NewDeckForm setDecksData={setDecksData} />
  </div>
}

export default Decks
