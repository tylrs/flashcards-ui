import React from "react"
import FolderIcon from "../../assets/svgs/iconFolder.svg?react"

const Deck = ({ deckData }) => {
  const { name } = deckData

  return (
    <div className="flex flex-col items-center border border-solid border-black text-center py-10 cursor-pointer">
      <FolderIcon />
      <p>{name}</p>
    </div>
  )
}

export default Deck
