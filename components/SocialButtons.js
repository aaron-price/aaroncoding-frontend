import {
    ShareButtons,
    ShareCounts,
    generateShareIcon
} from 'react-share'

const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    EmailShareButton,
} = ShareButtons

const FacebookIcon = generateShareIcon('facebook')
const GooglePlusIcon = generateShareIcon('google')
const LinkedinIcon = generateShareIcon('linkedin')
const TwitterIcon = generateShareIcon('twitter')
const TelegramIcon = generateShareIcon('telegram')
const WhatsappIcon = generateShareIcon('whatsapp')
const PinterestIcon = generateShareIcon('pinterest')
const VKIcon = generateShareIcon('vk')
const OKIcon = generateShareIcon('ok')
const RedditIcon = generateShareIcon('reddit')
const EmailIcon = generateShareIcon('email')

const components = [
    { Btn: FacebookShareButton, Ico: FacebookIcon },
    { Btn: GooglePlusShareButton, Ico: GooglePlusIcon },
    { Btn: LinkedinShareButton, Ico: LinkedinIcon },
    { Btn: TwitterShareButton, Ico: TwitterIcon },
    // { Btn: TelegramShareButton, Ico: TelegramIcon },
    // { Btn: WhatsappShareButton, Ico: WhatsappIcon },
    { Btn: PinterestShareButton, Ico: PinterestIcon },
    // { Btn: VKShareButton, Ico: VKIcon },
    // { Btn: OKShareButton, Ico: OKIcon },
    { Btn: RedditShareButton, Ico: RedditIcon },
    { Btn: EmailShareButton, Ico: EmailIcon },
]

function isBrowser () {
    return !(typeof document === 'undefined' || typeof window === 'undefined')
}

export default (props) => {
    let url = ''
    if (isBrowser()) {
        url = window.location.href
        return (
            <div style={{
                display: 'flex',
                maxWidth: '80%',
                marginBottom: '2vw'
            }}>
                {components.map((component, key) => {
                    const Btn = component.Btn
                    const Ico = component.Ico
                    return (
                        <Btn url={url}>
                            <Ico size={'4vmin'} round={true}>
                            </Ico>
                        </Btn>
                    )
                })}
            </div>
        )
    } else {
        return <span></span>
    }
}