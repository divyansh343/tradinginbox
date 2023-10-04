import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script async src="https://tally.so/widgets/embed.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument