/* eslint no-empty: 0 */
import Head from 'next/head'
import Navbar from './Navbar.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Paper from 'material-ui/Paper'
import stylesheet from 'styles/index.scss'

try { injectTapEventPlugin() } catch(e) {}
const muiTheme = getMuiTheme({ userAgent: false })

export default (props) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            <div id='top'></div>
            <Head>
                <title>Aaron Price, Web Developer</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous"/>
                <meta name="viewport" content='width=device-width, initial-scale=1' />
                <meta httpEquiv="Content-Type" content='text/html; charset=utf-8' />
                <meta name="google-site-verification" content="Z3EvB2HyL8WXW9eD9wlCv729jr1sqka-i0sCjBT1gkI" />
                <meta name="description" content={ props.description || 'Portfolio website of a front-leaning web developer. Javascript and React abound'} />
                <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-K9SDT53');`}} />
            </Head>
            <noscript dangerouslySetInnerHTML={{__html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K9SDT53" height="0" width="0" style="display:none;visibility:hidden;"></iframe>'}} />
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

            <div className='body'>
                {props.children}
            </div>
        </div>
    </MuiThemeProvider>
)

const Footer = (props) => (
    <footer>
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossOrigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossOrigin="anonymous"></script>
    </footer>
)
