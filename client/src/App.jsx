import './App.css'

import { MyHeader } from './MyHeader'
import { MyNav } from './MyNav'
import { UsersPage } from './UsersPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {

  const router = createBrowserRouter([
    {
      path:"/user",
      element: <UsersPage/>
    },
    {
      path:"/",
      element: <h1>Alo</h1>
    }
  ]);
  

  return (
    <main>
      <MyNav/>
      <div>
        <MyHeader/>
        <RouterProvider router={router}/>
      </div>
    </main>
  )
}

export default App
