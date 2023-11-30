import React from "react";
import { BsFacebook, BsGithub, BsYoutube} from "react-icons/bs";
import "./home.css";

const HomeSocials = () => {
	return (
		<div className="home-socials">
			<a
				href="https://www.facebook.com/SugarTawng/"
				target="_blank"
				className="icon"
			>
				<BsFacebook />
			</a>
			<a
				href="https://github.com/SugarTawng"
				target="_blank"
				className="icon"
			>
				<BsGithub />
			</a>
			<a
				href="https://www.youtube.com/@SugarTawng/"
				target="_blank"
				className="icon"
			>
				<BsYoutube />
			</a>
		</div>
	);
};

export default HomeSocials;
