import React from 'react';

function Display() {
  const pageStyle = {
    backgroundColor: 'rgba(7, 70, 91, 0.3333)',
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'flex',
    width: '80%',
    height: '80vh',
    backgroundColor: '#F1F6F8',
  };

  const leftSideStyle = {
    flex: 1,
    backgroundColor: ' white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const rightSideStyle = {
    flex: 1,
    backgroundColor: ' white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '300px',
  };
  const logoStyle1 = {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyle = {
    backgroundColor: "rgba(7, 70, 91, 0.3333)",
    color: "black",
    fontSize: "30px",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "10px black",
    cursor: "pointer",
    marginTop: "30px",
  };
  return (
    <div style={pageStyle}>
        <img
            src="logo.jpg"
            alt="logo"
            style={logoStyle1}
          />
       
      <div style={containerStyle}>
     
        <div style={leftSideStyle}>
          <img
            src="buy.png"
            alt="BUY"
            style={logoStyle}
          />
          <button
              type="BUY"
              style={buttonStyle}> BUY </button>
         
        </div>
        
        
        <div style={rightSideStyle}>
        <img
            src="sale.png"
            alt="SALE"
            style={logoStyle}
          />
          <button
              type="BUY"
              style={buttonStyle}> SALE </button>
        </div>
      </div>
    </div>
  );
}

export default Display;