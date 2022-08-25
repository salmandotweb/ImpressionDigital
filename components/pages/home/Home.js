import styled from "styled-components";
import Input from "../../shared/Input";

const HomeSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5rem 0;
`;

const LeftSection = styled.div`
	flex: 0.5;

	p {
		font-size: 2rem;
		font-weight: 500;

		@media (max-width: ${(props) => props.theme.breakpoints.large}) {
			font-size: 1.8rem;
		}
	}

	h1 {
		font-size: 6.2rem;
		margin-bottom: 3rem;

		@media (max-width: ${(props) => props.theme.breakpoints.large}) {
			font-size: 5rem;
		}
	}
`;

const RightSection = styled.div`
	flex: 0.5;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 65rem;

		@media (max-width: ${(props) => props.theme.breakpoints.large}) {
			width: 100%;
		}
	}
`;

const Home = () => {
	return (
		<HomeSection>
			<LeftSection>
				<p>😍 Making your business go viral</p>
				<h1>We deliver the digital results you desire</h1>
				<Input inputPlaceholder="Enter your email" text="Get Started" />
			</LeftSection>
			<RightSection>
				<img src="/assets/homeSectionImage.svg" alt="" />
			</RightSection>
		</HomeSection>
	);
};

export default Home;
