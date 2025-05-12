import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

/**
 * Hook useGetMessages pobiera wiadomości dla aktualnie wybranej konwersacji.
 * Zwraca pobrane wiadomości i informację, czy trwa ładowanie.
 * Obsługuje błędy i pokazuje komunikaty toast w przypadku problemów.
 */
const useGetMessages = () => {
	const [loading, setLoading] = useState(false); // Czy trwa ładowanie wiadomości
	const { messages, setMessages, selectedConversation } = useConversation(); // Stan wiadomości i wybrana konwersacja

	useEffect(() => {
		// Funkcja pobierająca wiadomości z backendu
		const getMessages = async () => {
			setLoading(true);
			try {
				// Wysyła zapytanie o wiadomości dla wybranej konwersacji
				const res = await fetch(`/api/messages/${selectedConversation._id}`);
				const data = await res.json();
				if (data.error) throw new Error(data.error); // Obsługuje błąd z backendu
				setMessages(data); // Ustawia pobrane wiadomości
			} catch (error) {
				toast.error(error.message); // Pokazuje komunikat o błędzie
			} finally {
				setLoading(false);
			}
		};

		// Pobiera wiadomości tylko gdy wybrano konwersację
		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	// Zwraca wiadomości i status ładowania
	return { messages, loading };
};

export default useGetMessages;
