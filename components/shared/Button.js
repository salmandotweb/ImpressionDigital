import styled from "styled-components";
import { motion } from "framer-motion";
import { children as motionChildren } from "../../animations/animations";

const StyledButton = styled.button`
	background: ${(props) => props.backgroundColor || props.theme.colorPrimary};
	color: ${(props) => props.color || props.theme.colorTextForDark};
	border: 0.1rem solid ${(props) => props.theme.colorPrimary};
	padding: ${(props) => props.customPadding || "1rem 2rem"};
	border-radius: ${(props) => props.theme.borderRadiusButton};
	font-family: inherit;
	cursor: pointer;
	transition: 150ms transform;
	font-size: 1.4rem;
	font-weight: ${(props) => props.fontWeight};

	&:hover {
		transform: scale(1.02) !important;
	}

	&:active {
		transform: scale(0.98) !important;
	}

	@media (max-width: ${"411px"}) {
		width: 100%;
		text-align: center;
	}
`;

const Button = ({
	children,
	customPadding,
	backgroundColor,
	color,
	fontWeight,
}) => {
	return (
		<StyledButton
			fontWeight={fontWeight}
			backgroundColor={backgroundColor}
			color={color}
			customPadding={customPadding}
			as={motion.custom}
			variants={motionChildren}>
			{children}
		</StyledButton>
	);
};

export default Button;
