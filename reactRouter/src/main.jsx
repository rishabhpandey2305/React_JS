import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/contactUs/contactUs.jsx'
import User from './components/User/user.jsx'
import Github, { githubInfoLoader } from './components/Github/github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children:
//       [
//         {
//           path: "",
//           element: <Home />
//         },
//         {
//           path: "about",
//           element: <About />
//         },
//         {
//           path: "contact",
//           element: <Contact />
//         }
//       ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='contact' element = {<Contact/>}/>
      <Route path='user/:id' element = {<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element = {<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
