import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import flexBoxItem from './flexBoxItem'

describe('flexBoxItem', () => {

  it('should wrap a component', () => {

    const Test = flexBoxItem(({ style }) => <div style={ style } />)

    const wrapper = shallow(
      <Test
        flex='flex'
        alignSelf='center'
        order='5'
        offset='33'
        style={{ backgroundColor:'red' }}
      />
    )

    const props = wrapper.props()
    const { style } = props

    assert.equal(style.backgroundColor, 'red')
    assert.equal(style.flex, '1')
    assert.equal(style.alignSelf, 'center')
    assert.equal(style.flexOrder, '5')
    assert.equal(style.marginLeft, '33%')

  })

})
