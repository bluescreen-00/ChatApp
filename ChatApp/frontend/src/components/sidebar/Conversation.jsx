// Importuje kontekst Socket.IO i hook do zarządzania konwersacjami
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

/**
 * Komponent Conversation pokazuje pojedynczy element listy rozmówców.
 * Wyświetla zdjęcie profilowe, nazwę użytkownika, status online oraz emoji.
 * Pozwala wybrać rozmówcę kliknięciem i podświetla aktualnie wybraną konwersację.
 */
const Conversation = ({conversation, lastIdx, emoji}) => {
  // Pobiera aktualnie wybraną konwersację i funkcję do jej zmiany
  const {selectedConversation, setSelectedConversation} = useConversation();
  
  // Sprawdza czy ten rozmówca jest aktualnie wybrany
  const isSelected = selectedConversation?._id === conversation._id;
  
  // Pobiera listę użytkowników online z Socket.IO
  const { onlineUsers } = useSocketContext();
  
  // Sprawdza czy ten rozmówca jest aktualnie online
  const isOnline = onlineUsers.includes(conversation._id);

  return <>
    <div 
      className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`} 
      onClick={() => setSelectedConversation(conversation)}
    >
      {/* Kontener zdjęcia profilowego z wskaźnikiem online/offline */}
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className="w-12 rounded-full">
          <img src={conversation.profilePic} alt="avatar" />
        </div>
      </div>

      {/* Sekcja z nazwą użytkownika i emoji */}
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">{conversation.fullName}</p>
          <span className="text-x1">{emoji}</span>
        </div>
      </div>
    </div>

    {/* Dodaje linię oddzielającą rozmówców, o ile nie jest to ostatni element */}
    {!lastIdx && <div className="divider my-0 py-0 h-1" />}
  </>
};

export default Conversation
