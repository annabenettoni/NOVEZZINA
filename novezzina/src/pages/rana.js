import React, { useEffect, useState } from 'react';
import Vignetta from './components/vignetta';
import RanaImg from '../img/ranaImg.svg';
import Buttons from './components/buttons';

function Rana() {
    const testi = [
        "Cra-cra! Ciao belli!",
        "Avete visto lo stagno? Li trovi veramente molto affascinanti, sono come uno specchio d’acqua, o sbaglio? Sono come piccoli mondi a parte, pieni di vita e di segreti da scoprire.",
        "Sapete, negli stagni vivono un sacco di creature interessanti! Ci sono le rane, come me, che passano le giornate a crogiolarsi al sole o a cacciare insetti tra le piante acquatiche.",
        "Poi ci sono le libellule che svolazzano sopra l'acqua con le loro ali colorate, e i pesci che nuotano tra le alghe. E non dimentichiamoci delle piante acquatiche! Gli stagni sono pieni dipiante come le ninfee e i giunchi, che forniscono cibo e rifugio per gli animali che ci vivono.",
        "Fate attenzione ragazzi! Dovete guardarci i piedi mentre vi avventurate tra tutte queste piante perché alcune sono velenose, e c’è anche un animale strisciante in particolare che si aggira nei paraggi.",
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
                img={RanaImg}
                testo={testi[indiceTestoCorrente]}
                id="testo"
            />
            <Buttons testi={testi} indiceTestoCorrente={indiceTestoCorrente} setIndiceTestoCorrente={setIndiceTestoCorrente} />
        </div>
    );
}

export default (Rana);
