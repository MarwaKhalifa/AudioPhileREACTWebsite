import bitmap from './assets/Bitmap.png'
export default function EarphonesPage() {
    return (
        <section>
            <div className="container earphones d-flex align-items-center gap-5">
                <div className="leftSide">
                    <img src={bitmap} alt="" />
                </div>
                <div className="rightSide d-flex flex-column align-items-center justify-content-center">
                    <div className="textDiv">
                        <p>YX1 EARPHONES</p>
                        <button>See Product</button>
                    </div>
                </div>
            </div>
        </section>
    )
}