export default function () {
    return (
        <section className="product">
            <div className="container d-flex align-content-center justify-content-between">
                <div className="productCard ">
                    <div className=" d-flex flex-column align-items-center">
                        <img className="productImg" src="/images/headphones.png" alt="" />
                        <img className="ovalShadowImg" src="images/Ovalshadow.png" alt="shadow" />

                        <h5>HEADPHONES</h5>
                        <div className=" shop d-flex align-items-center gap-3">
                            <p>Shop</p>
                            <img className="pathImg" src="/images/Path 2.png" alt="" />
                        </div>
                        <div className="maskDiv"></div>
                    </div>
                </div>
                <div className="productCard ">
                    <div className=" d-flex flex-column align-items-center">
                        <img className="productImg" src="/images/speaker.png" alt="" />
                        <img className="ovalShadowImg" src="images/Ovalshadow.png" alt="shadow" />

                        <h5>SPEAKERS</h5>
                        <div className=" shop d-flex align-items-center gap-3">
                            <p>Shop</p>
                            <img className="pathImg" src="/images/Path 2.png" alt="" />
                        </div>
                        <div className="maskDiv"></div>
                    </div>
                </div>
                <div className="productCard ">
                    <div className=" d-flex flex-column align-items-center">
                        <img className="productImg" src="/images/earphone.png" alt="" style={{ width: "178px", height: "161px" }} />
                        <img className="ovalShadowImg" src="images/Ovalshadow.png" alt="shadow" />

                        <h5>EARPHONES</h5>
                        <div className=" shop d-flex align-items-center gap-3">
                            <p>Shop</p>
                            <img className="pathImg" src="/images/Path 2.png" alt="" />
                        </div>
                        <div className="maskDiv"></div>
                    </div>
                </div>

            </div>
        </section>

    )
}