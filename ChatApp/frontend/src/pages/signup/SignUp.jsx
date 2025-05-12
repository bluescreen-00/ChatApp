import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup";

/**
 * Komponent SignUp wyświetla formularz rejestracji nowego użytkownika.
 * Pozwala wpisać imię i nazwisko, login, hasło, potwierdzić hasło oraz wybrać płeć.
 * Obsługuje wysyłanie danych do backendu i pokazuje spinner podczas rejestracji.
 */
const SignUp = () => {
    // Stan przechowujący wszystkie dane wpisane w formularzu
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    // Hook do obsługi rejestracji (zwraca funkcję signup i status ładowania)
    const { loading, signup } = useSignup();

    // Obsługuje zmianę zaznaczenia płci
    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    }

    // Obsługuje wysłanie formularza rejestracji
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 founded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign up <span className='text-cyan-500'>ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Imię i nazwisko</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full input input-bordered h-10"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                        <label className='label p-2'>
                            <span className='text-base label-text'>Login</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full input input-bordered h-10"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                        <label className='label p-2'>
                            <span className='text-base label-text'>Hasło</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full input input-bordered h-10"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                        <label className='label p-2'>
                            <span className='text-base label-text'>Potwierdź Hasło</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full input input-bordered h-10"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/* Komponent do wyboru płci */}
                    <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <div>
                        <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                        </button>
                    </div>
                    {/* Link do strony logowania */}
                    <Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 mt-1 flex justify-center">
                        Posiadasz już konto?
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp
