import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextrProvider } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'

/**
 * Punkt wejścia aplikacji React.
 * Renderuje główny komponent App i otacza go wszystkimi niezbędnymi providerami:
 * - StrictMode: pomaga wykrywać potencjalne problemy w aplikacji podczas developmentu
 * - BrowserRouter: obsługuje routing (przełączanie stron) w aplikacji SPA
 * - AuthContextrProvider: udostępnia dane o zalogowanym użytkowniku w całej aplikacji
 * - SocketContextProvider: udostępnia połączenie Socket.IO i listę online użytkowników
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextrProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthContextrProvider>
    </BrowserRouter>
  </StrictMode>,
)
