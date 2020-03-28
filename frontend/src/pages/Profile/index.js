import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import logoIMG from "../../assets/logo.svg";
import "./style.css";
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";

export default function Profile() {
	const ongName = localStorage.getItem("ongName");
	const ongId = localStorage.getItem("ongID");
	const [incidents, setIncidents] = useState([]);
	const history = useHistory();

	useEffect(() => {
		api.get("/profile", {
			headers: {
				Authorization: ongId
			}
		}).then(response => {
			setIncidents(response.data);
		});
	}, [ongId]);
	async function handleDelete(id){
		try {
			await api.delete(`incidents/${id}`, {
				headers: {
					Authorization: ongId,
				}
			});
			setIncidents(incidents.filter(incident => incident.id !== id));
		} catch (error) {
			alert('Erro ao deletar');
		}
	}
	function handleLogout(){
		localStorage.clear();
		history.push('/');
	}
	return (
		<div className="profile-container">
			<header>
				<img src={logoIMG} alt="Be the hero" />
				<span>Welcome, {ongName}</span>
				<Link className="button" to="/incidents/new">
					Register new case
				</Link>
				<button onClick={handleLogout}>
					<FiPower size={18} color="#e02041" />
				</button>
			</header>
			<h1>Cases</h1>
			<ul>
				{incidents.map(item => (
					<li key={item.id}>
						<strong>CASE:</strong>
						<p>{item.title}</p>
						<strong>DESCRIPTION:</strong>
						<p>{item.description}</p>
						<strong>VALUE:</strong>
						<p>
							{Intl.NumberFormat("pt-BR", {
								style: "currency",
								currency: "BRL"
							}).format(item.value)}
						</p>
						<button type="button" onClick={() => handleDelete(item.id)}>
							<FiTrash2 size={20} color="#a8a8b3" />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
