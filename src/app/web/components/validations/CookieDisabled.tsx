import "@styles/components/validations/CookieDisabled.scss";

export default function CookieDisabled() {
    return (
        <div className="cookie-overlay">
            <div className="cookie-content">
                <h1>Cookies Desabilitados</h1>
                <p>
                    Para que o sistema de login da Mazca Clothing funcione, seu
                    navegador precisa aceitar cookies. Por favor, habilite os
                    cookies para este site e recarregue a página.
                </p>
            </div>
        </div>
    );
}
