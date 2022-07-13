export interface IweatherList {
    dt_txt: string,
    dt: string,
    main: { temp: string },
    weather: [{
        main: string,
        icon: string
    }]
}
export interface Iweather {
    city: {
        country: string,
        name: string,
        coord: { lat: string, lon: string }
    }
    list: IweatherList[]
}

export interface IFiveDayWeather {
    dt_txt: string,
    dt: string,
    temperature: string,
    weatherName: string,
    weatherIcon: string
}

export interface INormalizationWeather {
    country: string,
    city: string,
    coord: { lat: string, lon: string },
    fiveDayWeather: IFiveDayWeather[]
}