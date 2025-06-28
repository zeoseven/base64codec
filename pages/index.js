import { Main } from "@components/main";

export default () => (<Main local={{

    decode: "Decode",
    encode: "Encode",
    input: "Input",
    output: "Output",
    download: "Download",
    dataURLForFile: "Data URL (data:) for File",
    copy: "Copy",
    description: <>

        <h2>What is Base64?</h2>

        <p>Base64 is an encoding scheme that uses 64 printable ASCII characters to represent binary data, which was first standardized in <a
            href="https://www.rfc-editor.org/rfc/rfc2045"
            target="_blank"
            rel="noopener"
        >RFC 2045</a> in 1996. It is commonly used to securely transmit or store binary data that would otherwise contain non-printable characters in text protocols, and the most up-to-date standardized document can be found in <a
            href="https://www.rfc-editor.org/rfc/rfc4648.html"
            target="_blank"
            rel="noopener"
        >RFC 4648</a>.</p>

        <p>Unlike binary data stored directly, Base64 converts binary data into a string consisting of only letters, numbers, and two symbols, ensuring that the data is transmitted and stored completely and reliably in the text system.</p>

        <h2>What can Base64 do?</h2>
        <p>In web pages or emails, convert small images, fonts, and even CSS files directly into Base64 encoding and embed them into the page to serve them directly on the page without additional HTTP requests.</p>
        <pre>{`<!-- HTML or Email -->
<img src="data:image/png;base64,iVBORw0KGgoAAAANSU ..." />

/* CSS */
@import url("data:text/css;base64,QGNoYXJzZXQgIlVURi04Ij ...")

@font-face {
    font-family: "MyFont";
    src: url("data:application/x-font-woff;base64,d09GRgABAAAAAAwMA ...")
}
`}</pre>
        <p>You can also convert uploaded files to Base64 and store them in a text-only database.</p>
        <p>Base64 can simply cryptographically obfuscate the original content, but it has no security at all ...</p>
        <p>Learn more at <a
            href="https://developer.mozilla.org/docs/Glossary/Base64"
            target="_blank"
            rel="noreferrer"
        >MDN</a> and <a
            href="https://caniuse.com/?search=base64"
            target="_blank"
            rel="noopener"
        >Can I Use</a>!</p>

    </>

}} />);