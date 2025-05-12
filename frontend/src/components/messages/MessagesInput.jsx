// Importuje hook do obsługi stanu oraz ikonę wysyłania
import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage"; // Hook do wysyłania wiadomości

/**
 * Komponent MessagesInput umożliwia wpisanie i wysłanie nowej wiadomości w czacie.
 * Obsługuje wpisywanie tekstu, wysyłanie wiadomości oraz pokazuje spinner podczas wysyłania.
 */
const MessagesInput = () => {
  // Przechowuje tekst aktualnie wpisywanej wiadomości
  const [message, setMessage] = useState("");
  // Hook do wysyłania wiadomości; loading informuje, czy trwa wysyłanie
  const {loading, sendMessage} = useSendMessage();

  // Obsługuje wysłanie formularza (wiadomości)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Zatrzymuje domyślne odświeżenie strony po submit
    if(!message) return; // Nie wysyła pustej wiadomości
    await sendMessage(message); // Wysyła wiadomość przez hook
    setMessage(""); // Czyści pole po wysłaniu
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="relative w-full">
        {/* Pole do wpisywania wiadomości */}
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white "
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* Przycisk wysyłania z ikoną lub spinnerem */}
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
          {loading ? <div className="loading loading-spinner"></div> : <BsSend />}
        </button>
      </div>
    </form>
  );
};

export default MessagesInput
