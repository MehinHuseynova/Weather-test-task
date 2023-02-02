import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => {
  return {
    cardImg: {
      width: '70px',
      height: '70px',
      objectFit: 'contain',
    },
    cardContainer: {
      padding: theme.spacing(2),
      borderRadius: theme.spacing(1),
      background: '#1E213A',
      color: 'white',
      textAlign: 'center',
      fontSize: '14px',
      minHeight: '200px',
    },
    expandMore: {
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer',
    },
  }
})
