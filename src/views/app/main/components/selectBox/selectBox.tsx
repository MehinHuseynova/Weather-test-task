import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { WeatherSearchContext } from 'contexts/weatherSearchContext'
import { StateProps, useHandleInput } from 'hooks/useFilterSearch'
import { useContext, useEffect } from 'react'
import { findRegionsByTimeZone } from 'views/api'
import { useStyles } from './selectBox.style'

interface InputProps {
  inputState: StateProps
  handleChange: (
    event:
      | SelectChangeEvent<{}>
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
}
export const SelectBox: React.FC<InputProps> = ({
  inputState,
  handleChange,
}) => {
  const { classes } = useStyles()
  const { dispatch } = useContext(WeatherSearchContext)

  useEffect(() => {
    findRegionsByTimeZone(dispatch, inputState.timeZN)
  }, [inputState])

  return (
    <FormControl className={classes.root}>
      <InputLabel id="timeZone">Timezone</InputLabel>
      <Select
        labelId="tz-select"
        id="tz-select"
        value={inputState.timeZN}
        label="timezn"
        name="timeZN"
        onChange={handleChange}
      >
        <MenuItem value="Asia/Iran">Asia/Iran</MenuItem>
        <MenuItem value="Asia/Istanbul">Asia/Istanbul</MenuItem>
        <MenuItem value="Europe/Berlin">Europe/Berlin</MenuItem>
      </Select>
    </FormControl>
  )
}
