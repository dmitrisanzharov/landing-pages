import React from 'react'
import './ComponentDevelopmentPage.css'

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

            <div className='test1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium quas iste cumque facilis! Error voluptatibus inventore odit? Cumque, dolores. Eaque impedit laborum expedita distinctio. Neque, laborum, esse expedita magnam assumenda nihil adipisci voluptas odio iusto accusantium autem a labore mollitia quos dignissimos eum rem vitae omnis illo exercitationem nulla totam distinctio! Quasi nostrum tempore dolorem, quibusdam ipsam molestias deleniti, optio debitis temporibus facilis voluptate impedit aliquam autem itaque laboriosam. Doloremque aspernatur cupiditate, sapiente, delectus tempore minima fuga maiores obcaecati, perspiciatis tempora eaque pariatur libero dignissimos possimus illum quam est accusantium molestias aperiam numquam vero deserunt. Suscipit placeat sunt magnam.</div>

            {/* <NavPopUpMenu items={navToolsItems} /> */}
            {/* <NavSideMiniMenu  /> */}


            {/* end of main div */}
        </div>
    )
}

export default ComponentDevelopmentPage