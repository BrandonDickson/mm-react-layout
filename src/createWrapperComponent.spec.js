import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import createWrapperComponent from './createWrapperComponent'

describe('createWrapperComponent', () => {

  it('should return a component', () => {

    const Test = createWrapperComponent('Test')

    const wrapper1 = shallow(
      <Test>
        <div />
      </Test>
    )

    assert(wrapper1.contains(<div />))

    const wrapper2 = shallow(
      <Test component='div' />
    )

    assert(wrapper2.contains(<div />))

  })

})
