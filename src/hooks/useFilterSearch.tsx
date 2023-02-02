import { SelectChangeEvent } from '@mui/material'
import React, { useState, useCallback } from 'react'

export interface StateProps {
  location: string
  timeZN: string
}
export const useHandleInput = () => {
  const [state, setState] = useState<StateProps>({
    location: '',
    timeZN: '',
  })

  const handleChangeInput = useCallback(
    (
      event:
        | SelectChangeEvent<{}>
        | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }))
    },
    [state],
  )
  return [state, handleChangeInput] as const
}
