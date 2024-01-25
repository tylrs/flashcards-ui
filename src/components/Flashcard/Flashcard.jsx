import React from "react"

const Flashcard = ({ cardData }) => {
  const { front, back } = cardData

  return (
    <div className="flex justify-around border-solid border-1px border border-black">
      <div className="text-center pt-2 pb-6 px-6">
        <h3 className="text-1xl">Front</h3>
        <p className="text-2xl">{front}</p>
      </div>
      <div className="border border-solid border-black h-full" />
      <div className="text-center pt-2 pb-6 px-6">
        <h3 className="">Back</h3>
        <p className="text-2xl">{back}</p>
      </div>
    </div>
  )
}

export default Flashcard
