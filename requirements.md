# 📋 Requisitos e Instrucciones - ClimApp

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (viene incluido con Node.js) o **yarn**
- Un editor de código (recomendado: Visual Studio Code)
- Una cuenta en OpenWeatherMap para obtener la API key

## 🔑 Obtención de la API Key de OpenWeatherMap

1. Ve a [https://openweathermap.org/api](https://openweathermap.org/api)
2. Crea una cuenta gratuita
3. Ve a la sección "API keys" en tu perfil
4. Copia tu API key (puede tardar unos minutos en activarse)

## 📥 Instalación del Proyecto

### Paso 1: Verificar Node.js y npm

Abre una terminal y verifica que tienes Node.js instalado:

```bash
node --version
npm --version
```

Si no tienes Node.js instalado, descárgalo desde [https://nodejs.org/](https://nodejs.org/)

### Paso 2: Instalar Dependencias

Navega a la carpeta del proyecto y ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias necesarias:
- `react` - Biblioteca principal de React
- `react-dom` - Para renderizar React en el DOM
- `react-scripts` o las herramientas de build según tu configuración

### Paso 3: Configurar Variables de Entorno

1. Crea un archivo `.env` en la raíz del proyecto (al mismo nivel que `package.json`)
2. Agrega la siguiente línea en el archivo `.env`:

```
REACT_APP_WEATHER_API_KEY=tu_api_key_aqui
```

**Importante:** 
- Reemplaza `tu_api_key_aqui` con la API key que obtuviste de OpenWeatherMap
- El archivo `.env` NO debe subirse a Git (debe estar en `.gitignore`)
- Si estás usando Create React App, las variables de entorno deben comenzar con `REACT_APP_`

### Ejemplo de archivo `.env`:

```
REACT_APP_WEATHER_API_KEY=abc123def456ghi789jkl012mno345pq
```

## 🚀 Ejecutar la Aplicación

### Modo Desarrollo

Para iniciar la aplicación en modo desarrollo:

```bash
npm start
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`.

### Modo Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Esto generará una carpeta `build` con los archivos optimizados listos para desplegar.

## 📁 Estructura del Proyecto

```
climApp/
├── public/
│   └── index.html          # HTML principal
├── src/
│   ├── api/
│   │   └── weather.js       # Módulo para consultar la API del clima
│   ├── components/
│   │   ├── SearchBar.jsx   # Componente de barra de búsqueda
│   │   └── WeatherCard.jsx # Componente para mostrar el clima
│   ├── App.jsx             # Componente principal
│   ├── index.js            # Punto de entrada de React
│   └── style.css           # Estilos de la aplicación
├── .env                    # Variables de entorno (crear manualmente)
├── package.json            # Dependencias y scripts
└── requirements.md         # Este archivo
```

## 🛠️ Solución de Problemas

### Error: "REACT_APP_WEATHER_API_KEY is not defined"

- Verifica que el archivo `.env` existe en la raíz del proyecto
- Asegúrate de que la variable comienza con `REACT_APP_`
- Reinicia el servidor de desarrollo después de crear o modificar `.env`

### Error: "La ciudad no fue encontrada"

- Verifica que la API key es válida
- Asegúrate de que la API key está activa (puede tardar unos minutos)
- Verifica que ingresaste el nombre de la ciudad correctamente

### Error: "Cannot find module 'react'"

- Ejecuta `npm install` nuevamente
- Verifica que `node_modules` existe en la carpeta del proyecto
- Elimina `node_modules` y `package-lock.json` y ejecuta `npm install` de nuevo

### El servidor no inicia

- Verifica que no hay otro proceso usando el puerto 3000
- Intenta cambiar el puerto agregando `PORT=3001` en el archivo `.env`

## 📚 Dependencias Principales

El proyecto utiliza las siguientes dependencias principales:

- **React**: Biblioteca para construir interfaces de usuario
- **React DOM**: Para renderizar componentes React en el navegador

## 🌐 API Utilizada

La aplicación utiliza la API de **OpenWeatherMap**:
- URL Base: `https://api.openweathermap.org/data/2.5/weather`
- Plan Gratuito: 60 llamadas por minuto
- Parámetros utilizados:
  - `q`: Nombre de la ciudad
  - `units=metric`: Temperatura en Celsius
  - `lang=es`: Descripciones en español
  - `appid`: Tu API key

## ✅ Verificación de Instalación

Para verificar que todo está configurado correctamente:

1. ✅ Node.js y npm están instalados
2. ✅ `npm install` se ejecutó sin errores
3. ✅ El archivo `.env` existe y contiene `REACT_APP_WEATHER_API_KEY`
4. ✅ `npm start` inicia el servidor sin errores
5. ✅ La aplicación se abre en el navegador
6. ✅ Puedes buscar una ciudad y ver los resultados del clima

## 📝 Notas Adicionales

- El proyecto está configurado para usar React con hooks modernos
- Los componentes están documentados en español
- Los estilos están en `style.css` y pueden personalizarse
- La aplicación es responsiva y funciona en diferentes tamaños de pantalla

## 🔒 Seguridad

**IMPORTANTE**: Nunca subas tu archivo `.env` a un repositorio público. El archivo `.env` debe estar en `.gitignore`.

Si necesitas compartir el proyecto, crea un archivo `.env.example` con:

```
REACT_APP_WEATHER_API_KEY=tu_api_key_aqui
```

Y documenta que los usuarios deben crear su propio `.env` con su API key.

