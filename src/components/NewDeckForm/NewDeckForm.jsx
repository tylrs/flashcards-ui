import React, { useState } from "react";
import { mockAPI } from "../../testData";

const NewDeckForm = ({ setDecksData }) => {
  const [deckName, setDeckName] = useState("")

  const handleChange = (e) => {
    setDeckName(e.target.value)
  }

  const submitNewDeck = async () => {
    const data = await mockAPI("submitNewDeck", { deck_name: deckName })

    setDecksData([...data])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    submitNewDeck()
  }

  return <form className="flex flex-col items-center border border-black py-4" onSubmit={handleSubmit}>
    <h3 className="pt-4 text-lg">Create New Deck</h3>
    <input className="border border-black mt-2" type="text" placeholder="Type Deck Name here" onChange={handleChange} value={deckName} />
    <button className="border border-black mt-4 px-4 py-2" type="submit">Create</button>
  </form>
}

export default NewDeckForm
