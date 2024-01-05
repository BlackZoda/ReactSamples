const ColorDisplay = ({ color, hexValue, hslValue }) => {

    const style = {
        backgroundColor:color,
        color: hslValue.l > 40 && hslValue.h < 100 ? "#444" : "#ccc"
    }

    return (
        <section className="colorDisplay" style={style}>
            <p>{color ? color : "empty value"}</p>
            <p>{hexValue ? hexValue : "#"}</p>
            <p>H: {hslValue.h ? hslValue.h : "0"}</p>
            <p>S: {hslValue.s ? hslValue.s : "0"}</p>
            <p>L: {hslValue.l ? hslValue.l : "0"}</p>
        </section>
    )
}

ColorDisplay.defaultProps = {
    color: "empty value"
}

export default ColorDisplay;
