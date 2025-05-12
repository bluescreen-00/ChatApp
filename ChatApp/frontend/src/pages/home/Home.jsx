import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/messages/MessageContainer"

/**
 * Komponent Home jest głównym widokiem aplikacji czatu.
 * Wyświetla panel boczny z listą rozmówców oraz główne okno wiadomości.
 */
const Home = () => {
  return (
    <div className="flex sm:h-[450px] md-h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-0 bg-opacity-10">
      {/* Panel boczny z wyszukiwarką, listą rozmów i przyciskiem wylogowania */}
      <Sidebar />
      {/* Główna część z wiadomościami i polem do pisania */}
      <MessageContainer />
    </div>
  )
}

export default Home
