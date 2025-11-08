/**
 * Componente de tarjeta de clima
 * 
 * Muestra la información meteorológica de una ciudad:
 * - Nombre de la ciudad
 * - Temperatura actual en grados Celsius
 * - Descripción del clima
 * - Icono representativo del clima actual
 * 
 * @component
 * @param {Object} data - Objeto con los datos del clima obtenidos de la API
 * @param {string} data.name - Nombre de la ciudad
 * @param {Object} data.main - Objeto con información principal (temp, humidity, etc.)
 * @param {Array} data.weather - Array con información del clima (description, icon)
 * @returns {JSX.Element} Tarjeta con la información del clima
 */
export default function WeatherCard({data}){
    const {name,main,weather} = data;
    return (
        <div className="weather-card">
            <h2>{name}</h2>
            <p>{Math.round(main.temp)}°C</p>
            <p>{weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`} alt={weather[0].description} />

        </div>
    );
}