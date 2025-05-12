// Importuje kontekst autoryzacji, aby pobrać dane aktualnie zalogowanego użytkownika
import { useAuthContext } from "../../context/AuthContext"
// Importuje funkcję pomocniczą do wyciągania godziny z daty wiadomości
import { extractTime } from "../../utils/extractTime";
// Importuje hook do pobierania aktualnie wybranej konwersacji (czatu)
import useConversation from "../../zustand/useConversation";

/**
 * Komponent Message wyświetla pojedynczą wiadomość w czacie.
 * Pokazuje treść wiadomości, zdjęcie profilowe nadawcy oraz godzinę wysłania.
 * Dostosowuje wygląd wiadomości w zależności od tego, czy jest ona wysłana przez zalogowanego użytkownika, czy przez rozmówcę.
 */
const Message = ({message}) => {
  // Pobiera dane zalogowanego użytkownika
  const {authUser} = useAuthContext();
  // Pobiera aktualnie wybraną konwersację (rozmówcę)
  const {selectedConversation} = useConversation();

  // Sprawdza, czy wiadomość została wysłana przez zalogowanego użytkownika
  const fromMe  = message.senderId === authUser._id;
  // Formatuje godzinę wysłania wiadomości
  const formatedTime = extractTime(message.createdAt);
  // Ustala pozycjonowanie chmurki wiadomości w czacie (z lewej lub z prawej)
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  // Wybiera odpowiednie zdjęcie profilowe (swoje lub rozmówcy)
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  // Ustala kolor tła chmurki wiadomości (niebieski dla swoich wiadomości)
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";
  // Dodaje animację "shake" jeśli wiadomość powinna się poruszyć (np. nowa wiadomość)
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                {/* Wyświetla zdjęcie profilowe nadawcy wiadomości */}
                <img src={profilePic} alt="nie wiem" />
            </div>
        </div>
        {/* Wyświetla treść wiadomości z odpowiednim tłem i ewentualną animacją */}
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
        {/* Wyświetla godzinę wysłania wiadomości */}
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formatedTime}</div>
    </div>
  )
}

export default Message
