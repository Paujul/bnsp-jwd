import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./index.css"
import Vision from "./pages/Vision.jsx"
import Contact from "./pages/Contact.jsx"
import Article from "./pages/Article.jsx"
import NotFound from "./pages/NotFound.jsx"
import Event from "./pages/Event.jsx"
import Gallery from "./pages/Gallery.jsx"
import Login from "./pages/Login.jsx"
import Client from "./pages/Client.jsx"
import Register from "./pages/Register.jsx"
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
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/client",
    element: <Client />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
])

const el = document.querySelector("#root")

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
