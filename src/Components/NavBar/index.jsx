import React, { useState } from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import './styles.css'
import BarraLateral from '../Barra-lateral-extendible';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='cont-navbar'>
            <div className='subCont-navbar'>
                <div className='cont-btn-menu'>
                    <div
                        className="toggle-button"
                        onClick={toggleSidebar}
                    >
                        <div className='linea-menuHamburguesa'></div>
                        <div className='linea-menuHamburguesa'></div>
                        <div className='linea-menuHamburguesa'></div>
                    </div>
                </div>
            </div>
            <BarraLateral isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default Navbar