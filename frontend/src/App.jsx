import { Switch } from "components";
import { useEffect, useState } from "react";
import { Footer } from "screens/footer";
import { Navbar } from "screens/header";
import { Home } from "screens/home";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const body = document.body;
    body.classList.toggle("dark-Mode", darkMode);
  }, [darkMode]);
  const handleToggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={`${darkMode?'bg-black':'bg-white'}`}>
      <Navbar
        component={<Switch darkMode={darkMode} toggleMode={handleToggleMode} />} darkMode={darkMode}
      />
      <Home darkMode={darkMode} />
      <Footer darkMode={darkMode}  />
    </div>
  );
}

export default App;
