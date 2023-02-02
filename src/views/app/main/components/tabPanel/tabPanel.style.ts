import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => {
  return {
    tab: {
      [theme.breakpoints.down('md')]: {
        '& button': {
          fontSize: '12px',
          padding: theme.spacing(0, 1),
          textTransform: 'capitalize',
        },
      },
    },
    buttonGroup: {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        '& button': {
          width: '100%',
          marginBottom: theme.spacing(1),
        },
      },
    },
  }
})
