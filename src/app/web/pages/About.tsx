import {motion, Variants} from 'framer-motion'; // CORREÇÃO: Importamos o tipo 'Variants'
import "@styles/components/About.scss";

// CORREÇÃO: Adicionamos o tipo 'Variants' à nossa constante
const containerVariants: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

// CORREÇÃO: Adicionamos o tipo 'Variants' à nossa constante
const itemVariants: Variants = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut", // Agora o TypeScript entende que isto é um valor válido
        }
    }
};

export default function About() {
    return (
        <div className="about-page-container">
            <motion.div
                className="about-content-wrapper"
                variants={containerVariants}
                initial="hidden"
                animate="visible">
                <motion.div className="about-visual-panel" variants={itemVariants}>
                    <div className="visual-glitch-lines"></div>
                    <div className="visual-grid"></div>
                    <div className="visual-scanner"></div>
                    <div className="visual-rings">
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                    </div>
                    <p className="visual-label">BIOMETRIC_DATA::SYNC</p>
                </motion.div>

                {/* -- Coluna Direita: Texto de Preenchimento -- */}
                <motion.div className="about-text-panel" variants={itemVariants}>
                    <h1 className="about-title">
                        <span className="title-bracket">[</span>
                        IDENTITY_CORE
                        <span className="title-bracket">]</span>
                    </h1>
                    <h2 className="about-subtitle">sobre mim</h2>
                    <div className="about-text-body">
                        <p>
                            gosto de sistemas bem estruturados, interfaces que dizem algo e código que não
                            engasga. Trabalho na linha de frente entre design brutalista e engenharia de
                            software — onde estética, performance e clareza se encontram.
                        </p>
                        <p>
                            domínio o front, backend, arquitetura, automação e o caos. angular, nest, react,
                            python — a stack é fluida, escolhida conforme o problema. Não tem apego à
                            ferramenta, só à solução.
                        </p>
                        <p>
                            metodologias ágeis, CI/CD, testes, versionamento... o básico bem-feito. Mas o
                            que realmente me move é criar coisas novas, quebrar o comum, explorar
                            tecnologias que ainda nem estão no hype.
                        </p>
                        <p>
                            construo com propósito. estudo com obsessão. crio com intenção.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}