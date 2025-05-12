// Importuje ikonę wylogowania i hook do obsługi wylogowania
import { IoLogOut } from "react-icons/io5";
import useLogout from "../../hooks/useLogout";

/**
 * Komponent LogoutButton wyświetla przycisk do wylogowania użytkownika.
 * Podczas wylogowywania pokazuje animację ładowania (spinner).
 */
const LogoutButton = () => {
  // Pobiera funkcję logout i informację, czy trwa wylogowywanie
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {/* Jeśli nie trwa wylogowywanie, pokaż ikonę wylogowania */}
      {!loading ? (
        <IoLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout} // Po kliknięciu wywołuje wylogowanie
        />
      ) : (
        // Jeśli trwa wylogowywanie, pokaż spinner
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton
