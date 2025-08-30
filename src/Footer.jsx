export default function Footer() {
    return (
        <section className="footerSection">
            <div className="container Pagefooter d-flex flex-column">
                <div className="miniHeader d-flex align-items-center justify-content-between">
                    <img src="/images/audiophile.png" alt="" />
                    <nav>
                        <ul className="d-flex align-items-center gap-4 list-unstyled m-0">
                            <li><a href="" className="text-white text-decoration-none">HOME</a></li>
                            <li><a href="" className="text-white text-decoration-none">HEADPHONES</a></li>
                            <li><a href="" className="text-white text-decoration-none">SPEAKERS</a></li>
                            <li><a href="" className="text-white text-decoration-none">EARPHONES</a></li>
                        </ul>
                    </nav>

                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="textDiv d-flex flex-column">
                        <p className="summary">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                        <p className="copyright">Copyright 2021. All Rights Reserved</p>
                    </div>
                    <div className="socialMediaIcons d-flex align-items-center gap-4">
                        <img src="/images/facebook.png" alt="" />
                        <img src="/images/twitter.png" alt="" />
                        <img src="/images/instgram.png" alt="" />
                    </div>

                </div>

            </div>
        </section>
    )
}