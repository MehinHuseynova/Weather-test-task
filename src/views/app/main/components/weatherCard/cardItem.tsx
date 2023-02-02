import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  Typography,
} from '@mui/material'
import React, { useCallback, useState } from 'react'
import { useStyles } from './cardItem.style'

interface CardDataProps {
  icon: string
  temp_c: string
  next_temp_c?: string
  next_icon?: string
  name: string
  localtime: string
  wind_mph?: string
  humidity?: string
  feelslike_c?: string
  isNextDay?: boolean
  showHighlights?: boolean
}

export const CardItem: React.FC<CardDataProps> = ({
  icon,
  temp_c,
  name,
  next_temp_c,
  next_icon,
  localtime,
  wind_mph,
  humidity,
  feelslike_c,
  isNextDay,
  showHighlights = false,
}) => {
  const { classes } = useStyles()
  const [isDetailVisible, setDetailVisible] = useState<boolean>(false)

  const handleDetailVisibility = useCallback(() => {
    setDetailVisible(!isDetailVisible)
  }, [isDetailVisible])

  return (
    <>
      <Grid item xs={12} md={6} lg={4} key={name}>
        <Box p={2}>
          <Card className={classes.cardContainer}>
            <Box display="flex" justifyContent="center">
              <CardMedia
                className={classes.cardImg}
                image={isNextDay ? next_icon : icon}
              />
            </Box>
            <CardContent>
              {isNextDay ? next_temp_c : temp_c} &deg; C
            </CardContent>
            <Typography>{name}</Typography>
            <Typography>
              {new Date(localtime).toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </Typography>
            {!isNextDay && showHighlights ? (
              <Box
                className={classes.expandMore}
                onClick={handleDetailVisibility}
              >
                <Typography> Today's Higlights </Typography>
                <Icon>
                  <ExpandMoreIcon />
                </Icon>
              </Box>
            ) : null}
            {isDetailVisible ? (
              <Box>
                <Typography>Wind Status {wind_mph} mph</Typography>

                <Typography>Humidity {humidity} %</Typography>

                <Typography>Feels Like {feelslike_c}</Typography>
              </Box>
            ) : null}
          </Card>
        </Box>
      </Grid>
    </>
  )
}
