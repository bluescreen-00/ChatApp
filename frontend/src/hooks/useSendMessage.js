import { useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast";

/**
 * Hook useSendMessage obsługuje wysyłanie wiadomości w czacie.
 * Aktualizuje listę wiadomości w stanie i obsługuje komunikaty błędów.
 */
const useSendMessage = () => {
    const [loading, setLoading] = useState(false); // Status ładowania podczas wysyłania
    const {messages, setMessages, selectedConversation} = useConversation(); // Dostęp do stanu czatu

    /**
     * Funkcja wysyłająca wiadomość do aktualnie wybranego rozmówcy
     * @param {string} message - Treść wiadomości do wysłania
     */
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            // Wysyła żądanie POST do endpointu wiadomości
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({message})
            });
            const data = await res.json();
            
            if(data.error) throw new Error(data.error);
            
            // Aktualizuje listę wiadomości o nową wysłaną wiadomość
            setMessages([...messages, data]);
        } catch (error) {
            toast.error(error.message); // Wyświetla błąd w formie powiadomienia
        } finally {
            setLoading(false);
        }
    }

    // Zwraca funkcję do wysyłania i status ładowania
    return {sendMessage, loading}
}

export default useSendMessage
