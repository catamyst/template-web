import React from 'react'
import PropTypes from 'prop-types'
import { th } from '@xstyled/system'
import styled from '@xstyled/emotion'

const getFill = ({ social, accent }) =>
  social ? th('colors.textAlt') : th('colors.secondaryAlt')

const getFillHover = ({ social, accent }) =>
  social ? accent : th('colors.secondary')

const IconStyled = styled.svg`
  display: block;
  fill: ${getFill};
  transition: all 0.2s ease-in-out;
  &:hover {
    fill: ${getFillHover};
  }
`

const IconContainer = ({ social, accent, children }) => {
  return (
    <IconStyled
      width={social ? '2em' : '1.2em'}
      viewBox={social ? '0 0 50 50' : '0 0 24 24'}
      social={social}
      accent={accent}
    >
      {children}
    </IconStyled>
  )
}

IconContainer.propTypes = {
  social: PropTypes.bool,
  accent: PropTypes.string,
  children: PropTypes.any.isRequired
}

export default IconContainer