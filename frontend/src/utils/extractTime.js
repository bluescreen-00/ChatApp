/**
 * Funkcja extractTime wyciąga godzinę i minuty z daty w formacie tekstowym.
 * Zwraca czas w formacie HH:MM (np. "09:05").
 * @param {string} dateString - Data w formie tekstowej (np. z bazy danych)
 * @returns {string} Godzina i minuty w formacie "HH:MM"
 */
export function extractTime(dateString) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${hours}:${minutes}`;
}

/**
 * Funkcja pomocnicza padZero dodaje zero z przodu do jednocyfrowych liczb.
 * Dzięki temu np. 7 zamienia na "07".
 * @param {number} number - Liczba do sformatowania
 * @returns {string} Liczba z zerem na początku, jeśli była jednocyfrowa
 */
function padZero(number) {
	return number.toString().padStart(2, "0");
}
