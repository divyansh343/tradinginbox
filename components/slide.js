import React from 'react'
import { Slide } from 'react-slideshow-image'
import Image from 'next/image'
import {wall} from '../assets/images/wall.png'


const proprietes = {
    duration: 1000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <Image width={120} height={800}  src={wall} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <Image width={120} height={800}  src={wall} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <Image  width={120} height={800} src={wall} alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;