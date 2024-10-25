import { useState, useEffect } from 'react';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true';
    });

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
    }, [isDarkMode]);

    return (
        <div>
            <button onClick={toggleDarkMode} className='darkmode'>
                {isDarkMode ? 'Light' : 'Dark'}
            </button>
        </div>
    );
};

export default App;
