import React, { useEffect, useState } from 'react';
import Vignetta from './components/vignetta';
import Buttons from './components/buttons';
import SerpenteImg from '../img/serpenteImg.svg';

function Serpente() {
    const testi = [
        "Ciao signori, come ssssstate? Sapete, qui potete trovare tante specie vegetali considerate velenose, anche se mai quanto me! Scherzavo!",
        "Queste piante sono molto più velenose, alcune anche mortali, altre invece contengono sostanze irritanti che possono causare reazioni cutanee al contatto.",
        "Però in compenso qua accanto ci sono delle piante meno velenose, oserei dire quasi commestibili… Ops! Forse non avrei dovuto dirvelo!",
        "Comunque se andate da quelle parti state attenti allo scoiattolo. Non è pericoloso, è solo un po’ chiacchierone.",
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
                img={SerpenteImg}
                testo={testi[indiceTestoCorrente]}
                id="testo"
            />
              <Buttons testi={testi} indiceTestoCorrente={indiceTestoCorrente} setIndiceTestoCorrente={setIndiceTestoCorrente} />
        </div>
    );
}

export default (Serpente);