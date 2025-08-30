export default function HeroSection() {
    return (
        <section className="HeroSection ">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="leftSide">
                    <p className="newProduct">NEW PRODUCT</p>
                    <h1>XX99 Mark II
                        <br />Headphones
                    </h1>
                    <p className="expNatural">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <button>See Product</button>
                </div>
                <div className="rightSide">
                    <img src="/images/hero_img.png" alt=""/>
                </div>
            </div>
        </section>
    )
}