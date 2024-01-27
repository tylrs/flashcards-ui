import { useState } from "react"
import { mockAPI } from "../../testData"

const NewFlashcardForm = ({ deck_id, setFlashcardsData }) => {
  const [formData, setFormData] = useState({
    front: "",
    back: ""
  })

  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.name]: e.target.value
      }
    )
  }

  const handleSubmit = async () => {
    const data = await mockAPI("submitNewCard", { deck_id, ...formData })

    setFlashcardsData(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cardFront">Front of Card</label>
      <textarea id="cardFront" name="front" type="textarea" onChange={handleChange} value={formData.front} />
      <label htmlFor="cardBack">Back of Card</label>
      <textarea id="cardBack" name="back" type="textarea" onChange={handleChange} value={formData.back} />
      <button type="submit">Create Card</button>
    </form>
  )
}

export default NewFlashcardForm