import './css/benvenuti.css';
import BottomGreen from './components/bottomGreen';
import Buttons from './components/buttons';
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Fiorello } from "../img/fiorello.svg";


export default function Benvenuti() {
    return(
        <div className='body'>
            <div id='logo-benvenuti'>
                <Logo id='logoSize-benvenuti'></Logo>
            </div>
            <div id='fiorelloPosition-benvenuti'>
                <Fiorello></Fiorello>
            </div>

            <Buttons></Buttons>

            <BottomGreen></BottomGreen>
        </div>
    )
}