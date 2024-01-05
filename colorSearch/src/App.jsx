import './App.css'
import ColorDisplay from './components/ColorDisplay'
import InputColor from './components/InputColor'
import { useState } from 'react';

function App() {
    const [ color, setColor ] = useState('');
    const [ hexValue, setHexValue ] = useState('');
    const [ hslValue, setHslValue ] = useState('');

    return (
        <main>
            <h1>COLOR SEARCH</h1>
            <ColorDisplay
                color={color}
                hexValue={hexValue}
                hslValue={hslValue}
            />
            <InputColor
                color={color}
                setColor={setColor}
                hexValue={hexValue}
                setHexValue={setHexValue}
                hslValue={hslValue}
                setHslValue={setHslValue}
            />
        </main>
    )
}

export default App
