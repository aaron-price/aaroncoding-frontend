
/* eslint-env jest */

const { shallow } = require('enzyme')
const React = require('react')
const renderer = require('react-test-renderer')
import App from '../components/ContactForm.js'
import Adapter from 'enzyme-adapter-react-15'
import { configure } from 'enzyme'
configure({ adapter: new Adapter() })

describe('ContactForm correct classes', () => {
    it('renders the default class', () => {
        const app = shallow(<App />)
        expect(app.hasClass('contact-form')).toBe(true)
    })
    it('renders className prop', () => {
        const app = shallow(<App className='foobar' />)
        expect(app.hasClass('contact-form foobar')).toBe(true)
    })
})

describe('ContactForm validateEmail', () => {
    it('returns true when passed a valid email', () => {
        const app = shallow(<App />)
        expect(app.instance().validateEmail('coding.aaronp@gmail.com')).toBe(true)
    })
    it('returns false when passed a string with no \'@\'', () => {
        const app = shallow(<App />)
        expect(app.instance().validateEmail('coding.aaronpgmail.com')).toBe(false)
    })
    it('returns false when passed a string with no tld', () => {
        const app = shallow(<App />)
        expect(app.instance().validateEmail('coding.aaronp@gmail')).toBe(false)
    })
    it('returns false when passed a blank string', () => {
        const app = shallow(<App />)
        expect(app.instance().validateEmail('')).toBe(false)
    })
    it('returns false when passed the wrong datatype', () => {
        const app = shallow(<App />)
        expect(app.instance().validateEmail(123456789)).toBe(false)
    })
})
describe('ContactForm validateText', () => {
    it('returns true when passed a valid string', () => {
        const app = shallow(<App />)
        expect(app.instance().validateText('Hey there')).toBe(true)
    })
    it('returns false when passed an invalid string', () => {
        const app = shallow(<App />)
        expect(app.instance().validateText('')).toBe(false)
    })
    it('returns false when passed the wrong datatype', () => {
        const app = shallow(<App />)
        expect(app.instance().validateText(123456789)).toBe(false)
    })
})