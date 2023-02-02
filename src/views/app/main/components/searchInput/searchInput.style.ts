import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => {
  return {
    root: {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  }
})
