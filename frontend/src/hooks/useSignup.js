import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

/**
 * Hook useSignup obsługuje proces rejestracji nowego użytkownika.
 * Sprawdza poprawność pól, wysyła dane do backendu, zapisuje użytkownika w localStorage
 * i ustawia stan zalogowanego użytkownika w aplikacji.
 */
const useSignup = () => {
    const [loading, setLoading] = useState(false); // Status ładowania podczas rejestracji
    const { setAuthUser } = useAuthContext(); // Funkcja do ustawiania zalogowanego użytkownika

    /**
     * Funkcja signup rejestruje nowego użytkownika na podstawie przekazanych danych.
     * Po sukcesie zapisuje użytkownika w localStorage i ustawia w kontekście.
     */
    const signup = async({fullName, username, password, confirmPassword, gender}) => {
        // Sprawdza poprawność wszystkich pól
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender});
        if (!success) return;

        setLoading(true);
        try {
            // Wysyła żądanie rejestracji do backendu
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify({fullName, username, password, confirmPassword, gender}),
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
            toast.error(error.message); // Pokazuje komunikat o błędzie
        } finally {
            setLoading(false);
        }
    };

    // Zwraca funkcję signup i status ładowania
    return { loading, signup }
}

export default useSignup

/**
 * Funkcja pomocnicza sprawdzająca poprawność danych rejestracyjnych.
 * Pokazuje komunikaty toast w przypadku błędów.
 */
function handleInputErrors({fullName, username, password, confirmPassword, gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Wypełnij wszystkie pola");
        return false;
    }

    if(password !== confirmPassword){
        toast.error('Hasła nie są takie same');
        return false;
    }

    if(password.length < 6){
        toast.error('Hasło musi mieć minimum 6 znaków');
        return false;
    }

    return true;
}
