import React from "react";
import "./VideoSection.css";

// components
import SectionTitle from "../SectionTitle/SectionTitle";
import PhotoSmallIconCategory from "../PhotoSmallIconCategory/PhotoSmallIconCategory";

const VideoSection = ({ data }) => {
	const { bigPart, smallPart } = data;

	return (
		<section className="IndependentIE_VideoSection ">
			<div className="IndependentIEIndexContainer_SectionSeparator "></div>

			<SectionTitle titleName="Videos" isWhite={true} />

			<div className="IndependentIEIndexContainer_SectionSeparator "></div>

			<div className="IndependentIE_VideoSection_Container IndependentIE_MainContentContainer ">
				{/* box1 */}
				<div className="IndependentIE_VideoSection_Container_LargeBox ">
					<div className="IndependentIE_VideoSection_Container_LargeBox_Img">
						<img src={bigPart.image} alt={bigPart.heading} width="100%" />
						<PhotoSmallIconCategory iconType="play" />
					</div>
					<div className="IndependentIE_VideoSection_Container_LargeBox_Text ">
						<div className="IndependentIEBigHeading IndependentIE_VideoSection_Container_LargeBox_Text_Heading">
							{bigPart.heading}
						</div>
					</div>
				</div>
				<div className="IndependentIE_VideoSection_Container_SmallBox ">
					{smallPart &&
						smallPart.map((el, i) => {
							const { image, heading } = el;
							return (
								<div
									key={i + heading}
									className="IndependentIE_VideoSection_Container_SmallBox_SingleItem "
								>
									<div className="IndependentIE_VideoSection_Container_SmallBox_SingleItem_Img ">
										<img src={image} alt={heading} width="100%" />
										<div className="IndependentIE_VideoSection_Container_SmallBox_SingleItem_Img_MiniIcon">
											<PhotoSmallIconCategory iconType="play" />
										</div>
									</div>

									<div className="IndependentIE_VideoSection_Container_SmallBox_SingleItem_Text ">
										{heading}
									</div>
								</div>
							);
						})}
				</div>
			</div>

			<div className="IndependentIEIndexContainer_SectionSeparator "></div>
		</section>
	);
};

export default VideoSection;
