import React from 'react'

export const UIButton = ({event, text}) => {
  return (
    <button id={text} onClick={event}>
      {text}
    </button>
  )
}
