import React from "react";
import "./Footer.css";
import allSectionsAndSubSections from "../../view/allSectionsAndSubSections";

const Footer = () => {
	return (
		<section className="IndependentIE_FooterSection ">
			<div className="IndependentIE_FooterSection_Container ">
				{allSectionsAndSubSections &&
					allSectionsAndSubSections.map((el, i) => {
						const { heading, color, items } = el;
						return (
							<div
								key={heading + color + i}
								className="IndependentIE_FooterContainer_ItemBox "
							>
								<div
									className="IndependentIE_FooterContainer_ItemBox_Heading"
									style={{ color: color }}
								>
									{heading}
								</div>
								{items &&
									items.map((el2, i2) => {
										return (
											<div
												key={i2 + el2}
												className="IndependentIE_FooterContainer_ItemBox_Item"
											>
												<div>{el2}</div>
											</div>
										);
									})}
							</div>
						);
					})}
			</div>
		</section>
	);
};

export default Footer;
