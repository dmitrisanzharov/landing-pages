import React from "react";
import "./SectionTitle.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const SectionTitle = ({ titleName, isWhite, showMore, mediumHeading }) => {
	return (
		<div
			className={classNames(
				"IndependentIE_SectionTitleContainer IndependentIE_MainContentContainer",
				{ "IndependentIE_SectionTitleContainer--WhiteColor": isWhite }
			)}
		>
			<div
				className={classNames("IndependentIE_SectionTitleContainer_Title", {
					"IndependentIE_SectionTitleContainer_Title--Medium": mediumHeading,
				})}
			>
				{titleName}
			</div>
			{showMore && (
				<div className="IndependentIE_SectionTitleContainer_More">
					More {">"}
				</div>
			)}
		</div>
	);
};

export default SectionTitle;

SectionTitle.propTypes = {
	titleName: PropTypes.string.isRequired,
	isWhite: PropTypes.bool,
	showMore: PropTypes.bool,
	mediumHeading: PropTypes.bool,
};

SectionTitle.defaultProps = {
	showMore: true,
	isWhite: false,
	mediumHeading: false,
};
