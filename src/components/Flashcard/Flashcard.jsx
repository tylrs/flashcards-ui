import React from "react"

const Flashcard = ({ cardData }) => {
  const { front, back } = cardData

  return (
    <div>
      <p>{front}</p>
      <p>{back}</p>
    </div>
  )
}

export default Flashcard
