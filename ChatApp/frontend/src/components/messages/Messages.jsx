// Importuje potrzebne hooki i komponenty do obsługi listy wiadomości w czacie
import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"; // Hook do pobierania wiadomości z serwera
import MessageSkeleton from "../skeletons/MessageSkeleton"; // Komponent szkieletu (loader) podczas ładowania
import Message from "./Message"; // Komponent pojedynczej wiadomości
import useListenMessages from "../../hooks/useListenMessages"; // Hook do nasłuchiwania nowych wiadomości w czasie rzeczywistym

/**
 * Komponent Messages wyświetla listę wszystkich wiadomości w aktualnej rozmowie.
 * Obsługuje ładowanie, automatyczne przewijanie do najnowszej wiadomości
 * i nasłuchiwanie nowych wiadomości przez Socket.IO.
 */
const Messages = () => {
  // Pobiera wiadomości i informację, czy trwa ładowanie
  const { messages, loading } = useGetMessages();
  // Nasłuchuje nowych wiadomości w czasie rzeczywistym
  useListenMessages();
  // Referencja do ostatniego elementu (do przewijania)
  const lastMessageRef = useRef();

  // Po każdej zmianie wiadomości przewija widok do ostatniej wiadomości
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {/* Jeśli nie trwa ładowanie i są wiadomości, wyświetl je */}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {/* Jeśli trwa ładowanie, pokaż trzy szkieletowe placeholdery */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {/* Jeśli nie ma wiadomości i nie trwa ładowanie, pokaż zachętę do napisania pierwszej wiadomości */}
      {!loading && messages.length === 0 && (
        <p className="text-center">Aby rozpocząć rozmowe wyślij wiadomość</p>
      )}
    </div>
  );
};

export default Messages;
