import styled from "styled-components";
import { children, parent, scaleOut } from "../../../animations/animations";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import Input from "../../shared/Input";
import { motion } from "framer-motion";

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
	const [ref, animation] = useScrollAnimation();
	return (
		<HomeSection>
			<LeftSection
				as={motion.div}
				ref={ref}
				variants={parent}
				initial="hidden"
				animate={animation}>
				<motion.p variants={children}>
					😍 Making your business go viral
				</motion.p>
				<motion.h1 variants={children}>
					We deliver the digital results you desire
				</motion.h1>
				<Input inputPlaceholder="Enter your email" text="Get Started" />
			</LeftSection>
			<RightSection>
				<motion.img
					src="/assets/homeSectionImage.svg"
					alt=""
					ref={ref}
					variants={scaleOut}
					initial="hidden"
					animate={animation}
				/>
			</RightSection>
		</HomeSection>
	);
};

export default Home;
