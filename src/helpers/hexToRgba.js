function hexToRgba(hex, alpha) {
    if (typeof hex !== "string") {
        throw new TypeError("Expected a string")
    }

    hex = hex.replace(/^#/, "")

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }

    var num = parseInt(hex, 16)

    return `rgba(${num >> 16}, ${num >> 8 & 255}, ${num & 255}, ${alpha.toString()})`
}
export default hexToRgba