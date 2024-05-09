import React, { useEffect, useState } from 'react';
import './css/ape.css';
import Vignetta from './components/vignetta';
import ApeImg from '../img/apeImg.svg';
// import  withRouter  from 'react-router-dom'; // Importa il modulo withRouter per ottenere history come prop

function Ape() {
    const testi = [
        "bzz bzz bzz... Salve amici! Io sono l’apeRegina.",
        "Qui potete trovare alcuni dei miei fiori preferiti: le rose! Qui avrete la fortuna di vedere come le rose sono cambiate nel tempo e guardare ai fiori selvatici che crescono sul Monte Baldo!",
        "Potete scoprire i tipi speciali di rose che vengono coltivati per renderci felici con i loro bei colori e aiutarci a stare meglio quando siamo tristi.",
        "Come sapete, noi api ci affidiamo alla natura per mantenere la nostra salute, ma ora ho bisogno del vostro aiuto…",
        "Penso di aver impollinato un po’ troppi fiori e sono molto stanca, potete aiutarmi con qualche rimedio naturale? Vi prego, datemi una mano, perché senza di me l'intero regno delle api potrebbe essere in pericolo."
    ];

    const [indiceTestoCorrente, setIndiceTestoCorrente] = useState(0);

    function cambiaTesto() {
        // Incrementa l'indice del testo corrente
        setIndiceTestoCorrente((prevIndice) => prevIndice + 1);
    }

    useEffect(() => {
        // Controlla se siamo all'ultimo testo
        if (indiceTestoCorrente === testi.length - 1) {
            // Se siamo all'ultimo testo, reindirizza alla pagina "qr.js"
            // history.push('/qr.js');
        }
    }, [indiceTestoCorrente, testi.length]);

    return (
        <div id='position-spiegazione'>
            <Vignetta
                img={ ApeImg }
                testo={testi[indiceTestoCorrente]}
                id="testo"
            />
            <div
                id='styleAvanti-spiegazione'
                onClick={cambiaTesto}
                style={{
                    cursor: 'pointer',
                    width: "45%", // Adatta la larghezza al contenuto
                }}
            >
                <h4 id='fontAvanti-spiegazione'>AVANTI</h4>
            </div>
        </div>
    );
}

export default (Ape); // Utilizza withRouter per ottenere history come prop