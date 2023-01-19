import React from "react";
import "./FourBoxes.css";

// components
import PremiumIcon from "../PremiumIcon/PremiumIcon";
import PhotoSmallIconCategory from "../PhotoSmallIconCategory/PhotoSmallIconCategory";

const FourBoxes = ({ data }) => {
	return (
		<section className="IndependentIEIndexContainer_FourBoxesSection ">
			<div className="IndependentIEIndexContainer_FourBoxesSection_Container IndependentIE_MainContentContainer">
				{data &&
					data.map((el, i) => {
						const { category, isPremium, miniIcon, image, heading } = el;
						return (
							<div
								className="IndependentIEIndexContainer_FourBoxesSection_Container_SingleItem "
								key={category + heading + i}
							>
								<div className="IndependentIEIndexContainer_FourBoxesSection_Container_SingleItem_Image">
									<img src={image} alt={heading} width="100%" />
									{miniIcon && <PhotoSmallIconCategory iconType={miniIcon} />}
								</div>

								<div className="IndependentIEIndexContainer_FourBoxesSection_Container_SingleItem_Text ">
									<div className="IndependentIEIndexContainer_FourBoxesSection_Container_SingleItem_Text_CategoryAndPremium ">
										<div className="IndependentIESmallCategoryText">
											{category}
										</div>
										{isPremium && <PremiumIcon />}
									</div>

									<div className="IndependentIEIndexContainer_FourBoxesSection_Container_SingleItem_Text_Heading IndependentIEMediumHeading ">
										{heading}
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</section>
	);
};

export default FourBoxes;
