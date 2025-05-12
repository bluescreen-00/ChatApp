import './App.css'
import Home from './pages/home/Home';
import Signup from './pages/signup/SignUp';
import Login from './pages/login/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

/**
 * Główny komponent aplikacji.
 * Zarządza routingiem (przełączaniem widoków) oraz sprawdza, czy użytkownik jest zalogowany.
 * Wyświetla powiadomienia toast.
 */
function App() {
  // Pobiera dane o zalogowanym użytkowniku z kontekstu autoryzacji
  const { authUser } = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* Routing aplikacji */}
      <Routes>
        {/* Strona główna: dostępna tylko po zalogowaniu */}
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        {/* Strona logowania: jeśli użytkownik jest zalogowany, przekierowuje na stronę główną */}
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        {/* Strona rejestracji: jeśli użytkownik jest zalogowany, przekierowuje na stronę główną */}
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      {/* Komponent do wyświetlania powiadomień toast w całej aplikacji */}
      <Toaster />
    </div>
  );    
}

export default App;
