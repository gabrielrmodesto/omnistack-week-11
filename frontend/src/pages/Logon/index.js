import React from "react";
import { FiLogIn } from 'react-icons/fi';
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
					<button className="button" type="submit">Enter</button>
					<a href="/register">
						<FiLogIn size={16} color="#E02042" />
						Don't have a register
					</a> 
				</form>
			</section>
			<img src={heroesIMG} alt="Heroes logo"/>
		</div>
	);
}
