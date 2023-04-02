const allMyFunctionalityProjects = [
	{
		id: "6428cf5b3154a0369004bc78",
		name: "Flenders TypeScript",
		link: "https://flender-ts-prod.netlify.app/",
		standAloneUrl: true,
		namesOfActivePages: [
			"ALL pages that are displayed and buttons are functionable, I did NOT include non-functional stuff in this project",
		],
		highlights: [
			"InvestorRegistration component, DOUBLE binding using Function and States... well done",
			"password reset capability, send email and stuff like that - NOTE: it always emails to TEST email address, cause I am messing around with fake emails",
			"when logged in the INVEST amount slider, is very cool, works super well",
			"Manual captcha",
			"Transactions can be downloaded via PDF and CSV",
			"Investments - sortable table - Biggest, Smallest, NoSort",
			"react helmet on every page",
		],
		importantInfo: [
			"To login: email: asd@asd.com, password: asd",
			"alternatively REGISTER",
		],
	},
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
			"registration page button is NOT clickable till all fields are correct",
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
