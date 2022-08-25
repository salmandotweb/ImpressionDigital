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

	@media (max-width: ${"1072px"}) {
		flex-direction: column;
	}
`;

const LeftSection = styled.div`
	flex: 0.5;

	p {
		font-size: 2rem;
		font-weight: 500;

		@media (max-width: ${(props) => props.theme.breakpoints.large}) {
			font-size: 1.8rem;
		}
		@media (max-width: ${"510px"}) {
			font-size: 1.6rem;
		}
		@media (max-width: ${"375px"}) {
			font-size: 1.4rem;
		}
	}

	h1 {
		font-size: 6.2rem;
		margin-bottom: 3rem;

		@media (max-width: ${(props) => props.theme.breakpoints.large}) {
			font-size: 5rem;
		}
		@media (max-width: ${"1152px"}) {
			font-size: 4.2rem;
		}
		@media (max-width: ${"1072px"}) {
			text-align: center;
		}
		@media (max-width: ${"510px"}) {
			font-size: 3.8rem;
		}
		@media (max-width: ${"375px"}) {
			font-size: 3.5rem;
		}
	}

	@media (max-width: ${"1198px"}) {
		margin-right: 2rem;
	}

	@media (max-width: ${"1152px"}) {
		flex: 0.6;
	}
	@media (max-width: ${"1072px"}) {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 5rem 0;
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
		@media (max-width: ${"1072px"}) {
			width: 40rem;
		}
		@media (max-width: ${"576px"}) {
			width: 100%;
		}
	}

	@media (max-width: ${"1152px"}) {
		flex: 0.4;
	}
	@media (max-width: ${"1072px"}) {
		flex: 1;
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
