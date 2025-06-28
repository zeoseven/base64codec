import Head from "next/head";
import "@components/styles/main.css"
import { useEffect } from "react";

export default function ({ Component, pageProps }) {

    useEffect(() => {

        fetch("https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap", {
            method: "GET"
        }).then(i => i.text()).then(i => {
            const style = document.createElement("style");
            style.innerHTML = i.replace(/\n/g, "").replace(/\s\s/g, "");
            document.head.appendChild(style);
        });

    }, []);

    return (<>

        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=0.85" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <title>Base64 Codec</title>
        </Head>
        <Component {...pageProps} />

    </>);
};
