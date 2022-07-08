import BaseLayout from 'layouts/BaseLayout.js'
import 'styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <BaseLayout>
            <Component {...pageProps} />
        </BaseLayout>
    )
}
