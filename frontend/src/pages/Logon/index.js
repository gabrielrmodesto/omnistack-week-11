import React from "react";
import "./style.css";
import heroesIMG from '../../assets/heroes.png'
import logoIMG from '../../assets/logo.svg';

export default function Logon() {
	return (
		<div className="logon-container">
			<section className="form">
				<img src={logoIMG} alt="Be the hero"/>
				<form action="">
					<h1>Make the logon</h1>
					<input type="text" placeholder="Your ID"/>
					<button type="submit">Enter</button>
					<a href="/register">
						Don't have a register
					</a> 
				</form>
			</section>
			<img src={heroesIMG} alt="Heroes logo"/>
		</div>
	);
}
