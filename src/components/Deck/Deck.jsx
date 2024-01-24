import React from "react";

const Deck = ({ deckData }) => {
  const { name } = deckData

  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

export default Deck