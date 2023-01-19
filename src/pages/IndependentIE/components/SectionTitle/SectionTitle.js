import React from "react";
import "./SectionTitle.css";

// frameworks
import classNames from "classnames";

const SectionTitle = ({ titleName, isWhite }) => {
	return (
		<div
			className={classNames(
				"IndependentIE_SectionTitleContainer IndependentIE_MainContentContainer",
				{ "IndependentIE_SectionTitleContainer--WhiteColor": isWhite }
			)}
		>
			<div className="IndependentIE_SectionTitleContainer_Title">
				{titleName}
			</div>
			<div className="IndependentIE_SectionTitleContainer_More">More {">"}</div>
		</div>
	);
};

export default SectionTitle;
