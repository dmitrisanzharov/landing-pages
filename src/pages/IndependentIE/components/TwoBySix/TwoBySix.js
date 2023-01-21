import React from "react";
import "./TwoBySix.css";

// components
import PhotoSmallIconCategory from "../PhotoSmallIconCategory/PhotoSmallIconCategory";
import PremiumIcon from "../PremiumIcon/PremiumIcon";

const TwoBySix = ({ data }) => {
	return (
		<section className="IndependentIE_TwoBySixSection IndependentIE_MainContentContainer ">
			{data &&
				data.map((el, i) => {
					const { img, category, isPremium, miniIcon, heading } = el;
					return (
						<div
							key={i + heading}
							className="IndependentIE_TwoBySixSection_SingleItem "
						>
							<div className="IndependentIE_TwoBySixSection_SingleItem_ImgHolder">
								<img src={img} alt={heading} width="100%" />
								{miniIcon && <PhotoSmallIconCategory iconType={miniIcon} />}
							</div>
							<div className="IndependentIE_TwoBySixSection_SingleItem_TextHolder">
								<div className="IndependentIE_TwoBySixSection_SingleItem_TextHolder_CategoryAndPremium  IndependentIECategoryAndPremiumSeparator">
									<div className="IndependentIESmallCategoryText">
										{category}
									</div>
									{isPremium && <PremiumIcon />}
								</div>
								<div className="IndependentIE_TwoBySixSection_SingleItem_TextHolder_Heading IndependentIEMediumHeading ">
									{heading}
								</div>
							</div>
						</div>
					);
				})}
		</section>
	);
};

export default TwoBySix;
