import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import * as index from './'

describe('Layout', () => {

  it('should wrap a component', () => {

    const Test = ({ style }) => <div style={ style } />

    const wrapper = shallow(
      <index.Layout
        flex='flex'
        alignSelf='center'
        order='5'
        offset='33'
        style={{ backgroundColor:'red' }}>
        <Test />
      </index.Layout>
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
