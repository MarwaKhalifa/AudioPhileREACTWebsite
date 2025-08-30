export default function SpeakerSection1() {
    return (
        <section >
            <div className="container speakerSection d-flex align-items-center">
                <div  className="ovalShapes d-flex align-items-center justify-content-center"> 
                    <img className="oval1" src="images/Oval.png" alt="" />
                    <img className="oval2" src="images/Oval2.png" alt="" />
                    <img className="oval3" src="images/Oval3.png" alt="" />
                </div>
                <div className="rightSide">
                    <img className="spkrImg" src="/images/speaker.png" alt="" />
                </div>
                <div className="leftSide d-flex flex-column">
                    <h1>ZX9 <br /> SPEAKER</h1>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <button>See Product</button>
                </div>
            </div>
        </section>
    )
}