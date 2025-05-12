user.routes.js

Definiuje trasy (endpointy) związane z użytkownikami, obsługiwane przez Express.

Główne elementy:

Importuje middleware protectRoute, który wymaga autoryzacji JWT.

Importuje kontroler getUserForSidebar do pobierania listy użytkowników (np. do panelu bocznego czatu).

Tworzy trasę GET /api/users/, która:

Najpierw sprawdza autoryzację (protectRoute),

Następnie wywołuje kontroler getUserForSidebar.


2. auth.routes.js

Definiuje trasy związane z autoryzacją i rejestracją użytkownika.

Główne elementy:

Importuje kontrolery: login, logout, signup.

Tworzy trasy:

POST /api/auth/signup – rejestracja nowego użytkownika.

POST /api/auth/login – logowanie użytkownika.

POST /api/auth/logout – wylogowanie użytkownika.



3. message.routes.js

Definiuje trasy związane z obsługą wiadomości (czatu).

Główne elementy:

Importuje kontrolery: getMessages, sendMessage.

Importuje middleware protectRoute (autoryzacja).

Tworzy trasy:

GET /api/messages/:id – pobieranie wiadomości z daną osobą (autoryzacja wymagana).

POST /api/messages/send/:id – wysyłanie wiadomości do użytkownika o danym ID (autoryzacja wymagana).

