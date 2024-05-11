import './componentsCss/buttons.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link da react-router-dom


function Buttons({ testi, indiceTestoCorrente, setIndiceTestoCorrente, animale = '' }) {

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
            window.location.href = "/qr?animale=" + animale;
        } else {
            setIndiceTestoCorrente((prevIndice) => prevIndice + 1);
        }
    }

    return (
        <>
        <div className='bottoni-buttons'>
            <div
                id='styleAvanti-spiegazione-avanti'
                onClick={cambiaTestoIndietro}
                style={{
                    cursor: 'pointer',
                    width: "45%",
                    backgroundColor: '#cd7943',
                    display: indiceTestoCorrente === 0 ? 'none' : 'flex',
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
        </div>
            
        </>

    )
}

export default Buttons;
