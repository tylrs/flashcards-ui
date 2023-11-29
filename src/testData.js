export const folders = [
  { 
    id: 1,
    name: "Mathematics" 
  },
  { 
    id: 2,
    name: "Science" 
  },
  { 
    id: 3,
    name: "Languages"
   }
]

export const flashcards = [
  { folder_id: folders[0].id, front: "2 + 2", back: "4" },
  { folder_id: folders[0].id, front: "5 * 5", back: "25" },
  { folder_id: folders[1].id, front: "Chemical symbol for water", back: "H2O" },
  { folder_id: folders[1].id, front: "Newton\'s First Law", back: "An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced external force." },
  { folder_id: folders[2].id, front: "Spanish for 'Hello'", back: "Hola" },
  { folder_id: folders[2].id, front: "French for 'Goodbye'", back: "Au revoir" }
]