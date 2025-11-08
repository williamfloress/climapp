# 📚 Documentación Técnica - ClimApp

Este documento describe la arquitectura, componentes y procesos clave de ClimApp. Su objetivo es servir como guía de referencia para desarrollo, mantenimiento y futuras mejoras.

## 1. Descripción general
- **Nombre:** ClimApp  
- **Objetivo:** Consultar el clima actual de una ciudad específica utilizando la API pública de OpenWeatherMap.  
- **Tecnologías base:** React 19, Create React App, Fetch API, CSS plano.  
- **Estado actual:** Aplicación de una sola pantalla (SPA) con lógica centrada en el componente raíz.

## 2. Arquitectura y estructura
```
src/
├── api/
│   └── weather.js          # Cliente HTTP para OpenWeatherMap
├── components/
│   ├── SearchBar.jsx       # Formulario controlado para búsquedas
│   └── WeatherCard.jsx     # Presentación de resultados meteorológicos
├── App.jsx                 # Orquestador principal de la UI y estado
├── App.css                 # Estilos heredados de CRA (no utilizados)
├── style.css               # Estilos específicos de la aplicación
├── index.js                # Punto de entrada de React
└── index.css               # Estilos globales (mostly boilerplate)
```

### 2.1 Componentes principales
- **App.jsx**
  - Mantiene el estado de `city`, `weather` y `error`.
  - Expone `handleSearch`, que coordina la llamada a la API y maneja resultados o errores.
  - Renderiza `SearchBar`, `WeatherCard` y mensajes de error.

- **SearchBar.jsx**
  - Componente controlado con estado local `input`.
  - Evita envíos vacíos y normaliza espacios con `trim()`.
  - Dispara `onSearch` recibido por props.

- **WeatherCard.jsx**
  - Componente presentacional.
  - Recibe el objeto devuelto por la API y muestra nombre de ciudad, temperatura redondeada, descripción e icono.

- **api/weather.js**
  - Función `fetchWeather(city)` que construye la URL, incluye parámetros `units=metric`, `lang=es` y el `appid`.
  - Utiliza `process.env.REACT_APP_WEATHER_API_KEY`. Lanza error si la respuesta no es `ok`.

## 3. Flujo de datos
1. Usuario introduce una ciudad y envía el formulario.
2. `SearchBar` ejecuta `onSearch(input)` -> `App` recibe el valor.
3. `App` invoca `fetchWeather(city)` con la API key del `.env`.
4. Si la respuesta es satisfactoria, actualiza `weather` y limpia `error`.
5. Si falla (404 u otro), limpia `weather` y muestra mensaje en `error`.
6. `App` re-renderiza la UI: muestra `WeatherCard` si hay datos o mensaje de error si corresponde.

## 4. Dependencias y scripts
- **Dependencias directas:** `react`, `react-dom`, `react-scripts`, `web-vitals`.
- **Testing:** `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `@testing-library/dom`.
- **Scripts disponibles:**
  - `npm start` → servidor de desarrollo (puerto 3000 por defecto).
  - `npm test` → pruebas en modo interactivo.
  - `npm run build` → empaquetado optimizado para producción.
  - `npm run eject` → expone configuración de CRA (irreversible).

## 5. Variables de entorno
- Crear un archivo `.env` en la raíz del proyecto con:
  ```
  REACT_APP_WEATHER_API_KEY=tu_api_key_aqui
  ```
- Esta variable debe mantenerse privada y nunca subirse al repositorio.
- Tras cambios en `.env`, es necesario reiniciar el servidor de desarrollo.

## 6. Estilos y UX
- Estilos definidos en `src/style.css` (se recomienda centralizar ahí y eliminar archivos redundantes).
- Diseño responsivo basado en flexbox.
- Mantener contrastes adecuados para la legibilidad y accesibilidad.
- Botón de búsqueda con estado hover/focus básico; se sugiere mejorar accesibilidad con focus-visible.

## 7. Manejo de errores
- Errores de API controlados mediante la verificación de `response.ok` en `fetchWeather`.
- Mensajes amigables mostrados en pantalla cuando la ciudad no se encuentra.
- Potenciales mejoras:
  - Diferenciar errores por código de estado (401 vs 404).
  - Validar longitud mínima del input.
  - Mostrar estados de carga (`loading`).

## 8. Pruebas
- CRA incluye configuración para React Testing Library.
- No existen pruebas personalizadas en el repositorio.
- Recomendaciones:
  - Añadir pruebas unitarias para `SearchBar` y `WeatherCard`.
  - Simular `fetchWeather` para validar el flujo en `App`.

## 9. Despliegue
- Ejecutar `npm run build` para generar la carpeta `build/`.
- Servir el contenido estático mediante cualquier proveedor compatible (Netlify, Vercel, GitHub Pages, etc.).
- Verificar que la variable `REACT_APP_WEATHER_API_KEY` esté configurada en el entorno de despliegue.

## 10. Mantenimiento y futuras mejoras
- Añadir traducciones para mensajes adicionales o multiidioma.
- Incorporar pronóstico extendido utilizando otros endpoints de OpenWeatherMap.
- Implementar almacenamiento local para recordar la última ciudad consultada.
- Integrar manejo de estados de carga y skeletons.
- Migrar a TypeScript para reforzar el tipado si el proyecto crece.

---

Última actualización: noviembre 2025.

