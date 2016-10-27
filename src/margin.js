import React from 'react'

const lookup = {
  'small' : 8,
  'medium' : 16,
  'large' : 32
}

const propTypes = {
  margin: React.PropTypes.oneOfType([
    React.PropTypes.oneOf(Object.keys(lookup)),
    React.PropTypes.number
  ])
}

export default component => {

  const MarginWrapper = ({ margin, style, ...rest }) =>
    React.createElement(component, {
      style: {
        ...style,
        ...(
          margin && {
            margin: lookup[margin] ||
              !isNan(margin) && margin
          }
        )
      },
      ...rest
    })

  return Object.assign(MarginWrapper, { propTypes })

}
