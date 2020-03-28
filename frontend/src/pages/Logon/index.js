import React from "react";
import { FiLogIn } from "react-icons/fi";
import "./style.css";
import heroesIMG from "../../assets/heroes.png";
import logoIMG from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

export default function Logon() {
	const [id, setID] = useState("");
	const history = useHistory();
	async function handleLogin(event) {
		event.preventDefault();
		try {
			const response = await api.post("/session", { id });
			localStorage.setItem('ongID', id);
			localStorage.setItem('ongName', response.data.name);
			history.push('/profile');
		} catch (error) {
			alert("Falha no login");
		}
	}
	return (
		<div className="logon-container">
			<section className="form">
				<img src={logoIMG} alt="Be the hero" />
				<form onSubmit={handleLogin}>
					<h1>Make the logon</h1>
					<input
						type="text"
						placeholder="Your ID"
						value={id}
						onChange={event => setID(event.target.value)}
					/>
					<button className="button" type="submit">
						Enter
					</button>
					<Link className="back-link" to="/register">
						<FiLogIn size={16} color="#E02042" />
						Don't have a register
					</Link>
				</form>
			</section>
			<img src={heroesIMG} alt="Heroes logo" />
		</div>
	);
}
