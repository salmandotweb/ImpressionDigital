import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import styled from "styled-components";
import Navbar from "../components/layout/Navbar";
import "../styles/globals.css";
import Footer from "../components/layout/Footer";

const StyledLayout = styled.div`
	padding: 0 ${(props) => props.theme.spacing.large};

	@media (max-width: ${(props) => props.theme.breakpoints.large}) {
		padding: 0 ${(props) => props.theme.spacing.medium};
	}

	@media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
		padding: 0 ${(props) => props.theme.spacing.small};
	}
`;

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<StyledLayout>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</StyledLayout>
		</ThemeProvider>
	);
}

export default MyApp;
