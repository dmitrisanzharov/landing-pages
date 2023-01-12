import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles-global.css";

// Pages
import Home from "./pages/Home/Home";
import Buffer from "./pages/Buffer/buffer-index.js";
import ComponentDevelopmentPage from "./pages/ComponentDevelopmentPage/ComponentDevelopmentPage";

function App() {
	return (
		<>
			<Router>
				<Routes>
					{/* NAV ROUTES */}
					<Route exact path="/" element={<Home />} />
					<Route
						exact
						path="/component-development-page"
						element={<ComponentDevelopmentPage />}
					/>

					{/* PAGES */}
					<Route exact path="/buffer" element={<Buffer />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
