import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BarChartIcon from '@mui/icons-material/BarChart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import HailIcon from '@mui/icons-material/Hail';
import './estilos.css';


const BarraLateral = ({isOpen, toggleSidebar}) => {

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="content">       
            
              <div className="cont-persona">
                <div>
                  <AccountBoxIcon sx={{width: '30px', height: '30px', color: 'grey'}} />
                </div>
                <div className={isOpen ? 'open-data' : 'close-data'}>
                  <p>pepe</p>
                </div>
              </div>
              <div className="cont-barras">
                <BarChartIcon sx={{width: '30px', height: '30px', color: 'green'}}/>
              </div>
              <div className="cont-barras">
                <LocalMallIcon sx={{width: '30px', height: '30px', color: 'red'}}/>
              </div>
              <div className="cont-barras">
                <ContactEmergencyIcon sx={{width: '30px', height: '30px', color: 'green'}}/>
              </div>
              <div className="cont-barras">
                <HailIcon sx={{width: '30px', height: '30px', color: 'grey'}}/>
              </div>  
            
      </div>
    </div>
  );
};

export default BarraLateral;