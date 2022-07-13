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
    city:{
        country:string,
        name:string,
        coord:{lat:string, lon:string}
    }
    list:IweatherList[]
}