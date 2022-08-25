import styled from "styled-components";
import { motion } from "framer-motion";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import { children, parent } from "../../../animations/animations";

const StyledBanner = styled.div`
	background: ${(props) => props.theme.colorPrimary};
	color: ${(props) => props.theme.colorBackground};
	display: flex;
	align-items: flex-end;
	justify-content: space-around;
	padding: 0 5rem;
	margin: 20rem 0 5rem 0;
	border-radius: ${(props) => props.theme.borderRadiusCard};
	height: 35rem;

	h1 {
		margin: auto 0;
		font-size: 4.8rem;
	}

	img {
		width: 70rem;
	}
`;

const Banner = () => {
	const [ref, animation] = useScrollAnimation();
	return (
		<StyledBanner
			as={motion.div}
			ref={ref}
			variants={parent}
			initial="hidden"
			animate={animation}>
			<motion.h1 variants={children}>We grow your business.</motion.h1>
			<motion.img src="/assets/AboutImage3.svg" alt="" variants={children} />
		</StyledBanner>
	);
};

export default Banner;
