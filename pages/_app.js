import Head from "next/head";
import "@components/styles/main.css"

export default function ({ Component, pageProps }) {

    return (<>

        <Head>
            <title>Base64 Codec</title>
            <meta name="viewport" content="width=device-width, initial-scale=0.85" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                rel="preload"
                href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
                as="style"
                onload="this.rel='stylesheet'"
            />
        </Head>
        <Component {...pageProps} />

    </>);
};
