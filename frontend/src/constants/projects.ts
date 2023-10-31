
import veganBootcamp from "../assets/vegan-bootcamp.webp";
import apex from "../assets/apex.jpg";
import weatherTheTrip from "../assets/weather-the-trip.png";
import nest from "../assets/nest.png";
import reframe from "../assets/reframe-logo.png";

import ProjectData from "../interfaces/projectData";
import technologies from "../constants/technologies";

import GlLogo from "../assets/GL-Logo.jpg"


const projects: Array<ProjectData> = [
	{
		title: "Good.Lab",
		role: "First Full-Stack Engineer Hired",
		subtitle: "Good.Lab is the leading ESG solution for the middle market—we deliver SaaS software and consulting services that help companies activate + accelerate + improve their ESG efforts. 🚀 Good.Lab is a 1% for the Planet member, as well as a Certified B Corporation.",
		link: "https://getgoodlab.com/",
		image: GlLogo,
		techStack: [
			technologies.react,
			technologies.typescript,
			technologies.psql,
			technologies.dotnet,
		]
	},
	{
		title: "Vegan Bootcamp (Vegan Hacktivists)",
		subtitle:
			"Vegan Bootcamp is a free challenge website that will take you step-by-step towards a Vegan diet and lifestyle. You will be guided through lessons in over 25 subjects such as nutrition, recipes, philosophy, climate, cosmetics, welfare, budgeting, clothing, family, and many more!",
		image: veganBootcamp,
		link: "https://veganbootcamp.org/",
		techStack: [
			technologies.typescript,
			technologies.php,
			technologies.laravel,
		],
	},
	{
		title: "Reframe",
		subtitle:
			"A landing page for new Reframe users to figure out their goals, commit to a plan, and sign up.",
		image: reframe,
		link: "https://joinreframe.app/",
		techStack: [
			technologies.react,
			technologies.bootstrap,
			technologies.netlify,
		],
	},
	{
		title: "Nest Home Thermostat Controller",
		subtitle:
			"A web-based thermostat controller for the Nest Home Thermostat. Includes an eco-friendly feature which automatically turns the AC off when the outside temperature is cooler than the inside AC.",
		image: nest,
		link: "https://github.com/gavinceldridge/Google-Nest-Auto-Temp-Controller",
		techStack: [
			technologies.react,
			technologies.bootstrap,
			technologies.weather,
		],
	},
	{
		title: "Weather The Trip",
		subtitle:
			"Web app utilizing Google Maps and Weatherbit to estimate and help prevent surprise weather phenomena along a trip prior to driving.",
		image: weatherTheTrip,
		link: "https://github.com/gavinceldridge/Weather-The-Trip",
		techStack: [
			technologies.python,
			technologies.googleApis,
			technologies.psql,
		],
	},
	{
		title: "Apex Legends Twitch Bot",
		subtitle:
			"An open-source Twitch chatbot that will allow a streamer's chat to democratically select the next Legend.",
		image: apex,
		link: "https://github.com/gavinceldridge/ApexTwitchBot",
		techStack: [
			technologies.javascript,
			technologies.glitch,
			technologies.twitch,
		],
	},
];

export default projects;