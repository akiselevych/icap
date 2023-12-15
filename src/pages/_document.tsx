import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/images/favicon.svg" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
                <meta name="description" content="Technologie ist nicht nur ein Code, sie ist die Sprache der Zukunft. Kostenlos beraten lassen. businessSoftware. Unsere Dienstleistungen. Web Anwendungen." />
            </Head>
            <body className="body">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}