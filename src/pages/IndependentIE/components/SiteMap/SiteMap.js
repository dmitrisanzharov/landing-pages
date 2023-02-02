import React from "react";
import "./SiteMap.css";
import classNames from "classnames";

// images
import huIS from "../../icons/huIS.jpg";

const SiteMap = ({ data }) => {
	return (
		<section className="IndependentIE_SiteMapSection">
			<div className="IndependentIE_SiteMap_Inner IndependentIE_MainContentContainer ">
				{data &&
					data.map((el, i) => {
						return (
							<div
								key={el + i}
								className={classNames(
									"IndependentIE_SiteMap_Inner_SingleItem ",
									{
										"IndependentIE_SiteMap_Inner_SingleItem--End ": i % 2 !== 0,
									}
								)}
							>
								{el}
							</div>
						);
					})}
			</div>
			<div className="IndependentIE_SiteMap_Inner2 IndependentIE_MainContentContainer ">
				<div className="IndependentIE_SiteMap_Inner2_Text ">
					A{" "}
					<span>
						<img src={huIS} alt="media hu is description" />
					</span>
					WEBSITE © INDEPENDENT.IE
				</div>
			</div>
		</section>
	);
};

export default SiteMap;
