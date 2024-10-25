import { useState, useEffect } from 'react';

const App = () => {
    const [currentDiv, setCurrentDiv] = useState(0);
    const divs = [
        { id: 1, color: 'red', text: 'Div 1' },
        { id: 2, color: 'green', text: 'Div 2' },
        { id: 3, color: 'blue', text: 'Div 3' },
        { id: 4, color: 'yellow', text: 'Div 4' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDiv((prev) => (prev + 1) % divs.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'relative', width: '300px', height: '200px', overflow: 'hidden' }}>
            {divs.map((div, index) => (
                <div
                    key={div.id}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: div.color,
                        display: currentDiv === index ? 'block' : 'none',
                    }}
                >
                    {div.text}
                </div>
            ))}
        </div>
    );
};

export default App;
