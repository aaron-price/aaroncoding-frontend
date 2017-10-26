exports.WhiteText = (props) => {
    return <span>{props.children}</span>
}
exports.GreenText = (props) => {
    return <span className="codeblock_green">{props.children}</span>
}
exports.CodeBlock = (props) => {
    return (
        <pre className="codeblock"><code>
            {props.children}
        </code></pre>
    )
}
