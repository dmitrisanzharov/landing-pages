const allMyFunctionalityProjects = [
	{
		id: "6406a3ecb83509d9580241c3",
		name: "Flenders JavaScript",
		link: "https://flender-build-js.netlify.app/",
		standAloneUrl: true,
		namesOfActivePages: [
			"marketplace",
			"register",
			"login",
			"user-dashboard",
			"add-funds",
			"withdraw funds",
			"view transactions report",
		],
		highlights: [
			"sends EMAILS to reset password - 2 emails, 1 to reset, 2 to confirm the token",
			"pop-up notifications when user does something, e.g. lodge money",
			"JWT for secure routes, checks token",
			"JWT authentication",
			"password protection via HASH",
			"navbar changes with user session - i.e. there are 2 navbars, one for NOT logged in, and one for logged in",
			"some functionality only appears when user is logged in - e.g. investing",
			"captcha",
			"google maps",
			"payment system Stripe - only works in DEV, need to fix for PROD (but won't do it atm)",
			"protection from user over-clicking - e.g. when lodging money, button disables onClick",
			"Form with notifications - i.e. when password is too weak or something is NOT filled in correctly, it notifies",
			"transaction report - calendar between 2 dates that filters",
			"transaction report is a DOWNLOADABLE PDF",
			"transaction report has filtering system - investment, lodgement, withdrawal",
		],
		importantInfo: [
			"To login: email: d@abc, password: asd",
			"alternatively REGISTER",
		],
	},
];

export default allMyFunctionalityProjects;
