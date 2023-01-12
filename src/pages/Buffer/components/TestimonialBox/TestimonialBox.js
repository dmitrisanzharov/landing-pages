import React from "react";
import PropTypes from "prop-types";
import "./TestimonialBox.css";

const TestimonialBox = ({ name, quote, image, logo }) => {
	return (
		<div className="TestimonialBox_Container ">
			<div className="TestimonialBox_Container_ImageHolder ">
				<img
					src={image}
					alt="photo"
					className="TestimonialBox_Container_ImageHolder_Image"
				/>
			</div>

			<div className="TestimonialBox_Container_TextHolder ">
				<div className="TestimonialBox_Container_TextHolder_Quote ">
					{quote}
				</div>

				<div className="TestimonialBox_Container_TextHolder_LogoHolder ">
					<img src={logo} alt="logo" height={"30px"} width={"125px"} />
				</div>

				<div className="TestimonialBox_Container_TextHolder_NameAndTitle">
					{name}
				</div>
			</div>
		</div>
	);
};

export default TestimonialBox;

TestimonialBox.propTypes = {
	name: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	image: PropTypes.any.isRequired,
	logo: PropTypes.any.isRequired,
};
