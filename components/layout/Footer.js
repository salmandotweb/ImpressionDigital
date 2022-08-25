import styled from "styled-components";
import Button from "../shared/Button";

const StyledFooter = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	padding: 5rem 0;
	border-bottom: 0.2rem solid ${(props) => props.theme.colorBorder};

	div {
		width: 100%;

		&:not(:last-child) {
			margin-right: 2rem;
		}

		h2 {
			margin-bottom: 1rem;
			font-size: 2.2rem;
			font-weight: 600;
		}

		p {
			color: ${(props) => props.theme.colorFooterLinks};
			cursor: pointer;

			&:not(:last-child) {
				margin-bottom: 1.5rem;
			}
		}
	}
`;

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: fit-content;
	border-radius: ${(props) => props.theme.borderRadiusInput};
	overflow: hidden;
	margin-bottom: 2rem;
	background: #f8f8f8;
`;

const StyledInput = styled.input`
	padding: 1.5rem 2rem;
	border: none;
	font-family: inherit;
	margin-right: 0.5rem;
	font-size: 1.55rem;
	font-weight: 400;
	background: none;

	&::placeholder {
		color: ${(props) => props.theme.colorPlaceHolder};
	}
`;

const StyledCopyright = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 0 3rem 0;

	p {
		color: ${(props) => props.theme.colorFooterLinks};
	}
`;

const Footer = () => {
	return (
		<>
			<StyledFooter>
				<div>
					<h2>digitalImpression.com</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
				</div>
				<div>
					<h2>Company</h2>
					<p>About Us</p>
					<p>Careers</p>
					<p>Blog</p>
					<p>Pricing</p>
				</div>
				<div>
					<h2>Resources</h2>
					<p>Proposal Template</p>
					<p>Invoice Template</p>
					<p>Tuturoial</p>
					<p>How to write a contract</p>
				</div>
				<div>
					<h2>Join Our Newsletter</h2>
					<InputWrapper>
						<StyledInput type="text" placeholder="Your email address" />
						<Button customPadding="1.2rem 2rem">Subscribe</Button>
					</InputWrapper>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
				</div>
			</StyledFooter>
			<StyledCopyright>
				<p>Copyright @ SRSUIUX 2022. All Rights Reserved.</p>
				<p>Design by @salmandotweb</p>
			</StyledCopyright>
		</>
	);
};

export default Footer;
