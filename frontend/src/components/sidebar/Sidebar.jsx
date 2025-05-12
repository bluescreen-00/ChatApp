// Importuje komponenty tworzące elementy bocznego panelu (sidebaru)
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

/**
 * Komponent Sidebar tworzy boczny panel aplikacji czatu.
 * Zawiera pole wyszukiwania użytkowników, listę rozmówców oraz przycisk wylogowania.
 */
const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      {/* Pole do wyszukiwania rozmówców */}
      <SearchInput />
      {/* Linia oddzielająca */}
      <div className="divider px-3"></div>
      {/* Lista dostępnych konwersacji */}
      <Conversations />
      {/* Przycisk do wylogowania */}
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
