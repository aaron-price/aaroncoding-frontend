
/* eslint-env jest */

const { shallow } = require('enzyme')
const React = require('react')
const renderer = require('react-test-renderer')
const App = require('../components/CodeBlocks.js').CodeBlock
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
configure({ adapter: new Adapter() })

describe('With Enzyme', () => {
    it('says hi', () => {
        const app = shallow(<App><p>hi</p></App>)
        expect(app.find('p').text()).toEqual('hi')
    })
    it('has the correct class', () => {
        const app = shallow(<App><p>hi</p></App>)
        expect(app.find('.codeblock').exists()).toBe(true)
    })
})

describe('With Snapshot Testing', () => {
    it('App shows "hi"', () => {
        const component = renderer.create(<App />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})