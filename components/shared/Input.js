import styled from "styled-components";
import Button from "../shared/Button";
import { motion } from "framer-motion";
import { children } from "../../animations/animations";

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: ${(props) => props.theme.boxShadow};
	width: fit-content;
	border-radius: ${(props) => props.theme.borderRadiusInput};
	overflow: hidden;

	@media (max-width: ${"411px"}) {
		flex-direction: column;
		width: 100%;
		border-radius: 0.5rem;
	}
`;

const StyledInput = styled.input`
	padding: 1.5rem 2rem;
	border: none;
	font-family: inherit;
	margin-right: 0.5rem;
	font-size: 1.55rem;
	font-weight: 500;

	&::placeholder {
		color: ${(props) => props.theme.colorPlaceHolder};
	}
`;

const Input = ({ text, inputPlaceholder }) => {
	return (
		<InputWrapper as={motion.div} variants={children}>
			<StyledInput type="text" placeholder={`@ ${inputPlaceholder}`} />
			<Button customPadding="1.2rem 2rem">{text}</Button>
		</InputWrapper>
	);
};

export default Input;
