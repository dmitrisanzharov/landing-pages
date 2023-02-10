import React, { useEffect, useState, useMemo, useCallback } from "react";
import classNames from "classnames";
import "./buffer-index.css";
import { Helmet } from "react-helmet";

// images
import bufferLogo from "./images/BufferLogo.png";
import happyPerson from "./images/happy-person.png";
import huckBerryLogo from "./images/huckberry_logo.png";
import food52Logo from "./images/food52_logo.png";
import theSillLogo from "./images/the_sill_logo.png";
import burrowLogo from "./images/burrow_logo.png";
import happySocksLogo from "./images/happy_socks_logo.png";
import dressUpLogo from "./images/dress_up_logo.png";
import lrg1234_img from "./images/1234_image_lrg.png";
import bufferTeamMapImage from "./images/bufferTeamMapImage.png";
import linkedInPartnerLogo from "./images/linkedin-marketing-partner@2x-2.png";
import metaPartnerLogo from "./images/meta-business-partner@2x-2.png";
import pinPartnerLogo from "./images/pinterest-marketing-partner@2x-2.png";
import semiBlueFooterImageLeft from "./images/semiBlueFooterImageLeft.png";
import semiBlueFooterImageRight from "./images/semiBlueFooterImageRight.png";
import bufferFooterLogo from "./images/bufferFooterLogo.png";

// components
import ButtonNewSmall from "./components/ButtonNewSmall/ButtonNewSmall";
import NavPopUpMenu from "./components/NavPopUpMenu/NavPopUpMenu";
import NavSideMiniMenu from "./components/NavSideMiniMenu/NavSideMiniMenu";
import HeadingsX3nImage from "./components/HeadingsX3nImage/HeadingsX3nImage";
import TestimonialBox from "./components/TestimonialBox/TestimonialBox";

// view objects
import { navToolsItems } from "./view/navToolsMenuItems";
import { navChannelsItems } from "./view/navChannelsMenuItems";
import headingX3AndImageJson from "./view/headingX3AndImageJson";
import testimonialPeopleArray from "./view/testimonialPeople";
import _10YearsSectionItems from "./view/_10YearsSectionItems";
import footerMenuItems from "./view/footerMenuItems";

