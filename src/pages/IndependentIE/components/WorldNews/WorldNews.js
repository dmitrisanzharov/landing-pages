import React from "react";
import "./WorldNews.css";

// icons
import photoIcon2_Red from "../../icons/photoIcon2_Red.svg";
import reverseQuotes_Red from "../../icons/reverseQuotes_Red.jpg";

// components
import SectionTitle from "../SectionTitle/SectionTitle";
import PremiumIcon from "../PremiumIcon/PremiumIcon";

const WorldNews = ({ data }) => {
	const { bigPic, items } = data;

	return (
		<section className="IndependentIE_WorldNews">
			<SectionTitle titleName="Ukraine and World News" mediumHeading={true} />
			<div className="IndependentIE_WorldNews_InnerContainer IndependentIE_MainContentContainer ">
				{/* image */}
				<div className="IndependentIE_WorldNews_InnerContainer_ImgBox ">
					<div className="IndependentIE_WorldNews_InnerContainer_ImgBox_ImgHolder">
						<img src={bigPic.img} alt={bigPic.heading} width="100%" />
						<div className="IndependentIE_WorldNews_InnerContainer_ImgBox_ImgHolder_TextBox ">
							<div className="IndependentIE_WorldNews_InnerContainer_ImgBox_ImgHolder_TextBox_Background"></div>
							<div className="IndependentIE_WorldNews_InnerContainer_ImgBox_ImgHolder_TextBox_Category IndependentIESmallCategoryText ">
								{bigPic.category}
							</div>
							<div className="IndependentIE_WorldNews_InnerContainer_ImgBox_ImgHolder_TextBox_MiniIconAndHeading ">
								<span className="IndependentIE_WorldNews_InnerContainer_ImgBox_ImgHolder_TextBox_MiniIconAndHeading_MiniIcon ">
									<img src={photoIcon2_Red} alt="red icon" width="26px" />
								</span>
								<span className="IndependentIE_WorldNews_InnerContainer_ImgBox_ImgHolder_TextBox_MiniIconAndHeading_Heading IndependentIEBigHeading ">
									{bigPic.heading}
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* items box */}
				<div className="IndependentIE_WorldNews_InnerContainer_ItemsBox ">
					{items &&
						items.map((el, i) => {
							const { heading, isPremium, quoteAuthor, miniIcon } = el;
							return (
								<div
									key={i + heading}
									className="IndependentIE_WorldNews_InnerContainer_ItemsBox_SingleItem "
								>
									{isPremium && (
										<div className="IndependentIE_WorldNews_InnerContainer_ItemsBox_SingleItem_Premium ">
											<PremiumIcon />
										</div>
									)}
									{quoteAuthor && (
										<div className="IndependentIE_WorldNews_InnerContainer_ItemsBox_SingleItem_Quote IndependentIEMediumQuote ">
											{quoteAuthor}
										</div>
									)}

									<div className="IndependentIE_WorldNews_InnerContainer_ItemsBox_SingleItem_Heading IndependentIEMediumHeading">
										{quoteAuthor && (
											<span className="IndependentIE_WorldNews_InnerContainer_ItemsBox_SingleItem_Heading_QuotesIcon">
												<img src={reverseQuotes_Red} alt="reverse quotes red" />
											</span>
										)}
										{miniIcon && (
											<div className="IndependentIE_WorldNews_InnerContainer_ItemsBox_SingleItem_Heading_MiniIcon ">
												<img
													src={photoIcon2_Red}
													alt="red icon of camera"
													width="100%"
												/>
											</div>
										)}
										{heading}
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default WorldNews;
