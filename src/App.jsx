import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage"
import Deckpage from "./pages/Deckpage"

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
  return (
    <RouterProvider router={router} />
  )
}

export default App
