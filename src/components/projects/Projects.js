import React from "react";
import SingleProject from "./SingleProject";
import PJ1 from "../../assets/img/pj1.png";
import PJ2 from "../../assets/img/pj2.png";
import PJ3 from "../../assets/img/pj3.png";
import "./projects.css";

const Projects = () => {
	const projects = [
		{
			id: 1,
			image: PJ1,
			title: "SugarTawng's Portfolio",
			description: "A website that includes information about myself and the projects that I have worked on.",
			teamSize: 1,
			role: "Frontend Developer",
			technologies: "React",
			features: "Light-Dark mode, Responsive",
			livedemo: "https://portfolio-omega-drab-91.vercel.app/",
			github: "https://github.com/SugarTawng/Portfolio",
		},
		{
			id: 2,
			image: PJ2,
			title: "Bookstore management",
			description: "A web application supporting the import and export of books, user management, and the buying and payment process.",
			teamSize: 2,
			role: "Backend Developer",
			technologies: "Nodejs, MySQL, Middleware",
			features: "Statistics, Management",
			github: "https://github.com/SugarTawng/SE104.git",
		},
		{
			id: 3,
			image: PJ3,
			title: "Bookstore management version 2",
			description: "A web application supporting the import and export of books, user management",
			teamSize: 2,
			role: "Fullstack Developer",
			technologies: "Nodejs, MongoDB, Middleware, React, Heroku and Vercel",
			features: "API with security",
			github: "https://github.com/SugarTawng/IS207",
		},
	];
	return (
		<section id="projects">
			<h2>My Projects</h2>
			<div className="container projects__container">
				{projects.map((project) => {
					return (
						<SingleProject
							key={project.id}
							project={project}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
