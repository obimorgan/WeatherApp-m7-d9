export interface WeatherData{
    coord: {
        lon: number,
        lat: number
    },
    weather: weather[]
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    },
    visibility: number
    wind: {
        speed: number
        deg: number
        gust: number
    },
    rain: {
        onehour: number
    },
    clouds: {
        all: number
    },
    dt: number
    sys:{
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    },
        timezone: number
        id: number
        name: number
        cod: number
}
    
export interface weather {
    id: number,
    main: string,
    description: string
    icon: number
}

export interface StateCity {
    weather: WeatherData
}
