import React from "react";
import "./SubscribeOne.css";

// images
import irishIndependentFront1 from "../../images/subscribeComponent/irishIndependentFront1.jpg";

const SubscribeOne = () => {
	return (
		<div className="IndependentIE_MainContentContainer IndependentIE_SubscribeOneSectionOne">
			<hr />
			<section className="IndependentIE_SubscribeOneSection  ">
				{/* text */}
				<div className="IndependentIE_SubscribeOneSection_TextBox ">
					<div className="IndependentIE_SubscribeOneSection_TextBox_Heading1 ">
						Today's newspaper
					</div>
					<div className="IndependentIE_SubscribeOneSection_TextBox_Heading2 ">
						Read today's newspaper as it appears in print.
					</div>
					<div className="IndependentIE_SubscribeOneSection_TextBox_Button ">
						<button>Subscribe Now</button>
					</div>
					<div className="IndependentIE_SubscribeOneSection_TextBox_Heading2a ">
						<div>Already a premium subscriber?</div>
						<div>Log In</div>
					</div>
				</div>
				{/* image */}
				<div className="IndependentIE_SubscribeOneSection_ImgBox ">
					<img
						src={irishIndependentFront1}
						alt="irish independent front of newspaper"
					/>
				</div>
			</section>
			<hr />
		</div>
	);
};

export default SubscribeOne;
