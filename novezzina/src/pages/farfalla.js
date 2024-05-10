import React, { useEffect, useState } from 'react';
import Vignetta from './components/vignetta';
import FarfallaImg from '../img/farfallaImg.svg';
import Buttons from './components/buttons';


function Farfalla() {
    const testi = [
        "Ecco dove eravate, mi avete trovata! Io sono la Farfalla falla. Avete visto che belli questi fiori? Sono orchidee, ed ogni petalo racchiude un segreto che solo il vento conosce.",
        "Non sono solo belle e rare, ma sono anche delle specie protette, in quanto sono molto delicate ed esigenti.",
        "Sul Monte Baldo sono state presenti ben 57 specie, circa un terzo delle orchidee spontanee presenti in Italia. Crescono in svariati ambienti come prati aridi, margini bosco e pascoli montani.",
        "A proposito dei margini di bosco…",
        "Il mio amico Castoro sarà sicuramente felicissimo di incontrare dei nuovi amici. Andate al confine tra la luce e l'oscurità e lo troverete."
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
                img={ FarfallaImg }
                testo={testi[indiceTestoCorrente]}
                id="testo"
            />
            <Buttons testi={testi} indiceTestoCorrente={indiceTestoCorrente} setIndiceTestoCorrente={setIndiceTestoCorrente} />
        </div>
    );
}

export default (Farfalla); // Utilizza withRouter per ottenere history come prop
