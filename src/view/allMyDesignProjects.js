import bufferPic from "../images/bufferPic.avif";
import wipsterBrotherPic from "../images/wipsterBrotherPic.avif";
import stripePic from "../images/stripePic.avif";
import finLendersPic from "../images/finLendersPic.avif";
import indepenedentIE from "../images/independent_ie.webp";

const allMyDesignProjects = [
	{
		name: "Independent.ie",
		link: "/independent-ie",
		image: indepenedentIE,
		dateStarted: "13-Jan-2023",
		dateFinished: "03-Feb-2023",
		numberOfActivePages: 1,
		highlights: [
			"HUGE: Cookie setting module, and logic - can agree/disagree to all, remembers decision on reload, pops up first time, Main and Sub-item iteraction, when Main is agreed to, all other auto-agree",
			"sliding search on click",
			"navbar z-index, super good demo, hides behinds elements",
			"weather api,  that asks for location",
			"fixed original errors in mobile optimisation",
			"navbar flex-wrap, very good use",
		],
		pagePerformance: [
			"page loads 113% faster",
			"Lighthouse performance is up by 39%",
			"Lighthouse accessibility is up by 10%",
			"Lighthouse best practices are up by 11%",
			"Lighthouse seo is up by 9%",
		],
	},
	{
		name: "Buffer",
		link: "/buffer",
		image: bufferPic,
		dateStarted: "15-Nov-2022",
		dateFinished: "10-Dec-2022",
		numberOfActivePages: 1,
		highlights: [
			"sticky navbar",
			"navbar appears and disappears based on scrolling",
			"mobile navbar hides the scroll, when you click on X, it returns to the previous position of the scroll",
			"rolling testimonials",
		],
		pagePerformance: [
			"page loads 232% faster",
			"Lighthouse performance is up by 45%",
			"Lighthouse accessibility is up by 5%",
			"Lighthouse seo is up by 9%",
		],
	},
	{
		name: "WipsterBrother",
		link: "https://wipster-brother.vercel.app/",
		standAloneUrl: true,
		image: wipsterBrotherPic,
		dateStarted: "unknown",
		dateFinished: "unknown",
		numberOfActivePages: 4,
		warnings: "some features may not work, cause heroku moved to paid plans",
		highlights: [
			"contact us form sends the email",
			"register registers in mongoDB",
			"login user via mongoDB",
			"jump to top chevron, bottom left",
			"bootstrap",
		],
	},
	{
		name: "Finlenders",
		link: "https://finlenders.vercel.app/contact",
		standAloneUrl: true,
		image: finLendersPic,
		dateStarted: "unknown",
		dateFinished: "unknown",
		numberOfActivePages: 1,
		warnings: "some features may not work, cause heroku moved to paid plans",
		highlights: [
			"Very clean site",
			"Forms are very good here",
			"PAGES THAT WORK: ",
			"Login",
			"Get Started",
			"Contact",
			"Market Place, but no projects",
			"Invest - bit messed up",
			"Problem here: I lost development code, so I only have Build code",
		],
	},

	{
		name: "StripeMenus",
		link: "https://ds-stripe-clone.netlify.app/",
		standAloneUrl: true,
		image: stripePic,
		dateStarted: "unknown",
		dateFinished: "unknown",
		numberOfActivePages: 1,
		highlights: ["stripe style nav items"],
	},
];

export default allMyDesignProjects;
