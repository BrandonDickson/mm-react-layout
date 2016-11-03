import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import margin from './margin'

describe('margin', () => {

  it('should wrap a component', () => {

    const Test = margin(({ style }) => <div style={ style } />)

    const wrapper = shallow(
      <Test
        margin='small'
        style={{ backgroundColor:'red' }}
      />
    )

    const props = wrapper.props()
    const { style } = props

    assert.equal(style.backgroundColor, 'red')
    assert.equal(style.margin, 8)

  })

})
