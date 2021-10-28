import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@mui/material/CircularProgress'

const CustomButton = forwardRef(
  (
    {
      startIcon,
      endIcon,
      loading,
      loaderSize = 20,
      children,
      mode = '',
      fontSize,
      style,
      textStyle,
      margin,
      padding,
      className,
      variant = 'primary',
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={['custom-button', `--${variant}`, `--${mode}`, className].join(' ')}
        {...props}
        style={{ margin: margin, padding: padding, ...style }}>
        <div className='content' style={{ visibility: loading ? 'hidden' : 'visible' }}>
          {startIcon && <div className='start-icon'>{startIcon}</div>}

          <h4 style={{ ...textStyle, fontSize: fontSize }}>{children}</h4>

          {endIcon && <div className='end-icon'>{endIcon}</div>}
        </div>

        {loading && <CircularProgress size={loaderSize} thickness={4} className='button-loader' />}
      </button>
    )
  }
)

export default CustomButton

CustomButton.propTypes = {
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  loading: PropTypes.bool,
  loaderSize: PropTypes.number,
  mode: PropTypes.oneOf(['icon']),
  style: PropTypes.object,
  textStyle: PropTypes.object,
  fontSize: PropTypes.number,
  margin: PropTypes.string,
  padding: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text']),
  disabled: PropTypes.bool,
}
