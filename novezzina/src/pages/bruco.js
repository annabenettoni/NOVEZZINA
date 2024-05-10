import React, { useEffect, useState } from 'react';
import Vignetta from './components/vignetta';
import Buttons from './components/buttons';
import BrucoImg from '../img/brucoImg.svg';

function Bruco() {
    const testi = [
        "Ciao amici! Sono il bruco e mi piace esplorare il mondo intorno a me! Sapete, qui nelle nostre foreste ci sono delle creature davvero speciali chiamate 'specie endemiche'?",
        "Sono proprio quelle che ci circondano! Ma cosa significa 'endemiche'?",
        "Beh, vuol dire che queste creature vivono solo in un certo posto, come qui nelle nostre foreste sul Monte Baldo.",
        "Queste creature sono un po' come tesori nascosti, unici e preziosi! Sono piante straordinarie che crescono solo qui, non è incredibile, vero?",
        "Queste piante non sono come quelle nitrofile, che crescono ovunque, queste sono davvero speciali!",
        "Non dite alla Mucca che ho sminuito le piante nitrofile, so che a lei piacciono molto, e molto probabilmente sarà proprio lì, se andate a trovarla portatele i miei saluti.",
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
                img={BrucoImg}
                testo={testi[indiceTestoCorrente]}
                id="testo"
            />
           <Buttons testi={testi} indiceTestoCorrente={indiceTestoCorrente} setIndiceTestoCorrente={setIndiceTestoCorrente} />
        </div>
    );
}

export default (Bruco);