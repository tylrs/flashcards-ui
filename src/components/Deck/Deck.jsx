import React from "react"
import FolderIcon from "../../assets/svgs/iconFolder.svg?react"
import DeleteIcon from "../../assets/svgs/iconDelete.svg?react"
import { Link } from "react-router-dom"
import { mockAPI } from "../../testData"

const Deck = ({ deckData, setDecksData }) => {
  const { id, name } = deckData

  const handleClick = async (e) => {
    const newDecks = await mockAPI("deleteDeckById", { deck_id: id })
    console.log("HELLO", newDecks)
    setDecksData(newDecks)
  }

  return (
    <div className="flex flex-col items-center relative border border-solid border-black text-center py-10 cursor-pointer">
      <button className="absolute top-2 right-2 z-10" onClick={handleClick}>
        <DeleteIcon />
      </button>
      <Link
        to={`/decks/${id}`}
      >
        <FolderIcon />
        <p>{name}</p>
      </Link>
    </div>
  )
}

export default Deck
