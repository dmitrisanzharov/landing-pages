import React from "react";
import "./SettingsModal.css";

// images
import didomi from "../../images/didomi.png";

// components
import CookiesAgreeDisagree from "../CookiesAgreeDisagree/CookiesAgreeDisagree";

const SettingsModal = ({
	setOpenSettings,
	setCookieDataDummyReRender,
	cookieDataDummyReRender,
	firstVisitState,
	setFirstVisitState,
	acceptOrRejectAllCookies,
}) => {
	if (firstVisitState) {
		return (
			<section className="IndependentIE_SettingsModal">
				<div className="IndependentIE_SettingsModal_Background"></div>
				<div className="IndependentIE_SettingsModal_MainBox">
					<div className="IndependentIE_SettingsModal_MainBox_Heading2 ">
						We and our partners use technologies, such as cookies, and process
						personal data, such as IP addresses and cookie identifiers, to
						personalise ads and content based on your interests, measure the
						performance of ads and content, and derive insights about the
						audiences who saw ads and content. Click below to consent to the use
						of this technology and the processing of your personal data for
						these purposes. You can change your mind and change your consent
						choices at any time by returning to this site. <br />
						With your agreement, we and{" "}
						<span className="IndependentIE_SettingsModal_MainBox_Heading2_OurPartnersSpan">
							our partners
						</span>{" "}
						use cookies or similar technologies to store, access, and process
						personal data like your visit on this website. You can withdraw your
						consent or object to data processing based on legitimate interest at
						any time by clicking on "Learn More" or in our Privacy Policy on
						this website.
					</div>
					<div className="IndependentIE_SettingsModal_MainBox_MiniHeading">
						We and our partners do the following data processing:
					</div>
					<div className="IndependentIE_SettingsModal_MainBox_MiniHeading--Gray">
						Extended measurement, Personalised ads and content, ad and content
						measurement, audience insights and product development, Precise
						geolocation data, and identification through device scanning, Social
						media, Store and/or access information on a device
					</div>
					<br />
					<button
						className="IndependentIE_SettingsModal_MainBox_ManageBtn"
						onClick={() => setFirstVisitState(false)}
					>
						Manage
					</button>
					<br />
					<button
						className="IndependentIE_SettingsModal_MainBox_ManageBtn--Accept"
						onClick={() => acceptOrRejectAllCookies(true)}
					>
						Accept
					</button>

					{/* end of main box */}
				</div>
			</section>
		);
	}

	if (!firstVisitState) {
		return (
			<section className="IndependentIE_SettingsModal">
				<div className="IndependentIE_SettingsModal_Background"></div>
				{/* MAIN BOX */}
				<div className="IndependentIE_SettingsModal_MainBox">
					{/* <div className="IndependentIE_SettingsModal_MainBox_OuterBorder"></div> */}
					<div className="IndependentIE_SettingsModal_MainBox_Header">
						<div className="IndependentIE_SettingsModal_MainBox_Header_Text">
							We value your privacy
						</div>

						{sessionStorage.getItem("firstVisit") === "yes" ? null : (
							<div
								className="IndependentIE_SettingsModal_MainBox_Header_X"
								onClick={() => setOpenSettings(false)}
							>
								✕
							</div>
						)}
					</div>
					<div className="IndependentIE_SettingsModal_MainBox_Heading2 ">
						You can set your consent preferences and determine how you want your
						data to be used based on the purposes below. You may set your
						preferences for us independently from those of third-party partners.
						Each purpose has a description so that you know how we and partners
						use your data.
					</div>
					<div className="IndependentIE_SettingsModal_MainBox_YouAllow ">
						YOU ALLOW
					</div>
					{/* COOKIES SHOULD GO HERE */}
					<div className="IndependentIE_SettingsModal_MainBox_Items">
						{JSON.parse(
							sessionStorage.getItem("independentIECookieSettings")
						).map((el, i) => {
							return (
								<div
									key={el + i}
									className="IndependentIE_SettingsModal_MainBox_Items_SingleItem"
								>
									<CookiesAgreeDisagree
										setCookieDataDummyReRender={setCookieDataDummyReRender}
										cookieDataDummyReRender={cookieDataDummyReRender}
										data={el}
										index={i}
									/>
								</div>
							);
						})}
					</div>
					<div className="IndependentIE_SettingsModal_MainBox_ViewPartnerBox ">
						<div className="IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn">
							View our partners
						</div>
					</div>
					<footer className="IndependentIE_SettingsModal_MainBox_Footer ">
						<div className="IndependentIE_SettingsModal_MainBox_Footer_DidomiImg">
							<img src={didomi} alt="didomi" />
						</div>

						{/* either AGREE OR DISAGREE TO ALL BUTTONS or Save button */}
						{sessionStorage.getItem("firstVisit") === "yes" ? (
							<div className="IndependentIE_SettingsModal_MainBox_Footer_TwoButtons">
								<div
									className="IndependentIE_SettingsModal_MainBox_Footer_Button--AgreeToAll"
									onClick={() => acceptOrRejectAllCookies(true)}
								>
									Agree to all
								</div>
								<div
									className="IndependentIE_SettingsModal_MainBox_Footer_Button--AgreeToAll--Disagree"
									onClick={() => acceptOrRejectAllCookies(false)}
								>
									Disagree to all
								</div>
							</div>
						) : (
							<div
								className="IndependentIE_SettingsModal_MainBox_Footer_Button"
								onClick={() => setOpenSettings(false)}
							>
								Save
							</div>
						)}
					</footer>
					{/* END OF MAIN BOX */}
				</div>
			</section>
		);
	}
};

export default SettingsModal;
