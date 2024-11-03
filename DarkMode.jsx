import { useState, useEffect } from 'react';
import { MdOutlineWbSunny, MdNightlight } from 'react-icons/md';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      <button className='darkBtn' onClick={toggleDarkMode}>
        {isDarkMode ? (
          <MdOutlineWbSunny style={{ width: '30px', height: '30px', color: 'yellow' }} /> // Quyosh ikonasini sariq rangda
        ) : (
          <MdNightlight style={{ width: '30px', height: '30px', color: '#00b140' }} /> // Oy ikonasini oq rangda
        )}
      </button>
    </div>
  );
};

export default App;
