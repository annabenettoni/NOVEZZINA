import React, { useEffect, useState } from 'react';
import Vignetta from './components/vignetta';
import CastoroImg from '../img/castoroImg.svg';
import Buttons from './components/buttons';

function Castoro() {
    const testi = [
        "Hey! Dei nuovi amici! Come state ragazzi? Io sono castoro, e mi ritengo molto bravo a navigare attraverso i corsi d’acqua, ma la calma che mi trasmette la terra ferma non è imitabile.",
        "Si sta proprio bene vicino alle felci, il loro verde intenso e le foglie delicate creano un'atmosfera rilassante e fresca, ideale per riposare un po' prima di tornare a casa.",
        "A proposito di case, per raggiungere la mia dovrete ascoltare il dolce canto dell’acqua, anche se non scorre! Ci sarà la mia coinquilina rana pronta ad accogliervi!",
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
                img={CastoroImg}
                testo={testi[indiceTestoCorrente]}
                id="testo"
            />
            <Buttons testi={testi} indiceTestoCorrente={indiceTestoCorrente} setIndiceTestoCorrente={setIndiceTestoCorrente} />
        </div>
    );
}

export default (Castoro);
