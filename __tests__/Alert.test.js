
/* eslint-env jest */

const { shallow } = require('enzyme')
const React = require('react')
const renderer = require('react-test-renderer')
import App from '../components/Alert.js'
import Adapter from 'enzyme-adapter-react-15'
import { configure } from 'enzyme'
configure({ adapter: new Adapter() })

describe('Alert Content', () => {
    it('says hi', () => {
        const app = shallow(<App status="Warning" text="Hello"/>)
        expect(app.find('.alert_text').text()).toEqual('Hello')
    })
    it('gives a green success', () => {
        const app = shallow(<App status="Success" text="Hello"/>)
        expect(app.props().style.backgroundColor).toBe('#4CAF50')
    })
    it('gives a yellow warning', () => {
        const app = shallow(<App status="Warning" text="Hello"/>)
        expect(app.props().style.backgroundColor).toBe('#FFEB3B')
    })
    it('gives a red error', () => {
        const app = shallow(<App status="Error" text="Hello"/>)
        expect(app.props().style.backgroundColor).toBe('#F44336')
    })
})
