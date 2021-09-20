import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  indeterminate: {
    color: "#48a78fb8"
  }
})

const LoadingCircle = ({size, thickness}) => {
  const classes = useStyles();

  return (
    <CircularProgress 
      variant="indeterminate"
      size={size}
      thickness={thickness}
      classes={{
        indeterminate: classes.indeterminate
      }}
    />
  )
}

export default LoadingCircle
