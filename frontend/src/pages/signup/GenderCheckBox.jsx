/**
 * Komponent GenderCheckBox umożliwia wybór płci użytkownika podczas rejestracji.
 * Wyświetla dwa pola wyboru (checkboxy) – dla "Male" i "Female".
 * Zaznaczenie jednego automatycznie odznacza drugie (działają jak radio buttony).
 * 
 * - onCheckboxChange: funkcja wywoływana po zmianie zaznaczenia, przyjmuje wybraną płeć
 * - selectedGender: aktualnie wybrana płeć ("male" lub "female")
 */
const GenderCheckBox = ({onCheckboxChange, selectedGender}) => {
    return (
      <div className="flex justify-evenly mt-2">
        {/* Checkbox dla płci męskiej */}
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected-class" : ""}`}>
            <span className="label-text">Meżczyzna</span>
            <input
              type="checkbox"
              className="checkbox border-slate-900"
              checked={selectedGender === "male"}
              onChange={() => onCheckboxChange("male")}
            />
          </label>
        </div>
        {/* Checkbox dla płci żeńskiej */}
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected-class" : ""}`}>
            <span className="label-text">Kobieta</span>
            <input
              type="checkbox"
              className="checkbox border-slate-900"
              checked={selectedGender === "female"}
              onChange={() => onCheckboxChange("female")}
            />
          </label>
        </div>
      </div>
    )
  }
  
  export default GenderCheckBox
  