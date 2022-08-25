import styled from "styled-components";
import Button from "../../shared/Button";
import ServiceCard from "../../shared/ServiceCard";

const StyledServices = styled.div`
	display: flex;
	align-items: center;
	padding-bottom: 5rem;
	width: 100%;
`;

const StyledServicesInfo = styled.div`
	margin-left: auto;
	width: 70rem;

	h1 {
		font-size: 4.8rem;
		margin-bottom: 2rem;

		@media (max-width: ${(props) => props.theme.breakpoints.large}) {
			font-size: 4rem;
		}
	}

	@media (max-width: ${(props) => props.theme.breakpoints.large}) {
		width: 50rem;
	}
`;

const Services = () => {
	return (
		<StyledServices>
			<ServiceCard
				background={true}
				img="/assets/UIUX.svg"
				title="UI UX DESIGN"
				description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
			/>
			<ServiceCard
				img="/assets/WebDesign.svg"
				title="WEB DESIGN"
				description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
			/>
			<ServiceCard
				img="/assets/AppDesign.svg"
				title="APP DESIGN"
				description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
			/>
			<StyledServicesInfo>
				<h1>Organic and viral growth for your business</h1>
				<Button>Explore Now</Button>
			</StyledServicesInfo>
		</StyledServices>
	);
};

export default Services;
