import React from 'react'

// import components
import NavPopUpMenu from '../Buffer/components/NavPopUpMenu/NavPopUpMenu';
import NavSideMiniMenu from '../Buffer/components/NavSideMiniMenu/NavSideMiniMenu.js';


// import view
import { navToolsItems } from '../Buffer/view/navToolsMenuItems';



function ComponentDevelopmentPage() {




    return (
        <div style={{ padding: '60px', border: '1px solid' }}>
            <h1>Component Development Page</h1>
            <hr />

            {/* <NavPopUpMenu items={navToolsItems} /> */}
            <NavSideMiniMenu  />


            {/* end of main div */}
        </div>
    )
}

export default ComponentDevelopmentPage