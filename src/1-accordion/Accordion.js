import React from "react"

let items = []
for (let i = 0; i < 10; i++) {
    items.push({title: i, visible: false})
}

class Accordion extends React.Component {
    constructor(props) {
        super(props)
        this.state = { items }
        this.toggler = this.toggler.bind(this)
    }
    toggler(n, visible) {
        const newItems = this.state.items
        newItems[n] = {title: n, visible: !visible}
        this.setState({items: newItems })
    }
    render() {
        return (
            <div>
                <h1>Accordion</h1>
                <p>This is where it all started. To be honest, I converted it to react AFTER the 30 days ended because it felt really goofy using plain html/js in the first 4 projects, and not the remaining 26.</p>
                {this.state.items.map((item, key) => {
                    return (
                        <div key={key}>
                            <div
                                style={{cursor: "pointer", color: "#254455"}}
                                onClick={e => this.toggler(key, item.visible)}>
                                <h4>Click me - number {item.title}</h4>
                            </div>
                            {
                              item.visible && (
                                  <div>Here's the body text of item {item.title}</div>
                              )
                            }
                            <br />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Accordion