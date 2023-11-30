import React from "react";
import HTML from "../../assets/img/html.svg";
import CSS from "../../assets/img/css.svg";
import JS from "../../assets/img/javascript.svg";
import MUI from "../../assets/img/mui.svg"
import ReactJS from "../../assets/img/react.svg";
import NodeJS from "../../assets/img/nodejs.svg";
import MySQL from "../../assets/img/mysql.svg"
import SQLServer from "../../assets/img/sqlserver.svg"
import MongoDB from "../../assets/img/mongodb.svg"
import Heroku from "../../assets/img/heroku.svg"
import Vercel from "../../assets/img/vercel.svg"


import "./about.css";

const AboutSkills = () => {
	const skills = [
		{ id: 1, img: HTML, name: "HTML" },
		{ id: 2, img: CSS, name: "CSS" },
		{ id: 3, img: JS, name: "JS" },
		{ id: 4, img: MUI, name: "Material UI" },
		{ id: 5, img: ReactJS, name: "ReactJS" },
		{ id: 6, img: NodeJS, name: "NodeJS" },
		{ id: 7, img: MySQL, name: "MySQL" },
		{ id: 8, img: SQLServer, name: "SQLServer" },
		{ id: 9, img: MongoDB, name: "MongoDB" },
		{ id: 10, img: Heroku, name: "Heroku" },
		{ id: 11, img: Vercel, name: "Vercel" },
	];

	return (
		<div className="about-skills">
			<h2>My Knowledge</h2>
			<p>Technologies and Languages that I use to develop my projects everyday</p>
			<div>
				{skills.map((skill) => {
					return (
						<article key={skill.id}>
							<img
								src={skill.img}
								alt={skill.name}
							/>
							<p>{skill.name}</p>
						</article>
					);
				})}
			</div>
		</div>
	);
};

export default AboutSkills;
