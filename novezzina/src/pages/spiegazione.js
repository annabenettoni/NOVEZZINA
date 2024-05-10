import React, { useEffect, useState } from 'react';
import './css/spiegazione.css';
import Vignetta from './components/vignetta';
import HappyFiorelloMeta from '../img/happyFiorelloMeta.svg';

<Banner/>
export default function Spiegazione() {
    const testi = [
        "Ciao piccoli esploratori! Io sono Fiorello e sono qui per darvi il benvenuto in questa avventura emozionante! Siete pronti a mettere alla prova le vostre abilità? Ora vi dirò poche e semplici regole da seguire, INIZIAMO!",
        "L'impresa che vi attende è un viaggio attraverso la natura, un viaggio che vi porterà a scoprire segreti nascosti e meraviglie incredibili. Ora, ascoltate attentamente...",
        "Regola numero uno: esplorate con curiosità e rispetto. La natura è la nostra guida, me compreso e il nostro tesoro, quindi trattatela con gentilezza e attenzione mentre procedete.",
        "Regola numero due: seguite le indicazioni. Ogni QR code che scannerizzerete vi porterà a una nuova tappa e a una nuova sfida. Ascoltate attentamente ciò che gli animali vi diranno e seguite i loro suggerimenti con attenzione",
        "Regola numero tre: divertitevi! Questa è un'avventura pensata per farvi sorridere, ridere e imparare. Non abbiate paura di esplorare e lasciatevi sorprendere dalla bellezza che vi circonda.",
        "Ora che conoscete le regole del gioco, è tempo di metterle in pratica! Seguite il profumo dolce delle rose che si diffonde nell'aria e dirigetevi verso di esse. Le rose vi aspettano con i loro petali colorati, il loro profumo avvolgente ed una mia carissima amica pronta ad aspettarvi. Buona fortuna, piccoli esploratori, e che l'avventura abbia inizio!"
    ];

    const [indiceTestoCorrente, setIndiceTestoCorrente] = useState(0);

    
    function cambiaTestoIndietro() {
        // Decrementa l'indice del testo corrente
        setIndiceTestoCorrente((prevIndice) => prevIndice - 1);
    }

    function cambiaTestoAvanti() {
        // Incrementa l'indice del testo corrente
        setIndiceTestoCorrente((prevIndice) => prevIndice + 1);
    }

    return (
        <div id='position-spiegazione'>
            <Vignetta
                img={HappyFiorelloMeta}
                testo={testi[indiceTestoCorrente]}
                id="testo"
<<<<<<< Updated upstream
            />
                        <div
                id='styleAvanti-spiegazione-indietro'
                onClick={cambiaTestoIndietro}
                style={{
                    cursor: 'pointer',
                    width: "45%", // Adatta la larghezza al contenuto
                }}
            >
                <h4 id='fontAvanti-spiegazione'>INDIETRO</h4>
            </div>

            <div
                id='styleAvanti-spiegazione-avanti'
                onClick={cambiaTestoAvanti}
                style={{
                    cursor: 'pointer',
                    width: "45%", // Adatta la larghezza al contenuto
                }}
            >
                <h4 id='fontAvanti-spiegazione'>AVANTI</h4>
            </div>
=======
            /> 
            <Buttons testi={testi} indiceTestoCorrente={indiceTestoCorrente} setIndiceTestoCorrente={setIndiceTestoCorrente} />
>>>>>>> Stashed changes
        </div>
    );
}