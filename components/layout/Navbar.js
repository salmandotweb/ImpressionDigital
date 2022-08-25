import styled from "styled-components";
import Button from "../shared/Button";

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
		transition: 250ms all;

		&:not(:last-child) {
			margin-right: 5rem;
		}

		&:hover {
			color: ${(props) => props.theme.colorPrimary};
			transform: scale(1.05);
		}
	}
`;

const Navbar = () => {
	return (
		<StyledNavbar>
			<StyledLogo>digitalImpression.</StyledLogo>
			<StyledLinks>
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Services</a>
				<a href="#">Pricing</a>
				<a href="#">Resources</a>
			</StyledLinks>
			<Button>Contact Us</Button>
		</StyledNavbar>
	);
};

export default Navbar;
