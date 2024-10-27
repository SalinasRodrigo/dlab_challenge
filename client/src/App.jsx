import './App.css'


import { MyNav } from './components/MyNav'
import { ReceiptsProvider } from './context/ReceiptsProvider';
import { UserProvider } from './context/UserProvider';
import { ReceiptsPage } from './pages/ReceiptsPage';
import { UsersPage } from './pages/UsersPage'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
      <main>
          <MyNav />
          <div className='body'>
            <Routes>
              <Route path="/users" element={<UserProvider><UsersPage/></UserProvider>} />
              <Route path="/receipts" element={<ReceiptsProvider><ReceiptsPage /></ReceiptsProvider>} />
            </Routes>
          </div>
      </main>
    </BrowserRouter>
  )
}

export default App
