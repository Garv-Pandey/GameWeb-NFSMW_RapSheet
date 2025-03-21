import { Button } from "./Button";
import "../css/Footer.css";

export function Footer(props) {
    return (

        <div className="footer">

            <div className="button-panel">
                <Button symbol="↵" text="Accept" />
            </div>

            <div className="banner-panel">
                <h2>Rockport P.D.</h2>
            </div>
        </div>

    )
}