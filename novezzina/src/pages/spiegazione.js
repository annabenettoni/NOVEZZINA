import React, { useEffect, useState } from 'react';
import './css/spiegazione.css';
import Vignetta from './components/vignetta';
import Buttons from './components/buttons';
import HappyFiorelloMeta from '../img/happyFiorelloMeta.svg';

export default function Spiegazione() {
    const testi = [
        "Ciao piccoli esploratori!", 
        "Io sono Fiorello </br> e sono qui per darvi il benvenuto in questa avventura emozionante! L'impresa che vi attende è un viaggio attraverso la natura, ma ci sono tre regole importanti da seguire!",
        "Regola numero uno: esplorate con curiosità e rispetto. La natura è la nostra guida e il nostro tesoro, quindi trattatela con gentilezza e attenzione mentre procedete.",
        "Regola numero due: seguite le indicazioni. Ogni QR code che scannerizzerete vi porterà a una nuova tappa e a una nuova sfida. Ascoltate attentamente ciò che gli animali vi diranno e seguite i loro suggerimenti con attenzione.",
        "Regola numero tre: divertitevi! Questa è un'avventura pensata per farvi sorridere, ridere e imparare. Non abbiate paura di esplorare e lasciatevi sorprendere dalla bellezza che vi circonda.",
        "Ora che conoscete le regole del gioco, è tempo di metterle in pratica! Seguite il profumo dolce delle rose che si diffonde nell'aria e dirigetevi verso di esse, la mia carissima amica gialla e nera sarà pronta ad aspettarvi. Buona fortuna, piccoli esploratori, e che l'avventura abbia inizio!"
    ];

    const [indiceTestoCorrente, setIndiceTestoCorrente] = useState(0);




    return (
        <div id='position-spiegazione'>
            <Vignetta
                img={HappyFiorelloMeta}
                testo={testi[indiceTestoCorrente]}
                id="testo"
            />
            <Buttons testi={testi} indiceTestoCorrente={indiceTestoCorrente} setIndiceTestoCorrente={setIndiceTestoCorrente} />
        </div>
    );
}