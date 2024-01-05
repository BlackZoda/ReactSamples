import colorNames from 'colornames';

const ColorDisplay = ({ color, hexValue, hslValue }) => {
    const colorObj = colorNames.get(color);

    const style = {
        backgroundColor: colorObj ? colorObj.value : color,
        color: hslValue.l > 40  && (hslValue.h < 200 && hslValue.h > 20)||
            hslValue.l > 60  ? "#333" : "#ddd"
    }

    return (
        <section className="colorDisplay" style={style}>
            <div className="heading">
                {color ? <h2>{color.toUpperCase()}</h2> :
                    <p>try a color name or hex value</p>}
            </div>
            <p className="hex">{hexValue ? hexValue : "#"}</p>
            <p className="hsl">
                <span className="hsl-label">Hue:</span>
                {hslValue.h ? hslValue.h : "0"}
            </p>
            <p className="hsl">
                <span className="hsl-label">Saturation:</span>
                {hslValue.s ? hslValue.s : "0"}
            </p>
            <p className="hsl">
                <span className="hsl-label">Lightness:</span>
                {hslValue.l ? hslValue.l : "0"}
            </p>
        </section>
    )
}

ColorDisplay.defaultProps = {
    color: "empty value"
}

export default ColorDisplay;
