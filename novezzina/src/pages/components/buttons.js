import './componentsCss/buttons.css';
import { Link, useLocation } from 'react-router-dom';


function Buttons() {
    return (
        <div id="container-buttons">
            <div>
                <Link>
                    <h3>INDIETRO</h3>
                </Link>
            </div>
            <div>
                <Link>
                    <h3>AVANTI</h3>
                </Link>
            </div>
        </div>

    )
}

export default Buttons;