import React from "react";
import "./SectionTitle.css";
import PropTypes from "prop-types";
import classNames from "classnames";

// icons
import locationIcon from "../../icons/locationIcon.svg";
import upAndDownIcon from "../../icons/upAndDownIcon.svg";

const SectionTitle = ({
	titleName,
	isWhite,
	showMore,
	mediumHeading,
	showCountyDropDown,
}) => {
	const [input, setInput] = React.useState("Select your country");

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
			{showCountyDropDown && (
				<div className="IndependentIE_SectionTitleContainer_CountyDropDown">
					<div className="IndependentIE_SectionTitleContainer_CountyDropDown_LocationIcon">
						<img src={locationIcon} alt="location pin" width="25px" />
					</div>
					<div className="IndependentIE_SectionTitleContainer_CountyDropDown_DropDownBox">
						<select value={input} onChange={(e) => setInput(e.target.value)}>
							<option value="Select your country" disabled>
								Select your country
							</option>
							<option value="Cork">Cork</option>
							<option value="Dublin">Dublin</option>
							<option value="Kerry">Kerry</option>
							<option value="Louth">Louth</option>
							<option value="Sligo">Sligo</option>
							<option value="Wexford">Wexford</option>
							<option value="Wicklow">Wicklow</option>
						</select>
					</div>
					<div className="IndependentIE_SectionTitleContainer_CountyDropDown_DropDownBox_UpAndDownIcon">
						<img src={upAndDownIcon} alt="up and down icon" width="15px" />
					</div>
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
	showCountyDropDown: PropTypes.bool,
};

SectionTitle.defaultProps = {
	showMore: true,
	isWhite: false,
	mediumHeading: false,
	showCountyDropDown: false,
};
