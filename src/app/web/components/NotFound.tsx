import { useNavigate } from "react-router-dom";
import "@styles/components/NotFound.scss";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="not-found">
            <div className="not-found__content">
                <h1 className="gradient-text">404</h1>
                <h2>pagina não encontrada</h2>
                <p>parece que essa pagina não existe...</p>
                <button
                    className="primary-button"
                    onClick={() => navigate("/")}
                >
                    volte para o home
                </button>
            </div>
        </div>
    );
}
