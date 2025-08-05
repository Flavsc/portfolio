import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: "2rem", textAlign: "center" }}>
                    <h1>Opa! Algo deu errado.</h1>
                    <p>
                        Nossa equipe já foi notificada. Por favor, tente
                        recarregar a página.
                    </p>
                    <button onClick={() => window.location.reload()}>
                        Recarregar
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
