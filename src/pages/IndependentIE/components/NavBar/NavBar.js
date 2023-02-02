import React from "react";
import "./NavBar.css";

// icons
import mainLogo from "../../icons/mainLogo.svg";

const NavBar = ({ data }) => {
	return (
		<nav className="IndependentIE_NavBarContainer ">
			<div className="IndependentIE_NavBarContainer_Inner IndependentIE_MainContentContainer ">
				{/* logo */}
				<div className="IndependentIE_NavBarContainer_Inner_Logo ">
					<div className="IndependentIE_NavBarContainer_Inner_Logo_Text">
						Independent.ie
					</div>
					<div className="IndependentIE_NavBarContainer_Inner_Logo_Img">
						<img src={mainLogo} alt="main logo" />
					</div>
				</div>
				{/* items */}
				<div className="IndependentIE_NavBarContainer_Inner_Items ">
					{data
						.filter((el) => el.navBar)
						.map((el2, i) => {
							const { heading, color } = el2;
							return (
								<div
									key={el2 + i}
									style={{ color: color }}
									className="IndependentIE_NavBarContainer_Inner_Items_SingleItem "
								>
									{heading}
								</div>
							);
						})}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
