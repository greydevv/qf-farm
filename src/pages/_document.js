import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link 
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" 
                    rel="stylesheet"
                /> 
            </Head>
            <body>
                <noscript>
                    <div style={ {padding: '10px', position: 'fixed', top: '0', left: '0', height: '100%', width: '100%', backgroundColor: '#FFFFFF'} }>
                        You need to enable JavaScript to run this app.
                    </div>
                </noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
