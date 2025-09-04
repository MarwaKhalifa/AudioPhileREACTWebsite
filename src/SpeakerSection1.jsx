import speaker from './assets/speaker.png'
import oval from './assets/Oval.png'
import oval2 from './assets/Oval2.png'
import oval3 from './assets/Oval3.png'
export default function SpeakerSection1() {
    return (
        <section >
            <div className="container speakerSection d-flex align-items-center">
                <div  className="ovalShapes d-flex align-items-center justify-content-center"> 
                    <img className="oval1" src={oval} alt="" />
                    <img className="oval2" src={oval2} alt="" />
                    <img className="oval3" src={oval3} alt="" />
                </div>
                <div className="rightSide">
                    <img className="spkrImg" src={speaker} alt="" />
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