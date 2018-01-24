
/* eslint-env jest */

const { shallow, mount } = require('enzyme')
const React = require('react')
const renderer = require('react-test-renderer')
import FramePaper from '../components/FramePaper.js'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import { exec } from 'child_process';
configure({ adapter: new Adapter() })

const FormFrame = () => <div>Form</div>
const SecurityFrame = () => <div>Security</div>
const BackFrame = () => <div className='visible'>I am visible!</div>

describe('FramePaper bios', () => {
    it('Renders the default class', () => {
        const comp = shallow(<FramePaper frames={[]} />)
        expect(comp.hasClass('framepaper')).toBe(true)
    })
    it('Renders an array of components from props.', () => {
        const comp = mount(<FramePaper frames={[FormFrame, SecurityFrame, BackFrame]} />)

        expect(comp.find('.framepaper_child2').exists()).toBe(true)
        expect(comp.find('.visible').text()).toBe('I am visible!')
    })
    it('Splits width and height props into usable numbers/units', () => {
        const comp = shallow(
            <FramePaper
                width='16em'
                height='9vw'
                frames={[FormFrame, SecurityFrame, BackFrame]} />)

        expect(comp.instance().strip_unit('100vw').number).toBe(100)
        expect(comp.instance().strip_unit('100vw').unit).toBe('vw')
        expect(comp.instance().state.width).toBe(16)
        expect(comp.instance().state.w_unit).toBe('em')
        expect(comp.instance().state.height).toBe(9)
        expect(comp.instance().state.h_unit).toBe('vw')
    })
    it('Calculates the necessary margin for the correct frame', () => {
        // Vertical
        let comp = shallow(
            <FramePaper
                width='16em'
                height='9vh'
                frames={[FormFrame, SecurityFrame, BackFrame]} />)
        expect(comp.instance().state.margin1).toBe('-9vh')

        // Horizontal
        comp = shallow(
            <FramePaper
                width='16em'
                height='9vh'
                dir='horizontal'
                frames={[FormFrame, SecurityFrame, BackFrame]} />)
        expect(comp.instance().state.margin1).toBe('-16em')
    })
    it('Accepts a control overlay', () => {
        // If I need a callback API, I can do that later. For now, embedded overlay
        let selection = 0
        const Overlay = (props) => (
            <div>
                <button className='btn_prev' onClick={() => props.prev_button()}>prev</button>
                <button className='btn_next' onClick={() => props.next_button()}>next</button>
            </div>
        )
        const comp = mount(
            <FramePaper
                width='16em'
                height='9vh'
                overlay={Overlay}
                frames={[FormFrame, SecurityFrame, BackFrame]} />)
        expect(comp.instance().state.selection).toBe(0)
        // Click next, selection moves to 1
        comp.find('.btn_next').simulate('click')
        expect(comp.instance().state.selection).toBe(1)
    })
})

// describe('ContactForm validateEmail', () => {
//     it('returns true when passed a valid email', () => {
//         const app = shallow(<App />)
//         expect(app.instance().validateEmail('coding.aaronp@gmail.com')).toBe(true)
//     })
//     it('returns false when passed a string with no \'@\'', () => {
//         const app = shallow(<App />)
//         expect(app.instance().validateEmail('coding.aaronpgmail.com')).toBe(false)
//     })
//     it('returns false when passed a string with no tld', () => {
//         const app = shallow(<App />)
//         expect(app.instance().validateEmail('coding.aaronp@gmail')).toBe(false)
//     })
//     it('returns false when passed a blank string', () => {
//         const app = shallow(<App />)
//         expect(app.instance().validateEmail('')).toBe(false)
//     })
//     it('returns false when passed the wrong datatype', () => {
//         const app = shallow(<App />)
//         expect(app.instance().validateEmail(123456789)).toBe(false)
//     })
// })
// describe('ContactForm validateText', () => {
//     it('returns true when passed a valid string', () => {
//         const app = shallow(<App />)
//         expect(app.instance().validateText('Hey there')).toBe(true)
//     })
//     it('returns false when passed an invalid string', () => {
//         const app = shallow(<App />)
//         expect(app.instance().validateText('')).toBe(false)
//     })
//     it('returns false when passed the wrong datatype', () => {
//         const app = shallow(<App />)
//         expect(app.instance().validateText(123456789)).toBe(false)
//     })
// })