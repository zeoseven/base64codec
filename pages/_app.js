import Head from "next/head";
import "@components/styles/main.css";
import { useEffect } from "react";

export default function ({ Component, pageProps }) {

    useEffect(() => {

        fetch("https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap", {
            method: "GET"
        }).then(async (response) => {
            if (response.ok) {
                const css = await response.text();
                const style = document.createElement("style");
                style.textContent = css;
                document.head.appendChild(style);
            };
        }).catch(e => console.error(e));

    }, []);

    return (<>

        <Head>
            <title>Base64 Codec</title>
            <meta name="viewport" content="width=device-width, initial-scale=0.85" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <Component {...pageProps} />

    </>);

};
