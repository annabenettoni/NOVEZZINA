import React, { useEffect, useState } from 'react';
import Vignetta from './components/vignetta';
import Buttons from './components/buttons';
import MuccaImg from '../img/muccaImg.svg';

function Mucca() {
    const testi = [
        "MUUU ragazzi, come ve la passate? Ormai avete incontrato tutti i miei amici ma la parte migliore comincia adesso, perché ci sono io!",
        "Sapete, queste piante sono come delle superstar nel mondo vegetale, un po’ come la sottoscritta! ",
        "Queste piante sono così speciali perché hanno un superpotere segreto che le rende incredibilmente utili per la natura e per noi!",
        "Sono capaci di crescere in tutti i climi, dai più freddi a quelli tropicali, dalle pareti rocciose alle spiagge marine.",
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
                img={MuccaImg}
                testo={testi[indiceTestoCorrente]}
                id="testo"
            />
           <Buttons testi={testi} indiceTestoCorrente={indiceTestoCorrente} setIndiceTestoCorrente={setIndiceTestoCorrente} />
        </div>
    );
}

export default (Mucca);