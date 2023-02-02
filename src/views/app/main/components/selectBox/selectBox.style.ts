import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => {
  return {
    root: {
      width: '25%',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
  }
})
