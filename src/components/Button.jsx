import "../css/Button.css"

export function Button({ symbol, text }) {

    const handleClick = () => {
        console.log("btn clicked")
    }

    return (
        <button type="button" onClick={handleClick} className="button">
            <div className="symbol">
                <h2>{symbol}</h2>
            </div>

            <div className="text">
                <h2>{text}</h2>
            </div>

        </button>
    )
}