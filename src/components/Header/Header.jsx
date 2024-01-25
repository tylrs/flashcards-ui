import React from "react"

const Header = ({ title }) => {
  return (
    <header className="flex justify-center border-b-solid border-b-black border-b-2 pb-4">
      <h1 className="text-4xl">{title}</h1>
    </header>
  )
}

export default Header
