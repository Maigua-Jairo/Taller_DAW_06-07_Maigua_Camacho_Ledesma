/*

  1- useState

*/

//Cambiar modo oscuro a modo clar 
import { useState } from 'react';

function ThemeToggle() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

 
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  
  const styles = {
    backgroundColor: isDarkMode ? '#282c34' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={styles}>
      <h1>Modo {isDarkMode ? 'Oscuro ' : 'Claro '}</h1>
      <button onClick={toggleTheme}>
        Activar modo {isDarkMode ? 'claro' : 'oscuro'}
      </button>
    </div>
  );
}

export default ThemeToggle;
