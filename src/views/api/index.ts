import axios from 'axios'
import { ActionType } from 'reducers/searchReducer'

export const getForecasts = async (
  location: string,
  hour?: number,
  days?: number,
) => {
  try {
    const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json`, {
      params: {
        key: process.env.REACT_APP_API_KEY,
        q: location,
        ...(hour ? { hour } : {}),
        ...(days ? { days } : {}),
      },
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

export const findRegionsByTimeZone = async (
  dispatch: React.Dispatch<any>,
  timeZN: string,
) => {
  try {
    const resultsTZArr = await axios.get(
      `https://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_API_KEY}&q=tz_id:${timeZN}`,
    )
    const forecastPromises = resultsTZArr.data.map((res: any) => {
      return getForecasts(res.name)
    })

    Promise.all(forecastPromises).then((value) =>
      dispatch({ type: ActionType.SET_BY_TIMEZONE, payload: value }),
    )
  } catch (error) {
    console.log(error)
  }
}
