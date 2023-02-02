import { Box, Container, Tab, Tabs, Button } from '@mui/material'
import { WeatherSearchContext } from 'contexts/weatherSearchContext'
import { useHandleInput } from 'hooks/useFilterSearch'
import React, { useContext } from 'react'
import { SearchInput } from './components/searchInput/searchInput'
import { SelectBox } from './components/selectBox/selectBox'
import { a11yProps, TabPanel } from './components/tabPanel/tabPanel'
import { useStyles } from './components/tabPanel/tabPanel.style'
import { WeatherCard } from './components/weatherCard'
import { WeatherCardByTZ } from './components/weatherCard/weatherCardByTz'

export const Main = () => {
  const { classes } = useStyles()
  const [inputState, handleChange] = useHandleInput()
  const { state } = useContext(WeatherSearchContext)
  const [isNextDay, setIsNextDay] = React.useState<boolean>(false)
  const { currentWeather, currentWeatherByTZ, nextDayWeatherData } = state
  const [tabIndex, setTabIndex] = React.useState(0)

  const handleChangeTabIndex = (
    event: React.SyntheticEvent,
    newValue: number,
  ) => {
    setTabIndex(newValue)
  }

  const handleNextDayVisibility = () => {
    setIsNextDay(!isNextDay)
  }
  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabIndex}
          onChange={handleChangeTabIndex}
          aria-label="basic tabs example"
          className={classes.tab}
        >
          <Tab label="Current Weather" {...a11yProps(0)} />
          <Tab label="Weather By TimeZone" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} index={0}>
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Button
                variant="outlined"
                onClick={handleNextDayVisibility}
                disabled={!inputState.location}
              >
                {isNextDay ? ' See Today' : 'See Tomorrow'}
              </Button>
            </Box>
            <SearchInput {...{ inputState, handleChange }} />
          </Box>
          <Box display="flex">
            {currentWeather ? (
              <WeatherCard
                weatherData={[currentWeather]}
                nextDayWeatherData={nextDayWeatherData}
                isNextDay={isNextDay}
              />
            ) : null}
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <Box display="flex" justifyContent="flex-end">
          <SelectBox {...{ inputState, handleChange }} />
        </Box>
        {currentWeatherByTZ.length > 0 ? (
          <WeatherCardByTZ weatherData={currentWeatherByTZ} />
        ) : null}
      </TabPanel>
    </Container>
  )
}
