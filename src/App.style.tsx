
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<{color:string}>()((theme, { color }) => {
  return {
    root: {
boxSizing:'border-box'
    }
  }

})