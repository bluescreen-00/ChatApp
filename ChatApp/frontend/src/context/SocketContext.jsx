import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

// Tworzy kontekst do przechowywania połączenia Socket.IO i listy online użytkowników
const SocketContext = createContext();

// Hook ułatwiający dostęp do kontekstu Socket.IO w innych komponentach
export const useSocketContext = () => {
    return useContext(SocketContext);
};

/**
 * Komponent SocketContextProvider zarządza połączeniem z serwerem Socket.IO
 * oraz udostępnia listę online użytkowników całej aplikacji.
 */
export const SocketContextProvider = ({ children }) => {
    // Przechowuje instancję socketu
    const [socket, setSocket] = useState(null);
    // Przechowuje listę użytkowników online
    const [onlineUsers, setOnlineUsers] = useState([]);
    // Pobiera dane aktualnie zalogowanego użytkownika
    const {authUser} = useAuthContext();

    useEffect(() => {
        // Jeśli użytkownik jest zalogowany, nawiązuje połączenie Socket.IO
        if(authUser){
            const socket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id,
                },
            });

            setSocket(socket);

            // Nasłuchuje na aktualizacje listy online użytkowników z serwera
            socket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

            // Po wylogowaniu lub odmontowaniu zamyka połączenie
            return () => socket.close();
        } else {
			// Jeśli nie ma zalogowanego użytkownika, zamyka ewentualne istniejące połączenie
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
    },[authUser])

    // Udostępnia socket i onlineUsers wszystkim komponentom w aplikacji
    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
}
