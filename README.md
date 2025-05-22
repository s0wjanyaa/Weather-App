# 🌦️ Weather App  

## Overview  
The **Weather App** is a React-based application that allows users to search for real-time weather data of any city. It fetches live weather information such as temperature, humidity, and conditions using an external weather API. The app is styled with **Material-UI** for a modern user experience.  

## Video Demo 🎥
[watch the demo]https://github.com/user-attachments/assets/7074c7be-2919-4934-ab67-55c9c9602436

## API Usage  
This app uses the **OpenWeather API** (or any other weather API) to fetch weather data.  

### Setting Up the API Key  
To secure your API key, follow these steps:  
1. Create a **.env** file in the project root.  
2. Add your API key as an environment variable:  
   ```sh
   WEATHER_API_KEY=your_api_key_here
   ```
3. Access it in your code using:  
   ```js
   const apiKey = import.meta.env.WEATHER_API_KEY;
   ```

## Installation & Setup  

### 1. Clone the Repository  
```sh
git clone https://github.com/s0wjanyaa/Weather-App.git
cd Weather-App
```

### 2. Install Dependencies  
```sh
npm install
```

### 3. Start the Development Server  
```sh
npm run dev
```  
