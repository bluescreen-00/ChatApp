import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from 'react-hot-toast'

/**
 * Hook useLogin obsługuje proces logowania użytkownika.
 * Sprawdza poprawność danych, wysyła zapytanie do backendu, zapisuje użytkownika w localStorage
 * i aktualizuje stan zalogowanego użytkownika w aplikacji.
 */
const useLogin = () => {
    const [loading, setLoading] = useState(false); // Czy trwa logowanie
    const { setAuthUser } = useAuthContext(); // Funkcja do ustawiania zalogowanego użytkownika

    /**
     * Funkcja login próbuje zalogować użytkownika na podstawie loginu i hasła.
     * W przypadku sukcesu zapisuje dane w localStorage i aktualizuje kontekst.
     */
    const login = async (username, password) => {
        // Sprawdza czy pola są wypełnione
        const success = handleInputErrors(username, password);
        if (!success) return;
        setLoading(true);
        try {
            // Wysyła żądanie logowania do backendu
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            // Zapisuje dane użytkownika w localStorage
            localStorage.setItem("chat-user", JSON.stringify(data));
            // Ustawia użytkownika w kontekście aplikacji
            setAuthUser(data);

        } catch (error) {
            // Pokazuje komunikat o błędzie
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    // Zwraca funkcję login i status ładowania
    return { loading, login }
}

export default useLogin

/**
 * Funkcja pomocnicza sprawdzająca, czy oba pola (login i hasło) są wypełnione.
 * Jeśli nie, pokazuje komunikat o błędzie.
 */
function handleInputErrors(username, password){
    if(!username || !password){
        toast.error("Wypełnij wszystkie pola");
        return false;
    }
    return true;
}
