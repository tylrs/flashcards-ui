import React, { useEffect } from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage"
import Deckpage from "./pages/Deckpage"
import { seedData } from "./testData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/decks/:id",
    element: <Deckpage />,
  }
]);

const App = () => {

  useEffect(() => {
    seedData()
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
