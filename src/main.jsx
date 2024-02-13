import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./index.css"
import Vision from "./pages/Vision.jsx"
import Contact from "./pages/Contact.jsx"
import Article from "./pages/Article.jsx"
import NotFound from "./pages/NotFound.jsx"
// import router from "./config/router.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/goals",
    element: <Vision />,
    errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <NotFound />,
  },
  {
    path: "/article",
    element: <Article />,
  },
])

const el = document.querySelector("#root")

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
