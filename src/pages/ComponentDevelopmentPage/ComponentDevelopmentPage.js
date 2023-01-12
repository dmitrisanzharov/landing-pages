import React, { useEffect, useState } from "react";
import "./ComponentDevelopmentPage.css";

// import components
import NavPopUpMenu from "../Buffer/components/NavPopUpMenu/NavPopUpMenu";
import NavSideMiniMenu from "../Buffer/components/NavSideMiniMenu/NavSideMiniMenu.js";

// import view
import { navToolsItems } from "../Buffer/view/navToolsMenuItems";

function ComponentDevelopmentPage() {
	return (
		<div style={{ padding: "60px" }}>
			<div className="DevNavBar dbb">
				{/* MAKE SURE TO ADD TABINDEX TO PARENT ELEMENT, OTHERWISE FAILS */}
				<div className="DevNavBar_Item1 drr" tabIndex="0">
					item1
					<div className="DevNavBar_Item1_HiddenMenu dgg">
						<ul>
							<li>blah1</li>
							<li>blah2</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ComponentDevelopmentPage;
