import { useState, useEffect } from 'react';
import '@styles/components/HudPanel.scss';

// Lista de "status" para simular um sistema ativo
const statusMessages = [
  "SYSTEM_STATUS::ALL_CLEAR",
  "CORE_TEMP::35C",
  "NETWORK::UPLINK_STABLE",
  "ENERGY_CELLS::98.7%",
  "QUERYING_DATABASE...",
  "RENDER_MODULE::OK",
  "AUTH_LAYER::SECURE",
  "LOADING_ASSETS...",
];

export default function HudPanel() {
  const [currentMessage, setCurrentMessage] = useState(statusMessages[0]);

  useEffect(() => {
    // Cicla pelas mensagens a cada 2 segundos
    const intervalId = setInterval(() => {
      setCurrentMessage(prevMessage => {
        const currentIndex = statusMessages.indexOf(prevMessage);
        const nextIndex = (currentIndex + 1) % statusMessages.length;
        return statusMessages[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hud-panel">
      <div className="hud-corner top-left"></div>
      <div className="hud-corner top-right"></div>
      <div className="hud-corner bottom-left"></div>
      <div className="hud-corner bottom-right"></div>
      <div className="hud-scanline"></div>
      
      <div className="hud-content">
        <p className="hud-label">// SYSTEM_MONITOR</p>
        <p className="hud-status">{currentMessage}</p>
      </div>
    </div>
  );
}