import '@fontsource/manrope/400.css';
import '@fontsource/manrope/700.css';
import audiophile from './assets/audiophile.png'
import shapeImg from './assets/Shape.png'

export default function HeaderSection() {
    return (
        <header className='container-fluid'>
            <section className="container d-flex align-items-center justify-content-between p-3">
                <div>
                    <img src={audiophile} alt="" />
                </div>
                <nav>
                    <ul className="d-flex align-items-center gap-4 list-unstyled m-0">
                        <li><a href="" className="text-white text-decoration-none">HOME</a></li>
                        <li><a href="" className="text-white text-decoration-none">HEADPHONES</a></li>
                        <li><a href="" className="text-white text-decoration-none">SPEAKERS</a></li>
                        <li><a href="" className="text-white text-decoration-none">EARPHONES</a></li>
                    </ul>
                </nav>
                <div>
                    <img src={shapeImg} alt="" />
                </div>
            </section>
        </header>
    )
}