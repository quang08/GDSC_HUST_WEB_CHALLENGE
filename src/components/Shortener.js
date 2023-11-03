import { useState } from "react"
import bgMobile from "../images/bg-shorten-mobile.svg"
import bgDesktop from "../images/bg-shorten-desktop.svg"

function Shortener() {
    const [text, setText] = useState("")

    const handleSubmit = (e) => {}

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
                            type="url"
                            placeholder="Shorten a link here"
                            className="w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn-cta rounded-lg w-full md:w-40 md:ml-5"
                            onClick={handleSubmit}
                        >
                            Shorten It!
                        </button>
                    </div>
                </form>       
            </section>
        </>
    )
}

export default Shortener