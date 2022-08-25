import styled from "styled-components";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import Button from "../shared/Button";
import { motion } from "framer-motion";
import { children, parent } from "../../animations/animations";

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

			@media (max-width: ${"1284px"}) {
				margin-right: 0rem;
				margin-bottom: 3rem;
			}
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

		@media (max-width: ${"1284px"}) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
		}
	}

	@media (max-width: ${"1284px"}) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
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

	@media (max-width: ${"1284px"}) {
		flex-direction: row !important;
		width: 40rem !important;
	}
	@media (max-width: ${"1284px"}) {
		flex-direction: row !important;
		width: 100% !important;
	}
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

	@media (max-width: ${"1284px"}) {
		margin-right: auto;
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

	@media (max-width: ${"768px"}) {
		flex-direction: column;
		text-align: center;
	}
`;

const Footer = () => {
	const [ref, animation] = useScrollAnimation();
	return (
		<>
			<StyledFooter
				as={motion.div}
				ref={ref}
				variants={parent}
				initial="hidden"
				animate={animation}>
				<motion.div variants={children}>
					<h2>digitalImpression.com</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
				</motion.div>
				<motion.div variants={children}>
					<h2>Company</h2>
					<p>About Us</p>
					<p>Careers</p>
					<p>Blog</p>
					<p>Pricing</p>
				</motion.div>
				<motion.div variants={children}>
					<h2>Resources</h2>
					<p>Proposal Template</p>
					<p>Invoice Template</p>
					<p>Tuturoial</p>
					<p>How to write a contract</p>
				</motion.div>
				<motion.div variants={children}>
					<h2>Join Our Newsletter</h2>
					<InputWrapper>
						<StyledInput type="text" placeholder="Your email address" />
						<Button customPadding="1.2rem 2rem">Subscribe</Button>
					</InputWrapper>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
				</motion.div>
			</StyledFooter>
			<StyledCopyright
				as={motion.div}
				ref={ref}
				variants={parent}
				initial="hidden"
				animate={animation}>
				<motion.p variants={children}>
					Copyright @ SRSUIUX 2022. All Rights Reserved.
				</motion.p>
				<motion.p variants={children}>Design by @salmandotweb</motion.p>
			</StyledCopyright>
		</>
	);
};

export default Footer;
