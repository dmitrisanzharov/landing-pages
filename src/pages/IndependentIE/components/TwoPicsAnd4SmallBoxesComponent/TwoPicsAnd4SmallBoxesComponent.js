import React from "react";
import "./TwoPicsAnd4SmallBoxesComponent.css";

// components
import PhotoSmallIconCategory from "../PhotoSmallIconCategory/PhotoSmallIconCategory";

const twoPicsAnd4SmallBoxesComponent = ({ data }) => {
	const { bigPic, smallPic } = data;

	return (
		<section className="twoPicsAnd4SmallBoxesComponent ">
			<div className="twoPicsAnd4SmallBoxesComponent_Container IndependentIE_MainContentContainer">
				<div className="twoPicsAnd4SmallBoxesComponent_Container_BigPicBox ">
					{/* picture */}
					<div className="twoPicsAnd4SmallBoxesComponent_Container_BigPicBox_ImgHolder ">
						<img src={bigPic.image} alt={bigPic.heading1} width="100%" />
					</div>
					{/* text */}
					<div className="twoPicsAnd4SmallBoxesComponent_Container_BigPicBox_TextHolder ">
						<div className="twoPicsAnd4SmallBoxesComponent_Container_BigPicBox_TextHolder_Category IndependentIESmallCategoryText ">
							{bigPic.category}
						</div>
						<div className="twoPicsAnd4SmallBoxesComponent_Container_BigPicBox_TextHolder_Heading1 IndependentIEBigHeading ">
							{bigPic.heading1}
						</div>
						<div className="twoPicsAnd4SmallBoxesComponent_Container_BigPicBox_TextHolder_Heading2 IndependentIEBigTitle ">
							{bigPic.heading2}
						</div>
					</div>
				</div>

				<div className="twoPicsAnd4SmallBoxesComponent_Container_SmallPicBox ">
					{/* picture */}
					<div className="twoPicsAnd4SmallBoxesComponent_Container_SmallPicBox_ImgHolder ">
						<img src={smallPic.image} alt={smallPic.heading1} width="100%" />
						<PhotoSmallIconCategory iconType="photo" />
					</div>
					{/* text */}
					<div className="twoPicsAnd4SmallBoxesComponent_Container_BigPicBox_TextHolder ">
						<div className="twoPicsAnd4SmallBoxesComponent_Container_BigPicBox_TextHolder_Category IndependentIESmallCategoryText ">
							{smallPic.category}
						</div>
						<div className="twoPicsAnd4SmallBoxesComponent_Container_BigPicBox_TextHolder_Heading1 IndependentIEMediumHeading ">
							{smallPic.heading1}
						</div>
						<div className="twoPicsAnd4SmallBoxesComponent_Container_BigPicBox_TextHolder_Heading2 IndependentIEBigTitle ">
							{smallPic.heading2}
						</div>
					</div>
				</div>

				{/* end of container */}
			</div>
		</section>
	);
};

export default twoPicsAnd4SmallBoxesComponent;
