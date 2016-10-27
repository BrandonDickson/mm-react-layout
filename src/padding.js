import React from 'react'

const lookup = {
  'small' : 8,
  'medium' : 16,
  'large' : 32
}

const propTypes = {
  padding: React.PropTypes.oneOfType([
    React.PropTypes.oneOf(Object.keys(lookup)),
    React.PropTypes.number
  ])
}

export default component => {

  const PaddingWrapper = ({ padding, style, ...rest }) =>
    React.createElement(component, {
      style: {
        ...style,
        ...(
          padding && {
            padding: lookup[padding] || padding
          }
        )
      },
      ...rest
    })

  return Object.assign(PaddingWrapper, { propTypes })

}
