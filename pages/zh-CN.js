import { Main } from "@components/main";

export default () => (<Main local={{

    decode: "编码",
    encode: "解码",
    input: "输入",
    output: "输出",
    download: "下载",
    dataURLForFile: "适用于文件的 Data URL (data:)",
    copy: "复制",
    description: <>

        <h2>Base64 是什么？</h2>

        <p>Base64 是一种用 64 个可打印 ASCII 字符 来表示 二进制数据 的编码方案，于 1996 年首次在 <a
            href="https://www.rfc-editor.org/rfc/rfc2045"
            target="_blank"
            rel="noopener"
        >RFC 2045</a> 被标准化。它常用于在文本协议中安全地传输或存储原本包含不可打印字符的二进制数据，可以在 <a
            href="https://www.rfc-editor.org/rfc/rfc4648.html"
            target="_blank"
            rel="noopener"
        >RFC 4648</a> 上找到最新的标准化文档。</p>

        <p>不同于直接存储的二进制数据， Base64 将二进制数据转换为仅由字母、数字以及两个符号组成的字符串，可以确保数据在文本系统中完整、可靠地传输和存储。</p>

        <h2>Base64 可以做什么？</h2>
        <p>在网页或邮件中，将小型图片、字体甚至是 CSS 文件直接转换为 Base64 编码嵌入到页面中以在页面中直接提供而无需额外的 HTTP 请求。</p>
        <pre>{`<!-- HTML or Email -->
<img src="data:image/png;base64,iVBORw0KGgoAAAANSU ..." />

/* CSS */
@import url("data:text/css;base64,QGNoYXJzZXQgIlVURi04Ij ...")

@font-face {
    font-family: "MyFont";
    src: url("data:application/x-font-woff;base64,d09GRgABAAAAAAwMA ...")
}
`}</pre>
        <p>还可以将上传的文件转换为 Base64 后，存储到只支持文本的数据库中。</p>
        <p>Base64 可以对原始内容进行简单的加密混淆，但毫无安全性可言 ...</p>
        <p>可以在 <a
            href="https://developer.mozilla.org/docs/Glossary/Base64"
            target="_blank"
            rel="noreferrer"
        >MDN</a> 和 <a
            href="https://caniuse.com/?search=base64"
            target="_blank"
            rel="noopener"
        >Can I Use</a> 了解更多！</p>

    </>

}} />);