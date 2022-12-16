import './index.css'
import React from 'react'

// components
import ButtonNewSmall from './components/ButtonNewSmall/ButtonNewSmall'

export default function Buffer() {
    return (
        <>
            {/* TOP BANNER -----------------------------------------------*/}
            <div className='topBlueBanner'>
                <div className='bannerContainer'>
                    <ButtonNewSmall text={'New'} />
                    <span className='marginSides'>Create and schedule Twitter threads!</span>
                    <a href="#">Find out more</a>
                </div>
            </div>


            {/* HEADER / NAVBAR*/}
            <header>

                <div className="bufferIcon">
                    <h1>BUFFER</h1>
                </div>


                <div className="midMenu">
                    <span>Tools</span><span>Channels</span><span>Pricing</span><span>Blog</span>
                </div>

                <div className="logInGetStarted">
                    <span>Log in</span><span>Get Started Now</span>
                </div>



                {/* end of header */}
            </header>





        </>
    )
}
