import React, { useEffect, useState } from "react";
import "./SettingsModal.css";

// images
import didomi from "../../images/didomi.png";

// components
import CookiesAgreeDisagree from "../CookiesAgreeDisagree/CookiesAgreeDisagree";

const SettingsModal = ({
	setOpenSettings,
	setCookieDataDummyReRender,
	cookieDataDummyReRender,
}) => {
	return (
		<section className="IndependentIE_SettingsModal drr">
			<div className="IndependentIE_SettingsModal_Background"></div>
			{/* MAIN BOX */}
			<div className="IndependentIE_SettingsModal_MainBox dbb">
				<div className="IndependentIE_SettingsModal_MainBox_Header">
					<div className="IndependentIE_SettingsModal_MainBox_Header_Text">
						We value your privacy
					</div>
					<div
						className="IndependentIE_SettingsModal_MainBox_Header_X"
						onClick={() => setOpenSettings(false)}
					>
						✕
					</div>
				</div>
				<div className="IndependentIE_SettingsModal_MainBox_Heading2 drr">
					You can set your consent preferences and determine how you want your
					data to be used based on the purposes below. You may set your
					preferences for us independently from those of third-party partners.
					Each purpose has a description so that you know how we and partners
					use your data.
				</div>
				<div className="IndependentIE_SettingsModal_MainBox_YouAllow drr">
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
				<div className="IndependentIE_SettingsModal_MainBox_ViewPartnerBox drr">
					<div className="IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn">
						View our partners
					</div>
				</div>
				<footer className="IndependentIE_SettingsModal_MainBox_Footer drr">
					<div className="IndependentIE_SettingsModal_MainBox_Footer_DidomiImg">
						<img src={didomi} alt="didomi" />
					</div>
					<div
						className="IndependentIE_SettingsModal_MainBox_Footer_Button"
						onClick={() => setOpenSettings(false)}
					>
						Save
					</div>
				</footer>
				{/* END OF MAIN BOX */}
			</div>
		</section>
	);
};

export default SettingsModal;
