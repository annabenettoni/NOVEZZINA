import './css/qr.css';
import { ReactComponent as Logo } from "../img/logo.svg";
import React, { Component } from 'react';
// import QrReader from 'react-qr-scanner';
import { Scanner } from '@yudiel/react-qr-scanner';
import { Link } from 'react-router-dom';
// import axios from 'axios';

function Qr() {

  return(
  <div className='map-page1'>

    <div className='scannerizza'>
      <div id='logo-qr'>
        <Logo id='logoSize-qr'></Logo>
      </div>
      <h2 className='titolo-qr'>SCANNERIZZA IL QR CODE</h2>
      {/* {error ? <p>{error}</p> : null} */}
      {/* {this.state.qrData && (
        <div className="last-four-digits"></div>
      )} */}
      {/* <Link to="/">
      <div className='back1'>
      <img className='arrow1' src={arrow} alt="arrow"></img>
      </div>
    </Link> */}

      {/* <p className='p1'>Se vuoi raccogliere punti ricordati di scannerizzare il QR Code che trovi sul bus: {this.state.qrData}</p> */}

      <div id='tuttoooo'>
        <div className='scheda1'>
          {/* <div className='div-qr1'> */}
            {/* <QrReader
            delay={300}
            style={camStyle}
            constraints={isDesktop ? undefined : { video: { facingMode: 'environment' } }}
            onError={this.handleError}
            onScan={this.handleScan}
            /> */}
            <Scanner
              onResult={(text, result) => console.log("ON RESULT", text, result)}
              onError={(error) => console.log("ON ERROR", error?.message)}
            />
          {/* </div> */}
        </div>
      </div>


    </div>
  </div>
  );
}

export default Qr;

// class QrContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       locationData: null,
//       isDesktop: window.innerWidth > 768,
//       qrData: null,
//     };
//     this.handleScan = this.handleScan.bind(this);
//   }

//   // handleScan(result) {

//   //   console.log(result)
//   //   // if (result && (result.text.includes('id=ATV'))) {
//   //   //   const qrNumber = result.text.slice(-4);
//   //   //   if (qrNumber !== this.state.qrData) {
//   //   //     this.setState({ qrData: qrNumber }, () => {
//   //   //       this.sendDataToBackend();
//   //   //     });
//   //   //   }
//   //   // } else if (result && result.text.includes('https://stops.atv')) {
//   //   //   setTimeout(() => {
//   //   //     this.setState({ error: "Scannerizza il codice QR" });
//   //   //   }, 1000);
//   //   // } else {
//   //   //   setTimeout(() => {
//   //   //     if (result) {
//   //   //       this.setState({ error: "Codice QR non valido" });
//   //   //     }
//   //   //   }, 1000);
//   //   // }
//   // }

//   // handleError(err) {
//   //   console.error('Errore nella scansione:', err);
//   // }

//   render() {
//     const { isDesktop, error } = this.state;
//     const camStyle = {
//       width: '100%',
//       height: '100%',
//     };

//     return (
//       <div className='map-page1'>

//         <div className='scannerizza'>
//           <div id='logo-qr'>
//             <Logo id='logoSize-qr'></Logo>
//           </div>
//           <h2 className='titolo-qr'>SCANNERIZZA IL QR CODE</h2>
//           {error ? <p>{error}</p> : null}
//           {this.state.qrData && (
//             <div className="last-four-digits"></div>
//           )}
//           {/* <Link to="/">
//           <div className='back1'>
//           <img className='arrow1' src={arrow} alt="arrow"></img>
//           </div>
//         </Link> */}

//           {/* <p className='p1'>Se vuoi raccogliere punti ricordati di scannerizzare il QR Code che trovi sul bus: {this.state.qrData}</p> */}

//           <div id='tuttoooo'>
//             <div className='scheda1'>
//               <div className='div-qr1'>
//                 {/* <QrReader
//                 delay={300}
//                 style={camStyle}
//                 constraints={isDesktop ? undefined : { video: { facingMode: 'environment' } }}
//                 onError={this.handleError}
//                 onScan={this.handleScan}
//                 /> */}
//                 <Scanner
//                   onResult={(text, result) => console.log(text, result)}
//                   onError={(error) => console.log(error)}
//                 />
//               </div>
//             </div>
//           </div>


//         </div>
//         );
// }

//         export default QrContainer;
