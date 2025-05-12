import { useEffect, useState } from "react"
import toast from "react-hot-toast";

/**
 * Hook useGetConversation pobiera z serwera listę wszystkich użytkowników (rozmówców).
 * Zwraca status ładowania i tablicę rozmówców.
 * Obsługuje błędy i pokazuje komunikaty toast w przypadku problemów.
 */
const useGetConversation = () => {
  // Stan informujący, czy trwa ładowanie danych
  const [loading, setLoading] = useState(false);
  // Stan przechowujący listę rozmówców
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    // Funkcja pobierająca rozmówców z API
    const getConversations = async () => {
        setLoading(true);
        try {
            // Wysyła zapytanie do endpointu backendu
            const res = await fetch('/api/users');
            const data = await res.json();
            // Obsługuje ewentualny błąd z backendu
            if(data.error) {
                throw new Error(data.error);
            }
            // Ustawia pobraną listę rozmówców
            setConversations(data);
        } catch (error) {
            // Pokazuje komunikat toast w przypadku błędu
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    // Wywołuje pobieranie rozmówców przy pierwszym renderze
    getConversations();
  },[]);

  // Zwraca status ładowania i listę rozmówców
  return { loading, conversations };
}

export default useGetConversation
