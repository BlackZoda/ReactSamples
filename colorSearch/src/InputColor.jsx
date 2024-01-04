const InputColor = ({ color, setColor }) => {
    return (
        <form className='colorForm' onSubmit={e => e.preventDefault()}>
            <input
                type='text'
                placeholder='enter color'
                onChange={(e) => setColor(e.target.value)}
                required
                value={color} />
        </form>
    )
}

export default InputColor;
