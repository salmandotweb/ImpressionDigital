import Head from "next/head";
import About from "../components/pages/home/About";
import Banner from "../components/pages/home/Banner";
import HomeSection from "../components/pages/home/Home";
import Services from "../components/pages/home/Services";

export default function Home() {
	return (
		<>
			<Head>
				<title>digitalImpression.com | Making your business go viral</title>
				<meta name="description" content="Personal website of Joe Harrison" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<HomeSection />
			<Services />
			<About
				title="Make your business shine like a diamond"
				description1="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				description2="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				img="/assets/AboutImage1.svg"
			/>
			<About
				title="Digital marketing that works"
				description1="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				description2="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				img="/assets/AboutImage2.svg"
				reverse={true}
			/>
			<Banner />
		</>
	);
}
