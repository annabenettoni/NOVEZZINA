import React, { useEffect, useState } from 'react';
import './css/spiegazione.css';
import Vignetta from './components/vignetta';
import Buttons from './components/buttons';
import HappyFiorello from '../img/happyFiorello.svg';

export default function Spiegazione() {
    const testi = [
        "Ciao piccoli esploratori! Io sono Fiorello e sono qui per darvi il benvenuto in questa avventura emozionante!",
        "Mi raccomando però, esplorate con curiosità e rispetto, quindi trattate la natura con gentilezza e attenzione mentre procedete.",
        "Per giocare dovrete seguite le indicazioni. Ogni QR code che scannerizzerete vi porterà a una nuova tappa e a una nuova sfida. Ascoltate attentamente ciò che gli animali vi diranno e seguite i loro suggerimenti con attenzione.",
        // "Regola numero tre: divertitevi! Questa è un'avventura pensata per farvi sorridere, ridere e imparare. Non abbiate paura di esplorare e lasciatevi sorprendere dalla bellezza che vi circonda.",
        "Ora che conoscete le regole del gioco, è tempo di metterle in pratica! Seguite il profumo dolce delle rose che si diffonde nell'aria, la mia carissima amica gialla e nera sarà pronta ad aspettarvi. Buona fortuna e che l'avventura abbia inizio!"
    ];
    const [indiceTestoCorrente, setIndiceTestoCorrente] = useState(0);



//massimo puzza 
    return (
        <div id='position-spiegazione'>
            <Vignetta
                img={HappyFiorello}
                testo={testi[indiceTestoCorrente]}
                id="testo"
            />
            <Buttons animale="ape" testi={testi} indiceTestoCorrente={indiceTestoCorrente} setIndiceTestoCorrente={setIndiceTestoCorrente} />
        </div>
    );
}