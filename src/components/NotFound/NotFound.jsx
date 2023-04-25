import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="NotFoundContainer">
			<p className="NotFoundNumber">404</p>
			<p className="NotFoundText">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="NotFoundLinkHome">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}
