# 🌦️ ClimApp

ClimApp es una aplicación web construida con React que permite consultar el clima actual de cualquier ciudad, consumiendo la API pública de OpenWeatherMap. El objetivo es ofrecer una interfaz sencilla y responsiva que muestre temperatura, descripción del clima e icono representativo.

> Toda la documentación del proyecto se encuentra en español. Consulta `DOCUMENTACION.md` para una guía completa de arquitectura y decisiones técnicas.

## 🚀 Características principales
- Búsqueda de ciudades en tiempo real.
- Consumo de la API de OpenWeatherMap con soporte para idioma español.
- Visualización de temperatura en ºC, descripción y estado general del clima.
- Manejo de errores comunes (ciudad no encontrada, falta de API key).
- Interfaz responsiva y enfocada en la usabilidad.

## 🧱 Stack tecnológico
- `React 19` con componentes funcionales y hooks.
- `fetch API` nativa del navegador para solicitudes HTTP.
- `Create React App` como entorno de construcción y desarrollo.
- `OpenWeatherMap` como proveedor de datos meteorológicos.

## 📦 Requisitos previos
- Node.js 16 o superior.
- npm (incluido con Node.js) o yarn.
- Clave de API de OpenWeatherMap (plan gratuito suficiente).

## 🔧 Instalación
1. Clona el repositorio.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` en la raíz del proyecto con tu clave:
   ```
   REACT_APP_WEATHER_API_KEY=tu_api_key_aqui
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```
   La aplicación estará disponible en `http://localhost:3000`.

## 🛠️ Scripts disponibles
- `npm start`: inicia el entorno de desarrollo con recarga en caliente.
- `npm run build`: genera la versión optimizada para producción en la carpeta `build`.
- `npm test`: ejecuta las pruebas configuradas con React Testing Library.
- `npm run eject`: expone la configuración interna de Create React App (acción irreversible).

## 🗂️ Estructura relevante
```
src/
├── api/
│   └── weather.js       # Cliente para OpenWeatherMap
├── components/
│   ├── SearchBar.jsx    # Formulario de búsqueda de ciudades
│   └── WeatherCard.jsx  # Tarjeta de presentación del clima
├── App.jsx              # Componente raíz con lógica principal
└── style.css            # Estilos globales
```

## 🌐 Configuración de la API
- Endpoint base: `https://api.openweathermap.org/data/2.5/weather`
- Parámetros utilizados:
  - `q`: nombre de la ciudad ingresada.
  - `units=metric`: temperaturas en grados Celsius.
  - `lang=es`: respuestas en español.
  - `appid`: token obtenido desde la cuenta de OpenWeatherMap.

## ✅ Verificación rápida
- Node.js y npm instalados.
- Dependencias instaladas (`npm install` sin errores).
- Archivo `.env` presente con `REACT_APP_WEATHER_API_KEY`.
- La búsqueda de ciudades devuelve resultados correctos.

## 📄 Documentación adicional
Consulta `DOCUMENTACION.md` para revisar la arquitectura de componentes, flujo de datos, manejo de errores, pautas de estilos y recomendaciones de mantenimiento.

## 📬 Soporte y mejoras
Si deseas proponer mejoras o detectar incidencias, abre un issue o envía un pull request describiendo el contexto y los pasos para reproducir el problema.
