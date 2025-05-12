conversation.model.js

Definiuje schemat i model rozmowy (konwersacji) w bazie MongoDB za pomocą Mongoose.

Główne elementy:

participants: tablica identyfikatorów użytkowników (ObjectId), którzy biorą udział w konwersacji (odwołanie do modelu User).

messages: tablica identyfikatorów wiadomości (ObjectId), które należą do tej konwersacji (odwołanie do modelu Message).

timestamps: automatycznie dodaje pola createdAt i updatedAt.

2. message.model.js

Definiuje schemat i model pojedynczej wiadomości w bazie MongoDB.

Główne elementy:

senderId: identyfikator użytkownika wysyłającego wiadomość (referencja do User), wymagany.

receiverId: identyfikator odbiorcy wiadomości (referencja do User), wymagany.

message: treść wiadomości, wymagana.

timestamps: automatycznie dodaje pola createdAt i updatedAt.

3. user.model.js

Definiuje schemat i model użytkownika w bazie MongoDB.

Główne elementy:

fullName: imię i nazwisko użytkownika, wymagane.

username: unikalny login użytkownika, wymagany.

password: hasło użytkownika, wymagane, min. 6 znaków.

gender: płeć użytkownika, wymagane, dozwolone wartości: "male", "female".

profilePic: link do zdjęcia profilowego, domyślnie pusty string.

timestamps: automatycznie dodaje pola createdAt i updatedAt.
