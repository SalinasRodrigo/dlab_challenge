import { useState } from "react";
import "./App.css";

import { MyNav } from "./components/MyNav";
import { LoginProvider } from "./context/LoginProvider";
import { ReceiptsProvider } from "./context/ReceiptsProvider";
import { UserProvider } from "./context/UserProvider";
import { LoginPage } from "./pages/LogiPage";
import { ReceiptsPage } from "./pages/ReceiptsPage";
import { UsersPage } from "./pages/UsersPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <main>
        <LoginProvider>
          <Routes>
            <Route
              path="/login"
              element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <MyNav />
                  <div className="body">
                    <UserProvider>
                      <UsersPage />
                    </UserProvider>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/receipts"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <MyNav />
                  <div className="body">
                    <ReceiptsProvider>
                      <ReceiptsPage />
                    </ReceiptsProvider>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </LoginProvider>
      </main>
    </BrowserRouter>
  );
}

export default App;
