import React, { useEffect, useState, useMemo } from "react";
import "./IndependentIEIndex.css";
import moment from "moment";
import axios from "axios";

// view
import allSectionsAndSubSections from "./view/allSectionsAndSubSections";
import inFocusItems from "./view/inFocusItems";
import twoPicsAnd4SmallBoxesComponentData from "./view/twoPicsAnd4SmallBoxesComponentData";
import fourBoxesComponentData from "./view/fourBoxesComponentData";
import twoByFiveComponentData from "./view/twoByFiveComponentData";
import videoSectionData from "./view/videoSectionData";
import bigPicAndFiveTitlesData from "./view/bigPicAndFiveTitlesData";
import twoByThreeData from "./view/twoByThreeData";
import worldNewsData from "./view/worldNewsData";
import opinionAndAnalysisData from "./view/opinionAndAnalysisData";
import subscribeNewsLetterData from "./view/subscribeNewsLetterData";
import siteMapData from "./view/siteMapData";
import cookiesSettings from "./view/cookiesSettings";

// icons
import searchIcon from "./icons/searchIcon.svg";
import userIcon from "./icons/userIcon.svg";
import mainLogo from "./icons/mainLogo.svg";
import hamburgerIcon from "./icons/hamburgerIcon.svg";
import closeIcon from "./icons/closeIcon.svg";
import gear3 from "./icons/gear3.svg";

// components
import Footer from "./components/Footer/Footer";
import TwoPicsAnd4SmallBoxesComponent from "./components/TwoPicsAnd4SmallBoxesComponent/TwoPicsAnd4SmallBoxesComponent";
import FourBoxes from "./components/FourBoxes/FourBoxes";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import TwoByFiveComponent from "./components/twoByFiveComponent/twoByFiveComponent";
import VideoSection from "./components/VideoSection/VideoSection";
import BigPicAndFiveTitles from "./components/BigPicAndFiveTitles/BigPicAndFiveTitles";
import TwoByThree from "./components/TwoByThree/TwoByThree";
import WorldNews from "./components/WorldNews/WorldNews";
import OpinionAndAnalysis from "./components/OpinionAndAnalysis/OpinionAndAnalysis";
import SubscribeOne from "./components/SubscribeOne/SubscribeOne";
import SubscribeNewsLetter from "./components/SubscribeNewsLetter/SubscribeNewsLetter";
import SearchSiteFooter from "./components/SearchSiteFooter/SearchSiteFooter";
import SiteMap from "./components/SiteMap/SiteMap";
import NavBar from "./components/NavBar/NavBar";
import SettingsModal from "./components/SettingsModal/SettingsModal";

