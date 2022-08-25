import styled from "styled-components";

const StyledButton = styled.button`
	background: ${(props) => props.theme.colorPrimary};
	color: ${(props) => props.theme.colorTextForDark};
	border: 0.1rem solid ${(props) => props.theme.colorPrimary};
	padding: ${(props) => props.customPadding || "1rem 2rem"};
	border-radius: ${(props) => props.theme.borderRadiusButton};
	font-family: inherit;
	cursor: pointer;
	transition: 250ms all;
	font-size: 1.4rem;

	&:hover {
		transform: scale(1.02);
	}

	&:active {
		transform: scale(0.98);
	}
`;

const Button = ({ children, customPadding }) => {
	return <StyledButton customPadding={customPadding}>{children}</StyledButton>;
};

export default Button;
