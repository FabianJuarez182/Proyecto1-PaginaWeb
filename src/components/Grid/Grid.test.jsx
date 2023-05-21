/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { render } from '@testing-library/react'
import { describe, test } from 'vitest'
import Grid from './Grid'

describe('Test for the Grid component', () => {
  test('Renders correctly', () => {
    render(<Grid />)
  })
})
