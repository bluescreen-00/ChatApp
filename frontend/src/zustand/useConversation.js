import { create } from "zustand";

/**
 * Hook useConversation zarządza globalnym stanem konwersacji (czatu) w aplikacji.
 * Przechowuje informacje o wybranej rozmowie oraz wiadomościach tej rozmowy.
 * Umożliwia ustawianie aktualnej konwersacji i aktualizowanie listy wiadomości.
 */
const useConversation = create((set) => ({
    // Aktualnie wybrana konwersacja (np. rozmówca)
    selectedConversation: null,
    // Funkcja do ustawiania wybranej konwersacji
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),

    // Tablica wiadomości aktualnej konwersacji
    messages: [],
    // Funkcja do ustawiania wiadomości
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;
