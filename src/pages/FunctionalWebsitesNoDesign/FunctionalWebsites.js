import React from "react";
import "./FunctionalWebsites.css";
import { Link } from "react-router-dom";

// views
import allMyFunctionalityProjects from "../../view/allMyFunctionalityProjects";

const FunctionalWebsites = () => {
	return (
		<div className="FunctionalityWebsitesContainer">
			<Link to="/">Back to home {">>"}</Link>
			<h1>Functionality Websites</h1>
			<div>
				<em>
					All are functinality based, but have little to no design, quantity -{" "}
					{allMyFunctionalityProjects.length}
				</em>
			</div>
			<hr />
			{allMyFunctionalityProjects.map((el, i) => {
				const {
					id,
					name,
					link,
					standAloneUrl,
					namesOfActivePages,
					highlights,
					importantInfo,
				} = el;
				return (
					<div key={id}>
						<ul>
							<li>
								<b>Name: </b>
								{name}
							</li>
							<li>
								<b>Link to page: </b>
								{standAloneUrl ? (
									<a href={link} target="_blank" rel="noreferrer">
										click me {">>"}
									</a>
								) : (
									<Link to={link}>click me</Link>
								)}
							</li>
							<li>
								<b>Number of active pages: </b> {namesOfActivePages.length}
							</li>
							<li>
								<b>Important Information: </b>
								<ul>
									{importantInfo.map((el, i) => {
										return <li key={el + i}>{el}</li>;
									})}
								</ul>
							</li>
							<li>
								<b>Names of active pages: </b>
								<ul>
									{namesOfActivePages.map((el, i) => {
										return (
											<li key={el}>
												{" "}
												<input type="checkbox" />
												{el}
											</li>
										);
									})}
								</ul>
							</li>
							<li>
								<b>Highlights: </b>
								<ul>
									{highlights.map((el, i) => {
										return (
											<li key={el + i}>
												{" "}
												<input type="checkbox" />
												{el}
											</li>
										);
									})}
								</ul>
							</li>
						</ul>
						<br />
						<br />
						<hr />
					</div>
				);
			})}
		</div>
	);
};

export default FunctionalWebsites;
