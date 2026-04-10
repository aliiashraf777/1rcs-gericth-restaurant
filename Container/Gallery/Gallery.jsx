import './Gallery.css';

import { SubHeading } from '../../Components';
import { images } from '../../Constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
 
import { useRef } from 'react';


const Gallery = () => {
    const scrollRef = useRef(null)

    const gImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

    const handleScroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollLeft -= 300;
            console.log('handleScroll clicked')
        } else {
            current.scrollLeft += 300;
            console.log('handleScroll clicked')
        }
    }

    return (
        <div className='app__gallery flex__center'>
            <div className="app__gallery-content">
                <SubHeading title='Instagram' />
                <h1 className="headtext__cormorant">Photo Gallery</h1>
                <p
                    className="p__opensans"
                    style={{ color: '#aaa', marginTop: '3.2rem' }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
                </p>
                <button type="button" className="custom__button">View More</button>
            </div>

            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {
                        gImages.map((gImage, index) => (
                            <div
                                className="app__gallery-images_card flex__center"
                                key={`gallery_image-${index + 1}`}
                            >
                                <img src={gImage} alt="gImg" />

                                <BsInstagram className='gallery__image-icon' />
                            </div>
                        ))
                    }
                </div>

                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => handleScroll('left')} />
                    <BsArrowRightShort className='gallery__arrow-icon' onClick={() => handleScroll('right')} />
                </div>
            </div>
        </div>
    )
}

export default Gallery
