const ColorDisplay = ({ color }) => {

    return (
        <section className="colorDisplay" style={{ backgroundColor: color }}>
            <p>{color ? color : "empty value"}</p>
        </section>
    )
}

ColorDisplay.defaultProps = {
    color: "empty value"
}

export default ColorDisplay;
