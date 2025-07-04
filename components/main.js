import Link from "next/link";
import { useEffect, useState } from "react";

function toast(i, time) {
    const t = time || 2000;
    let toast = document.createElement('div');
    toast.textContent = i;
    toast.style.position = 'fixed';
    toast.style.top = '10vh';
    toast.style.left = '50%';
    toast.style.backgroundColor = '#fff';
    toast.style.boxShadow = '0 0 1rem #ddd';
    toast.style.color = '#000';
    toast.style.padding = '.5rem 2rem';
    toast.style.zIndex = '99999';
    toast.style.fontSize = '13px';
    toast.style.opacity = '0';
    toast.style.border = '1px solid #ccc';
    toast.style.borderRadius = '1.25rem';
    toast.style.transform = 'translateX(-50%)';
    toast.style.transition = 'opacity 0.5s';

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.style.opacity = '1';
    }, 100);

    setTimeout(function () {
        toast.style.opacity = '0';
        setTimeout(function () {
            document.body.removeChild(toast);
        }, 500);
    }, t);
};

const copy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        toast("🎉 Copied !");
    }).catch(err => {
        toast(err);
    });
};



export const Main = ({ local }) => {

    const [type, setType] = useState(0);
    const [error, setError] = useState("");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");



    const [encodeDataURL, setEncodeDataURL] = useState(true);

    function encode(e) {
        try {
            let input = e.target.value || e.target.files;
            if (!input) {
                setError("");
                return;
            };
            setError("");
            setInput(e);
            let isFile = e.target.files && e.target.files[0];
            if (isFile) {
                const file = e.target.files[0];
                const fileReader = new FileReader();
                fileReader.onload = function (e) {
                    let dataURI = e.target.result;
                    if (!encodeDataURL) {
                        dataURI = dataURI.split(",")[1];
                    };
                    setOutput(dataURI);
                };
                fileReader.readAsDataURL(file);
            } else {
                const utf8Bytes = encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, (_, i) => {
                    return String.fromCharCode("0x" + i);
                });
                const base64 = btoa(utf8Bytes);
                setOutput(base64);
            };
        } catch (e) {
            setError(e.message);
        };
    };



    function decode(i) {
        try {
            setError("");
            let inputValue = i.target.value;
            if (!inputValue) {
                setOutput("");
                return;
            };
            const ifData = /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+)(;base64)?,/;
            const match = inputValue.match(ifData);
            if (match) {
                const [_, __, isBase64] = match;
                if (isBase64 && inputValue.startsWith("data:") && inputValue.includes(";base64,")) {
                    setOutput(inputValue);
                } else {
                    setError("No Base64 Data.");
                };
            } else {
                try {
                    let decodedData = atob(inputValue);
                    decodedData = decodeURIComponent(
                        Array.from(decodedData).map(c =>
                            "%" + c.charCodeAt(0).toString(16).padStart(2, "0")
                        ).join("")
                    );
                    setOutput(decodedData);
                } catch (e) {
                    setError(e.message);
                };
            };
        } catch (e) {
            setError(e.message);
        };
    };



    useEffect(() => {
        type == 0 && input && encode(input);
    }, [encodeDataURL]);



    useEffect(() => {
        setError("");
        setInput("");
        setOutput("");
    }, [type]);



    return (<>

        <header>
            <div className="header">
                <div className="select-lang">
                    <Link href="/">English</Link>
                    <Link href="/zh-CN/">简体中文</Link>
                </div>
                <div>
                    <a className="btn btn-sm" href="https://github.com/zeoseven/base64codec" target="_blank">GitHub</a>
                </div>
            </div>
        </header>



        <main>
            <div className="container">
                <h1>Base64 Codec</h1>

                <div className="select-type mb-3">
                    <button onClick={() => setType(0)} className={type == 0 ? "active" : ""}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                            <path d="m653-208-88 88-85-85 88-88q-4-11-6-23t-2-24q0-58 41-99t99-41q18 0 35 4.5t32 12.5l-95 95 56 56 95-94q8 15 12.5 31.5T840-340q0 58-41 99t-99 41q-13 0-24.5-2t-22.5-6Zm178-352h-83q-26-88-99-144t-169-56q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-110h80v240H160v-80h94q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q129 0 226.5 79.5T831-560Z" />
                        </svg><span>{local.decode}</span>
                    </button>
                    <button onClick={() => setType(1)} className={type == 1 ? "active" : ""}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                            <path d="M200-200v-560 560Zm80-400h400v-80H280v80Zm0 160h190q20-24 43.5-44.5T565-520H280v80Zm0 160h122q2-21 7.5-41t13.5-39H280v80Zm-80 160q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v223q-19-8-39-13.5t-41-7.5v-202H200v560h202q2 21 7.5 41t13.5 39H200Zm520 80q-73 0-127.5-45.5T524-200h62q13 44 49.5 72t84.5 28q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T622-340h58v60H520v-160h60v57q27-26 63-41.5t77-15.5q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z" />
                        </svg><span>{local.encode}</span>
                    </button>
                </div>

                <div>
                    <p className="fw-bold">{local.input}</p>

                    {type == 0 && <>
                        <label className="input-file-label color-9" htmlFor="input-file">
                            {input.target?.files?.[0]?.name || "Click to select a File ..."}
                        </label>
                        <input type="file" id="input-file" onInput={e => encode(e)} />
                        <div className="text-center color-9 my-1">--- OR ---</div>
                        <input type="text" placeholder="Enter a URL ..." onBlur={e => {
                            const URL = e.target.value;
                            if (URL?.startsWith("http") ?? false) {
                                setError("");
                                setOutput("Loading .....");
                                fetch(URL, {
                                    method: "GET",
                                    mode: "cors"
                                }).then(async (result) => {
                                    if (result.status >= 400) {
                                        setOutput("");
                                        setError("Failed to fetch: " + result.status + " " + result.statusText);
                                    } else {
                                        const blob = await result.blob();
                                        encode({
                                            target: {
                                                files: [
                                                    new File([blob], Date.now().toString(), {
                                                        type: blob.type,
                                                        lastModified: Date.now()
                                                    })
                                                ]
                                            }
                                        });
                                    };
                                }).catch(e => {
                                    setOutput("");
                                    setError(e.message);
                                });
                            } else {
                                setError("URL is not valid.");
                            };
                        }} />
                        <div className="text-center color-9 my-1">--- OR ---</div>
                    </>}

                    <textarea placeholder="Enter text ..." rows={5} onInput={e => {
                        type == 0 ? encode(e) : decode(e)
                    }} />

                    {error && <p className="error">[Runtime Error] {error}</p>}
                </div>

                <div className="my-2 text-center">
                    {type == 0 && <div>
                        <label>
                            <input type="checkbox" onChange={e => setEncodeDataURL(e.target.checked)} defaultChecked={encodeDataURL} />
                            <span>{local.dataURLForFile}</span>
                        </label>
                    </div>}
                </div>

                <p className="fw-bold">{local.output} - {output.length} {
                    output.length == 1 ? "Byte" : "Bytes"
                }</p>
                {type == 1 && output.startsWith("data:") ? <>
                    <img className="my-2" src={output} style={{ maxWidth: "100%", display: "block" }} />
                    <a className="btn" href={output} download={Date.now()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                            <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                        </svg><span>{local.download}</span>
                    </a>
                </> : <>
                    <textarea className="mb-1" rows={5} value={output} disabled />
                    <button className="btn btn-sm" onClick={() => {
                        copy(output)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                            <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                        </svg><span>{local.copy}</span>
                    </button>
                </>}

                <div className="description" style={{ paddingTop: "10rem" }}>
                    {local.description}
                </div>

            </div>
        </main>



        <footer>
            <div className="footer">
                <p>Made with ❤️ by <a href="https://github.com/qingqiuyao" target="_blank">QingqiuYao</a>, Released in <a href="https://github.com/zeoseven/base64codec" target="_blank">GNU General Public License 3.0</a>.</p>
            </div>
        </footer>
    </>);

};