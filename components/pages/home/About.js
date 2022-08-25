import styled from "styled-components";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import Button from "../../shared/Button";
import { motion } from "framer-motion";
import { children, parent } from "../../../animations/animations";

const StyledLayout = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: ${(props) =>
		props.reverse
			? props.theme.flexDirection.rowReverse
			: props.theme.flexDirection.row};
	padding: 5rem 0;
`;

const StyledContainer = styled.div`
	flex: 0.5;

	h1 {
		font-size: 4.8rem;
		width: 80%;

		@media (max-width: ${(props) => props.theme.breakpoints.large}) {
			width: 100%;
		}
	}

	p {
		font-size: 1.6rem;
		color: ${(props) => props.theme.colorText};
		width: 80%;

		&:not(:last-child) {
			margin: 2rem 0;
		}

		@media (max-width: ${(props) => props.theme.breakpoints.large}) {
			width: 100%;
		}
	}
`;

const StyledImageContainer = styled.div`
	flex: 0.5;
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.reverse ? "flex-start" : "flex-end")};

	img {
		width: 80%;

		@media (max-width: ${(props) => props.theme.breakpoints.large}) {
			width: 80%;
		}
	}
`;

const About = ({ reverse, title, description1, description2, img }) => {
	const [ref, animation] = useScrollAnimation();
	return (
		<StyledLayout reverse={reverse}>
			<StyledContainer
				as={motion.div}
				ref={ref}
				variants={parent}
				initial="hidden"
				animate={animation}>
				<motion.h1 variants={children}>{title}</motion.h1>
				<motion.p variants={children}>{description1}</motion.p>
				<motion.p variants={children}>{description2}</motion.p>

				<Button>Learn More</Button>
			</StyledContainer>
			<StyledImageContainer
				reverse={reverse}
				as={motion.div}
				ref={ref}
				variants={parent}
				initial="hidden"
				animate={animation}>
				<motion.img src={img} alt="" variants={children} />
			</StyledImageContainer>
		</StyledLayout>
	);
};

export default About;
