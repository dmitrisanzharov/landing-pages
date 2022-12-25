import React from 'react';
import classNames from 'classnames';
import './NavSideMiniMenu.css';
import bufferLogo from '../../images/BufferLogo.png';
import navBarItems from '../../view/miniNavBarItems';
import BlueStrdBtn from '../BlueStrdBtn/BlueStrdBtn';
import MiniNavBarSingleItem from '../MiniNavBarSingleItem/MiniNavBarSingleItem'
import { navToolsItems } from '../../view/navToolsMenuItems';
import { navChannelsItems } from '../../view/navChannelsMenuItems';


const NavSideMiniMenu = ({ handleMiniNavBarOpen }) => {


    function objectForMiniNavBarSingleItemDropDownProps(name) {
        if (name === 'Tools') {
            return navToolsItems
        }

        if (name === 'Channels') {
            return navChannelsItems
        }

    }



    return (
        <div className='NavSideMiniMenu_Container'>
            <div className='NavSideMiniMenu_Logo_n_close'>
                <img src={bufferLogo} alt="" />
                <div className='NavSideMiniMenu_x_logo_holder'>
                    <i className="bi bi-x-circle" onClick={handleMiniNavBarOpen}></i>
                </div>
            </div>


            {/* nav menus and button */}
            <div className='NavSideMiniMenu_nav_items_n_button'>
                {navBarItems && navBarItems.map(el => {
                    const { id, text, dropDown } = el;
                    return (

                        <MiniNavBarSingleItem heading={text} dropDown={dropDown} dropDownItems={objectForMiniNavBarSingleItemDropDownProps(text)} colorBlue={text === 'Log in' ? true : false} key={id} />


                    )
                })}
                <BlueStrdBtn text='Get started now' fullScreen={true} />

                <hr />


            </div>
        </div>
    )
}

export default NavSideMiniMenu