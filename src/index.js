import createWrapperComponent from './createWrapperComponent'
import flexBox from './flexBox'
import flexBoxItem from './flexBoxItem'
import layout from './layout'
import margin from './margin'
import padding from './padding'

const mergeHOC = (component, hocs) => {
  for(const hoc in hocs)
    component = hoc(component)
  return component
}

const FlexBox = mergeHOC(
  createWrapperComponent('FlexBox'),
  margin,
  padding,
  flexBox
)

const FlexBoxItem = mergeHOC(
  createWrapperComponent('FlexBoxItem'),
  margin,
  padding,
  flexBoxItem
)

const Layout = mergeHOC(
  createWrapperComponent('Layout'),
  margin,
  padding,
  flexBox,
  flexBoxItem
)

const Margin = mergeHOC(
  createWrapperComponent('Margin'),
  margin
)

const Padding = mergeHOC(
  createWrapperComponent('Padding'),
  padding
)

export {
  mergeHOC,
  createWrapperComponent,
  flexBox,
  flexBoxItem,
  layout,
  margin,
  padding,
  FlexBox,
  FlexBoxItem,
  Layout,
  Margin,
  Padding
}
