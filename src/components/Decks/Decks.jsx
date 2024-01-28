import React, { useEffect, useState } from "react"
import Deck from "../Deck/Deck"
import { getData } from "../../testData"
import NewDeckForm from "../NewDeckForm/NewDeckForm"
import { RequestTypes } from "../../constants"

const Decks = () => {
  const [decksData, setDecksData] = useState([
    {
      id: 0,
      name: "",
    },
  ])

  const getDecks = async () => {
    const data = await getData(RequestTypes.AllDecks)

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
