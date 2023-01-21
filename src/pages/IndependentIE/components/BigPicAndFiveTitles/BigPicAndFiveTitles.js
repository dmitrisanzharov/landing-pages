import React from "react";
import "./BigPicAndFiveTitles.css";

// components
import PremiumIcon from "../PremiumIcon/PremiumIcon";
import PhotoSmallIconCategory from "../PhotoSmallIconCategory/PhotoSmallIconCategory";

const BigPicAndFiveTitles = ({ data }) => {
	const { bigPic, titles } = data;

	return (
		<section className="IndependentIE_BigPicAndFiveTitlesSection IndependentIE_MainContentContainer ">
			{/* big image box */}
			<div className="IndependentIE_BigPicAndFiveTitlesSection_ImgBox ">
				<div className="IndependentIE_BigPicAndFiveTitlesSection_ImgBox_ImgHolder">
					<img src={bigPic.img} alt={bigPic.heading} width="100%" />
					<PhotoSmallIconCategory iconType="photo" />
				</div>

				<div className="IndependentIE_BigPicAndFiveTitlesSection_ImgBox_TextBox ">
					<div className="IndependentIE_BigPicAndFiveTitlesSection_ImgBox_TextBox_CategoryAndPremium  IndependentIECategoryAndPremiumSeparator">
						<div className="IndependentIESmallCategoryText">
							{bigPic.category}
						</div>
						<PremiumIcon />
					</div>
					<div className="IndependentIE_BigPicAndFiveTitlesSection_ImgBox_TextBox_CategoryAndPremium_Heading IndependentIEBigHeading ">
						{bigPic.heading}
					</div>
				</div>
			</div>
			{/* titles */}
			<div className="IndependentIE_BigPicAndFiveTitlesSection_TitlesContainer ">
				<div className="IndependentIE_BigPicAndFiveTitlesSection_TitlesContainer_MostRead ">
					Most Read
				</div>
				{titles &&
					titles.map((el, i) => {
						const { readAgo, heading } = el;
						return (
							<div
								key={heading + i}
								className="IndependentIE_BigPicAndFiveTitlesSection_TitlesContainer_SingleTitleItem "
							>
								<div className="IndependentIE_BigPicAndFiveTitlesSection_TitlesContainer_SingleTitleItem_Index ">
									{i + 1}
								</div>
								<div className="IndependentIE_BigPicAndFiveTitlesSection_TitlesContainer_SingleTitleItem_DaysAgoAndHeading ">
									<div className="IndependentIE_BigPicAndFiveTitlesSection_TitlesContainer_SingleTitleItem_DaysAgoAndHeading_DaysAgo ">
										{readAgo}
									</div>
									<div className="IndependentIE_BigPicAndFiveTitlesSection_TitlesContainer_SingleTitleItem_DaysAgoAndHeading_Heading ">
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

export default BigPicAndFiveTitles;
