import './css/fine.css';
import FineImg from '../img/fine.svg';

export default function Fine() {
    return (
        <>
            <div className='body-fine'>
                <img src={FineImg} alt='congratulazioni'/>
            </div>
            <div className='loader'></div>
        </>
    )
}