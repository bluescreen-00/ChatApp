// Importuje potrzebne narzędzia do tworzenia wyszukiwarki użytkowników
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

/**
 * Komponent SearchInput pozwala wyszukiwać użytkowników po imieniu i nazwisku.
 * Po znalezieniu rozmówcy automatycznie przełącza czat na wybraną konwersację.
 */
const SearchInput = () => {
	const [search, setSearch] = useState(""); // Przechowuje wpisaną frazę wyszukiwania
	const { setSelectedConversation } = useConversation(); // Funkcja do zmiany aktualnego rozmówcy
	const { conversations } = useGetConversation(); // Pobiera listę wszystkich dostępnych rozmówców

	const handleSubmit = (e) => {
		e.preventDefault();
		
		// Walidacja wyszukiwania
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Wyszukiwana fraza musi mieć co najmniej 3 znaki");
		}

		// Szuka dokładnego dopasowania w imionach i nazwiskach
		const conversation = conversations.find((c) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);

		// Obsługa wyników wyszukiwania
		if (conversation) {
			setSelectedConversation(conversation); // Przełącza na znalezioną konwersację
			setSearch(""); // Czyści pole wyszukiwania
		} else {
			toast.error("Nie znaleziono użytkownika!"); // Komunikat błędu
		}
	};

	return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        {/* Pole wyszukiwania */}
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        {/* Przycisk uruchamiający wyszukiwanie */}
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
            <FaSearch className='w-6 h6 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput
