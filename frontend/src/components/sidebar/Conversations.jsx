// Importuje hook do pobierania listy rozmówców i funkcję losującą emoji
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

/**
 * Komponent Conversations wyświetla listę wszystkich dostępnych rozmówców.
 * Pokazuje loader podczas ładowania i automatycznie dodaje losowe emoji dla każdej konwersacji.
 */
const Conversations = () => {
  // Pobiera listę konwersacji i status ładowania
  const {loading, conversations } = useGetConversation();

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {/* Mapuje listę konwersacji na komponenty Conversation */}
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}  // Dodaje losowe emoji dla każdej konwersacji
          lastIdx={idx === conversations.length - 1} // Sprawdza czy to ostatni element
        />
      ))}

      {/* Pokazuje kółko ładowania podczas pobierania danych */}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};

export default Conversations;
