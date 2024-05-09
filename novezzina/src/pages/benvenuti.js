import './css/benvenuti.css';
import { Link, useLocation } from 'react-router-dom';

import BottomGreen from './components/bottomGreen';
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Fiorello } from "../img/fiorello.svg";


export default function Benvenuti() {
    return (
        <div className='body-benvenuti'>
            <div id='logo-benvenuti'>
                <Logo id='logoSize-benvenuti'></Logo>
            </div>
            <div id='salvavita-benvenuti'>
                <div id='titolo-benvenuti'>
                    <svg id='svg-benvenuti'>
                        <text id='titolo-benvenuti'>
                            <textPath xlinkHref="#scritta">Avventura nell'Orto Botanico</textPath>
                        </text>
                        <path id="scritta" d="M 105 100 A 140 140 0 0 1 290 100" fill="transparent" />
                    </svg>
                </div>
                <div id='fiorelloPosition-benvenuti'>
                    <Fiorello></Fiorello>
                </div>
                <div id='bottom-benvenuti'>
                    <div id='positionInizia-benvenuti'>
                        <div id='styleInizia-benvenuti'>
                            <Link to={'/spiegazione'}>
                                <h4 id='fontInizia-benvenuti'>INIZIA</h4>
                            </Link>
                        </div>
                    </div>

                    <BottomGreen></BottomGreen>
                </div>
            </div>
        </div>
    )
}