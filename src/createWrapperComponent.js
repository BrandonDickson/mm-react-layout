import React from 'react'

export default name => {

  const WrapperComponent = ({ component, children, ...rest }) =>
    component
      ? React.createElement(component, { children, ...rest })
      : React.cloneElement(children, rest)

  WrapperComponent.displayName = name

  return WrapperComponent

}
