import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import padding from './padding'

describe('padding', () => {

  it('should wrap a component', () => {

    const Test = padding(({ style }) => <div style={ style } />)

    const wrapper = shallow(
      <Test
        padding='small'
        style={{ backgroundColor:'red' }}
      />
    )

    const props = wrapper.props()
    const { style } = props

    assert.equal(style.backgroundColor, 'red')
    assert.equal(style.padding, 8)

  })

})
