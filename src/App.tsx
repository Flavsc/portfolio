import { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRoutes from '@router/index.tsx';
import CustomCursor from '@components/CustomCursor';
import { ThemeContext, Theme } from '@context/ThemeContext';
import Navbar from '@components/Navbar';

// Componente interno para gerenciar o tema com base na rota
const ThemeManager = () => {
  const location = useLocation();
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Lógica para alternar o tema
    if (location.pathname === '/portfolio/about') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [location.pathname]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CustomCursor />
      <Navbar /> {/* Navbar agora está dentro do provider também */}
      <AppRoutes />
    </ThemeContext.Provider>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ThemeManager />
    </BrowserRouter>
  );
}
