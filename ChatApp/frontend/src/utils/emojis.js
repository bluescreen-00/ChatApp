/**
 * Tablica faceEmoijs zawiera różne emoji twarzy.
 * Używana jest np. do losowego przypisywania emoji do rozmówców w czacie.
 */
export const faceEmoijs = [
    "😜", "🤓", "😴", "😏", "😤", "🤮", "😖", "🥶", "😇", "🤕", "😡", "😃",
    "😋", "🤢", "🥺", "🙄", "😊", "😁", "😎", "🥰", "🤪", "😅", "🤔", "🥳",
    "🤩", "😇", "😍", "🙃", "😭", "😬", "🤤", "😱", "🤯", "😈",
];

/**
 * Funkcja getRandomEmoji zwraca losowe emoji z tablicy faceEmoijs.
 * Może być używana np. do wyświetlania przy rozmówcach lub w innych miejscach aplikacji.
 * @returns {string} Losowo wybrane emoji
 */
export const getRandomEmoji = () => {
    return faceEmoijs[Math.floor(Math.random() * faceEmoijs.length)];
};
