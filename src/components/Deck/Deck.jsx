import React from "react"
import FolderIcon from "../../assets/svgs/iconFolder.svg?react"
import { Link } from "react-router-dom"

const Deck = ({ deckData }) => {
  const { id, name } = deckData

  return (
    <Link
      className="flex flex-col items-center border border-solid border-black text-center py-10 cursor-pointer"
      to={`/decks/${id}`}
    >
      <FolderIcon />
      <p>{name}</p>
    </Link>
  )
}

export default Deck
