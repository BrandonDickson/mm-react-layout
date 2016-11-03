import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import flexBox from './flexBox'

describe('flexBox', () => {

  it('should wrap a component', () => {

    const Test = flexBox(({ style }) => <div style={ style } />)

    const wrapper = shallow(
      <Test
        direction='row'
        align='center'
        justify='center'
        style={{ backgroundColor:'red' }}
      />
    )

    const props = wrapper.props()
    const { style } = props

    assert.equal(style.backgroundColor, 'red')
    assert.equal(style.display, 'flex')
    assert.equal(style.flexDirection, 'row')
    assert.equal(style.justifyContent, 'center')
    assert.equal(style.alignItems, 'center')

  })

})
