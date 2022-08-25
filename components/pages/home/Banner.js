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

		@media (max-width: ${(props) => props.theme.breakpoints.large}) {
			font-size: 4rem;
		}
		@media (max-width: ${"1152px"}) {
			font-size: 4.2rem;
		}
		@media (max-width: ${"1118px"}) {
			font-size: 4rem;
		}
		@media (max-width: ${"1012px"}) {
			margin-bottom: 3rem;
		}
		@media (max-width: ${"510px"}) {
			font-size: 3.8rem;
		}
		@media (max-width: ${"425px"}) {
			font-size: 3rem;
		}
	}

	img {
		width: 70rem;

		@media (max-width: ${"1306px"}) {
			width: 50rem;
		}
		@media (max-width: ${"1012px"}) {
			width: 40rem;
		}
		@media (max-width: ${"765px"}) {
			width: 30rem;
		}
		@media (max-width: ${"375px"}) {
			width: 100%;
		}
	}

	@media (max-width: ${"1306px"}) {
		height: 25rem;
	}
	@media (max-width: ${"1012px"}) {
		height: fit-content;
		margin: 10rem 0 5rem 0;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	@media (max-width: ${"765px"}) {
		padding: 2rem;
	}
	@media (max-width: ${"425px"}) {
		margin: 5rem 0 5rem 0;
	}
	@media (max-width: ${"320px"}) {
		margin: 3rem 0 5rem 0;
		border-radius: 1rem;
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
