import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = "https://api.schneck.dlab.software/api/";

// eslint-disable-next-line react-refresh/only-export-components
export const LoginContext = createContext();

// eslint-disable-next-line react/prop-types
export function LoginProvider({ children }) {
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const getLogin = (username, password, setIsAuthenticated) => {
    fetch(`${BASE_URL}users/demo_login/`, {
      method: 'POST', // Asegúrate de usar el método correcto
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((errorData) => {
            console.log(errorData)
            setError(errorData); 
            throw new Error(errorData);
          });
        }
        return res.json();
      })
      .then((response) => {
        const user = response;
        setLogin(user.user);
        setToken(user.token);
        setError(null); 
        setIsAuthenticated(true)
        navigate('/users');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <LoginContext.Provider value={{ token, login, error, getLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
