import React, { useEffect, useState } from "react";
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
import twoBySixData from "./view/twoBySixData";
import worldNewsData from "./view/worldNewsData";
import opinionAndAnalysisData from "./view/opinionAndAnalysisData";

// icons
import searchIcon from "./icons/searchIcon.svg";
import userIcon from "./icons/userIcon.svg";
import mainLogo from "./icons/mainLogo.svg";
import hamburgerIcon from "./icons/hamburgerIcon.svg";
import closeIcon from "./icons/closeIcon.svg";

// components
import Footer from "./components/Footer/Footer";
import TwoPicsAnd4SmallBoxesComponent from "./components/TwoPicsAnd4SmallBoxesComponent/TwoPicsAnd4SmallBoxesComponent";
import FourBoxes from "./components/FourBoxes/FourBoxes";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import TwoByFiveComponent from "./components/twoByFiveComponent/twoByFiveComponent";
import VideoSection from "./components/VideoSection/VideoSection";
import BigPicAndFiveTitles from "./components/BigPicAndFiveTitles/BigPicAndFiveTitles";
import TwoBySix from "./components/TwoBySix/TwoBySix";
import WorldNews from "./components/WorldNews/WorldNews";
import OpinionAndAnalysis from "./components/OpinionAndAnalysis/OpinionAndAnalysis";

const IndependentIEIndex = () => {
	// state
	const [userAllowedLocation, setUserAllowedLocation] = useState(true);
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");
	const [city, setCity] = useState("");
	const [temperature, setTemperature] = useState("");
	const [openSectionsInNavBar, setOpenSectionsInNavBar] = useState(false);

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

	return (
		<div className="IndependentIEIndexContainer">
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

			{openSectionsInNavBar && <Footer />}

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

			<TwoBySix data={twoBySixData[0]} />

			<div className="IndependentIEIndexContainer_SectionSeparator "></div>

			<WorldNews data={worldNewsData[0]} />

			<div className="IndependentIEIndexContainer_SectionSeparator "></div>

			<SectionTitle titleName="Opinion & Analysis" />

			<div className="IndependentIEIndexContainer_SectionSeparator"></div>

			<OpinionAndAnalysis data={opinionAndAnalysisData[0]} />

			<div className="IndependentIEIndexContainer_SectionSeparator"></div>

			<SectionTitle titleName="Sport" />

			<div className="IndependentIEIndexContainer_SectionSeparator"></div>

			{/* --------------------------------------------- */}
			{/* ----------some content for spacing ------------------ */}
			{/* --------------------------------------------- */}
			<div>
				<hr />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla obcaecati
				debitis assumenda fugit libero ipsam! Magnam dolore temporibus, eum
				perspiciatis suscipit minima amet, minus ipsa quidem earum ex numquam
				odio et maiores. Dicta placeat quos, reprehenderit ullam repellendus
				quibusdam rem incidunt natus beatae consequuntur, sed dolor. Assumenda
				est praesentium commodi culpa. Ipsam, odio commodi voluptates delectus
				asperiores est accusamus reprehenderit? A voluptate placeat maxime modi
				nostrum amet minima officiis architecto explicabo eveniet odit sint
				iste, adipisci quis excepturi beatae, ducimus aspernatur perferendis
				magnam earum, voluptates quia unde facere. Maxime ad odio dolore
				necessitatibus dolor, sit aspernatur consequatur animi numquam
				repellendus laudantium doloribus, odit illum aut iure possimus quos
				deleniti ipsum accusamus? Minus labore perspiciatis id quo, tempora
				voluptatibus ut distinctio culpa esse accusantium officia vero
				molestiae, veniam corporis consequatur sapiente, ad unde. Eveniet fugit,
				incidunt sit cumque magni neque atque quod cum a tempora numquam veniam,
			</div>

			{/* end of  IndependentIEIndexContainer*/}
		</div>
	);
};

export default IndependentIEIndex;
