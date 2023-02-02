import React from "react";
import "./TwoByThree.css";

// images
import reverseQuotes from "../../icons/reverseQuotes.jpg";

// components
import PhotoSmallIconCategory from "../PhotoSmallIconCategory/PhotoSmallIconCategory";
import PremiumIcon from "../PremiumIcon/PremiumIcon";

const TwoByThree = ({ data }) => {
	return (
		<section className="IndependentIE_TwoBySixSection IndependentIE_MainContentContainer ">
			{data &&
				data.map((el, i) => {
					const { img, category, isPremium, miniIcon, heading, quoteAuthor } =
						el;
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
								{quoteAuthor && (
									<div className="IndependentIE_TwoBySixSection_SingleItem_TextHolder_Quote IndependentIEMediumQuote">
										{quoteAuthor}
									</div>
								)}
								<div className="IndependentIE_TwoBySixSection_SingleItem_TextHolder_Heading IndependentIEMediumHeading ">
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
		</section>
	);
};

export default TwoByThree;
