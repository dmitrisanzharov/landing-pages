// images
import paschalDonohoePicture from "../images/paschalDonohoePicture.jpg";
import gardaiProbe from "../images/gardaiProbe.jpg";

// stack2
import lotoWinners from "../images/largeAndSmall_stack2/lotoWinners.jpg";
import fourPics from "../images/largeAndSmall_stack2/fourPics.jpg";

const twoPicsAnd4SmallBoxesComponentData = [
	{
		bigPic: {
			category: "Politics",
			image: paschalDonohoePicture,
			heading1:
				"'He's goosed if it gets worse' - Paschal Donohoe on thin ice over money row but Fianna Fáil to back him for time being",
			heading2:
				"Fianna Fáil will back Paschal Donohoe over his failure to declare election donations, as long as there are no further revelations about the Public Expenditure minister.",
		},
		smallPic: {
			category: "News",
			image: gardaiProbe,
			miniIcon: "photo",
			heading1:
				"Gardaí probe overseas extremist links to far-right protests against asylum-seekers",
			heading2:
				"Gardaí are gathering intelligence from social-media platforms about how recent anti-asylum-seeker protests have been organised.",
		},
	},
	{
		bigPic: {
			category: "Dublin",
			image: lotoWinners,
			heading1:
				"Lotto players urged to check for unclaimed €3.5m winning ticket as Dublin shop named",
		},
		smallPic: {
			category: "Movie News",
			image: fourPics,
			miniIcon: false,
			heading1:
				"Oscars 2023: Colin Farrell up against Paul Mescal for best actor as The Banshees of Inisherin gets nine nominations",
		},
	},
];

export default twoPicsAnd4SmallBoxesComponentData;
