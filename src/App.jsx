/**
 * Componente principal de la aplicación ClimApp
 * 
 * Este componente gestiona el estado global de la aplicación:
 * - Maneja la búsqueda de ciudades
 * - Gestiona el estado del clima obtenido de la API
 * - Controla los mensajes de error
 * 
 * @component
 * @returns {JSX.Element} Componente principal de la aplicación
 */
import { useState} from "react";
import { fetchWeather } from "./api/weather";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import "./style.css";

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async (searchCity) => {
        try {
            const data = await fetchWeather(searchCity);
            setWeather(data);
            setError("");
        } catch (error) {
            setError(error.message);
            setWeather(null);
        }
    };

    return (
        <div className="app">
            <h1>ClimApp</h1>
            <SearchBar onSearch={handleSearch} />
            {error && <p className="error">{error}</p>}
            {weather && <WeatherCard data={weather} />}
        </div>
    );

}

export default App;