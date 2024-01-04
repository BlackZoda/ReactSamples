const InputColor = ({ setColor }) => {
    return (
        <form className='colorForm'>
            <input
                type='text'
                placeholder='enter color'
                onChange={(e) => setColor(e.target.value)} />
        </form>
    )
}

export default InputColor;
