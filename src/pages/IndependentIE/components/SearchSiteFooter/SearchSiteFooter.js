import React from "react";
import "./SearchSiteFooter.css";

// icons
import mainLogo from "../../icons/mainLogo.svg";
import searchIcon from "../../icons/searchIcon.svg";

const SearchSiteFooter = () => {
	return (
		<footer className="IndependentIE_SearchSiteFooter">
			<div className="IndependentIE_SearchSiteFooter_Inner IndependentIE_MainContentContainer ">
				{/* logo */}
				<div className="IndependentIE_SearchSiteFooter_Inner_Logo ">
					Independent.ie
					<img
						src={mainLogo}
						alt="independent dot i e main logo"
						width="32px"
					/>
				</div>
				{/* search */}
				<div className="IndependentIE_SearchSiteFooter_Inner_Search ">
					<input type="text" placeholder="Search entire site" />
					<div className="IndependentIE_SearchSiteFooter_Inner_Search_IconHolder ">
						<img src={searchIcon} alt="search entire site" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default SearchSiteFooter;