const IndependentIEIndex = () => {
	// state
	const [userAllowedLocation, setUserAllowedLocation] = useState(true);
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");
	const [city, setCity] = useState("");
	const [temperature, setTemperature] = useState("");
	const [openSectionsInNavBar, setOpenSectionsInNavBar] = useState(false);
	const [openSettings, setOpenSettings] = useState(false);
	const [cookieDataDummyReRender, setCookieDataDummyReRender] = useState(0);

	// functions

	// useEffects
	useEffect(() => {
		function getPosition() {
			const successCallback = (position) => {
				setLatitude(position.coords.latitude);
				setLongitude(position.coords.longitude);
				setUserAllowedLocation(true);
			};

			const errorCallback = (error) => {
				setUserAllowedLocation(false);
			};

			navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
		}

		getPosition();
	}, []);

	useEffect(() => {
		if (latitude === "" || longitude === "") {
			return;
		}

		async function getWeather() {
			let res = await axios.get(
				`https://api.weatherapi.com/v1/forecast.json?key=41f45fae847b41b1b10233824231401&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`
			);

			setCity(res.data.location.name);
			setTemperature(res.data.current.temp_c);
		}
		getWeather();
	}, [latitude, longitude]);

	useMemo(() => {
		const checkIfPreviouslyUsed = sessionStorage.getItem(
			"independentIECookieSettings"
		);

		if (checkIfPreviouslyUsed) {
			return;
		}

		sessionStorage.setItem(
			"independentIECookieSettings",
			JSON.stringify(cookiesSettings)
		);
	}, []);

	return (
		<div className="IndependentIEIndexContainer">
			{/* --------------------------------------------- */}
			{/* ----------SETTINGS BUTTON------------------ */}
			{/* --------------------------------------------- */}
			<div
				className="IndependentIEIndexContainer_PrivacyButton"
				onClick={() => setOpenSettings(true)}
			>
				{/* icon */}
				<div className="IndependentIEIndexContainer_PrivacyButton_GearIcon">
					<img src={gear3} alt="gear and settings" />
				</div>
				{/* text */}
				<div className="IndependentIEIndexContainer_PrivacyButton_Text">
					Privacy
				</div>
			</div>

			{/* --------------------------------------------- */}
			{/* ----------SETTINGS MODAL------------------ */}
			{/* --------------------------------------------- */}

			{openSettings && (
				<SettingsModal
					setOpenSettings={setOpenSettings}
					setCookieDataDummyReRender={setCookieDataDummyReRender}
					cookieDataDummyReRender={cookieDataDummyReRender}
				/>
			)}

			<div className="IndependentIE_Z_Index_100">
				{/* --------------------------------------------- */}
				{/* ----------Search bar------------------ */}
				{/* --------------------------------------------- */}
				<section className="IndependentIEIndexContainer_SearchBarSection">
					<div className="IndependentIEIndexContainer_SearchBarSection_Container ">
						<div className="IndependentIEIndexContainer_SearchBarSection_Container_SearchBarBox ">
							<div className="IndependentIEIndexContainer_SearchBarSection_Container_SearchBarBox_InputBox">
								<input type="text" placeholder="Search" />
							</div>
							<div className="IndependentIEIndexContainer_SearchBarSection_Container_SearchBarBox_IconBox ">
								<img
									src={searchIcon}
									alt="search for items"
									width="20px"
									height="20px"
								/>
							</div>
						</div>

						<div className="IndependentIEIndexContainer_SearchBarSection_Container_TimeNTempBox ">
							<div className="IndependentIEIndexContainer_SearchBarSection_Container_TimeNTempBox_Date ">
								{moment().format("dddd")}, {moment().format("Do MMMM YYYY")}
							</div>

							{userAllowedLocation && temperature && city && (
								<>
									<div>|</div>
									<div className="IndependentIEIndexContainer_SearchBarSection_Container_TimeNTempBox_Temprature">
										{temperature}°C
									</div>
									<div className="IndependentIEIndexContainer_SearchBarSection_Container_TimeNTempBox_City">
										<b>{city}</b>
									</div>
								</>
							)}
						</div>

						<div className="IndependentIEIndexContainer_SearchBarSection_Container_SubNLoginBox ">
							<button className="IndependentIEIndexContainer_SearchBarSection_Container_SubNLoginBox_SubscribeButton">
								Subscribe
							</button>
							<button className="IndependentIEIndexContainer_SearchBarSection_Container_SubNLoginBox_LoginButton">
								<div>Log In </div>
								<div>
									<img src={userIcon} alt="user login" width="20px" />
								</div>
							</button>
						</div>
					</div>
				</section>
				{/* --------------------------------------------- */}
				{/* ---------- MAIN LOGO LOGO SECTION------------------ */}
				{/* --------------------------------------------- */}
				<section className="IndependentIEIndexContainer_MainLogoSection ">
					Independent.ie
					<img src={mainLogo} alt="independent dot i e main logo" />
					<div className="IndependentIEIndexContainer_MainLogoSection_SubNLogInBox">
						<div>Subscribe</div>
						<div className="IndependentIEIndexContainer_MainLogoSection_SubNLogInBox_Separator">
							|
						</div>
						<div>Log In</div>
						<div className="IndependentIEIndexContainer_MainLogoSection_SubNLogInBox_UserIcon">
							<img src={userIcon} alt="user login" width="20px" />
						</div>
					</div>
				</section>
				{/* --------------------------------------------- */}
				{/* ----------Nav Bar Section------------------ */}
				{/* --------------------------------------------- */}
				<section className="IndependentIEIndexContainer_NavBar">
					{openSectionsInNavBar ? (
						<div className="IndependentIEIndexContainer_NavBar_SearchBox">
							<div className="IndependentIEIndexContainer_NavBar_SearchBox_Input">
								<input type="text" placeholder="Search" />
							</div>
							<div className="IndependentIEIndexContainer_NavBar_SearchBox_SearchIcon">
								{" "}
								<img
									src={searchIcon}
									alt="search for items"
									width="20px"
									height="20px"
								/>
							</div>
						</div>
					) : (
						<div className="IndependentIEIndexContainer_NavBar_NavItems">
							{allSectionsAndSubSections &&
								allSectionsAndSubSections
									.filter((el) => el.navBar)
									.map((el, i) => {
										return (
											<div
												key={new Date().getTime().toString() + el.heading}
												style={{ color: `${el.color}` }}
												className="IndependentIEIndexContainer_NavBar_NavItems_SingleItem "
											>
												{el.heading}
											</div>
										);
									})}
						</div>
					)}

					<div
						className="IndependentIEIndexContainer_NavBar_SectionsDropDown "
						onClick={() => setOpenSectionsInNavBar(!openSectionsInNavBar)}
					>
						<div className="IndependentIEIndexContainer_NavBar_SectionsDropDown_Icon">
							{openSectionsInNavBar ? (
								<img src={closeIcon} alt="close all sections" width="15px" />
							) : (
								<img src={hamburgerIcon} alt="open all sections" width="15px" />
							)}
						</div>
						<div className="IndependentIEIndexContainer_NavBar_SectionsDropDown_Text">
							Sections
						</div>
					</div>
				</section>
				{/* --------------------------------------------- */}
				{/* ----------Horizontal Line------------------ */}
				{/* --------------------------------------------- */}
				<section className="IndependentIEIndexContainer_HorizontalLine"></section>
				{/* --------------------------------------------- */}
				{/* ----------Footer ------------------ */}
				{/* --------------------------------------------- */}
				{openSectionsInNavBar && (
					<div className="IndependentIE_FooterHolder">
						<div className="IndependentIE_MainContentContainer">
							<Footer />
						</div>
					</div>
				)}
				{/* --------------------------------------------- */}
				{/* ----------In Focus Section ------------------ */}
				{/* --------------------------------------------- */}
				<section className="IndependentIEIndexContainer_InFocusSection">
					<div className="IndependentIEIndexContainer_InFocusSection_ItemsBox">
						{inFocusItems &&
							inFocusItems.map((el, i) => {
								return (
									<div
										key={el + i}
										className="IndependentIEIndexContainer_InFocusSection_ItemsBox_SingleItem"
										style={
											el === "In Focus: "
												? { fontWeight: "bold" }
												: { cursor: "pointer" }
										}
									>
										{el}
									</div>
								);
							})}
					</div>
				</section>
				<hr />
			</div>
			{/* --------------------------------------------- */}
			{/* ----------Nav Bar------------------ */}
			{/* --------------------------------------------- */}

			<NavBar data={allSectionsAndSubSections} />
			{/* --------------------------------------------- */}
			{/* ----------TwoPicsAnd4SmallBoxesComponent Section ------------------ */}
			{/* --------------------------------------------- */}
			<TwoPicsAnd4SmallBoxesComponent
				data={twoPicsAnd4SmallBoxesComponentData[0]}
			/>
			{/* --------------------------------------------- */}
			{/* ----------Four Boxes Section ------------------ */}
			{/* --------------------------------------------- */}
			<FourBoxes data={fourBoxesComponentData[0]} />
			{/* --------------------------------------------- */}
			{/* ----------Section separator ------------------ */}
			{/* --------------------------------------------- */}
			<div className="IndependentIEIndexContainer_SectionSeparator "></div>
			{/* --------------------------------------------- */}
			{/* ----------Section separator ------------------ */}
			{/* --------------------------------------------- */}
			<div className="IndependentIEIndexContainer_SectionSeparator "></div>
			{/* --------------------------------------------- */}
			{/* ----------Section Title Component ------------------ */}
			{/* --------------------------------------------- */}
			<SectionTitle titleName="Top Stories" />
			{/* --------------------------------------------- */}
			{/* ----------Section separator ------------------ */}
			{/* --------------------------------------------- */}
			<div className="IndependentIEIndexContainer_SectionSeparator "></div>
			{/* --------------------------------------------- */}
			{/* ----------Two by five component ------------------ */}
			{/* --------------------------------------------- */}
			<TwoByFiveComponent data={twoByFiveComponentData[0]} />
			{/* --------------------------------------------- */}
			{/* ----------Section separator ------------------ */}
			{/* --------------------------------------------- */}
			<div className="IndependentIEIndexContainer_SectionSeparator "></div>
			{/* --------------------------------------------- */}
			{/* ----------Video section------------------ */}
			{/* --------------------------------------------- */}
			<VideoSection data={videoSectionData[0]} />
			{/* --------------------------------------------- */}
			{/* ----------Section separator ------------------ */}
			{/* --------------------------------------------- */}
			<div className="IndependentIEIndexContainer_SectionSeparator "></div>
			<div className="IndependentIEIndexContainer_SectionSeparator "></div>
			<SectionTitle titleName="Featured" showMore={false} />
			<div className="IndependentIEIndexContainer_SectionSeparator "></div>
			<BigPicAndFiveTitles data={bigPicAndFiveTitlesData[0]} />
			<div className="IndependentIEIndexContainer_SectionSeparator "></div>
			<div className="IndependentIE_MainContentContainer">
				{" "}
				<hr />
			</div>
			<div className="IndependentIEIndexContainer_SectionSeparator "></div>
			<TwoByThree data={twoByThreeData[0]} />
			<div className="IndependentIEIndexContainer_SectionSeparator "></div>
			<WorldNews data={worldNewsData[0]} />
			<div className="IndependentIEIndexContainer_SectionSeparator "></div>
			<SectionTitle titleName="Opinion & Analysis" />
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<OpinionAndAnalysis data={opinionAndAnalysisData[0]} />
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<SubscribeOne />
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<SectionTitle titleName="Sport" />
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<TwoByThree data={twoByThreeData[1]} />
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<SectionTitle
				titleName="Local News"
				showMore={false}
				showCountyDropDown={true}
			/>
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<TwoPicsAnd4SmallBoxesComponent
				data={twoPicsAnd4SmallBoxesComponentData[1]}
			/>
			<FourBoxes data={fourBoxesComponentData[1]} />
			<div className="IndependentIEIndexContainer_FourBoxesSeparator"></div>
			<FourBoxes data={fourBoxesComponentData[2]} />
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<SectionTitle
				titleName="Editor's Choice"
				showMore={false}
				showCountyDropDown={false}
			/>
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<FourBoxes data={fourBoxesComponentData[3]} />
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<SectionTitle
				titleName="Podcasts"
				showMore={true}
				showCountyDropDown={false}
			/>
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<FourBoxes data={fourBoxesComponentData[4]} />
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<SubscribeNewsLetter data={subscribeNewsLetterData[0]} />
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<SubscribeNewsLetter data={subscribeNewsLetterData[1]} />
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<SectionTitle
				titleName="Entertainment"
				showMore={true}
				showCountyDropDown={false}
			/>
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<TwoByThree data={twoByThreeData[2]} />
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<SectionTitle
				titleName="Style"
				showMore={true}
				showCountyDropDown={false}
			/>
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<TwoByThree data={twoByThreeData[3]} />
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<SectionTitle
				titleName="Life"
				showMore={true}
				showCountyDropDown={false}
			/>
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<TwoByThree data={twoByThreeData[4]} />
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<SectionTitle
				titleName="Travel"
				showMore={true}
				showCountyDropDown={false}
			/>
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<TwoByThree data={twoByThreeData[5]} />
			<div className="IndependentIEIndexContainer_FourBoxesSeparator"></div>
			<div className="IndependentIE_MainContentContainer">
				<hr />
			</div>
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<div className="IndependentIEIndexContainer_SectionSeparator"></div>
			<SearchSiteFooter />

			<div className="IndependentIE_FooterHolder">
				<div className="IndependentIE_MainContentContainer">
					<Footer />
				</div>
			</div>

			<div className="IndependentIE_FooterEnder"></div>

			<SiteMap data={siteMapData} />
		</div>
	);
};

export default IndependentIEIndex;
