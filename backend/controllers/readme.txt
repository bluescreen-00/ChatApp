 auth.controller.js

Obsługę logiki rejestracji, logowania i wylogowania użytkownika (autentykacja).

Główne funkcje:

signup – rejestracja nowego użytkownika, walidacja danych, sprawdzanie unikalności loginu, haszowanie hasła, przypisywanie domyślnego avatara, zapis do bazy i generowanie tokena JWT.

login – logowanie użytkownika, sprawdzenie poprawności loginu i hasła, generowanie tokena JWT.

logout – wylogowanie użytkownika przez wyczyszczenie ciasteczka JWT.

2. message.controller.js

Obsługę wysyłania i pobierania wiadomości między użytkownikami.

Główne funkcje:

sendMessage – wysyłanie wiadomości do innego użytkownika:

Tworzy (lub znajduje) konwersację między użytkownikami,

Zapisuje wiadomość w bazie,

Dodaje wiadomość do konwersacji,

Wysyła wiadomość w czasie rzeczywistym przez Socket.IO do odbiorcy (jeśli jest online).

getMessages – pobieranie historii wiadomości z daną osobą:

Wyszukuje konwersację między dwoma użytkownikami,

Zwraca wszystkie wiadomości z tej konwersacji.

3. user.controllers.js

Obsługę pobierania listy użytkowników (np. do wyświetlenia na pasku bocznym czatu).

Główna funkcja:

getUserForSidebar – zwraca listę wszystkich użytkowników oprócz aktualnie zalogowanego (do wyświetlenia jako potencjalnych rozmówców w aplikacji), nie pokazuje haseł.