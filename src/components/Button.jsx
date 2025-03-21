import "../css/Button.css"

export function Button({symbol, text}) {

    return (
        <div className="button">
            <h3 className="symbol">{symbol}</h3>
            <h3 className="text">{text}</h3>
        </div>
    )
}