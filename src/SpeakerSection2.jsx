import speaker2 from './assets/speaker2.png'
export default function SpeakerSection2() {
    return (
        <section>
            <div className="container speaker2 d-flex align-items-center justify-content-between">
                <div className="leftSide d-flex flex-column align-items-start justify-content-center">
                    <p>ZX7 SPEAKER</p>
                    <button>See Product</button>
                </div>
                <div className="rightSide">
                    <img src={speaker2} alt="" />
                </div>
            </div>
        </section>
    )
}