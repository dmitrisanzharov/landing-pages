import React from "react";
import "./HeadingsX3nImage.css";
import PropTypes from "prop-types";

const HeadingsX3nImage = ({
	textOnLeft,
	noImage,
	image,
	heading1,
	heading2,
	paragraph,
}) => {
	if (noImage) {
		return (
			<div className="HeadingsX3nImageContainer ">
				<div className="HeadingsX3nImageContainer_inner ">
					<div className="HeadingsX3nImageContainer_inner_box1--noImage ">
						<div className="HeadingsX3nImageContainer_inner_box1_text--noImage ">
							<div className="HeadingsX3nImageContainer_inner_box1_text_heading1">
								{heading1}
							</div>

							<div className="HeadingsX3nImageContainer_inner_box1_text_heading2">
								{heading2}
							</div>

							<div className="HeadingsX3nImageContainer_inner_box1_text_paragraph">
								{paragraph}
							</div>

							{/* end of box1 text */}
						</div>

						{/* end of box1 */}
					</div>

					{/* end of inner */}
				</div>

				{/* end of container */}
			</div>
		);
	}

	if (textOnLeft) {
		return (
			<div className="HeadingsX3nImageContainer ">
				<div className="HeadingsX3nImageContainer_inner ">
					<div className="HeadingsX3nImageContainer_inner_box1 ">
						<div className="HeadingsX3nImageContainer_inner_box1_text ">
							<div className="HeadingsX3nImageContainer_inner_box1_text_heading1">
								{heading1}
							</div>

							<div className="HeadingsX3nImageContainer_inner_box1_text_heading2">
								{heading2}
							</div>

							<div className="HeadingsX3nImageContainer_inner_box1_text_paragraph">
								{paragraph}
							</div>

							<div className="HeadingsX3nImageContainer_inner_box1_text_buttonHolder">
								<button className="HeadingsX3nImageContainer_inner_box1_text_buttonHolder_button">
									Get started now
								</button>

								{/* end of button holder */}
							</div>

							{/* end of box1 text */}
						</div>

						{/* end of box1 */}
					</div>

					<div className="HeadingsX3nImageContainer_inner_box2_imageHolder ">
						<img
							src={image}
							alt="hold phone image"
							height={"100%"}
							width={"100%"}
						/>
					</div>

					{/* end of inner */}
				</div>

				{/* end of container */}
			</div>
		);
	}

	return (
		<div className="HeadingsX3nImageContainer ">
			<div className="HeadingsX3nImageContainer_inner ">
				<div className="HeadingsX3nImageContainer_inner_box2_imageHolder--textOnRight ">
					<img
						src={image}
						alt="hold phone image"
						height={"100%"}
						width={"100%"}
					/>
				</div>

				<div className="HeadingsX3nImageContainer_inner_box1--textOnRight ">
					<div className="HeadingsX3nImageContainer_inner_box1_text ">
						<div className="HeadingsX3nImageContainer_inner_box1_text_heading1">
							{heading1}
						</div>

						<div className="HeadingsX3nImageContainer_inner_box1_text_heading2">
							{heading2}
						</div>

						<div className="HeadingsX3nImageContainer_inner_box1_text_paragraph">
							{paragraph}
						</div>

						<div className="HeadingsX3nImageContainer_inner_box1_text_buttonHolder">
							<button className="HeadingsX3nImageContainer_inner_box1_text_buttonHolder_button">
								Get started now
							</button>

							{/* end of button holder */}
						</div>

						{/* end of box1 text */}
					</div>

					{/* end of box1 */}
				</div>

				{/* end of inner */}
			</div>

			{/* end of container */}
		</div>
	);
};

export default HeadingsX3nImage;

HeadingsX3nImage.propTypes = {
	heading1: PropTypes.string.isRequired,
	heading2: PropTypes.string.isRequired,
	paragraph: PropTypes.string.isRequired,
	noImage: PropTypes.bool,
	textOnLeft: PropTypes.bool,
	image: PropTypes.any,
};
