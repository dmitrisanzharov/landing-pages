import React from "react";
import "./PhotoSmallIconCategory.css";

// icon imports
import photoIcon2 from "../../icons/photoIcon2.svg";
import headphonesIcon2 from "../../icons/headphonesIcon2.svg";
import playIcon3 from "../../icons/playIcon3.svg";

const PhotoSmallIconCategory = ({ iconType }) => {
	// functions
	function swapIcon() {
		if (iconType === "photo") {
			return photoIcon2;
		}

		if (iconType === "play") {
			return playIcon3;
		}

		if (iconType === "listen") {
			return headphonesIcon2;
		}

		return photoIcon2;
	}

	return (
		<div className="IndependentIE_PhotoSmallIconContainer">
			<div className="IndependentIE_PhotoSmallIconContainerBackground"></div>
			<div className="IndependentIE_PhotoSmallIconContainer_Image">
				<img src={swapIcon()} alt="small icon" width="26px" />
			</div>
		</div>
	);
};

export default PhotoSmallIconCategory;
