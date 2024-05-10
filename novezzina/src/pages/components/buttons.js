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
            // Se siamo sull'ultimo testo, reindirizza a /scansione
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
                    textAlign: "center",
                    display: indiceTestoCorrente === 0 ? 'none' : 'block',
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
                <h4 id='fontAvanti-spiegazione'>{indiceTestoCorrente === testi.length - 1 ? 'SCANSIONA QR ' : 'AVANTI'}</h4>
            </div>
            
        </>

    )
}

export default Buttons;
