import React, { useEffect, useState } from 'react';
import Vignetta from './components/vignetta';
import VolpeImg from '../img/volpeImg.svg';
// import withRouter  from 'react-router-dom'; // Importa il modulo withRouter per ottenere history come prop

function Volpe() {
    const testi = [
        "Ciao ragazzi, mi avete trovato! Io sono la volpe Soffice, sono qui perché stavo studiando un po’ queste meravigliose erbe medicinali. Avete sentito che profumo che emanano? E' così rinfrescante!",
        "Sapevate che in passato i farmacisti venivano chiamati speziali, ed erano loro ed i medici ad occuparsi di riconoscere e utilizzare le piante per curare?",
        "Ma ci voleva un'ottima capacità di riconoscimento specifico, un approfondito studio delle proprietà, dei metodi e delle quantità da impiegare nelle preparazioni.",
        "Anche una piccola sbavatura nelle dosi poteva trasformare una pianta buona in qualcosa di pericoloso! Quindi dovevano stare molto attenti e studiare tanto!",
        "Comunque la mia cara amica farfalla vi stava cercando, non so dove sia finita ma penso di sapere dove potrebbe essere. So che ama alla follia dei fiori in particolare: sono raffinati, eleganti, e portano il nome orchidee"
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
                img={ VolpeImg }
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

export default (Volpe); // Utilizza withRouter per ottenere history come prop