const Buffer = () => {
	// states
	const [scrollState, setScrollState] = useState({
		y: 0,
		lastY: 0,
	});
	const [hideNavBar, setHideNavBar] = useState(false);
	const [miniNavBarOpen, setMiniNavBarOpen] = useState(false);

	// variables

	// FUNCTIONS

	const handleMiniNavBarOpen = useCallback(() => {
		setMiniNavBarOpen(!miniNavBarOpen);
	}, [miniNavBarOpen]);

	const repeatTestimonials = useMemo(
		() => (arr, n) =>
			[]
				.concat(...Array(n).fill(arr))
				.map((el) => ({ ...el, id: Math.random() + el.name })),
		[]
	);

	const scrollIntoView = useCallback(() => {
		let timeOut = setTimeout(() => {
			window.scrollTo(0, scrollState.lastY);
		}, 0);

		return () => clearTimeout(timeOut);
	}, [scrollState.lastY]);

	// useEffects

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setScrollState((prevState) => {
				return {
					y: window.scrollY,
					lastY: prevState.y,
				};
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		// this here is for Rollout navBar / that is triggered via Hamburger menu on mobile, so when we close it, the navbar must ALWAYS be active
		if (scrollState.y > scrollState.lastY && scrollState.lastY === 0) {
			setHideNavBar(false);
			return;
		}

		// this fixes the trembling
		if (scrollState.lastY === scrollState.y) {
			return;
		}

		if (scrollState.y > 500 && scrollState.y - scrollState.lastY > 0) {
			setHideNavBar(true);
			return;
		}

		setHideNavBar(false);
	}, [scrollState]);

	return (
		<div
			className={classNames("container", {
				buffer_index_hide_scroll: miniNavBarOpen,
			})}
		>
			<Helmet>
				<title>Buffer</title>
				<link rel="icon" href="./images/Buffer_icon-icons.com_66753.ico" />
			</Helmet>
			{/* TOP BANNER -----------------------------------------------*/}
			<div className="topBlueBanner">
				<div className="bannerContainer">
					<ButtonNewSmall text={"New"} />
					<span className="marginSides">
						Create and schedule Twitter threads!
					</span>
					<span className="FindOutMoreLink">Find out more</span>
				</div>
			</div>

			{/* HEADER / NAVBAR*/}
			<div
				className={classNames(
					"bufferHeader",
					{ bufferHeader_hidden: hideNavBar },
					{ bufferHeader_isActive: scrollState.y > 400 }
				)}
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
					<NavSideMiniMenu
						handleMiniNavBarOpen={handleMiniNavBarOpen}
						scrollIntoView={scrollIntoView}
					/>
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
								Buffer helps you build an audience organically. We're a
								values-driven company that provides affordable, intuitive,
								marketing tools for ambitious people and teams.
							</div>

							<div className="Buffer_index_happy_container_inner_box1_text_mini_container_button_holder">
								<button className="Buffer_index_happy_container_inner_box1_text_mini_container_button_holder_blue_button">
									Get started now
								</button>

								<button className="Buffer_index_happy_container_inner_box1_text_mini_container_button_holder_white_button">
									<svg
										width={20}
										height={20}
										clipRule="evenodd"
										fillRule="evenodd"
										strokeLinejoin="round"
										strokeMiterlimit="2"
										viewBox="0 0 25 25"
										xmlns="http://www.w3.org/2000/svg"
										style={{
											border: "1px solid #2c4bff",
											borderRadius: "50%",
											marginRight: "10px",
										}}
									>
										<circle
											cx="2589"
											cy="550"
											fill="#fff"
											r="10"
											transform="matrix(1.2 0 0 1.2 -3094.128 -647.189)"
										></circle>
										<path
											d="M18.085 12.804l-8 5.006V7.806z"
											fill="#2c4bff"
										></path>
									</svg>
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

			{/*  NAME DROPPING / LOGOS SECTION */}

			<section className="Buffer_index__nameDroppingContainer ">
				<div className="Buffer_index__nameDroppingContainer_logoContainer">
					<div className="Buffer_index__nameDroppingContainer_logo_container_logoBox">
						<img src={huckBerryLogo} alt="" />
					</div>
				</div>

				<div className="Buffer_index__nameDroppingContainer_logoContainer">
					<div className="Buffer_index__nameDroppingContainer_logo_container_logoBox">
						<img src={food52Logo} alt="" />
					</div>
				</div>

				<div className="Buffer_index__nameDroppingContainer_logoContainer">
					<div className="Buffer_index__nameDroppingContainer_logo_container_logoBox">
						<img src={theSillLogo} alt="" />
					</div>
				</div>

				<div className="Buffer_index__nameDroppingContainer_logoContainer">
					<div className="Buffer_index__nameDroppingContainer_logo_container_logoBox">
						<img src={burrowLogo} alt="" />
					</div>
				</div>

				<div className="Buffer_index__nameDroppingContainer_logoContainer">
					<div className="Buffer_index__nameDroppingContainer_logo_container_logoBox">
						<img src={happySocksLogo} alt="" />
					</div>
				</div>

				<div className="Buffer_index__nameDroppingContainer_logoContainer">
					<div className="Buffer_index__nameDroppingContainer_logo_container_logoBox">
						<img src={dressUpLogo} alt="" />
					</div>
				</div>
			</section>

			{/* GROW YOUR FOLLOWING SECTION */}

			<section className="Buffer_index_growYourFollowingContainer ">
				<div className="Buffer_index_growYourFollowingContainer_inner ">
					<div className="Buffer_index_growYourFollowingContainer_inner_heading ">
						Grow your following without draining your time
					</div>

					<div className="Buffer_index_growYourFollowingContainer_inner_paragraph ">
						Social media can be the fastest and cheapest way to build your
						following and grow your business. But it can also take up all your
						time. Here are four ways Buffer can help.
					</div>
				</div>

				{/* end of grow your FOLLOWING section */}
			</section>

			{/* ****************************************************************** */}
			{/* *****   1234 section     ****** */}
			{/* ***************************************************************** */}

			<section className="Buffer_index_1234Container ">
				<img src={lrg1234_img} alt="" width={"100%"} height={"100%"} />
			</section>

			{/* ****************************************************************** */}
			{/* *****   headingX3AndImageJson SECTION     ****** */}
			{/* ***************************************************************** */}

			{headingX3AndImageJson &&
				headingX3AndImageJson.map((el) => {
					const { heading1, heading2, paragraph, textOnLeft, noImage, image } =
						el;
					return (
						<div
							className="BufferIndex_headingX3AndImageJson_holder"
							key={paragraph}
						>
							<HeadingsX3nImage
								heading1={heading1}
								heading2={heading2}
								paragraph={paragraph}
								textOnLeft={textOnLeft}
								noImage={noImage}
								image={image}
							/>
						</div>
					);
				})}

			{/* ****************************************************************** */}
			{/* *****   testimonials SECTION     ****** */}
			{/* ***************************************************************** */}

			<div className="BufferIndex_TestimonialsContainer ">
				<div className="BufferIndex_TestimonialsContainer_Inner ">
					{testimonialPeopleArray &&
						repeatTestimonials(testimonialPeopleArray, 20).map((el) => {
							const { name, quote, logo, image, id } = el;
							return (
								<TestimonialBox
									key={id}
									name={name}
									quote={quote}
									logo={logo}
									image={image}
								/>
							);
						})}
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   10 years section SECTION     ****** */}
			{/* ***************************************************************** */}

			<section className="BufferIndex_TestimonialsContainer_10YearsSection ">
				<div className="BufferIndex_TestimonialsContainer_10YearsSection_InnerDiv ">
					{_10YearsSectionItems.map((el, i) => {
						const { blueText, normalText } = el;
						return (
							<div
								className="BufferIndex_TestimonialsContainer_10YearsSection_InnerDiv_Card "
								key={blueText + normalText}
							>
								<div className="BufferIndex_TestimonialsContainer_10YearsSection_InnerDiv_Card_BlueText">
									{blueText}
								</div>
								<div className="BufferIndex_TestimonialsContainer_10YearsSection_InnerDiv_Card_NormalText">
									{normalText}
								</div>
							</div>
						);
					})}
				</div>
			</section>

			{/* ****************************************************************** */}
			{/* *****   And we are here to help SECTION     ****** */}
			{/* ***************************************************************** */}

			<section className="BufferIndex_AndWeAreHereToHelpSection ">
				<div className="BufferIndex_AndWeAreHereToHelpSection_Inner ">
					<div className="BufferIndex_AndWeAreHereToHelpSection_Inner_ImageHolder ">
						<div className="BufferIndex_AndWeAreHereToHelpSection_Inner_ImageHolder_InnerDiv ">
							<img
								src={bufferTeamMapImage}
								alt="cool"
								height="100%"
								width="100%"
							/>
						</div>
					</div>

					<div className="BufferIndex_AndWeAreHereToHelpSection_Inner_TextHolder ">
						<div className="BufferIndex_AndWeAreHereToHelpSection_Inner_TextHolder_Inner ">
							<div className="BufferIndex_AndWeAreHereToHelpSection_Inner_TextHolder_Heading1 ">
								And we are here to help
							</div>

							<div className="BufferIndex_AndWeAreHereToHelpSection_Inner_TextHolder_Heading2 ">
								Our customer advocates are standing by 24/7 to support you via
								email and social media. We also have a comprehensive, regularly
								updated help center for those who prefer to find help
								themselves.
							</div>

							<div className="BufferIndex_AndWeAreHereToHelpSection_Inner_TextHolder_ButtonHolder ">
								<button className="BufferIndex_AndWeAreHereToHelpSection_Inner_TextHolder_ButtonHolder_Button">
									{" "}
									Visit out help center
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ****************************************************************** */}
			{/* *****   MARKETING PARTNERS SECTION     ****** */}
			{/* ***************************************************************** */}

			<section className="BufferIndex_MarketingPartnersSection ">
				<div className="BufferIndex_MarketingPartnersSection_InnerContainer ">
					<div className="BufferIndex_MarketingPartnersSection_InnerContainer_Heading ">
						An official marketing partner of the industry leaders
					</div>

					<div className="BufferIndex_MarketingPartnersSection_InnerContainer_LogosContainer ">
						<div className="BufferIndex_MarketingPartnersSection_InnerContainer_LogosContainer_MetaLogo ">
							<img src={metaPartnerLogo} alt="meta" width={86} />
						</div>

						<div className="BufferIndex_MarketingPartnersSection_InnerContainer_LogosContainer_PartnersLogo ">
							<img src={pinPartnerLogo} alt="pin interest" width={112} />
						</div>

						<div className="BufferIndex_MarketingPartnersSection_InnerContainer_LogosContainer_LinkedInLogo ">
							<img src={linkedInPartnerLogo} alt="linkedin" width={146} />
						</div>
					</div>
				</div>
			</section>

			{/* ****************************************************************** */}
			{/* *****   140,000+ people like you SECTION     ****** */}
			{/* ***************************************************************** */}

			<section className="BufferIndex_140kSection ">
				<div className="BufferIndex_140kSection_LeftImage ">
					<img src={semiBlueFooterImageLeft} alt="left" height={"100%"} />
				</div>

				<div className="BufferIndex_140kSection_RightImage ">
					<img src={semiBlueFooterImageRight} alt="right" height={"100%"} />
				</div>

				<div className="BufferIndex_140kSection_Inner ">
					<div className="BufferIndex_140kSection_Heading">
						140,000+ people like you use Buffer to build their brand on social
						media every month
					</div>

					<div className="BufferIndex_140kSection_ButtonHolder">
						<button className="BufferIndex_140kSection_ButtonHolder_Button">
							Get Started Now
						</button>
					</div>
				</div>
			</section>

			{/* ****************************************************************** */}
			{/* *****   section separator SECTION     ****** */}
			{/* ***************************************************************** */}

			<section className="BufferIndex_SectionSeparator "></section>

			{/* ****************************************************************** */}
			{/* *****   FOOTER SECTION SECTION     ****** */}
			{/* ***************************************************************** */}

			<section className="BufferIndex_FooterContainer ">
				<div className="BufferIndex_FooterContainer_InnerContainer ">
					{/* logo box */}
					<div className="BufferIndex_FooterContainer_InnerContainer_LogoBox ">
						<div className="BufferIndex_FooterContainer_InnerContainer_LogoBox_Logo ">
							<img src={bufferFooterLogo} alt="footer logo" />
						</div>

						<div className="BufferIndex_FooterContainer_InnerContainer_DownloadBox ">
							<div className="BufferIndex_FooterContainer_InnerContainer_DownloadBox_SocialMediaLogos ">
								{navChannelsItems &&
									navChannelsItems
										.filter((el) => el !== "Google Business Profile")
										.map((el) => {
											const { iconClass } = el;
											return (
												<i
													key={new Date().getTime().toString() + iconClass}
													className={iconClass}
												></i>
											);
										})}
							</div>

							<div className="BufferIndex_FooterContainer_InnerContainer_DownloadBox_DownloadTextContainer ">
								<div>Download</div>
							</div>

							<div className="BufferIndex_FooterContainer_InnerContainer_DownloadBox_DownloadButtonsContainer ">
								<button className="BufferIndex_FooterContainer_InnerContainer_DownloadBox_DownloadButtonsContainer_Button">
									<i className="bi bi-apple"></i>
									App Store
								</button>
								<button className="BufferIndex_FooterContainer_InnerContainer_DownloadBox_DownloadButtonsContainer_Button">
									<i className="bi bi-google-play"></i>
									Google Play
								</button>
							</div>

							<div className="BufferIndex_FooterContainer_InnerContainer_DownloadBox_CopyrightTextBox ">
								<div>Copyright ©2023 Buffer</div>
								<div>|</div>
								<div className="BufferIndex_FooterContainer_InnerContainer_DownloadBox_CopyrightTextBox_Link">
									Privacy
								</div>
								<div>|</div>
								<div className="BufferIndex_FooterContainer_InnerContainer_DownloadBox_CopyrightTextBox_Link">
									Terms
								</div>
								<div>|</div>
								<div className="BufferIndex_FooterContainer_InnerContainer_DownloadBox_CopyrightTextBox_Link">
									Security
								</div>
							</div>

							{/* end of Download Social media box */}
						</div>

						{/* end of logo box */}
					</div>

					{/* ITEMS BOX */}
					<div className="BufferIndex_FooterContainer_InnerContainer_ItemsBoxes ">
						{footerMenuItems &&
							footerMenuItems.map((el) => {
								const { heading, items } = el;
								return (
									<div
										key={new Date().getTime().toString() + heading}
										className="BufferIndex_FooterContainer_InnerContainer_ItemsBoxes_SingleBox "
									>
										<div className="BufferIndex_FooterContainer_InnerContainer_ItemsBoxes_SingleBox_Heading ">
											{heading}
										</div>
										{items &&
											items.map((el2) => {
												return (
													<div
														key={new Date().getTime().toString() + el2}
														className="BufferIndex_FooterContainer_InnerContainer_ItemsBoxes_SingleBox_Item "
													>
														{el2 === "Start Page" ? (
															<>
																<ButtonNewSmall text={"New"} /> {el2}
															</>
														) : (
															el2
														)}
													</div>
												);
											})}
									</div>
								);
							})}
					</div>

					{/* end of inner container */}
				</div>
			</section>

			<section className="BufferIndex_SectionSeparator "></section>

			{/* end of box-index container */}
		</div>
	);
};

export default Buffer;
