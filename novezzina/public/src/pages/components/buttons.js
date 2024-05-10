import './componentsCss/buttons.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link da react-router-dom


function Buttons({ testi, indiceTestoCorrente, setIndiceTestoCorrente }) {

    function cambiaTestoIndietro() {
        if (indiceTestoCorrente === 0) {
            // Se siamo sulla prima pagina, reindirizza a /benvenuto
            window.location.href = "/";
        } else {
            setIndiceTestoCorrente((prevIndice) => prevIndice - 1);
        }
    }

    function cambiaTestoAvanti() {
        if (indiceTestoCorrente === testi.length - 1) {
            // Se siamo sull'ultima pagina, reindirizza a /scansiona
            window.location.href = "/qr";
        } else {
            setIndiceTestoCorrente((prevIndice) => prevIndice + 1);
        }
    }

    return (
        <>
            <div
                id='styleAvanti-spiegazione-indietro'
                onClick={cambiaTestoIndietro}
                style={{
                    cursor: 'pointer',
                    width: "45%",
                }}
            >
                <h4 id='fontAvanti-spiegazione'>INDIETRO</h4>
            </div>

            <div
                id='styleAvanti-spiegazione-avanti'
                onClick={cambiaTestoAvanti}
                style={{
                    cursor: 'pointer',
                    width: "45%",
                }}
            >
                <h4 id='fontAvanti-spiegazione'>AVANTI</h4>
            </div>
        </>
    )
}

export default Buttons;