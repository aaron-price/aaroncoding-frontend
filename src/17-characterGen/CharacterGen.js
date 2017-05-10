import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import names from "./names.json"
import posPersonality from "./posPersonality.json"
import neutPersonality from "./neutPersonality.json"
import negPersonality from "./negPersonality.json"
import settingsData from "./settings.json"



function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomBool() {
    return Math.random() >= 0.5
}
function personalities() {
    return {
        pos: posPersonality[between(0, posPersonality.length - 1)],
        neut: neutPersonality[between(0, neutPersonality.length - 1)],
        neg: negPersonality[between(0, negPersonality.length - 1)],
    }
}
function genChar() {
    const id = names[between(0, 999)]
    let name = id.firstName + " " + id.lastName
    const personality = personalities()
    return {
        name,
        personality,
    }
}

function settings() {
    const setting1 = settingsData[between(0, settingsData.length - 1)]
    const setting2 = settingsData[between(0, settingsData.length - 1)]
    const setting3 = settingsData[between(0, settingsData.length - 1)]

    return {
        setting1,
        setting2,
        setting3,
    }
}
function atmosphere() {
    const time24 = between(1,24)
    let mins = between(0, 59)
    mins = mins < 10 ? "0" + mins : mins
    const time = time24 <= 12 ? time24 + ":" + mins + "am" : (time24 - 12) + ":" +mins + "pm"
    const weathers = [
        "blisteringly sunny",
        "pleasantly sunny", "pleasantly sunny", "pleasantly sunny", "pleasantly sunny",
        "overcast", "overcast", "overcast", "overcast",
        "sprinkling of rain", "sprinkling of rain",
        "pouring rain",
        "frosty",
        "snowing",
    ]


    return {
        time,
        weather: weathers[between(0, weathers.length -1)],
    }
}

function generate() {
    return {
        char1: genChar(),
        char2: genChar(),
        char3: genChar(),
        atmosphere: atmosphere(),
        setting: settings(),
    }
}

class CharacterGen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: generate() }
        this.reRoll = this.reRoll.bind(this)
    }
    reRoll() {
        this.setState({ data: generate() })
    }

    render() {
        const d = this.state.data
        return (
            <div>
                <p>This is an app for writers to get the creative juices flowing.
                    It gives you the start of a character, you have to write a backstory for the characters</p>
                <h3>Atmosphere</h3>
                <ul>
                    <li>Time: {d.atmosphere.time}</li>
                    <li>Weather: {d.atmosphere.weather}</li>
                </ul>

                <h3>Include 1 to 3 of these Characters</h3>
                <ul>
                    <li><strong>Name:</strong> {d.char1.name}</li>
                    <li><strong>Personality:</strong> {d.char1.personality.pos}, {d.char1.personality.neut}, and {d.char1.personality.neg}</li>
                    <hr />
                    <li><strong>Name:</strong> {d.char2.name}</li>
                    <li><strong>Personality:</strong> {d.char2.personality.pos}, {d.char2.personality.neut}, and {d.char2.personality.neg}</li>
                    <hr />
                    <li><strong>Name:</strong> {d.char3.name}</li>
                    <li><strong>Personality:</strong> {d.char3.personality.pos}, {d.char3.personality.neut}, and {d.char3.personality.neg}</li>
                    <hr />
                </ul>

                <h3>Include 1 to 3 of the following</h3>
                <ul>
                    <li>{d.setting.setting1}</li>
                    <li>{d.setting.setting2}</li>
                    <li>{d.setting.setting3}</li>
                </ul>
                <br />
                <RaisedButton label="retry" onClick={(e) => this.reRoll()} secondary={true}/>

            </div>
        )
    }

}

export default CharacterGen