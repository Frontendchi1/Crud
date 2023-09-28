import { createBrowserRouter, RouterProvider } from "react-router-dom"
//pages
import Home from "./components/Home"
import Create from "./components/Create"
import Update from "./components/Update"
import Error from "./components/Error"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />
    },
    {
      path: "/create",
      element: <Create />,
      errorElement: <Error />
    },
    {
      path: "/update/:id",
      element: <Update />,
      errorElement: <Error />
    },
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App