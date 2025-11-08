/**
 * Componente de barra de búsqueda
 * 
 * Permite al usuario ingresar el nombre de una ciudad y realizar
 * una búsqueda del clima. El componente maneja el estado del input
 * y llama a la función onSearch cuando se envía el formulario.
 * 
 * @component
 * @param {Function} onSearch - Función callback que se ejecuta al buscar.
 *   Recibe como parámetro el nombre de la ciudad ingresado.
 * @returns {JSX.Element} Formulario de búsqueda con input y botón
 */
import {useState} from "react";

export default function SearchBar({onSearch}) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input.trim()) return;
        onSearch(input);
        setInput("");

    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Ingrese una ciudad..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
            <button type="submit">Buscar</button>
        </form>
    );
}