import React from "react";
import "./twoByFiveComponent.css";

// components
import PremiumIcon from "../PremiumIcon/PremiumIcon";
import PhotoSmallIconCategory from "../PhotoSmallIconCategory/PhotoSmallIconCategory";

// icons
import reverseQuotes from "../../icons/reverseQuotes.jpg";

const twoByFiveComponent = ({ data }) => {
	return (
		<div className="IndependentIE_twoByFiveContainer IndependentIE_MainContentContainer ">
			{data &&
				data.map((el, i) => {
					const { miniIcon, image, category, heading, isPremium, quoteAuthor } =
						el;
					return (
						<div
							key={i + heading}
							className="IndependentIE_twoByFiveContainer_SingleItem "
						>
							<div className="IndependentIE_twoByFiveContainer_SingleItem_Image">
								{miniIcon && <PhotoSmallIconCategory iconType={miniIcon} />}
								<img src={image} alt={heading} width="100%" />
							</div>
							<div className="IndependentIE_twoByFiveContainer_SingleItem_Text ">
								<div className="IndependentIESmallCategoryText IndependentIECategoryAndPremiumSeparator ">
									<div>{category}</div>
									{isPremium && <PremiumIcon />}
								</div>
								{quoteAuthor && (
									<div className="IndependentIEMediumQuote">{quoteAuthor}</div>
								)}
								<div className="IndependentIE_twoByFiveContainer_SingleItem_Text_Heading IndependentIEMediumHeading ">
									{quoteAuthor && (
										<span className="IndependentIE_ReverseQuotesImg">
											<img src={reverseQuotes} alt="reverse quotes" />
										</span>
									)}
									{heading}
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default twoByFiveComponent;
