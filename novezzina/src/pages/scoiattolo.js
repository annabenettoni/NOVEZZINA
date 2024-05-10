import React, { useEffect, useState } from 'react';
import Vignetta from './components/vignetta';
import Buttons from './components/buttons';
import ScoiattoloImg from '../img/scoiattoloImg.svg';

function Scoiattolo() {
    const testi = [
        "WEE, BELLA GENTE! Chi siete? Da dove venite? E che ci fate qui! Era da un po’ che non mi venivano a trovare, che bello sono davvero felice.",
        "Avete visto quanto cibo? Ho sempre ammirato la gente di montagna perché sanno sempre far tesoro delle risorse che ci offre la natura.",
        // "Sanno cogliere ed utilizzare i frutti selvatici e sanno coltivare benissimo qualsiasi cosa! Siete proprio spaziali voi umani!",
        "Io sono veramente ghiotto di ghiande, ma tutto quello che viene coltivato è buono! Castagne, noci, nocciole, E TUTTO IL RESTO!",
        "Se volete continuare la vostra avventura, qua vicino troverete le specie endemiche, ed il mio amico bruco sarà felice di vedervi!",
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
                img={ScoiattoloImg}
                testo={testi[indiceTestoCorrente]}
                id="testo"
            />
            <Buttons testi={testi} indiceTestoCorrente={indiceTestoCorrente} setIndiceTestoCorrente={setIndiceTestoCorrente} />

        </div>
    );
}

export default (Scoiattolo);