import styled from "styled-components";

const StyledBanner = styled.div`
	background: ${(props) => props.theme.colorPrimary};
	color: ${(props) => props.theme.colorBackground};
	display: flex;
	align-items: flex-end;
	justify-content: space-around;
	padding: 0 5rem;
	margin: 20rem 0 5rem 0;
	border-radius: ${(props) => props.theme.borderRadiusCard};
	height: 35rem;

	h1 {
		margin: auto 0;
		font-size: 4.8rem;
	}

	img {
		width: 70rem;
	}
`;

const Banner = () => {
	return (
		<StyledBanner>
			<h1>We grow your business.</h1>
			<img src="/assets/AboutImage3.svg" alt="" />
		</StyledBanner>
	);
};

export default Banner;
