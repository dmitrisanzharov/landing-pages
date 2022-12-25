import React, { useEffect, useState } from "react";
import "./buffer-index.css";
import bufferLogo from "./images/BufferLogo.png";
import happyPerson from "./images/happy-person.png";

// components
import ButtonNewSmall from "./components/ButtonNewSmall/ButtonNewSmall";
import NavPopUpMenu from "./components/NavPopUpMenu/NavPopUpMenu";
import NavSideMiniMenu from "./components/NavSideMiniMenu/NavSideMiniMenu";

// view objects
import { navToolsItems } from "./view/navToolsMenuItems";
import { navChannelsItems } from "./view/navChannelsMenuItems";
import classNames from "classnames";

const Buffer = () => {
    const [scrollPositionState, setScrollPositionState] = useState(0);
    const [miniNavBarOpen, setMiniNavBarOpen] = useState(false);

    // FUNCTIONS

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setScrollPositionState(scrollPosition);
    };

    const handleMiniNavBarOpen = () => {
        setMiniNavBarOpen(!miniNavBarOpen);
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={classNames("container", {
                buffer_index_hide_scroll: miniNavBarOpen,
            })}
        >
            {/* TOP BANNER -----------------------------------------------*/}
            <div className="topBlueBanner">
                <div className="bannerContainer">
                    <ButtonNewSmall text={"New"} />
                    <span className="marginSides">
                        Create and schedule Twitter threads!
                    </span>
                    <a href="#" className="FindOutMoreLink">
                        Find out more
                    </a>
                </div>
            </div>

            {/* HEADER / NAVBAR*/}
            <div
                className={
                    scrollPositionState < 60
                        ? "bufferHeader-at-top"
                        : scrollPositionState < 300
                            ? "bufferHeader-is-active"
                            : "bufferHeader"
                }
            >
                <div className="bufferIcon">
                    <img src={bufferLogo} alt="buffer logo" />
                </div>

                <div className="dropDownMenu">
                    {/* TOOLS */}
                    <span className="navSpan navTools">
                        Tools
                        <i className="bi bi-chevron-down"></i>
                        <span className="navBlueLineHover"></span>
                        <div className="navItemsDropDownHolderDiv">
                            <NavPopUpMenu items={navToolsItems} />
                        </div>
                    </span>

                    {/* CHANNELS */}
                    <span className="navSpan navTools">
                        Channels
                        <i className="bi bi-chevron-down"></i>
                        <span className="navBlueLineHover"></span>
                        <div className="navItemsDropDownHolderDiv">
                            <NavPopUpMenu items={navChannelsItems} />
                        </div>
                    </span>

                    {/* Pricing */}
                    <span className="navSpan">
                        Pricing
                        <span className="navBlueLineHover"></span>
                    </span>

                    {/* Blog */}
                    <span className="navSpan">
                        Blog
                        <span className="navBlueLineHover"></span>
                    </span>
                </div>

                <div className="logInGetStarted">
                    <span className="logInSpanNav">Log in</span>
                    <button className="blueStandardButtonMobile">Get Started Now</button>

                    <i className="bi bi-list hamIcon" onClick={handleMiniNavBarOpen}></i>
                </div>

                {/* ROLL OUT NAVBAR SITS HERE ,    miniNavBarOpen */}

                <div
                    className={classNames("Buffer_index_mini_popup_navbar_container", {
                        Buffer_index_mini_popup_navbar_container_active: miniNavBarOpen,
                    })}
                >
                    <NavSideMiniMenu handleMiniNavBarOpen={handleMiniNavBarOpen} />
                </div>

                {/* end of header */}
            </div>

            {/* HAPPY PERSON SECTION */}

            <div className="Buffer_index_happy_container ">
                <div className="Buffer_index_happy_container_inner">
                    <div className="Buffer_index_happy_container_inner_box1_text ">
                        <div className="Buffer_index_happy_container_inner_box1_text_mini_container ">
                            <div className="Buffer_index_happy_container_inner_box1_text_mini_container_heading ">
                                Grow your audience on social and beyond
                            </div>

                            <div className="Buffer_index_happy_container_inner_box1_text_mini_container_paragraph ">
                                Buffer helps you build an audience organically. We’re a
                                values-driven company that provides affordable, intuitive,
                                marketing tools for ambitious people and teams.
                            </div>

                            <div className="Buffer_index_happy_container_inner_box1_text_mini_container_button_holder">
                                <button className="Buffer_index_happy_container_inner_box1_text_mini_container_button_holder_blue_button">
                                    Get started now
                                </button>

                                <button className="Buffer_index_happy_container_inner_box1_text_mini_container_button_holder_white_button">
                                    Watch video
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* IMAGE */}

                    <div className="Buffer_index_happy_container_inner_box2_image ">
                        <div className="Buffer_index_happy_container_inner_box2_image_holder_div ">
                            <img
                                src={happyPerson}
                                alt="happy person"
                                height="100%"
                                width="100%"
                            />
                        </div>

                        {/* end of image container */}
                    </div>
                </div>

                {/* end of HAPPY PERSON SECTION */}
            </div>













            {/* end of box-index container */}
        </div>
    );
};

export default Buffer;
