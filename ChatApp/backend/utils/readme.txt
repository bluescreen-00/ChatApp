Opis pliku: generateToken.js
Za co odpowiada:
Plik generateToken.js zawiera funkcję pomocniczą do generowania tokena JWT (JSON Web Token) dla użytkownika oraz ustawiania tego tokena jako ciasteczko HTTP w odpowiedzi serwera. Jest to kluczowy element procesu logowania i autoryzacji w aplikacji.

Najważniejsze elementy:
Importuje jsonwebtoken (jwt)
Biblioteka służąca do generowania i weryfikacji tokenów JWT.

Funkcja generateTokenAndSetCookie(userId, res)

Tworzy token JWT:

Zawiera w sobie identyfikator użytkownika (userId).

Podpisuje token tajnym kluczem z pliku .env (process.env.JWT_SECRET).

Token jest ważny przez 15 dni (expiresIn: '15d').

Ustawia ciasteczko jwt w odpowiedzi HTTP:

Ciasteczko przechowuje token JWT.

Ustawia czas ważności na 15 dni (maxAge).

Opcja httpOnly: true – ciasteczko nie jest dostępne z poziomu JavaScript w przeglądarce (zabezpieczenie przed XSS).

Opcja sameSite: "strict" – ochrona przed atakami CSRF.

Opcja secure: process.env.NODE_ENV !== "development" – ciasteczko jest wysyłane tylko po HTTPS poza trybem development.

Eksport domyślny:
Funkcja jest eksportowana jako domyślna, aby można było łatwo używać jej w kontrolerach autoryzacji (np. przy logowaniu lub rejestracji użytkownika).