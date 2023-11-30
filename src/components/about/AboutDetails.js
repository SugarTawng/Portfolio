import React from "react";
import { Link } from "react-router-dom";
import Avatar2 from "../../assets/img/Av3.png";
import Avatar3 from "../../assets/img/Av2.jpg";
import "./about.css";

const AboutDetails = () => {
	return (
		<div className="about-details">
			<div className="about-details-image">
				<div className="front">
					<img
						src={Avatar2}
						alt="Avatar"
					/>
				</div>
				<div className="back">
					<img
						src={Avatar3}
						alt="Avatar"
					/>
				</div>
			</div>
			<div className="about-details-content">
				<p>
				My full name is Tang Viet Dien. I live in Ho Chi Minh City, and I'm a fourth-year student at the University of Information Technology (UIT), majoring in Information Systems. With a passion for coding and other interests, I have decided to study more about web development.
					<br />
					<br />
					My future direction is to become a financially free Fullstack developer and expand my relationships. Besides coding, I also enjoy listening to music and sports
				</p>
				<Link
					to="/contact"
					className="btn btn-primary"
				>
					Let's Talk
				</Link>
			</div>
		</div>
	);
};

export default AboutDetails;
