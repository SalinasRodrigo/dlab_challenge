import './App.css'


import { MyNav } from './components/MyNav'
import { ReceiptsPage } from './pages/ReceiptsPage';
import { UsersPage } from './pages/UsersPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {

  const router = createBrowserRouter([
    {
      path:"/users",
      element: <UsersPage/>
    },
    {
      path:"/receipts",
      element: <ReceiptsPage/>
    }
  ]);
  

  return (
    <main>
      <MyNav/>
      <div className='body'>
        <RouterProvider router={router}/>
      </div>
    </main>
  )
}

export default App
