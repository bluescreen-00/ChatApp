Plik server.js jest głównym plikiem uruchamiającym backend Twojej aplikacji. Odpowiada za start serwera Express, inicjalizację bazy danych (MongoDB w pamięci RAM), konfigurację middleware oraz podłączenie tras (endpointów) i obsługę komunikacji w czasie rzeczywistym przez Socket.IO.

Najważniejsze elementy:
Importy:

Framework Express do obsługi żądań HTTP.

dotenv do ładowania zmiennych środowiskowych z pliku .env.

cookie-parser do obsługi ciasteczek.

mongoose do komunikacji z bazą MongoDB.

MongoMemoryServer z mongodb-memory-server – uruchamia bazę MongoDB w pamięci RAM, bez potrzeby instalowania jej lokalnie.

Import tras: autoryzacja (authRoutes), wiadomości (messageRoutes), użytkownicy (userRoutes).

Import instancji aplikacji i serwera z pliku socket.js (obsługa Socket.IO).

Konfiguracja portu:
Ustawia port serwera na wartość z .env lub domyślnie 5000.

Funkcja startServer:

Tworzy instancję MongoDB w pamięci RAM (MongoMemoryServer.create()).

Pobiera URI do bazy i łączy się z nią przez Mongoose.

Wypisuje w konsoli informację o połączeniu z bazą.

Konfiguruje middleware: obsługa JSON i ciasteczek.

Podłącza trasy API: /api/auth, /api/messages, /api/users.

Uruchamia serwer (server.listen) i wypisuje komunikat o starcie.

Obsługuje zamknięcie procesu (SIGINT): zamyka połączenie z bazą i wyłącza serwer MongoDB w pamięci.

Obsługa błędów:
W przypadku błędu podczas inicjalizacji, wypisuje szczegóły i kończy proces.