"use client"

import { createContext, useContext, useState } from "react";

// Crear el contexto
const GlobalContext = createContext();

// Crear el provider
export function GlobalProvider({ children }) {
  const [user, setUser] = useState(null); // Estado de usuario
  const [cart, setCart] = useState([]);    // Estado del carrito
  const [theme, setTheme] = useState('light'); // Estado del tema (claro/oscuro)

  // Funciones globales
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <GlobalContext.Provider value={{
      user,
      cart,
      theme,
      login,
      logout,
      addToCart,
      removeFromCart,
      toggleTheme
    }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Hook para consumir más fácil
export function useGlobalContext() {
  return useContext(GlobalContext);
}
