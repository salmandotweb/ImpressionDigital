import styled from "styled-components";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import Button, { SidebarButton } from "../shared/Button";
import { motion } from "framer-motion";
import { children, parent } from "../../animations/animations";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { theme } from "../../theme/theme";

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

const StyledRightNavbar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: ${"1136px"}) {
		transform: translateX(100%);
		transition: 250ms transform;
		transform: ${(props) =>
			props.show ? "translateX(0)" : "translateX(100%)"};
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		width: 30rem;
		background: ${(props) => props.theme.colorPrimary};
		flex-direction: column;
	}
`;

const StyledLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		color: ${(props) => props.theme.colorLinks};
		font-weight: 500;
		margin-right: 5rem;

		&:hover {
			color: ${(props) =>
				!props.show ? props.theme.colorPrimary : props.theme.colorBackground};
		}

		@media (max-width: ${"1136px"}) {
			margin-right: 0;
			margin-bottom: 2rem;
			color: ${(props) => props.theme.colorTextForDark};
		}
	}

	@media (max-width: ${"1136px"}) {
		flex-direction: column;
	}
`;

const StyledIcon = styled.div`
	display: none;
	z-index: 999999999999;
	color: ${(props) =>
		!props.show ? props.theme.colorPrimary : props.theme.colorTextForDark};
	position: ${(props) => (props.show ? "absolute" : "")};
	top: 2rem;
	right: 26rem;

	@media (max-width: ${"1136px"}) {
		display: flex;
	}
`;

const Navbar = () => {
	const [show, setShow] = useState(false);
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

			<StyledRightNavbar show={show}>
				<StyledLinks as={motion.div} variants={parent} show={show}>
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
				{show ? (
					<Button
						backgroundColor={theme.colorBackground}
						color={theme.colorPrimary}
						fontWeight={"600"}>
						Contact Us
					</Button>
				) : (
					<Button>Contact Us</Button>
				)}
			</StyledRightNavbar>

			<StyledIcon onClick={() => setShow(!show)} show={show}>
				{!show ? <FaBars /> : <FaTimes />}
			</StyledIcon>
		</StyledNavbar>
	);
};

export default Navbar;
