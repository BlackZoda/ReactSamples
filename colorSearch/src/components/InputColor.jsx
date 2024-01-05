import colorNames from 'colornames';
import hexToHSL from '../utils/hexToHsl';

const InputColor = ({ color, setColor, setHexValue, setHslValue }) => {

    const reHexValue = /[A-Fa-f0-9]/g
    const reHexSix = /^#[A-Fa-f0-9]{6}$/
    const reHexThree = /^#[A-Fa-f0-9]{3}$/

    const validateColor = (str) => {
        let color = reHexSix.test(str) || reHexThree.test(str) ? str : null;
        const colObj = colorNames.get(str);
        if (colObj) color = colObj.name;
        return color;
    }

    const setHexToHsl = (value) => {
        const hsl = reHexSix.test(value) ?
            hexToHSL(value) :
            reHexThree.test(value) ?
                hexToHSL(value.replaceAll(reHexValue, v => v + v)) :
                hexToHSL(colorNames(value));
        hsl ? setHslValue(hsl) : setHslValue('');
    }

    const hexThreeToSix = (hexThree) => {
        return hexThree.replaceAll(reHexValue, v => v+v);
    }

    return (
        <form className='colorForm' onSubmit={e => e.preventDefault()}>
            <input
                type='text'
                placeholder='enter color'
                onChange={(e) => {
                    setColor(validateColor(e.target.value));
                    reHexSix.test(e.target.value) ?
                        setHexValue(e.target.value) :
                        reHexThree.test(e.target.value) ?
                            setHexValue(hexThreeToSix(e.target.value))  :
                            setHexValue(colorNames(e.target.value)) ;
                    setHexToHsl(e.target.value);    
                }}
                required
                defaultValue={color} />
        </form>
    )
}

export default InputColor;
