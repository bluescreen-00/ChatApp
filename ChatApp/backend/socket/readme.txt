Plik socket.js konfiguruje i obsługuje komunikację w czasie rzeczywistym w aplikacji za pomocą Socket.IO. Umożliwia to natychmiastowe przesyłanie wiadomości i zarządzanie listą użytkowników online w komunikatorze.

Najważniejsze elementy:
Tworzenie serwera Express i HTTP:

const app = express();

const server = http.createServer(app);
Tworzy instancję aplikacji Express i serwera HTTP, na którym działa Socket.IO.

Konfiguracja Socket.IO:

const io = new Server(server, { cors: { origin: ["http://localhost:3000"], methods: ["GET", "POST"] } });
Umożliwia połączenia WebSocket z frontendu (React na porcie 3000) i pozwala na metody GET oraz POST.

Mapowanie użytkowników na sockety:

const userSocketMap = {};
Przechowuje mapę: ID użytkownika → ID socketu. Dzięki temu wiadomo, który użytkownik jest online i pod jakim socketem.

Obsługa połączenia użytkownika:

io.on("connection", (socket) => { ... });
Po nawiązaniu połączenia:

Pobierany jest userId z zapytania handshake.

Mapuje użytkownika na jego socket.

Emituje do wszystkich aktualną listę użytkowników online.

Obsługuje rozłączenie – usuwa użytkownika z mapy i ponownie wysyła listę online.

Funkcja pomocnicza:

export const getReceiverSocketId = (receiverId) => { return userSocketMap[receiverId]; }
Pozwala znaleźć socket ID dla danego użytkownika na potrzeby wysyłania prywatnych wiadomości.

Eksporty:

export { app, io, server };
Umożliwia wykorzystanie tych instancji w innych częściach aplikacji.