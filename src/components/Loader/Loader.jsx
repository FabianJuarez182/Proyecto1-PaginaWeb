/* eslint-disable linebreak-style */
/* eslint-disable react/no-unknown-property */
import React from 'react'
import { ReactComponent as WhateverIcon } from './loader.svg'

const loaderStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
}

function Loader() {
  return (
    <div style={loaderStyles}>
      <WhateverIcon />
    </div>
  )
}

export default Loader
