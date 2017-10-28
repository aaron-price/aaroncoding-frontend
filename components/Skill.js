import Bar from '../components/images/Bar.js'
/*
USAGE:

import Skill from './Skill.js'
...
<Skill value={5}>
    Some skill
</Skill>

*/
export default (props) => (
    <div className='skill_wrapper'>
        <div className='skill_bar'><Bar value={props.value} /></div>
        <div className='skill_text'>{props.children}</div>
    </div>
)