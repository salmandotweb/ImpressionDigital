import styled from "styled-components";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import Button from "../shared/Button";
import { motion } from "framer-motion";
import { children, parent } from "../../animations/animations";

const StyledNavbar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 1.5rem 0;
`;

const StyledLogo = styled.h3`
	font-size: 2rem;
	font-weight: bold;
	color: ${(props) => props.theme.primary};
`;

const StyledLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		color: ${(props) => props.theme.colorLinks};
		font-weight: 500;

		&:not(:last-child) {
			margin-right: 5rem;
		}

		&:hover {
			color: ${(props) => props.theme.colorPrimary};
		}
	}
`;

const Navbar = () => {
	const [ref, animation] = useScrollAnimation();
	return (
		<StyledNavbar
			as={motion.div}
			ref={ref}
			variants={parent}
			initial="hidden"
			animate={animation}>
			<StyledLogo as={motion.h3} variants={children}>
				digitalImpression.
			</StyledLogo>
			<StyledLinks as={motion.div} variants={parent}>
				<motion.a href="#" variants={children}>
					Home
				</motion.a>
				<motion.a href="#" variants={children}>
					About
				</motion.a>
				<motion.a href="#" variants={children}>
					Services
				</motion.a>
				<motion.a href="#" variants={children}>
					Pricing
				</motion.a>
				<motion.a href="#" variants={children}>
					Resources
				</motion.a>
			</StyledLinks>
			<Button>Contact Us</Button>
		</StyledNavbar>
	);
};

export default Navbar;
