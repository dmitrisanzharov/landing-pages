import React from "react";
import "./PremiumIcon.css";
import mainLogoWhite from "../../icons/mainLogoWhite.svg";

const PremiumIcon = () => {
	return (
		<div className="IndependentIE_PremiumIcon_Container">
			<div>Premium</div>
			<img src={mainLogoWhite} alt="main logo" width="13px" />
		</div>
	);
};

export default PremiumIcon;
