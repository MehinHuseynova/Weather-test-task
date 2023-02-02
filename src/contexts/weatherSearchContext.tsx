import React, { ReactNode, useReducer } from 'react'
import { InitialState, searchReducer } from 'reducers/searchReducer'

interface SearchContent {
  state: InitialState
  dispatch: React.Dispatch<any>
}
export const WeatherSearchContext = React.createContext<SearchContent>({
  state: {
    currentWeather: undefined,
    currentWeatherByTZ: [],
    nextDayWeatherData: [],
  },
  dispatch: () => {},
})

interface WeatherSearchProviderProps {
  children: ReactNode
}
const WeatherSearchProvider: React.FC<WeatherSearchProviderProps> = ({
  children,
}) => {
  const initialState = {
    currentWeather: undefined,
    currentWeatherByTZ: [],
    nextDayWeatherData: [],
  }
  const [state, dispatch] = useReducer(searchReducer, initialState)

  return (
    <WeatherSearchContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherSearchContext.Provider>
  )
}

export default WeatherSearchProvider
