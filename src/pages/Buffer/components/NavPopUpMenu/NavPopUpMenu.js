import React from 'react'
import './NavPopUpMenu.css'

function NavPopUpMenu({ items }) {



    return (
        <div className="navPopUpMenu">
            {items && items.map((el) => {
                const { iconClass, title, text } = el;
                return (
                    <div key={title + text} className='navInternalMenuBox'>
                        <div className='iconHolderInnerNav'>
                            <i className={iconClass}></i>
                        </div>
                        <h3>{title}</h3>
                        {text && <div>{text}</div>}
                    </div>
                )
            })}
        </div>
    )
}

export default NavPopUpMenu