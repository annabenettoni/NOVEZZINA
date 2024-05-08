import './css/benvenuti.css';
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
                <div id='fiorelloPosition-benvenuti'>
                    <div id='titolo-benvenuti'>
                        <h3 id='scritta'>orto botanico</h3>
                    </div>
                    <Fiorello></Fiorello>
                </div>
                <div id='bottom-benvenuti'>
                    <div id='positionInizia-benvenuti'>
                        <div id='styleInizia-benvenuti'>
                            <h4 id='fontInizia-benvenuti'>INIZIA</h4>
                        </div>
                    </div>
                    <BottomGreen></BottomGreen>
                </div>
            </div>
        </div>
    )
}