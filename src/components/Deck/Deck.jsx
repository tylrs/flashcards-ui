import React from "react";

const Deck = ({ deckData }) => {
  const { name } = deckData

  return (
    <div className="border border-solid border-black text-center">
      <p>{name}</p>
    </div>
  )
}

export default Deck