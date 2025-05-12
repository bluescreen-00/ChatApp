import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"

/**
 * Hook useLogout obsługuje proces wylogowywania użytkownika.
 * Wysyła żądanie do backendu, usuwa dane użytkownika z localStorage
 * i czyści stan zalogowanego użytkownika w aplikacji.
 */
const useLogout = () => {
    const [loading, setLoading] = useState(false); // Czy trwa wylogowywanie
    const { setAuthUser } = useAuthContext(); // Funkcja do czyszczenia zalogowanego użytkownika

    /**
     * Funkcja logout wylogowuje użytkownika.
     * Wysyła żądanie do backendu, usuwa dane z localStorage i czyści kontekst.
     */
    const logout = async () => {
        setLoading(true);
        try {
            // Wysyła żądanie wylogowania do backendu
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {"Content-Type" : "application/json"}
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            // Usuwa dane użytkownika z localStorage
            localStorage.removeItem("chat-user");
            // Czyści stan zalogowanego użytkownika w aplikacji
            setAuthUser(null);
        } catch (error) {
            // Pokazuje komunikat o błędzie
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    // Zwraca funkcję logout i status ładowania
    return { loading, logout }
};

export default useLogout
