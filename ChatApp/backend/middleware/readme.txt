Plik protectRoute.js zawiera middleware do Expressa, który służy do ochrony tras wymagających autoryzacji użytkownika.

Najważniejsze elementy:
Importuje:

jsonwebtoken – do weryfikacji tokenów JWT.

Model User – do pobierania użytkownika z bazy na podstawie ID z tokena.

Funkcja middleware protectRoute:

Sprawdza, czy w ciasteczkach (req.cookies) znajduje się token JWT.

Jeśli tokenu nie ma, zwraca błąd 401 (Unauthorized).

Weryfikuje token JWT i wyciąga z niego ID użytkownika.

Wyszukuje użytkownika w bazie (bez hasła).

Jeśli użytkownik nie istnieje, zwraca błąd 404.

Jeśli wszystko się zgadza, dodaje użytkownika do req.user i wywołuje next() – przekazuje żądanie dalej.

W przypadku błędów zwraca odpowiedni komunikat lub błąd 500.

Tokeny JWT (JSON Web Token) to otwarty standard służący do bezpiecznej wymiany informacji między dwiema stronami – najczęściej między serwerem a klientem – w postaci zakodowanego obiektu JSON.

Budowa tokena JWT