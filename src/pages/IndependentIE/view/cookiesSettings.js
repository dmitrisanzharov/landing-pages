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
					text: "The performance and effectiveness of ads that you see or interact with can be measured.",
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
					text: "Personalised content can be shown to you based on a profile about you.",
				},
				tooltip_ExtItm: {
					show: false,
					text: `To select personalised content vendors can:
					* Select personalised content based on a user profile or other historical user data, including a user's prior activity, interests, visits to sites or apps, location, or demographic information.`,
				},
				legitimateInterestConcent_ExtItm: {
					show: false,
					consent: null,
				},
			},

			// end of array for ITEMS
		],
	},
	{
		heading: "Personalised ads",
		concent: null,
		info: {
			show: false,
			text: "Ads can be personalised based on a profile. More data can be added to better personalise ads.",
		},
		tooltip: false,
		extraItems: true,
		items: [
			{
				heading_ExtItm: "Select basic ads",
				consentExtItm: null,
				info_ExtItm: {
					show: false,
					text: "Ads can be shown to you based on the content you're viewing, the app you're using, your approximate location, or your device type.",
				},
				tooltip_ExtItm: {
					show: false,
					text: `To do basic ad selection vendors can:
					* Use real-time information about the context in which the ad will be shown, to show the ad, including information about the content and the device, such as: device type and capabilities, user agent, URL, IP address
					* Use a user’s non-precise geolocation data
					* Control the frequency of ads shown to a user.
					* Sequence the order in which ads are shown to a user.
					* Prevent an ad from serving in an unsuitable editorial (brand-unsafe) context
					Vendors cannot:
					* Create a personalised ads profile using this information for the selection of future ads without a separate legal basis to create a personalised ads profile.
					* N.B. Non-precise means only an approximate location involving at least a radius of 500 meters is permitted.`,
				},
				legitimateInterestConcent_ExtItm: {
					show: true,
					consent: null,
				},
			},
			{
				heading_ExtItm: "Create a personalised ads profile",
				consentExtItm: null,
				info_ExtItm: {
					show: false,
					text: "A profile can be built about you and your interests to show you personalised ads that are relevant to you.",
				},
				tooltip_ExtItm: {
					show: false,
					text: `To create a personalised ads profile vendors can:
					* Collect information about a user, including a user's activity, interests, demographic information, or location, to create or edit a user profile for use in personalised advertising.
					* Combine this information with other information previously collected, including from across websites and apps, to create or edit a user profile for use in personalised advertising.`,
				},
				legitimateInterestConcent_ExtItm: false,
			},
			{
				heading_ExtItm: "Select personalised ads",
				consentExtItm: null,
				info_ExtItm: {
					show: false,
					text: "Personalised ads can be shown to you based on a profile about you.",
				},
				tooltip_ExtItm: {
					show: false,
					text: `To select personalised ads vendors can:
					* Select personalised ads based on a user profile or other historical user data, including a user's prior activity, interests, visits to sites or apps, location, or demographic information.`,
				},
				legitimateInterestConcent_ExtItm: false,
			},

			// end of array for ITEMS
		],
	},
	{
		heading: "Social Media",
		concent: null,
		info: {
			show: false,
			text: "These cookies allow you to like or share social media content on this website. Please be aware that social media platforms may collect personal data to create interest profiles and show targeted advertisements.",
		},
		tooltip: false,
		extraItems: false,
	},
	{
		heading: "Actively scan device characteristics for identification",
		concent: null,
		info: {
			show: false,
			text: "Your device can be identified based on a scan of your device's unique combination of characteristics.",
		},
		tooltip: {
			show: false,
			text: `Vendors can:
			* Create an identifier using data collected via actively scanning a device for specific characteristics, e.g. installed fonts or screen resolution.
			* Use such an identifier to re-identify a device.`,
		},
		extraItems: false,
	},
	{
		heading: "Use precise geolocation data",
		concent: null,
		info: {
			show: false,
			text: "Your precise geolocation data can be used in support of one or more purposes. This means your location can be accurate to within several meters.",
		},
		tooltip: {
			show: false,
			text: `Vendors can:
			* Collect and process precise geolocation data in support of one or more purposes.
			N.B. Precise geolocation means that there are no restrictions on the precision of a user's location; this can be accurate to within several meters.`,
		},
		extraItems: false,
	},
	{
		heading: "Extended measurement",
		concent: null,
		info: {
			show: false,
			text: "Ad- and content performance can be measured. Insights can be derived from the audience that has seen the ads or content. Data can be used to build or improve user experience, systems and software.",
		},
		tooltip: false,
		extraItems: false,
	},

	// end of array for MAIN
];

export default cookiesSettings;
