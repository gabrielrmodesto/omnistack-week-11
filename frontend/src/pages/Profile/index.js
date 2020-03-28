import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import logoIMG from "../../assets/logo.svg";
import './style.css';

export default function Profile() {
	return (
		<div className="profile-container">
			<header>
				<img src={logoIMG} alt="Be the hero" />
				<span>Welcome, ONG Name</span>
				<Link className="button" to="/incidents/new">
					Register new case
				</Link>
				<button>
					<FiPower size={18} color="#e02041" />
				</button>
			</header>
			<h1>Cases</h1>
			<ul>
				<li>
					<strong>CASE:</strong>
					<p>Case test</p>
					<strong>DESCRIPTION:</strong>
					<p>Description test</p>
					<strong>VALUE:</strong>					
					<p>R$ 120,00</p>
					<button type="button">
						<FiTrash2 size={20} color="#a8a8b3" />
					</button>
				</li>
				<li>
					<strong>CASE:</strong>
					<p>Case test</p>
					<strong>DESCRIPTION:</strong>
					<p>Description test</p>
					<strong>VALUE:</strong>					
					<p>R$ 120,00</p>
					<button type="button">
						<FiTrash2 size={20} color="#a8a8b3" />
					</button>
				</li>
				<li>
					<strong>CASE:</strong>
					<p>Case test</p>
					<strong>DESCRIPTION:</strong>
					<p>Description test</p>
					<strong>VALUE:</strong>					
					<p>R$ 120,00</p>
					<button type="button">
						<FiTrash2 size={20} color="#a8a8b3" />
					</button>
				</li>
				<li>
					<strong>CASE:</strong>
					<p>Case test</p>
					<strong>DESCRIPTION:</strong>
					<p>Description test</p>
					<strong>VALUE:</strong>					
					<p>R$ 120,00</p>
					<button type="button">
						<FiTrash2 size={20} color="#a8a8b3" />
					</button>
				</li>
			</ul>
		</div>
	);
}
