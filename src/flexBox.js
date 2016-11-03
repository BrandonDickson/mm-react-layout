import React from 'react'

const alignTypes = [
  'flex-start',
  'flex-end',
  'space-around',
  'space-between',
  'stretch',
  'center'
]

const propTypes = {
  direction: React.PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]),
  alignContent: React.PropTypes.oneOf(alignTypes),
  justifyContent: React.PropTypes.oneOf(alignTypes)
}

export default component => {

  const FlexBoxWrapper = ({ direction, align, justify, style, ...rest }) =>
    React.createElement(component, {
      style: {
        ...style,
        ...(
          direction && {
            display: 'flex',
            flexDirection: direction,
            ...(justify && { justifyContent: justify }),
            ...(align && { alignItems: align })
          }
        )
      },
      ...rest
    })

  return Object.assign(FlexBoxWrapper, { propTypes })

}
