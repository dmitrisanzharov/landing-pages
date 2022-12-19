import React from 'react'

// import
import NavPopUpMenu from '../Buffer/components/NavPopUpMenu/NavPopUpMenu';

function ComponentDevelopmentPage() {

    const obj = [
        {
            iconClass: "bi bi-send",
            title: 'Publishing',
            text: 'Plan, collaborate, and publish thumb-stopping content'
        },
        {
            iconClass: "bi bi-bar-chart-line",
            title: 'Analytics',
            text: 'Analyze social media performance and create reports'
        },
        {
            iconClass: "bi bi-chat-left-dots",
            title: 'Engagement',
            text: 'Quickly navigate your comments and engage with your audience'
        },
        {
            iconClass: "bi bi-vector-pen",
            title: 'Start Page',
            text: 'Build custom landing page in minutes'
        },

    ]



    return (
        <div style={{ padding: '60px' }}>
            <h1>Component Development Page</h1>
            <hr />

            <NavPopUpMenu items={obj} />


            {/* end of main div */}
        </div>
    )
}

export default ComponentDevelopmentPage