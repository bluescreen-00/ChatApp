import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext'
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/dzwonek.mp3";

/**
 * Hook useListenMessages nasłuchuje nowych wiadomości w czasie rzeczywistym przez Socket.IO.
 * Dodaje efekt "potrząsania" dla nowych wiadomości i odtwarza dźwięk powiadomienia.
 */
const useListenMessages = () => {
    const { socket } = useSocketContext(); // Pobiera połączenie socketowe
    const { messages, setMessages } = useConversation(); // Dostęp do stanu wiadomości

    useEffect(() => {
        // Nasłuchuje eventu "newMessage" z serwera
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true; // Dodaje flagę do animacji potrząsania
            const sound = new Audio(notificationSound); // Ładuje dźwięk powiadomienia
            sound.play() // Odtwarza dźwięk
            setMessages([...messages, newMessage]); // Dodaje nową wiadomość do stanu
        })

        // Czyszczenie: usuwa nasłuchiwanie przy odmontowaniu komponentu
        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
};

export default useListenMessages;
