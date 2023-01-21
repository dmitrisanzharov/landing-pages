// images
import kinderGarten from "../images/worldNews/kinderGarten.jpg";

const worldNewsData = [
	{
		bigPic: {
			img: kinderGarten,
			category: "Europe",
			miniIcon: "photo",
			heading: "Ukraine loses top minister as helicopter hits kindergarten",
		},
		items: [
			{
				heading:
					"Protesters given 15 minutes to defend themselves against death penalty in Iran",
				isPremium: false,
				quoteAuthor: false,
				miniIcon: false,
			},
			{
				heading:
					"Sweatless echidnas cool down with belly flops and snot bubbles",
			},
			{
				heading:
					"Boris Johnson's memoir won't trouble the Nobel Prize panel, but it will certainly trouble the rest of us - haven't we suffered enough?",

				isPremium: true,
				quoteAuthor: "Tom Peck",
				miniIcon: false,
				miniIconColor: false,
			},
			{
				heading:
					"Death toll rises as Ukraine’s interior minister and three children among 18 killed in helicopter crash near preschool",

				isPremium: false,
				quoteAuthor: false,
				miniIcon: "photo",
			},
		],
	},
];

export default worldNewsData;
