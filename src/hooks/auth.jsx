import { createContext, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false)
  
  async function signIn({email, password}) {
    try {
      setLoading(true);
      const response = await api.post("/sessions", {email, password});
      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token })

      setLoading(false);

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar")
      }
      setLoading(false)
    }
  }

  async function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");

    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");
    const token = localStorage.getItem("@foodexplorer:token");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, [])

  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut,
      loading,
      setLoading,
      user: data.user 
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };