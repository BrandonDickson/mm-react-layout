import React from 'react'
import withPadding from './padding'
import withMargin from './margin'
import withFlexBox from './flexBox'
import withFlexBoxItem from './flexBoxItem'

export default component => {

  component = withPadding(component)
  component = withMargin(component)
  component = withFlexBox(component)
  component = withFlexBoxItem(component)

  return component

}
