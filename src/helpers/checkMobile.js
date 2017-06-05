export function documentHeight() {
    return Math.max(
        window.innerHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
    )
}

export default function checkMobile() {
    const isMobile = /iPad|iPhone|iPod|Android/.test(navigator.userAgent) && !window.MSStream
    const screenWidth = (isMobile) ? screen.width : window.innerWidth
    const screenHeight = (isMobile) ? screen.height : window.innerHeight
    const smallScreen = isMobile || screenWidth < 640
    return {
        isMobile,
        screenWidth,
        screenHeight,
        smallScreen,
    }
}