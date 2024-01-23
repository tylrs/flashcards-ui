export const mockAPI = async dataRequested => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(APIIndex[dataRequested]);
    }, 1000);
  });

  return promise;
};

export const folders = [
  {
    id: 1,
    name: "Mathematics",
  },
  {
    id: 2,
    name: "Science",
  },
  {
    id: 3,
    name: "Languages",
  },
];

export const flashcards = [
  {
    id: 0,
    folder_id: folders[0].id,
    front: "2 + 2",
    back: "4",
  },
  {
    id: 1,
    folder_id: folders[0].id,
    front: "5 * 5",
    back: "25",
  },
  {
    id: 2,
    folder_id: folders[1].id,
    front: "Chemical symbol for water",
    back: "H2O",
  },
  {
    id: 3,
    folder_id: folders[1].id,
    front: "Newton's First Law",
    back: "An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced external force.",
  },
  {
    id: 4,
    folder_id: folders[2].id,
    front: "Spanish for 'Hello'",
    back: "Hola",
  },
  {
    id: 5,
    folder_id: folders[2].id,
    front: "French for 'Goodbye'",
    back: "Au revoir",
  },
];

const APIIndex = {
  folders,
  flashcards,
};
