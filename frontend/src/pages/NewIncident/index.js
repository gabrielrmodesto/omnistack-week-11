import React from "react";
import logoIMG from "../../assets/logo.svg";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import api from "../../services/api";

export default function NewIncident() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [value, setValue] = useState("");
	const ongId = localStorage.getItem("ongID");
	const history = useHistory();

	async function handleNewIncident(event) {
		event.preventDefault();
		const data = {
			title,
			description,
			value
		};

		try {
			await api.post("/incidents", data, {
				headers: {
					Authorization: ongId,
				}
			});
			history.push('/profile');
		} catch (error) {
			alert("Erro ao cadastrar");
		}
	}
	return (
		<div className="new-incident-container">
			<div className="content">
				<section>
					<img src={logoIMG} alt="Be the hero" />
					<h1>Register a new case</h1>
					<p>
						Describe your case with details to find a hero to
						resolve this
					</p>
					<Link className="back-link" to="/profile">
						<FiArrowLeft size={16} color="#E02042" />
						Home
					</Link>
				</section>
				<form onSubmit={handleNewIncident}>
					<input
						type="text"
						placeholder="Title"
						value={title}
						onChange={event => setTitle(event.target.value)}
					/>
					<textarea
						placeholder="Description"
						value={description}
						onChange={event => setDescription(event.target.value)}
					/>
					<input
						type="text"
						placeholder="Value R$"
						value={value}
						onChange={event => setValue(event.target.value)}
					/>

					<button type="submit" className="button">
						Register
					</button>
				</form>
			</div>
		</div>
	);
}
