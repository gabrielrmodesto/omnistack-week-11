import React from "react";
import logoIMG from '../../assets/logo.svg';
import "./style.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NewIncident() {
	return (
		<div className="new-incident-container">
			<div className="content">
				<section>
					<img src={logoIMG} alt="Be the hero" />
					<h1>Register a new case</h1>
					<p>
						Describe your case with details to find a hero to resolve this
					</p>
					<Link className="back-link" to="/profile">
						<FiArrowLeft size={16} color="#E02042" />
						Home
					</Link>
				</section>
				<form action="">
					<input type="text" placeholder="Title" />
					<textarea placeholder="Description" />
					<input type="text" placeholder="Value R$" />
					
					<button type="submit" className="button">
						Register
					</button>
				</form>
			</div>
		</div>
	);
}
