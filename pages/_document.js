import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name='application-name' content='PWA App' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content='PWA App' />
                <meta name='description' content='Best PWA App in the world' />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-TileColor' content='#2B5797' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#000000' />
                <link rel="manifest" href="/manifest.json" />
                <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
                <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
                <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}