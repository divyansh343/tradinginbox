import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link crossOrigin="true" rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin= "true" />
<link link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&family=Poppins&family=Inter&family=Hind+Siliguri&display=swap" rel="stylesheet" />

<link href="https://fonts.cdnfonts.com/css/hk-groteks" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument