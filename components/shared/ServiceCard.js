import styled from "styled-components";
import { motion } from "framer-motion";
import { children } from "../../animations/animations";

const StyledServiceCard = styled.div`
	width: 26.2rem;
	background: ${(props) =>
		props.background ? props.theme.colorPrimary : props.theme.colorBackground};
	color: ${(props) =>
		props.background ? props.theme.colorTextForDark : props.theme.colorPrimary};
	border: 0.1rem solid ${(props) => props.theme.colorBorder};
	border-radius: ${(props) => props.theme.borderRadiusCard};
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	cursor: pointer;
	transition: 250ms background, 250ms color, 250ms box-shadow;

	&:hover {
		transform: scale(1.02);
		background: ${(props) => props.theme.colorPrimary};
		color: ${(props) => props.theme.colorTextForDark};
		box-shadow: ${(props) => props.theme.boxShadowCard};
	}

	&:not(:last-child) {
		margin-right: 3rem;
	}

	&:nth-child(2) {
		margin-top: 15rem;
	}

	&:nth-child(3) {
		margin-top: 10rem;
	}

	@media (max-width: ${(props) => props.theme.breakpoints.large}) {
		width: 32rem;
	}
`;

const StyledServiceCardDetails = styled.div`
	h2 {
		margin: 2rem 0;
	}
`;

const ServiceCard = ({ background, title, description, img }) => {
	return (
		<StyledServiceCard
			background={background}
			as={motion.div}
			variants={children}>
			<img src={img} alt="" />
			<StyledServiceCardDetails>
				<h2>{title}</h2>
				<p>{description}</p>
			</StyledServiceCardDetails>
		</StyledServiceCard>
	);
};

export default ServiceCard;
