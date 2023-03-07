import "./home.css";
import React from "react";
import { Link } from "react-router-dom";
import allMyDesignProjects from "../../view/allMyDesignProjects";
import { Helmet } from "react-helmet";

export default function Home() {
	return (
		<div className="HomeContainer">
			<Helmet>
				<title>Home page</title>
			</Helmet>
			<h1>Design</h1>
			<div className="HomeContainer_Heading2">
				<em>
					all are mobile optimised, but have LIMITED functionality, count:{" "}
					{allMyDesignProjects.length}
				</em>
			</div>
			<div className="HomeContainer_ButtonsNavBar">
				<button className="HomeContainer_Button85">
					<Link to="/component-development-page">
						Functional Websites (no design)
					</Link>
				</button>
				<button className="HomeContainer_Button40">
					<Link to="/component-development-page">dev page</Link>
				</button>
			</div>
			{allMyDesignProjects &&
				allMyDesignProjects.map((el, i) => {
					const {
						name,
						link,
						image,
						numberOfActivePages,
						highlights,
						standAloneUrl,
						warnings,
						pagePerformance,
					} = el;
					return (
						<div key={new Date().getTime().toString() + name}>
							<hr />

							<section className="HomeContainer_ProjectSection">
								<div className="HomeContainer_ProjectSection_ImageHolder">
									{standAloneUrl ? (
										<a href={link} target="_blank" rel="noreferrer">
											<img src={image} alt={name} width="100%" />
										</a>
									) : (
										<Link to={link}>
											<img src={image} alt={name} width="100%" />
										</Link>
									)}
								</div>
								<div className="HomeContainer_ProjectSection_TextHolder">
									<ul>
										<li>
											<b>Name:</b> {name}
										</li>

										{standAloneUrl ? (
											<li>
												<b>Link:</b>{" "}
												<a
													href={link}
													target="_blank"
													rel="noreferrer"
													className="HomeContainer_ProjectSection_TextHolder_Links"
												>
													{" "}
													visit {name.toLowerCase()}{" "}
													<i className="bi bi-link-45deg"></i>
												</a>
											</li>
										) : (
											<li>
												<b>Link:</b>{" "}
												<Link
													to={link}
													className="HomeContainer_ProjectSection_TextHolder_Links"
												>
													visit {name.toLowerCase()}{" "}
													<i className="bi bi-link-45deg"></i>
												</Link>
											</li>
										)}

										<li>
											<b>Number of active pages:</b> {numberOfActivePages}
										</li>
										{warnings && (
											<li>
												<span style={{ color: "red", fontWeight: "bold" }}>
													Warning!
												</span>{" "}
												- {warnings}
											</li>
										)}
										<li>
											<b>Highlights:</b> <br />
											<ul>
												{highlights &&
													highlights.map((el, i) => {
														return (
															<li key={new Date().getTime().toString() + el}>
																{el}
															</li>
														);
													})}
											</ul>
										</li>
										{pagePerformance && (
											<li>
												<b>Page Performance improvements from original:</b>
												<ul>
													{pagePerformance.map((el, i) => {
														return (
															<li key={new Date().getTime().toString() + el}>
																{el}
															</li>
														);
													})}
												</ul>
											</li>
										)}
									</ul>
								</div>
							</section>
						</div>
					);
				})}
			<div className="HomeContainer_Footer"></div>
		</div>
	);
}
