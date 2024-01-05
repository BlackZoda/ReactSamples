import colorNames from 'colornames';
import hexToHSL from '../utils/hexToHsl';

const InputColor = ({ color, setColor, setHexValue, setHslValue }) => {

    const re = /^#/

    const setHexToHsl = (value) => {
        const hsl = re.test(value) ?
            hexToHSL(value) :
            hexToHSL(colorNames(value));
        hsl ? setHslValue(hsl) : setHslValue('');
    }


    return (
        <form className='colorForm' onSubmit={e => e.preventDefault()}>
            <input
                type='text'
                placeholder='enter color'
                onChange={(e) => {
                    setColor(e.target.value);
                    re.test(e.target.value) ?
                        setHexValue(e.target.value) :
                        setHexValue(colorNames(e.target.value));
                    setHexToHsl(e.target.value);
                }}
                required
                value={color} />
        </form>
    )
}

export default InputColor;
