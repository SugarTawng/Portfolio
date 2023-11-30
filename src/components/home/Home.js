import React from "react";
import HomeBtns from "./HomeBtns";
import HomeSocials from "./HomeSocials";
import Avatar1 from "../../assets/img/Avatar.png";
import "./home.css";

const Home = () => {
	return (
		<section id="home">
			<h5>Hello I'm </h5>
			<h2>SugarTawng</h2>
			<h5>Fullstack Developer</h5>

			<div className="container home__container">
				<HomeBtns />
				<HomeSocials />
				<div className="home__image">
					<img
						src={Avatar1}
						alt="Avatar"
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
