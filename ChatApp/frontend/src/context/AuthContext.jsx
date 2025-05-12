// Importuje narzędzia do tworzenia kontekstu i obsługi stanu w React
import { createContext, useContext, useState } from "react";

/**
 * Tworzy kontekst autoryzacji użytkownika.
 * Dzięki temu można łatwo udostępniać dane o zalogowanym użytkowniku w całej aplikacji.
 */
export const AuthContext = createContext();

/**
 * Hook pomocniczy do pobierania danych z kontekstu autoryzacji.
 * Dzięki temu w dowolnym komponencie można użyć: const {authUser, setAuthUser} = useAuthContext();
 */
export const useAuthContext = () => {
    return useContext(AuthContext);
};

/**
 * Komponent AuthContextrProvider udostępnia dane o zalogowanym użytkowniku wszystkim komponentom potomnym w aplikacji.
 * - Przechowuje w stanie authUser (zalogowany użytkownik).
 * - Przy starcie pobiera dane użytkownika z localStorage (jeśli są zapisane).
 * - Pozwala zmieniać dane użytkownika przez setAuthUser.
 */
export const AuthContextrProvider = ({ children }) => {
    // Przechowuje dane zalogowanego użytkownika, pobrane z localStorage lub null, jeśli nie ma
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

    // Udostępnia authUser i setAuthUser wszystkim komponentom potomnym
    return (
        <AuthContext.Provider value={{authUser, setAuthUser}}>
            {children} {/* tutaj: komponenty potomne */}
        </AuthContext.Provider>
    );
};
