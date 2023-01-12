import bufferPic from "../images/bufferPic.avif";
import wipsterBrotherPic from "../images/wipsterBrotherPic.avif";
import stripePic from "../images/stripePic.avif";
import finLendersPic from "../images/finLendersPic.avif";

const allMyDesignProjects = [
	{
		name: "Buffer",
		link: "/buffer",
		image: bufferPic,
		dateStarted: "15-Dec-2022",
		dateFinished: "10-Dec-2022",
		numberOfActivePages: 1,
		highlights: [
			"sticky navbar",
			"navbar appears and disappears based on scrolling",
			"mobile navbar hides the scroll, when you click on X, it returns to the previous position of the scroll",
			"rolling testimonials",
		],
		pagePerformance: [
			"page loads 0.94 seconds faster",
			"Lighthouse performance is up by +17 points",
			"Lighthouse accessibility is up +5 points",
			"Lighthouse seo is up +8",
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
