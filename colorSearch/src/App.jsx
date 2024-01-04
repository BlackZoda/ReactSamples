import './App.css'
import ColorDisplay from './ColorDisplay'
import InputColor from './InputColor'
import { useState } from 'react';

function App() {
    const [ color, setColor ] = useState('');

    return (
        <main>
            <h1>COLOR SEARCH</h1>
            <ColorDisplay color={color} />  
            <InputColor
                color={color}
                setColor={setColor} />
        </main>
    )
}

export default App
