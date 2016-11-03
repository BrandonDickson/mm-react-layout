import createWrapperComponent from './createWrapperComponent'
import flexBox from './flexBox'
import flexBoxItem from './flexBoxItem'
import margin from './margin'
import padding from './padding'
import layout from './layout'

const mergeHOC = (component, ...hocs) => {
  for(const hoc of hocs)
    if (typeof hoc !== 'function')
      throw new Error(`${ hoc } is not a function!`)
    else
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
