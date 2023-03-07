import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles-global.css";

// Pages
import Home from "./pages/Home/Home";
import ComponentDevelopmentPage from "./pages/ComponentDevelopmentPage/ComponentDevelopmentPage";
import FunctionalWebsites from "./pages/FunctionalWebsitesNoDesign/FunctionalWebsites";

// Sites
import Buffer from "./pages/Buffer/buffer-index.js";
import IndependentIE from "./pages/IndependentIE/IndependentIEIndex.js";

function App() {
	return (
		<>
			<Router>
				<Routes>
					{/* NAV ROUTES */}
					<Route exact path="/" element={<Home />} />
					<Route
						exact
						path="/functionality-pages"
						element={<FunctionalWebsites />}
					/>
					<Route
						exact
						path="/component-development-page"
						element={<ComponentDevelopmentPage />}
					/>

					{/* Sites */}
					<Route exact path="/buffer" element={<Buffer />} />
					<Route exact path="/independent-ie" element={<IndependentIE />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
