import styled from "styled-components";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import Button from "../../shared/Button";
import ServiceCard from "../../shared/ServiceCard";
import { motion } from "framer-motion";
import { children, parent } from "../../../animations/animations";

const StyledServicesContainer = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: ${"1338px"}) {
		flex-direction: column-reverse;
	}
	@media (max-width: ${"425px"}) {
		flex-direction: column;
	}
`;

const StyledServices = styled.div`
	display: flex;
	align-items: center;
	padding-bottom: 5rem;
	width: 100%;
	margin-right: 3rem;

	@media (max-width: ${"1338px"}) {
		justify-content: center;
		margin-right: 0;
	}
	@media (max-width: ${"1024px"}) {
		flex-wrap: wrap;
	}
`;

const StyledServicesInfo = styled.div`
	h1 {
		font-size: 4.8rem;
		margin-bottom: 2rem;

		@media (max-width: ${(props) => props.theme.breakpoints.large}) {
			font-size: 4rem;
		}
		@media (max-width: ${"1152px"}) {
			font-size: 4.2rem;
		}
		@media (max-width: ${"1072px"}) {
			text-align: center;
		}
		@media (max-width: ${"510px"}) {
			font-size: 3.8rem;
		}
		@media (max-width: ${"425px"}) {
			font-size: 3rem;
		}
	}

	@media (max-width: ${"1338px"}) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const Services = () => {
	const [ref, animation] = useScrollAnimation();
	return (
		<StyledServicesContainer>
			<StyledServices
				as={motion.div}
				ref={ref}
				variants={parent}
				initial="hidden"
				animate={animation}>
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
			</StyledServices>
			<StyledServicesInfo
				as={motion.div}
				ref={ref}
				variants={parent}
				initial="hidden"
				animate={animation}>
				<motion.h1 variants={children}>
					Organic and viral growth for your business
				</motion.h1>
				<Button>Explore Now</Button>
			</StyledServicesInfo>
		</StyledServicesContainer>
	);
};

export default Services;
