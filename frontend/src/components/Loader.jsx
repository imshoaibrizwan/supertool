import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Grid } from "react-awesome-spinners";

const Loader = () => {

  return (
      <div style={{ position: 'fixed',
        top:'0px',
        left:'0px',
        width: '100%',
        height: '100%',
        background: 'black',
        opacity: '.8',
        zIndex: '999999',}}><div style={{  position: 'relative',
      top:' 50%',
      left: '50%',


   }}>
        <Grid color="#06F28C" />
        </div>
        </div>
  );
}

export default Loader