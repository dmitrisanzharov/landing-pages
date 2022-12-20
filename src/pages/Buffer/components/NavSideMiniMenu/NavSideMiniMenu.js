import React from 'react';
import './NavSideMiniMenu.css';
import bufferLogo from '../../images/BufferLogo.png';
import navBarItems from '../../view/navBarItems'; 

const NavSideMiniMenu = () => {
  return (
    <div className='NavSideMiniMenu_Container drr'>
        <div className='NavSideMiniMenu_Logo_n_close drr'>
            <img src={bufferLogo} alt="" />
            <div className='NavSideMiniMenu_x_logo_holder'>
            <i className="bi bi-x-circle"></i>
            </div>
        </div>


        {/* nav menus and button */}
        <div className='NavSideMiniMenu_nav_items_n_button dbb'>
            {navBarItems && navBarItems.map(el=> {
                return (
                    <div key={new Date().getTime().toString()}>
                        <h2>{el}</h2>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default NavSideMiniMenu