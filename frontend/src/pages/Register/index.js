import React from "react";
import "./style.css";
import logoIMG from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function Register() {
	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoIMG} alt="Be the hero" />
					<h1>Register</h1>
					<p>
						Make your register, enter into plataform and help people
						to find cases in your ONG
					</p>
					<Link className="back-link" to="/">
						<FiArrowLeft size={16} color="#E02042" />
						Logon
					</Link>
				</section>
				<form action="">
					<input type="text" placeholder="ONG's Name" />
					<input type="text" placeholder="E-mail" />
					<input type="text" placeholder="Whatsapp" />
					<div className="input-group">
						<input type="text" placeholder="City" />
						<input type="text" placeholder="UF" style={{ width: 80 }} />
					</div>
					<button type="submit" className="button">Register</button>
				</form>
			</div>
		</div>
	);
}
