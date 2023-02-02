import { getForecasts } from 'views/api'
import { Main } from '../main'
import { useEffect, useContext } from 'react'
import { WeatherSearchContext } from 'contexts/weatherSearchContext'

export const AppLayout = () => {
  const { dispatch } = useContext(WeatherSearchContext)
  useEffect(() => {
    
    const currentDate = new Date().getHours()
    getForecasts('Berlin', currentDate, 2, dispatch)
  }, [])

  return (
    <>
      <Main />
    </>
  )
}
