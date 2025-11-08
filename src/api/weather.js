/**
 * Módulo de API para obtener datos del clima
 * 
 * Este módulo se comunica con la API de OpenWeatherMap para obtener
 * información meteorológica de una ciudad específica.
 * 
 * Requiere una variable de entorno REACT_APP_API_KEY con la clave de API
 * de OpenWeatherMap.
 */

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

/**
 * Obtiene los datos del clima para una ciudad específica
 * 
 * @param {string} city - Nombre de la ciudad a buscar
 * @returns {Promise<Object>} Objeto con los datos del clima:
 *   - name: Nombre de la ciudad
 *   - main: Información principal (temperatura, humedad, etc.)
 *   - weather: Array con descripción y icono del clima
 * @throws {Error} Si la ciudad no es encontrada o hay un error en la petición
 */
export const fetchWeather = async (city) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const response = await fetch(`${API_URL}?q=${city}&units=metric&lang=es&appid=${apiKey}`);
    if(!response.ok) throw new Error('La ciudad no fue encontrada');
    return response.json();
}