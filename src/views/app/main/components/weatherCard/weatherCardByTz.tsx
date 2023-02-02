import { Grid } from '@mui/material'
import React from 'react'
import { CurrentWeatherByTZ } from 'reducers/searchReducer'
import { CardItem } from './cardItem'

interface WeatherDataProps {
  weatherData: CurrentWeatherByTZ[]
  isNextDay?: boolean
}
export const WeatherCardByTZ: React.FC<WeatherDataProps> = ({
  weatherData,
  isNextDay,
}) => {
  return (
    <Grid container>
      {weatherData?.map((weather) => {
        const {
          current: {
            temp_c = '',
            wind_mph = '',
            humidity = '',
            feelslike_c = '',
            condition: { icon = '' } = {},
          } = {},
          location: { name = '', localtime = '' } = {},
        } = weather?.data ?? {}

        return (
          <CardItem
            key={name}
            {...{
              temp_c,
              icon,
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
