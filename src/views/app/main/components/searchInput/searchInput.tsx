import { Box, Button, SelectChangeEvent, TextField } from '@mui/material'
import { WeatherSearchContext } from 'contexts/weatherSearchContext'
import { StateProps, useHandleInput } from 'hooks/useFilterSearch'
import { useCallback, useContext } from 'react'
import { ActionType } from 'reducers/searchReducer'
import { getForecasts } from 'views/api'
import { useStyles } from './searchInput.style'

interface InputProps {
  inputState: StateProps
  handleChange: (
    event:
      | SelectChangeEvent<{}>
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
}

export const SearchInput: React.FC<InputProps> = ({
  inputState,
  handleChange,
}) => {
  const { classes } = useStyles()

  const { dispatch } = useContext(WeatherSearchContext)

  const handleSubmit = useCallback(async () => {
    const dayCount = 2
    const exactTimeForTomorrow = new Date().getHours()
    try {
      const res = await getForecasts(inputState.location)
      const nextDayInfo = await getForecasts(
        inputState.location,
        exactTimeForTomorrow,
        dayCount,
      )
      dispatch({ type: ActionType.SET_WEATHER_DATA, payload: res })
      dispatch({
        type: ActionType.SET_FORECAST_DATA,
        payload: nextDayInfo?.data?.forecast?.forecastday,
      })
    } catch (error) {
      console.log(error)
    }
  }, [inputState.location])

  return (
    <Box className={classes.root}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search Location"
        InputLabelProps={{
          color: 'primary',
          shrink: true,
          size: 'small',
        }}
        name="location"
        value={inputState.location}
        onChange={handleChange}
      />
      <Button
        type="submit"
        onClick={handleSubmit}
        disabled={!inputState.location}
      >
        Search
      </Button>
    </Box>
  )
}
