import React, { useState, useEffect } from "react";
import "./SubscribeNewsLetter.css";
import classNames from "classnames";

const SubscribeNewsLetter = ({ data }) => {
	const { img, heading1, heading2 } = data;

	const [input, setInput] = useState("");
	const [error1, setError1] = useState(false);

	useEffect(() => {
		if (input === "") {
			return;
		}
		if (!input.includes("@")) {
			setError1(true);
			return;
		}

		setError1(false);
	}, [input]);

	return (
		<section className="IndependentIE_SubscribeNewsLetterSection">
			<div className="IndependentIE_SubscribeNewsLetterSection_InnerDiv IndependentIE_MainContentContainer ">
				{/* image */}
				<div className="IndependentIE_SubscribeNewsLetterSection_InnerDiv_Img ">
					<img src={img} alt={heading1} />
				</div>
				{/* text */}
				<div className="IndependentIE_SubscribeNewsLetterSection_InnerDiv_Text ">
					<div className="IndependentIE_SubscribeNewsLetterSection_InnerDiv_Text_H1 ">
						{heading1}
					</div>
					<div className="IndependentIE_SubscribeNewsLetterSection_InnerDiv_Text_H2 ">
						{heading2}
					</div>
					<div className="IndependentIE_SubscribeNewsLetterSection_InnerDiv_Text_EmailBox">
						<input
							type="email"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Enter your Email Address"
							className={classNames({
								IndependentIE_SubscribeNewsLetterSection_InnerDiv_Text_EmailBox_Input:
									error1,
							})}
						/>
						<button>Sign Up</button>
					</div>
					{error1 ? (
						<div className="IndependentIE_SubscribeNewsLetterSection_InnerDiv_Text_ErrorBox ">
							Please fill out this field.
						</div>
					) : (
						<div className="IndependentIE_SubscribeNewsLetterSection_InnerDiv_Text_ErrorBox_Empty"></div>
					)}
				</div>
			</div>
		</section>
	);
};

export default SubscribeNewsLetter;
