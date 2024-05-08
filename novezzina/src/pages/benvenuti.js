import './css/benvenuti.css';
import BottomGreen from './components/bottomGreen';
import { ReactComponent as Logo } from "../img/logo.svg";

export default function Benvenuti() {
    return(
        <div className='body'>
            <Logo></Logo>
            <BottomGreen></BottomGreen>
        </div>
    )
}