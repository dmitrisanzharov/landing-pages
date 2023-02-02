const cookiesSettings = [
	{
		heading: "Store and/or access information on a device",
		concent: null,
		info: {
			show: false,
			text: "Cookies, device identifiers, or other information can be stored or accessed on your device for the purposes presented to you.",
		},
		tooltip: {
			show: false,
			text: `Vendors can:
			* Store and access information on the device such as cookies and device identifiers presented to a user.`,
		},
	},
	{
		heading:
			"Advertising and content measurement, audience insights and product development",
		concent: null,
		info: {
			show: false,
			text: "Ad and content performance can be measured. Insights can be derived from the audience who saw the ads and content. Data can be used to build or improve user experience, systems and software. Insights can be derived from the audience who saw the ads and content.",
		},
		tooltip: false,
		extraItems: true,
		items: [
			{
				heading_ExtItm: "Measure ad performance",
				consentExtItm: null,
				info_ExtItm: {
					show: false,
					text: "The performance and effectiveness of ads that you see or interact with can be measured.Learn More: Measure ad performance",
				},
				tooltip_ExtItm: {
					show: false,
					text: `To measure ad performance vendors can:
					* Measure whether and how ads were delivered to and interacted with by a user
					* Provide reporting about ads including their effectiveness and performance
					* Provide reporting about users who interacted with ads using data observed during the course of the user's interaction with that ad
					* Provide reporting to publishers about the ads displayed on their property
					* Measure whether an ad is serving in a suitable editorial environment (brand-safe) context
					* Determine the percentage of the ad that had the opportunity to be seen and the duration of that opportunity
					* Combine this information with other information previously collected, including from across websites and apps
					Vendors cannot:
					*Apply panel- or similarly-derived audience insights data to ad measurement data without a Legal Basis to apply market research to generate audience insights (Purpose 9)`,
				},
				legitimateInterestConcent_ExtItm: {
					show: true,
					consent: null,
				},
			},
			{
				heading_ExtItm: "Measure content performance",
				consentExtItm: null,
				info_ExtItm: {
					show: false,
					text: "The performance and effectiveness of content that you see or interact with can be measured.",
				},
				tooltip_ExtItm: {
					show: false,
					text: `To measure content performance vendors can:
					* Measure and report on how content was delivered to and interacted with by users.
					* Provide reporting, using directly measurable or known information, about users who interacted with the content
					* Combine this information with other information previously collected, including from across websites and apps.
					Vendors cannot:
					* Measure whether and how ads (including native ads) were delivered to and interacted with by a user.
					* Apply panel- or similarly derived audience insights data to ad measurement data without a Legal Basis to apply market research to generate audience insights (Purpose 9)`,
				},
				legitimateInterestConcent_ExtItm: {
					show: true,
					consent: null,
				},
			},
			{
				heading_ExtItm: "Apply market research to generate audience insights",
				consentExtItm: null,
				info_ExtItm: {
					show: false,
					text: "Market research can be used to learn more about the audiences who visit sites/apps and view ads.",
				},
				tooltip_ExtItm: {
					show: false,
					text: `To apply market research to generate audience insights vendors can:
					* Provide aggregate reporting to advertisers or their representatives about the audiences reached by their ads, through panel-based and similarly derived insights.
					* Provide aggregate reporting to publishers about the audiences that were served or interacted with content and/or ads on their property by applying panel-based and similarly derived insights.
					* Associate offline data with an online user for the purposes of market research to generate audience insights if vendors have declared to match and combine offline data sources (Feature 1)
					* Combine this information with other information previously collected including from across websites and apps. 
					Vendors cannot:
					* Measure the performance and effectiveness of ads that a specific user was served or interacted with, without a Legal Basis to measure ad performance.
					* Measure which content a specific user was served and how they interacted with it, without a Legal Basis to measure content performance.`,
				},
				legitimateInterestConcent_ExtItm: {
					show: true,
					consent: null,
				},
			},
			{
				heading_ExtItm: "Develop and improve products",
				consentExtItm: null,
				info_ExtItm: {
					show: false,
					text: "Your data can be used to improve existing systems and software, and to develop new products.",
				},
				tooltip_ExtItm: {
					show: false,
					text: `To develop new products and improve products vendors can:
					* Use information to improve their existing products with new features and to develop new products
					* Create new models and algorithms through machine learning
					Vendors cannot:
					* Conduct any other data processing operation allowed under a different purpose under this purpose`,
				},
				legitimateInterestConcent_ExtItm: {
					show: true,
					consent: null,
				},
			},

			// end of array for ITEMS
		],
	},

	{
		heading: "Personalised content",
		concent: null,
		info: {
			show: false,
			text: "Content can be personalised based on a profile. More data can be added to better personalise content.",
		},
		tooltip: false,
		extraItems: true,
		items: [
			{
				heading_ExtItm: "Create a personalised content profile",
				consentExtItm: null,
				info_ExtItm: {
					show: false,
					text: "A profile can be built about you and your interests to show you personalised content that is relevant to you.",
				},
				tooltip_ExtItm: {
					show: false,
					text: `To create a personalised content profile vendors can:
					* Collect information about a user, including a user's activity, interests, visits to sites or apps, demographic information, or location, to create or edit a user profile for personalising content.
					* Combine this information with other information previously collected, including from across websites and apps, to create or edit a user profile for use in personalising content.`,
				},
				legitimateInterestConcent_ExtItm: {
					show: false,
					consent: null,
				},
			},
			{
				heading_ExtItm: "Select personalised content",
				consentExtItm: null,
				info_ExtItm: {
					show: false,
					text: "Personalised content can be shown to you based on a profile about you.Learn More: Select personalised content",
				},
				tooltip_ExtItm: {
					show: false,
					text: `To select personalised content vendors can:
					* Select personalised content based on a user profile or other historical user data, including a user’s prior activity, interests, visits to sites or apps, location, or demographic information.`,
				},
				legitimateInterestConcent_ExtItm: {
					show: false,
					consent: null,
				},
			},

			// end of array for ITEMS
		],
	},
	// {
	// 	heading: "Extended measurement",
	// 	concent: null,
	// 	info: {
	// 		show: false,
	// 		text: "Ad- and content performance can be measured. Insights can be derived from the audience that has seen the ads or content. Data can be used to build or improve user experience, systems and software.",
	// 	},
	// },

	// end of array for MAIN
];

export default cookiesSettings;
