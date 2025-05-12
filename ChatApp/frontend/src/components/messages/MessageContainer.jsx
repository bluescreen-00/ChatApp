// Importuje hooki i komponenty potrzebne do obsługi czatu
import { useEffect } from "react"
import useConversation from "../../zustand/useConversation"
import Messages from "./Messages"
import MessagesInput from "./MessagesInput"
import { TiMessages } from "react-icons/ti"
import { useAuthContext } from "../../context/AuthContext"

/**
 * Komponent MessageContainer wyświetla główną część okna czatu.
 * Pokazuje rozmowę z wybraną osobą lub zachętę do wybrania rozmówcy.
 */
const MessageContainer = () => {
    // Pobiera aktualnie wybraną konwersację i funkcję do jej resetowania
    const {selectedConversation, setSelectedConversation} = useConversation();

    // Po zmianie komponentu (np. przełączeniu czatu) resetuje wybraną konwersację
    useEffect(() => {
        // Funkcja wywołana przy odmontowaniu komponentu
        return () => setSelectedConversation(null)
    },[setSelectedConversation]);

    return (
        <div className="md:min-w-[450px] flex flex-col">
            {/* Jeśli nie wybrano rozmówcy, pokaż komunikat powitalny */}
            {!selectedConversation ? <NoChatSelected /> : (
            <>
                {/* Pasek z imieniem i nazwiskiem rozmówcy */}
                <div className="bg-slate-500 px-4 py-2 mb-2">
                    <span className="label-text">To:</span>{" "}
                    <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
                </div>
                {/* Lista wiadomości */}
                <Messages />
                {/* Pole do wpisywania nowej wiadomości */}
                <MessagesInput />
            </>    
            )}
        </div>    
    )
}

export default MessageContainer

/**
 * Komponent NoChatSelected wyświetla powitanie i zachętę do wybrania rozmówcy,
 * jeśli żaden czat nie jest aktualnie wybrany.
 */
const NoChatSelected = () => {
    // Pobiera dane zalogowanego użytkownika
    const { authUser } = useAuthContext()
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-500 font-semibold flex flex-col items-center gap-2">
                <p>Witaj 👋 {authUser.fullName} </p>
                <p>Do kogo chcesz napisać?</p>
                {/* Ikona wiadomości */}
                <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    )
}
