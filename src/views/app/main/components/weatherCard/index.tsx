import { Grid } from '@mui/material'
import React from 'react'
import { WeatherDetail } from 'reducers/searchReducer'
import { CardItem } from './cardItem'

interface WeatherDataProps {
  weatherData: WeatherDetail[]
  nextDayWeatherData: WeatherDetail['forecast']['forecastday']
  isNextDay?: boolean
}
export const WeatherCard: React.FC<WeatherDataProps> = ({
  weatherData,
  nextDayWeatherData,
  isNextDay,
}) => {
  const { temp_c: next_temp_c = '', condition: { icon: next_icon = '' } = {} } =
    nextDayWeatherData[1].hour[0] ?? {}

  return (
    <Grid container>
      {weatherData?.map((weather: any) => {
        const {
          current: {
            temp_c = '',
            wind_mph = '',
            humidity = '',
            feelslike_c = '',
            condition: { icon = '' } = {},
          } = {},
          location: { name = '', localtime = '' } = {},
        } = weather.data ?? {}

        return (
          <CardItem
            key={name}
            showHighlights
            {...{
              temp_c,
              icon,
              next_temp_c,
              next_icon,
              localtime,
              name,
              isNextDay,
              wind_mph,
              feelslike_c,
              humidity,
            }}
          />
        )
      })}
    </Grid>
  )
}
