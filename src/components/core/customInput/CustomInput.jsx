import React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

const CustomInput = ({ className, startIcon, mode, endIcon, ...props }) => {
  const renderStartAdornment = () => {
    if (!startIcon) return null
    return {
      startAdornment: <InputAdornment position='start'>{startIcon}</InputAdornment>,
    }
  }
  const renderEndAdornment = () => {
    if (!endIcon) return null
    return {
      endAdornment: <InputAdornment position='end'>{endIcon}</InputAdornment>,
    }
  }

  return (
    <div className='custom-input-container'>
      <TextField
        className={['custom-input', `--${mode}`, className].join(' ')}
        margin='normal'
        {...props}
        InputProps={{
          ...renderStartAdornment(),
          ...renderEndAdornment(),
        }}
      />
    </div>
  )
}

export default CustomInput
