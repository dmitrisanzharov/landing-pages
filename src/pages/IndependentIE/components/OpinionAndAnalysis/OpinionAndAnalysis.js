import React from "react";
import "./OpinionAndAnalysis.css";

// components
import PremiumIcon from "../PremiumIcon/PremiumIcon";

// icon
import reverseQuotes from "../../icons/reverseQuotes.jpg";

const OpinionAndAnalysis = ({ data }) => {
	const { imgSection, quotesSection } = data;

	return (
		<section className="IndependentIE_MainContentContainer IndependentIE_OpinionAndAnalysis ">
			{/* img section */}
			{imgSection &&
				imgSection.map((el, i) => {
					const { img, quoteAuthor, heading } = el;
					return (
						<div
							key={i + heading}
							className="IndependentIE_OpinionAndAnalysis_SingleItem "
						>
							<div className="IndependentIE_OpinionAndAnalysis_SingleItem_ImgBox ">
								<img src={img} alt={heading} width="100%" />
							</div>
							<div className="IndependentIE_OpinionAndAnalysis_SingleItem_TextBox ">
								<div className="IndependentIE_OpinionAndAnalysis_SingleItem_TextBox_CategoryAndPremium IndependentIECategoryAndPremiumSeparator ">
									<div className="IndependentIESmallCategoryText">Comment</div>
									<PremiumIcon />
								</div>
								<div className="IndependentIE_OpinionAndAnalysis_SingleItem_TextBox_QuoteAuthor IndependentIEMediumQuote ">
									{quoteAuthor}
								</div>
								<div className="IndependentIE_OpinionAndAnalysis_SingleItem_TextBox_Heading IndependentIEMediumHeading ">
									<div className="IndependentIE_OpinionAndAnalysis_SingleItem_TextBox_Heading_ReverseQuotes">
										<img src={reverseQuotes} alt={"reverse quotes"} />
									</div>
									{heading}
								</div>
							</div>
						</div>
					);
				})}
			{/* quotesSection */}
			{quotesSection &&
				quotesSection.map((el, i) => {
					const { quoteAuthor, heading, img } = el;
					return (
						<div
							key={i + heading}
							className="IndependentIE_OpinionAndAnalysis_SingleItem2 "
						>
							{/* text */}
							<div className="IndependentIE_OpinionAndAnalysis_SingleItem2_Text ">
								<div className="IndependentIE_OpinionAndAnalysis_SingleItem2_Text_Heading IndependentIEMediumHeading ">
									{heading}
								</div>
								<div className="IndependentIE_OpinionAndAnalysis_SingleItem_Text_QuoteAuthor IndependentIEMediumQuote ">
									{quoteAuthor}
								</div>
							</div>

							{/* img */}
							{img && (
								<div className="IndependentIE_OpinionAndAnalysis_SingleItem2_Img ">
									<div className="">
										<img src={img} alt={quoteAuthor} width="100%" />
									</div>
								</div>
							)}
						</div>
					);
				})}
		</section>
	);
};

export default OpinionAndAnalysis;
