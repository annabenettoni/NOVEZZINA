import './componentsCss/vignetta.css';
import { ReactComponent as Baloon } from "../../img/baloon.svg";


function Vignetta({ testo, img: animale }) {
    return (
        <div id='salvavita-vignetta'>
            <div id='descrizione-vignetta'>
                <Baloon id='baloon'></Baloon>
                <div id='testo-vignetta'>
                    <p> {testo} </p>
                </div>
            </div>
            <div id='posizioneImg-vignetta'>
                <img src={animale} alt="animale" />
            </div>
        </div>
    )
}

export default Vignetta;