import { useEffect, useState } from "react"
import bgMobile from "../images/bg-shorten-mobile.svg"
import bgDesktop from "../images/bg-shorten-desktop.svg"


function Shortener() {
    // const getStoredLinks = JSON.parse(localStorage.getItem("links") ?? [])
    const [text, setText] = useState("")
    const [links, setLinks] = useState([])
    const [buttonText, setButtonText] = useState("Copy")
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const shortenLink = async () => {
            try {
                const res = await fetch('https://owo.vc/api/v2/link', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ link: `https://${text}`, generator: "owo", metadata: "OWOIFY" }),
                })
                const data = await res.json()
                data.id ? setLinks([...links, data]) : setError(true);
                setText("")

            } catch (e) {
                console.log(e);
            }
        };

        shortenLink();

    };

    // useEffect(() => {
    //     localStorage.setItem("links", JSON.parse(links))
    // }, [links])

    const handleCopy = () => {
        navigator.clipboard.writeText(links)
        setButtonText("Copied!")
    }

    return (
        <>
            <section className="max-width shortener relative">
                <picture>
                    <source media="(min-width: 768px)" srcSet={bgDesktop} />
                    <img src={bgMobile} alt="" />
                </picture>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row">
                        <input
                            type="text"
                            placeholder="Shorten a link here"
                            onFocus={() => setError(false)}
                            className={`w-full py-3 md:py-4 px-4 md:px-7 border-4 border-solid focus:border-primary-cyan rounded-md focus:outline-none transition-all duration-300 ${error ? "border-red-500" : "border-transparent"
                                }`}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <span
                            className={`absolute -bottom-6 z-30 left-2 w-max text-red-500 text-sm transition-all duration-300 ${error ? "visible opacity-100" : "invisible opacity-0"
                                }`}
                        >
                            Please add valid a url
                        </span>
                        <button
                            type="submit"
                            className="btn-cta rounded-lg w-full md:w-40 md:ml-5"
                            onClick={handleSubmit}
                        >
                            Shorten It!
                        </button>
                    </div>
                </form>

                <div className="max-h-24 overflow-y-scroll">
                    {links.length !== 0 &&
                        links.map((link) => (
                            <div className="flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow">
                                <article>
                                    <h6 className="mb-3 md:mb-0">{link.destination}</h6>
                                </article>

                                <article>
                                    <ul className="md:flex md:items-center">
                                        <li className="md:mr-5">
                                            <button className="text-cyan-500">
                                                {link.id}
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleCopy}
                                                className="btn-cta rounded-lg text-sm focus:bg-slate-800"
                                            >
                                                {buttonText}
                                            </button>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                        ))
                    }
                </div>

            </section>
        </>
    )
}

export default Shortener
