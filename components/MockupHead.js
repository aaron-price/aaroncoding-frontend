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

export default (props) => {
    const CustomHeaders = props.CustomHeaders || function() { return <span></span> }
    const CustomFooters = props.CustomFooters || function() { return <span></span> }
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <Head>
                    <CustomHeaders />
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
                <style dangerouslySetInnerHTML={{ __html: props.stylesheet || stylesheet }} />

                <div>
                    {props.children}
                </div>

                <CustomFooters />
            </div>
        </MuiThemeProvider>
    )
}
