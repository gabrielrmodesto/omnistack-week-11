import React from "react";
import "./style.css";
import logoIMG from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import { useState } from "react";

export default function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [whatsapp, setWhatsapp] = useState("");
	const [city, setCity] = useState("");
	const [uf, setUf] = useState("");
	const history = useHistory();
	async function handleRegister(event) {
		event.preventDefault();
		const data = { name, email, whatsapp, city, uf };

		try {
			const response = await api.post("/ongs", data);
			alert(`Seu ID de acesso: ${response.data.id}`);
			history.push('/');
		} catch (error) {
			alert("Erro");
		}
	}
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
				<form onSubmit={handleRegister}>
					<input
						type="text"
						placeholder="ONG's Name"
						value={name}
						onChange={event => setName(event.target.value)}
					/>
					<input
						type="text"
						placeholder="E-mail"
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
					<input
						type="text"
						placeholder="Whatsapp"
						value={whatsapp}
						onChange={event => setWhatsapp(event.target.value)}
					/>
					<div className="input-group">
						<input
							type="text"
							placeholder="City"
							value={city}
							onChange={event => setCity(event.target.value)}
						/>
						<input
							type="text"
							placeholder="UF"
							style={{ width: 80 }}
							value={uf}
							onChange={event => setUf(event.target.value)}
						/>
					</div>
					<button type="submit" className="button">
						Register
					</button>
				</form>
			</div>
		</div>
	);
}
