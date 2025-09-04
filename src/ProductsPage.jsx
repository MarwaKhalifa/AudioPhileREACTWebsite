import headphones from './assets/headphones.png'
import speaker from './assets/speaker.png'
import earphone from './assets/earphone.png'
import Ovalshadow from './assets/Ovalshadow.png'
import path2 from './assets/Path 2.png'

export default function () {
    return (
        <section className="product">
            <div className="container d-flex align-content-center justify-content-between">
                <div className="productCard ">
                    <div className=" d-flex flex-column align-items-center">
                        <img className="productImg" src={headphones} alt="" />
                        <img className="ovalShadowImg" src={Ovalshadow} alt="shadow" />

                        <h5>HEADPHONES</h5>
                        <div className=" shop d-flex align-items-center gap-3">
                            <p>Shop</p>
                            <img className="pathImg" src={path2} alt="" />
                        </div>
                        <div className="maskDiv"></div>
                    </div>
                </div>
                <div className="productCard ">
                    <div className=" d-flex flex-column align-items-center">
                        <img className="productImg" src={speaker} alt="" />
                        <img className="ovalShadowImg" src={Ovalshadow}alt="shadow" />

                        <h5>SPEAKERS</h5>
                        <div className=" shop d-flex align-items-center gap-3">
                            <p>Shop</p>
                            <img className="pathImg" src={path2} alt="" />
                        </div>
                        <div className="maskDiv"></div>
                    </div>
                </div>
                <div className="productCard ">
                    <div className=" d-flex flex-column align-items-center">
                        <img className="productImg" src={earphone} alt="" style={{ width: "178px", height: "161px" }} />
                        <img className="ovalShadowImg" src={Ovalshadow} alt="shadow" />

                        <h5>EARPHONES</h5>
                        <div className=" shop d-flex align-items-center gap-3">
                            <p>Shop</p>
                            <img className="pathImg" src={path2} alt="" />
                        </div> 
                        <div className="maskDiv"></div>
                    </div>
                </div>

            </div>
        </section>

    )
}