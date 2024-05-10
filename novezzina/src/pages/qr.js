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

