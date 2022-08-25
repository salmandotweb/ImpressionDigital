import styled from "styled-components";
import Button from "../shared/Button";

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: ${(props) => props.theme.boxShadow};
	width: fit-content;
	border-radius: ${(props) => props.theme.borderRadiusInput};
	overflow: hidden;
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

const Input = () => {
	return (
		<InputWrapper>
			<StyledInput type="text" placeholder="@ Enter your Email" />
			<Button customPadding="1.2rem 2rem">Get Started</Button>
		</InputWrapper>
	);
};

export default Input;
