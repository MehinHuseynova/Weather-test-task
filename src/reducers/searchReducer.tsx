export interface WeatherDetail {
  location: {
    name: string
    localtime: string
  }
  current: {
    temp_c: string
    wind_mph: string
    humidity: string
    feelslike_c: string
    condition: {
      icon: string
    }
  }
  forecast: {
    forecastday: {
      hour: {
        temp_c: string
        wind_mph: string
        humidity: string
        feelslike_c: string
        condition: {
          icon: string
        }
      }[]
    }[]
  }
}

export interface CurrentWeatherByTZ {
  data: WeatherDetail
}

export interface InitialState {
  currentWeather?: WeatherDetail
  currentWeatherByTZ: CurrentWeatherByTZ[]
  nextDayWeatherData: WeatherDetail['forecast']['forecastday']
}

interface Action {
  type: ActionType
  payload: any
}

export enum ActionType {
  SET_WEATHER_DATA = 'setWeatherData',
  SET_BY_TIMEZONE = 'setByTimezone',
  SET_FORECAST_DATA = 'setForecastData',
}

export const searchReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_WEATHER_DATA:
      return {
        ...state,
        currentWeather: action.payload,
      }
    case ActionType.SET_BY_TIMEZONE:
      return {
        ...state,
        currentWeatherByTZ: action.payload,
      }
    case ActionType.SET_FORECAST_DATA:
      return {
        ...state,
        nextDayWeatherData: action.payload,
      }
    default:
      return state
  }
}
