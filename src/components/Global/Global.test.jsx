/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Global from './Global'

describe('Global', () => {
  it('renders correctly', () => {
    render(<Global />)
  })
})
