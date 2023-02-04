import React from "react";
import "./CookiesAgreeDisagree.css";
import classNames from "classnames";

const CookiesAgreeDisagree = ({
	setCookieDataDummyReRender,
	cookieDataDummyReRender,
	data,
	index,
}) => {
	// props and other
	const { heading, concent, info, tooltip, extraItems, items } = data;
	//

	// functions
	function handleInfoDropDown(itemToDropDown) {
		let finalObj = JSON.parse(
			sessionStorage.getItem("independentIECookieSettings")
		);

		if (itemToDropDown === "info") {
			finalObj[index].info.show = !finalObj[index].info.show;
		}

		if (itemToDropDown === "tooltip") {
			finalObj[index].tooltip.show = !finalObj[index].tooltip.show;
		}

		sessionStorage.setItem(
			"independentIECookieSettings",
			JSON.stringify(finalObj)
		);
		setCookieDataDummyReRender(cookieDataDummyReRender + 1);
	}

	function handleAgreeDisagreeBtns(decision) {
		let finalObj = JSON.parse(
			sessionStorage.getItem("independentIECookieSettings")
		);

		//
		finalObj[index].concent = decision;

		// handle here all extra Items
		if (finalObj[index].extraItems) {
			let mutatedItems = finalObj[index].items.map((el) => {
				if (el.legitimateInterestConcent_ExtItm.show) {
					el.legitimateInterestConcent_ExtItm.consent = decision;
				}

				return { ...el, consentExtItm: decision };
			});

			finalObj[index].items = mutatedItems;

			// end of the if statement
		}

		sessionStorage.setItem(
			"independentIECookieSettings",
			JSON.stringify(finalObj)
		);
		setCookieDataDummyReRender(cookieDataDummyReRender + 1);
	}

	function handleExtraItemsInfoDropDown(itemToDropDown, index2) {
		let finalObj = JSON.parse(
			sessionStorage.getItem("independentIECookieSettings")
		);

		if (itemToDropDown === "info") {
			finalObj[index].items[index2].info_ExtItm.show =
				!finalObj[index].items[index2].info_ExtItm.show;
		}

		sessionStorage.setItem(
			"independentIECookieSettings",
			JSON.stringify(finalObj)
		);
		setCookieDataDummyReRender(cookieDataDummyReRender + 1);
	}

	function handleExtraItemsAgreeDisagreeConsentOrLegitimateInterest(
		itemName,
		decision,
		index2
	) {
		let finalObj = JSON.parse(
			sessionStorage.getItem("independentIECookieSettings")
		);

		if (itemName === "consent") {
			finalObj[index].items[index2].consentExtItm = decision;
		}

		if (itemName === "legitimateInterest") {
			finalObj[index].items[index2].legitimateInterestConcent_ExtItm.consent =
				decision;
		}

		sessionStorage.setItem(
			"independentIECookieSettings",
			JSON.stringify(finalObj)
		);

		testIfAllAreAgreed();

		setCookieDataDummyReRender(cookieDataDummyReRender + 1);
	}

	function testIfAllAreAgreed() {
		let finalObj = JSON.parse(
			sessionStorage.getItem("independentIECookieSettings")
		);

		// test if all are agreed
		const testAllAgreed = finalObj[index].items.every(
			(el) => el.consentExtItm === true
		);
		//

		if (testAllAgreed) {
			finalObj[index].concent = true;
			sessionStorage.setItem(
				"independentIECookieSettings",
				JSON.stringify(finalObj)
			);
			return;
		}

		// test if all are disagreed
		const testAllDisagree = finalObj[index].items.every(
			(el) => el.consentExtItm === false
		);
		//

		if (testAllDisagree) {
			finalObj[index].concent = false;
			sessionStorage.setItem(
				"independentIECookieSettings",
				JSON.stringify(finalObj)
			);
			return;
		}

		// if SOME are diagree
		const testSomeAreDisagree = finalObj[index].items.some(
			(el) => el.consentExtItm === false
		);

		if (testSomeAreDisagree) {
			finalObj[index].concent = null;
			sessionStorage.setItem(
				"independentIECookieSettings",
				JSON.stringify(finalObj)
			);
		}
	}

	//********************************************************************
	//         USE EFFECTS
	// *******************************************************************

	//********************************************************************
	//          COMPONENT ONE: NO EXTRA ITEMS
	// *******************************************************************

	if (!extraItems) {
		return (
			// this one wrappes the whole component
			<div className="IndependentIE_CookiesAgreeDisagreeComponent">
				{/* this one wrapps the whole thing too */}
				<div
					className={classNames(
						"IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox",
						{
							"IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox--Columns":
								info.show,
						}
					)}
				>
					{/* Box1: Text and dropdown button */}
					<button
						className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_TextBox"
						onClick={() => handleInfoDropDown("info")}
					>
						{heading && (
							<div className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_TextBox_Heading ">
								{/* buttons */}
								{info?.show ? (
									<div className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_TextBox_Btn  ">
										-
									</div>
								) : (
									<div className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_TextBox_Btn ">
										+
									</div>
								)}
								{heading}
							</div>
						)}
					</button>
					{/* BOX2: Dropdown */}

					<div
						className={classNames(
							"IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_Dropdown",
							{
								"IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_Dropdown--Opened":
									info.show,
							}
						)}
					>
						<span className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_Dropdown_InfoText">
							{info.text}
						</span>{" "}
						{tooltip && (
							<div
								onClick={() => handleInfoDropDown("tooltip")}
								tabIndex="1"
								className="IndependentIE_CookiesModal_DropDownFix_1675391910"
							>
								<button className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_Dropdown_InfoIcon">
									ⓘ
								</button>
								<div className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_Dropdown_ToolTipText">
									{tooltip?.text}
								</div>
							</div>
						)}
					</div>

					{/* BOX3: agree and disagree buttons */}
					<div
						className={classNames(
							"IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_ButtonsBox ",
							{
								"IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_ButtonsBox--FlexEnd":
									info.show,
							}
						)}
					>
						{info.show && (
							<div className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_ButtonsBox_ConsentText ">
								Consent
							</div>
						)}
						{/* AGREE BUTTON */}
						<button
							className={classNames(
								"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn",
								{
									"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn--disagree":
										concent === false,
								}
							)}
							onClick={() => handleAgreeDisagreeBtns(false)}
						>
							{concent === false && <span>✕</span>}Disagree
						</button>
						{/* DISAGREE BUTTON */}
						<button
							className={classNames(
								"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn",
								{
									"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn--agree":
										concent === true,
								}
							)}
							onClick={() => handleAgreeDisagreeBtns(true)}
						>
							{concent === true && <span>✓</span>}Agree
						</button>
					</div>
				</div>
			</div>
		);
	}

	//********************************************************************
	//          COMPONENT TWO: WITH EXTRA ITEMS
	// *******************************************************************

	if (extraItems) {
		return (
			// this one wrappes the whole component
			<section className="IndependentIE_CookiesAgreeDisagreeComponent_ExtraItemsFullComponent ">
				{/* this one wrapps the whole thing too */}
				<div className="InnerWholeWrapper">
					<div className="MainHeadingAndAgreeDisagreeButtonsBox">
						{/* BOX 1: main heading */}
						<button
							className="Box1_MainHeadingAndToggleButton"
							onClick={() => handleInfoDropDown("info")}
						>
							{info?.show ? <span>-</span> : <span>+</span>}
							<div>{heading}</div>
						</button>
						{/* BOX 2: agree and disagree buttons box */}
						<div className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_ButtonsBox IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_ButtonsBox--FlexEnd">
							{/* AGREE BUTTON */}
							<button
								className={classNames(
									"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn",
									{
										"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn--disagree":
											concent === false,
									}
								)}
								onClick={() => handleAgreeDisagreeBtns(false)}
							>
								{concent === false && <span>✕</span>}Disagree
							</button>
							{/* DISAGREE BUTTON */}
							<button
								className={classNames(
									"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn",
									{
										"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn--agree":
											concent === true,
									}
								)}
								onClick={() => handleAgreeDisagreeBtns(true)}
							>
								{concent === true && <span>✓</span>}Agree
							</button>
						</div>
					</div>
					{/* DROP OUT BOX */}
					<div
						className={classNames("DropOutExtraItemsMainWrapper ", {
							"DropOutExtraItemsMainWrapper--Open": info?.show,
						})}
					>
						<div className="InnerBox">
							<div className="InfoText">{info.text}</div>
							<div className="ExtraItemsContainer ">
								{items?.map((el, i) => {
									const {
										heading_ExtItm,
										info_ExtItm,
										tooltip_ExtItm,
										legitimateInterestConcent_ExtItm,
										consentExtItm,
									} = el;

									return (
										<div
											key={heading_ExtItm + i}
											className="SingleItemContainer IndependentIE_MarginTop7px_1675316671"
										>
											<div className="MainHeadingAndAgreeDisagreeButtonsBox--ExtraItems  IndependentIE_MinHeight_1675313928 ">
												{/* BOX 1: main heading */}
												<button
													className="Box1_MainHeadingAndToggleButton"
													onClick={() =>
														handleExtraItemsInfoDropDown("info", i)
													}
												>
													{info_ExtItm?.show ? <span>-</span> : <span>+</span>}
													<div>{heading_ExtItm}</div>
												</button>
												{/* BOX 2: agree and disagree buttons box */}
												{!info_ExtItm?.show && (
													<div className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_ButtonsBox IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_ButtonsBox--FlexEnd">
														{/* AGREE BUTTON */}
														<button
															className={classNames(
																"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn",
																{
																	"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn--disagree":
																		consentExtItm === false,
																}
															)}
															onClick={() =>
																handleExtraItemsAgreeDisagreeConsentOrLegitimateInterest(
																	"consent",
																	false,
																	i
																)
															}
														>
															{consentExtItm === false && <span>✕</span>}
															Disagree
														</button>
														{/* DISAGREE BUTTON */}
														<button
															className={classNames(
																"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn",
																{
																	"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn--agree":
																		consentExtItm === true,
																}
															)}
															onClick={() =>
																handleExtraItemsAgreeDisagreeConsentOrLegitimateInterest(
																	"consent",
																	true,
																	i
																)
															}
														>
															{consentExtItm === true && <span>✓</span>}Agree
														</button>
													</div>
												)}
											</div>
											{/* DROP OUT CONTAINER IN EXTRA ITEMS, SINGLE ITEM */}
											<div
												className={classNames(
													"IndependentIE_SingleItemContainer_DropOutContainer ",
													{
														"IndependentIE_SingleItemContainer_DropOutContainer--Open":
															info_ExtItm?.show,
													}
												)}
											>
												{/* info box */}
												<div className="IndependentIE_SingleItemContainer_DropOutContainer_InfoBox ">
													<span>{info_ExtItm?.text}</span>
													<div
														className="IndependentIE_CookiesModal_DropDownFix_1675391910"
														tabIndex="1"
													>
														<button className="IndependentIE_SingleItemContainer_DropOutContainer_InfoBox_InfoIcon">
															ⓘ
														</button>
														{/* tooltip box */}

														<div className="IndependentIE_SingleItemContainer_DropOutContainer_InfoBox_ToolTipBox">
															{tooltip_ExtItm?.text}
														</div>
													</div>
												</div>

												<div className=""></div>
												{/* concent box */}
												<div className="IndependentIE_SingleItemContainer_DropOutContainer_ConsentBox IndependentIE_MarginTop15px_1675316671  ">
													<div className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_ButtonsBox IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_ButtonsBox--FlexEnd">
														{/* CONSENT TEXT */}
														<span className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_ButtonsBox_ConsentText">
															Consent
														</span>
														{/* AGREE BUTTON */}
														<button
															className={classNames(
																"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn",
																{
																	"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn--disagree":
																		consentExtItm === false,
																}
															)}
															onClick={() =>
																handleExtraItemsAgreeDisagreeConsentOrLegitimateInterest(
																	"consent",
																	false,
																	i
																)
															}
														>
															{consentExtItm === false && <span>✕</span>}
															Disagree
														</button>
														{/* DISAGREE BUTTON */}
														<button
															className={classNames(
																"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn",
																{
																	"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn--agree":
																		consentExtItm === true,
																}
															)}
															onClick={() =>
																handleExtraItemsAgreeDisagreeConsentOrLegitimateInterest(
																	"consent",
																	true,
																	i
																)
															}
														>
															{consentExtItm === true && <span>✓</span>}Agree
														</button>
													</div>
												</div>
												{/* legitimate interest */}
												{legitimateInterestConcent_ExtItm?.show && (
													<div className="IndependentIE_SingleItemContainer_DropOutContainer_ConsentBox IndependentIE_MarginTop15px_1675316671 ">
														<div className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_ButtonsBox IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_ButtonsBox--FlexEnd">
															{/*  TEXT */}
															<span className="IndependentIE_CookiesAgreeDisagreeComponent_TextAndButtonsBox_ButtonsBox_ConsentText">
																Legitimate interest
															</span>
															{/* AGREE BUTTON */}
															<button
																className={classNames(
																	"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn",
																	{
																		"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn--disagree":
																			legitimateInterestConcent_ExtItm.consent ===
																			false,
																	}
																)}
																onClick={() =>
																	handleExtraItemsAgreeDisagreeConsentOrLegitimateInterest(
																		"legitimateInterest",
																		false,
																		i
																	)
																}
															>
																{legitimateInterestConcent_ExtItm.consent ===
																	false && <span>✕</span>}
																Disagree
															</button>
															{/* DISAGREE BUTTON */}
															<button
																className={classNames(
																	"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn",
																	{
																		"IndependentIE_SettingsModal_MainBox_ViewPartnerBox_Btn--agree":
																			legitimateInterestConcent_ExtItm.consent ===
																			true,
																	}
																)}
																onClick={() =>
																	handleExtraItemsAgreeDisagreeConsentOrLegitimateInterest(
																		"legitimateInterest",
																		true,
																		i
																	)
																}
															>
																{legitimateInterestConcent_ExtItm.consent ===
																	true && <span>✓</span>}
																Agree
															</button>
														</div>
													</div>
												)}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		);

		// end of IF condtion
	}
};

export default CookiesAgreeDisagree;
