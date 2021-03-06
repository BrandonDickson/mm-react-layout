import React from 'react'

const alignTypes = [
  'flex-start',
  'flex-end',
  'space-around',
  'space-between',
  'stretch',
  'center'
]

const boxSizing = 'border-box'

const lookup = {
  'none'    : { flex: '0 0 auto', boxSizing },
  'initial' : { flex: '0 1 auto', boxSizing },
  'nogrow'  : { flex: '0 1 auto', boxSizing },
  'grow'    : { flex: '1 1 100%' },
  'auto'    : { flex: '1 1 auto' },
  'noshrink': { flex: '1 0 auto' },
  'flex'    : { flex: '1' }
}

const { oneOf, oneOfType, number, string } = React.PropTypes

const propTypes = {
  alignSelf: oneOf(alignTypes),
  flex: oneOfType([oneOf(Object.keys(lookup)), number]),
  order: oneOfType([number, string]),
  offset: oneOfType([number, string])
}

export default component => {

  const FlexBoxItemWrapper = ({ flex, alignSelf, order, offset, style, ...rest }) =>
    React.createElement(component, {
      style: {
        ...style,
        ...(
          flex && {
            ...(
              lookup[flex] ||
              {
                flex: `1 1 ${ flex }%`,
                maxWidth: `${ flex }%`,
                maxHeight: '100%',
                boxSizing
              }
            ),
            ...(alignSelf && { alignSelf }),
            ...(order && { flexOrder:order }),
            ...(offset && { marginLeft: `${ offset }%` })
          }
        )
      },
      ...rest
    })

  return Object.assign(FlexBoxItemWrapper, { propTypes })

}
